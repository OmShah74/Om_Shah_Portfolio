import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center"
      )}
    >
      <Badge variant="accent" className="w-fit">
        {eyebrow}
      </Badge>
      <div className="space-y-3">
        <h2 className="font-display text-3xl leading-[1.02] text-white md:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-white/62 md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
