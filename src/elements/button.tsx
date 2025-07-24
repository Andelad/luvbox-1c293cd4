import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-[var(--success-green-300)] text-[var(--lb-black-900)] hover:bg-[var(--success-green-400)] focus-visible:ring-[var(--success-green-400)]",
        secondary: "border border-[var(--lb-black-300)] bg-transparent text-[var(--lb-black-700)] hover:bg-[var(--lb-black-50)] hover:text-[var(--lb-black-900)] hover:border-[var(--lb-black-400)] focus-visible:ring-[var(--lb-black-400)]",
        outline: "border border-[var(--lb-black-300)] bg-transparent text-[var(--lb-black-700)] hover:bg-[var(--lb-black-50)] hover:text-[var(--lb-black-900)] hover:border-[var(--lb-black-400)] focus-visible:ring-[var(--lb-black-400)]",
        ghost: "text-[var(--lb-black-700)] hover:bg-[var(--lb-black-100)] hover:text-[var(--lb-black-900)] focus-visible:ring-[var(--lb-black-400)]",
        destructive: "bg-[var(--pink-500)] text-[var(--lb-black-0)] hover:bg-[var(--pink-600)] focus-visible:ring-[var(--pink-400)]",
        link: "text-[var(--blue-500)] underline-offset-4 hover:underline focus-visible:ring-[var(--blue-400)]",
      },
      size: {
        small: "h-10 px-4 py-2 text-sm has-[>svg]:px-3", // 40px height
        large: "h-12 px-6 py-3 text-lg has-[>svg]:px-5", // 48px height
        default: "h-9 px-4 py-2 text-sm has-[>svg]:px-3", // Keep existing default
        icon: "size-9 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "large",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
