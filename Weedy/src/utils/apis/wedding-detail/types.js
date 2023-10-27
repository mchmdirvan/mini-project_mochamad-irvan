import * as z from "zod";

export const weddingSchema = z.object({
  id: z.number().optional(),
  brideName: z.string().min(1, { message: "Bride's Name is Required" }),
  groomName: z.string().min(1, { message: "Groom's Name is Required" }),
  brideBio: z.string().min(1, { message: "Bride's Bio is Required" }),
  groomBio: z.string().min(1, { message: "Groom's Bio is Required" }),
  agreementAddress: z.number().min(1, { message: "Address is Required" }),
  receptionAddress: z.number().min(1, { message: "Address is Required" }),
  agreementHall: z.number().min(1, { message: "Hall is Required" }),
  receptionHall: z.number().min(1, { message: "Hall is Required" }),
  agreementCity: z.number().min(1, { message: "City is Required" }),
  receptionCity: z.number().min(1, { message: "City is Required" }),
  scriptureQuotes: z
    .number()
    .min(1, { message: "Scripture Quotes is Required" }),
  agreementDate: z.date().refine((date) => date !== null, {
    message: "Agreement Date is Required",
  }),
  receptionDate: z.date().refine((date) => date !== null, {
    message: "Reception Date is Required",
  }),
});
