import * as z from "zod";

export const rsvpSchema = z.object({
  fullName: z.string().min(1, { message: "Your name is important to us." }),
  phoneNumber: z
    .number({
      required_error: "Phone Number is required",
      invalid_type_error: "We need your phone number to stay in touch.",
    })
    .min(1, { message: "We need your phone number to stay in touch." }),
  isAttend: z.string().min(1, { message: "Will you attend our wedding?" }),
  totalPersons: z
    .string()
    .min(1, { message: "How many guests will be joining us?" }),
  message: z.string().min(1, { message: "We'd love to hear your greetings" }),
  email: z.string().email().min(1, { message: "Your email is required" }),
});
