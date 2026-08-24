import { Router } from "express";
import nodemailer from "nodemailer";
import { createLead } from "../db.js";

const router = Router();
const mailer = process.env.EMAIL_USER && process.env.EMAIL_PASS
  ? nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    })
  : null;

router.post("/", async (request, response) => {
  const { name, email, phone, message, project } = request.body;

  if (!name || !email || !phone || !message) {
    return response.status(400).json({ error: "Name, email, phone, and message are required." });
  }

  const lead = {
    name: String(name).trim(),
    email: String(email).trim(),
    phone: String(phone).trim(),
    message: String(message).trim(),
    project: String(project || "Bajwa Tech Solution").trim(),
  };

  try {
    createLead(lead);

    if (mailer && process.env.NOTIFY_EMAIL) {
      await mailer.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.NOTIFY_EMAIL,
        replyTo: lead.email,
        subject: `New website inquiry from ${lead.name}`,
        text: [
          `Name: ${lead.name}`,
          `Email: ${lead.email}`,
          `Phone: ${lead.phone}`,
          `Project: ${lead.project}`,
          "",
          lead.message,
        ].join("\n"),
      });
    }

    return response.status(201).json({ message: "Inquiry received successfully." });
  } catch (error) {
    console.error("Could not save inquiry:", error);
    return response.status(500).json({ error: "Could not save inquiry." });
  }
});

export default router;
