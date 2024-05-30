import { z } from "zod";
import { MailSchema } from "./schema";

export declare type IMailSchema = z.infer<typeof MailSchema>;
