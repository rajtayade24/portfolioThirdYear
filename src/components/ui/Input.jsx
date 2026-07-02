import * as React from "react";
import { cn } from "@/components/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        `
        peer w-full rounded-2xl
        border border-[var(--border)]
        bg-[var(--card)]
        px-4 pt-6 pb-2
        text-[15px] text-[var(--fg)]
        placeholder-transparent
        transition-all duration-300

        focus:outline-none
        focus:border-[var(--primary)]
        focus:ring-4
        focus:ring-[color-mix(in_srgb,var(--primary)_18%,transparent)]
        focus:shadow-[0_0_24px_color-mix(in_srgb,var(--primary)_25%,transparent)]

        disabled:opacity-50
        disabled:cursor-not-allowed
        `,
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };