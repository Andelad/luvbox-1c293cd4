import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "luvbox-form-base min-h-16 resize-none field-sizing-content py-2",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
