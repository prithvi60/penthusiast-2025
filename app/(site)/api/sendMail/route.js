import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import {
  generateEmailTemplateForClient,
  generateEmailTemplateForUser,
} from "@/utils/EmailTemplate";
import fetch from "node-fetch";
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
  <p style="font-size: 16px; color: #555;"><strong>Valuable customer insights derived from ${title}:</strong></p>
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
    subject: `New Customer Form Submitted - ${capitalized}`,
    html: generateEmailTemplateForClient(messageForClient),
    // bcc: ["reachout@penthusiasts.com"],
  };

  // Function to fetch the PDF file from the URL and convert it to Base64
  const getPdfAttachment = async () => {
    if (pdf && title !== "contact") {
      try {
        // Fetch the PDF content from the URL
        const response = await fetch(pdf);
        const arrayBuffer = await response.arrayBuffer();
        const pdfBuffer = Buffer.from(arrayBuffer);

        // Convert the PDF content to Base64
        const pdfBase64 = pdfBuffer.toString("base64");

        // Extract filename from the URL or use the title
        const fileName = `${title}.pdf`;
        return [
          {
            filename: fileName,
            content: pdfBase64,
            encoding: "base64",
            contentType: "application/pdf",
          },
        ];
      } catch (error) {
        console.error("Error fetching or converting PDF file:", error);
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
    html: generateEmailTemplateForUser(messageForUser, title),
    attachments: await getPdfAttachment(),
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
