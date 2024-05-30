import { IMailSchema, MailService } from "../core/mail";

/**
 * Sends a subscription email using the provided mail information.
 *
 * @param {IMailSchema} mail - The mail information for the subscription email.
 * @return {Promise<boolean>} A promise that resolves to true if the email is sent successfully, or false otherwise.
 */
export const sendSubscriptionEmail = async (email: string): Promise<boolean> => {
  try {
    const html = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f1f1f1;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
          }
          .header {
            text-align: center;
            color: #333333;
            font-size: 24px;
            margin-bottom: 20px;
          }
          .content {
            text-align: center;
            color: #666666;
            font-size: 16px;
            margin-bottom: 20px;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1 class="header">Welcome to noo.cash</h1>
          <p class="content">Thank you for subscribing to our newsletter! We're excited to have you on board.</p>
          <a href="https://noo.cash/" class="button" target="_blank" rel="noopener noreferrer">Visit noo.cash</a>
        </div>
      </body>
    </html>
    `;
    await MailService.sendEmail({ to: email, subject: "Subscription to noo.cash", text: "noo.cash", html });
    return true;
  } catch (error) {
    return false;
  }
};
