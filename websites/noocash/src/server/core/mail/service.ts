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
}
