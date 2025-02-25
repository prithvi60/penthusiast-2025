import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { generateEmailTemplateForClient, generateEmailTemplateForUser } from "@/utils/EmailTemplate";
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
  const {
    messageForClient,
    messageForUser,
  } = await req.json();

  const capitalized = page.charAt(0).toUpperCase() + page.slice(1);

  // !clientEmail
  if (!userEmail && !process.env.EMAIL_ID) {
    return NextResponse.json(
      { success: false, message: "Recipient email(s) missing" },
      { status: 400 }
    );
  }

  // Email options for the client (all user data and attachments)
  const clientMailOptions = {
    from: `"${userEmail}" <${"support@webibee.com"}>`,
    to: process.env.EMAIL_ID,
    subject: `New Customer Form Submitted - ${capitalized} Page`,
    html: generateEmailTemplateForClient(messageForClient),
    // bcc: [process.env.EMAIL_ID],
  };

  const userMailOptions = {
    from: `Webibee - "${process.env.EMAIL_ID}" <${"support@webibee.com"}>`,
    to: userEmail,
    subject: "Acknowledgment: We received your Submission",
    html: generateEmailTemplateForUser(messageForUser),
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
