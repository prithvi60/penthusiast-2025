import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import {
  generateEmailTemplateForClient,
  generateEmailTemplateForUser,
} from "@/utils/EmailTemplate";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req) {
  const { name, email, message, title, pdf } = await req.json();

  const capitalized = title.charAt(0).toUpperCase() + title.slice(1);

  const messageForClient = `
  <p style="font-size: 16px; color: #555;"><strong>Customer Details from ${title}:</strong></p>
            <p style="font-size: 16px; color: #555;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; color: #555;"><strong>Email:</strong> ${email}</p>
            ${
              message !== ""
                ? `
              <p style="font-size: 16px; color: #555;">
                <strong>Message:</strong> ${message}
              </p>
                `
                : ""
            }
  `;

  const messageForUser = `
  <p style="font-size: 16px; color: #555;">Dear <strong>${name}</strong>,</p>
  `;

  // !clientEmail
  if (!email && !process.env.EMAIL_ID) {
    return NextResponse.json(
      { success: false, message: "Recipient email(s) missing" },
      { status: 400 }
    );
  }

  // Email options for the client (all user data and attachments)
  const clientMailOptions = {
    from: `"${email}" <${"support@webibee.com"}>`,
    to: process.env.EMAIL_ID,
    subject: `New Customer Form Submitted - ${capitalized} Page`,
    html: generateEmailTemplateForClient(messageForClient),
    // bcc: [process.env.EMAIL_ID],
  };

  // Function to read the PDF file from the public/files folder
  const getPdfAttachment = () => {
    if (pdf && title !== "contact") {
      try {
        const pdfPath = path.join(process.cwd(), "public", "files", pdf);
        const pdfBuffer = fs.readFileSync(pdfPath);
        return [
          {
            filename: `${title}.pdf`,
            content: pdfBuffer,
            contentType: "application/pdf",
          },
        ];
      } catch (error) {
        console.error("Error reading PDF file:", error);
        return [];
      }
    }
    return [];
  };

  // Email options for the user (with optional PDF attachment)
  const userMailOptions = {
    from: `Penthusiasts - "${process.env.EMAIL_ID}" <support@webibee.com>`,
    to: email,
    subject: "Acknowledgment: We received your Submission",
    html: generateEmailTemplateForUser(messageForUser),
    attachments: getPdfAttachment(),
    // bcc: ["sales@vbccinstruments.com"],
  };

  try {
    // Send acknowledgment email to the customer
    await transporter.sendMail(userMailOptions);

    // Send detailed email to the client
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Error sending emails" },
      { status: 500 }
    );
  }
}
