import nodemailer from "nodemailer";
import { IMailSchema } from "./types";
export class MailService {
  static get mailConfig() {
    return this.mailCOnfig;
  }
  private static readonly mailCOnfig = {
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  };

  static async sendEmail(mail: IMailSchema) {
    const transporter = nodemailer.createTransport(this.mailConfig);
    const info = await transporter.sendMail({
      from: `"Noo cash" <${process.env.FROM_MAIL_USER}>`,
      ...mail,
    });
    console.log("Message sent: %s", info.messageId);
  }
}
