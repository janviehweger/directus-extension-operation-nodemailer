import nodemailer from "nodemailer";
import { defineOperationApi } from "@directus/extensions-sdk";

export default defineOperationApi({
  id: "operation-nodemailer",
  handler: async ({
    from,
    subject,
    text,
    url,
    bcc,
    SMTP_HOST,
    SMTP_USER,
    SMTP_PASS,
    filename,
  }) => {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    try {
      const info = await transporter.sendMail({
        from: from,
        bcc: bcc,
        subject: subject || "Nodemailer Test ✔",
        text: text || "Hello world?", // nutzt übergebenen Text, falls vorhanden
        html: `<b>${text || "Hello world?"}</b>`,
        attachments: [
          {
            filename: filename || "foto.jpeg",
            href:
              url ||
              "https://raw.githubusercontent.com/nodemailer/nodemailer/master/LICENSE",
          },
        ],
      });

      return {
        success: true,
        messageId: info.messageId,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  },
});
