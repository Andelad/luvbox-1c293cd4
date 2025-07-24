import * as React from"react";

import { cn } from"./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
"luvbox-form-base",
"file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:file:font-medium",
"selection:bg-primary selection:text-primary-foreground",
"disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
"md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
