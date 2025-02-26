"use server";
import nodemailer from "nodemailer";
import { emailTemplate, emailTemplateForMe } from "./templates/emailTemplate";
import { revalidatePath } from "next/cache";
import dotenv from "dotenv";
dotenv.config();

export async function sendMail(formData) {
  // name, recipient, message
  const name = formData.get("name");
  const recipient = formData.get("email");
  const message = formData.get("message");

  const {
    SMTP_EMAIL,
    SMTP_PASSWORD,
    SMTP_HOST,
    SMTP_PORT,
    NOTIFICATION_EMAIL,
  } = process.env;
  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return false;
  }

  try {
    const sendToRecepient = await transport.sendMail({
      from: SMTP_EMAIL,
      to: recipient,
      subject: "Thank you for contacting " + name + "!",
      html: emailTemplate(name),
    });
    const sendToMe = await transport.sendMail({
      from: SMTP_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: "New contact request",
      html: emailTemplateForMe(name, recipient, message),
    });
    return { message: "success" };
  } catch (error) {
    console.log(error);
    return { message: "error" };
  }
}
