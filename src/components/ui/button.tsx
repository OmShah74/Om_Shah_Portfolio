import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-amber-100 to-amber-300 !text-slate-950 shadow-[0_14px_44px_rgba(255,198,92,0.22)] hover:-translate-y-0.5 hover:brightness-105 [&_svg]:!text-slate-950",
        secondary:
          "border border-white/14 bg-white/7 text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-cyan-300/22 hover:bg-white/10",
        ghost:
          "text-slate-100 hover:bg-white/8 hover:text-white",
        link: "rounded-none p-0 text-cyan-100 underline-offset-4 hover:underline"
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "size-11 rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
