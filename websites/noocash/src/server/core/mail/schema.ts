import { z } from "zod";

export const MailSchema = z.object({
  to: z.string(),
  subject: z.string(),
  text: z.string().optional(),
  html: z.string(),
});
