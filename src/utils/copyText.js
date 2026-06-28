import { toast } from "sonner";

export const copyText = async (text, successText, failureText) => {
  try {
    await navigator.clipboard.writeText(text || "");
    toast.success(successText);
  } catch {
    toast.error(failureText);
  }
};