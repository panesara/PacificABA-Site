import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
import nodemailer from "nodemailer";

const FASTMAIL_EMAIL = process.env.FASTMAIL_EMAIL;
const FASTMAIL_PASSWORD = process.env.FASTMAIL_PASSWORD;

// Create transporter for FastMail (sends to office@pacificaba.com)
const transporter = nodemailer.createTransport({
  host: "smtp.fastmail.com",
  port: 465,
  secure: true,
  auth: {
    user: FASTMAIL_EMAIL,
    pass: FASTMAIL_PASSWORD,
  },
});

export const contactRouter = router({
  submitForm: publicProcedure
    .input(
      z.object({
        name: z.string().min(1).max(100),
        email: z.string().email(),
        phone: z.string().optional(),
        message: z.string().min(1).max(5000),
      })
    )
    .mutation(async ({ input }) => {
      try {
        // Validate that email credentials are configured
        if (!FASTMAIL_EMAIL || !FASTMAIL_PASSWORD) {
          console.error("[Contact] FastMail credentials not configured");
          return {
            success: false,
            message: "Email service is not configured. Please try again later.",
          };
        }

        // Format the email body
        const emailBody = `
New Contact Form Submission

Name: ${input.name}
Email: ${input.email}
Phone: ${input.phone || "Not provided"}

Message:
${input.message}

---
This email was sent from the Pacific ABA Academy website contact form.
        `.trim();

        // Send email directly to office@pacificaba.com via FastMail
        await transporter.sendMail({
          from: FASTMAIL_EMAIL,
          to: FASTMAIL_EMAIL,
          replyTo: input.email,
          subject: `New Contact Form Submission from ${input.name}`,
          text: emailBody,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${input.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${input.email}">${input.email}</a></p>
            <p><strong>Phone:</strong> ${input.phone || "Not provided"}</p>
            <h3>Message:</h3>
            <p>${input.message.replace(/\n/g, "<br>")}</p>
            <hr>
            <p><em>This email was sent from the Pacific ABA Academy website contact form.</em></p>
          `,
        });

        console.log(`[Contact] Email sent successfully to office@pacificaba.com from ${input.email}`);

        // Send notification to app owner
        try {
          await notifyOwner({
            title: "New Contact Form Submission",
            content: `${input.name} (${input.email}) submitted a contact form.${input.phone ? ` Phone: ${input.phone}` : ""}

Message: ${input.message.substring(0, 100)}${input.message.length > 100 ? "..." : ""}`,
          });
        } catch (notificationError) {
          console.error("[Contact] Failed to send notification:", notificationError);
          // Don't fail the submission if notification fails
        }

        return {
          success: true,
          message: "Thank you for your message! We'll get back to you soon.",
        };
      } catch (error) {
        console.error("[Contact] Error sending email:", error);
        
        // Try to notify owner of the error
        try {
          await notifyOwner({
            title: "Contact Form Submission Failed",
            content: `Failed to process contact form from ${input.email}. Error: ${error instanceof Error ? error.message : "Unknown error"}`,
          });
        } catch (notificationError) {
          console.error("[Contact] Failed to send error notification:", notificationError);
        }
        
        return {
          success: false,
          message:
            "There was an error sending your message. Please try again later or contact us directly at 778-565-1064.",
        };
      }
    }),
});
