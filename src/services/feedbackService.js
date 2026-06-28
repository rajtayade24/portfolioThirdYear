import { extractError } from "@/utils/extractError";
import { api } from "./api";

export const postFeedbackRequest = async (payload) => {
  try {
    const res = await api.post("/students", payload);
    return res.data;
  } catch (err) {
    throw extractError(err, "err analyzing complaint");
  }
};