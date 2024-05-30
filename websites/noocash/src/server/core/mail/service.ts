import nodemailer from "nodemailer";
export class MailService {
  async send() {
    return true;
  }

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

  static async sendEmail(to: string, subject: string, html: string) {
    const transporter = nodemailer.createTransport(this.mailConfig);
    const info = await transporter.sendMail({
      from: `"Noocash" <${process.env.FROM_MAIL_USER}>`,
      to,
      subject,
      html,
    });
    console.log("Message sent: %s", info.messageId);
  }
}
