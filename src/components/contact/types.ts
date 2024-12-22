import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  moveFromDate: z.string().min(1, "Move from date is required"),
  moveSize: z.string().min(1, "Move size is required"),
  referralSource: z.string().min(1, "Please select how you heard about us"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type FormValues = z.infer<typeof formSchema>;