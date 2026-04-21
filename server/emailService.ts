import nodemailer from "nodemailer";

// Email configuration - using Fastmail SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.fastmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASSWORD || "",
  },
});

export interface ContactEmailData {
  name: string;
  email: string;
  phone: string | null;
  message: string;
}

/**
 * Send email notification for contact form submission
 */
export async function sendContactFormEmail(
  data: ContactEmailData,
  recipientEmail: string
): Promise<boolean> {
  try {
    // Validate email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.warn(
        "Email service not configured. Set EMAIL_USER and EMAIL_PASSWORD environment variables."
      );
      return false;
    }

    const emailContent = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Message:
${data.message}

---
This email was sent from the Pacific ABA Academy contact form.
    `.trim();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: `New Contact Form Submission from ${data.name}`,
      text: emailContent,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${data.phone ? escapeHtml(data.phone) : "Not provided"}</p>
        <h3>Message:</h3>
        <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>This email was sent from the Pacific ABA Academy contact form.</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Contact form email sent to ${recipientEmail}`);
    return true;
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return false;
  }
}

/**
 * Helper function to escape HTML special characters
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
