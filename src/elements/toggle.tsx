"use client";

import * as TogglePrimitive from"@radix-ui/react-toggle";
import { cva, type VariantProps } from"class-variance-authority";
import * as React from"react";

import { cn } from"./utils";

const toggleVariants = cva(
"luvbox-interactive-base inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 data-[state=on]:bg-[var(--blue-500)] data-[state=on]:text-[var(--lb-black-0)]",
  {
    variants: {
      variant: {
        default:"bg-transparent hover:bg-[var(--lb-black-100)]",
        outline:
"border border-[var(--form-border)] bg-transparent hover:bg-[var(--lb-black-50)]",
      },
      size: {
        default:"px-2 min-w-10",
        sm:"h-8 px-1.5 min-w-8",
        lg:"px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant:"default",
      size:"default",
    },
  },
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
