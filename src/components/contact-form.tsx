"use client";

import { useEffect, useRef, useState } from "react";
import emailjs, { type EmailJSResponseStatus } from "@emailjs/browser";
import { LoaderCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

function getEmailJsConfig() {
  return {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  };
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const { publicKey } = getEmailJsConfig();

    if (publicKey) {
      emailjs.init({
        publicKey
      });
    }
  }, []);

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSending(true);

    try {
      const { serviceId, templateId, publicKey } = getEmailJsConfig();

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service is not configured yet.");
      }

      if (!formRef.current) {
        throw new Error("The contact form is not ready yet.");
      }

      const response = await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey
      });

      console.info("EmailJS send succeeded", response.status, response.text);

      setStatus({
        type: "success",
        message: "Message sent successfully."
      });
      setForm(initialForm);
    } catch (error) {
      const responseError = error as Partial<EmailJSResponseStatus> & {
        message?: string;
        text?: string;
      };

      console.error("EmailJS send failed", responseError);

      setStatus({
        type: "error",
        message:
          responseError.text ||
          responseError.message ||
          "Something went wrong while sending the message."
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="glass-panel ringed-card space-y-5 p-6 md:p-8"
    >
      <input type="hidden" name="to_email" value="omshah.tech@gmail.com" />
      <input type="hidden" name="to_name" value="Om Shah" />
      <input
        type="hidden"
        name="time"
        value={new Date().toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short"
        })}
        readOnly
      />
      <input type="hidden" name="from_name" value={form.name} readOnly />
      <input type="hidden" name="user_name" value={form.name} readOnly />
      <input type="hidden" name="from_email" value={form.email} readOnly />
      <input type="hidden" name="user_email" value={form.email} readOnly />
      <input type="hidden" name="reply_to" value={form.email} readOnly />
      <input type="hidden" name="Title" value={form.subject} readOnly />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-white/70">Name</span>
          <input
            required
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-[1.35rem] border border-white/10 bg-black/24 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/26 focus:border-cyan-300/22 focus:bg-black/28"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-white/70">Email</span>
          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-[1.35rem] border border-white/10 bg-black/24 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/26 focus:border-cyan-300/22 focus:bg-black/28"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-sm text-white/70">Subject</span>
        <input
          required
          name="title"
          value={form.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          className="w-full rounded-[1.35rem] border border-white/10 bg-black/24 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/26 focus:border-cyan-300/22 focus:bg-black/28"
          placeholder="Project, collaboration, or conversation"
        />
      </label>
      <label className="space-y-2">
        <span className="text-sm text-white/70">Message</span>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          rows={7}
          className="w-full rounded-[1.7rem] border border-white/10 bg-black/24 px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/26 focus:border-cyan-300/22 focus:bg-black/28"
          placeholder="Tell me a little about what you want to build."
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/50">
          The form sends your message, subject, and reply email in one step.
        </p>
        <Button type="submit" disabled={isSending}>
          {isSending ? (
            <LoaderCircle className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
          Send Message
        </Button>
      </div>
      {status ? (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-[1.35rem] border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-100"
              : "border-rose-300/25 bg-rose-300/10 text-rose-100"
          }`}
        >
          {status.message}
        </div>
      ) : null}
    </form>
  );
}
