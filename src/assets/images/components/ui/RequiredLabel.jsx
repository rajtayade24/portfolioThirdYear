import { Label } from "@/components/ui/Label";

export default function RequiredLabel({
  htmlFor,
  children,
  required = false,
  className = "",
}) {
  return (
    <Label
      htmlFor={htmlFor}
      className={`text-foreground ${className}`}
    >
      {children}
      {required && (
        <span className="ml-1 text-red-500">*</span>
      )}
    </Label>
  );
}