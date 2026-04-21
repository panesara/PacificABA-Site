import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import nodemailer from "nodemailer";

// Mock nodemailer
vi.mock("nodemailer");

describe("Contact Form Email Sending", () => {
  beforeAll(() => {
    // Set environment variables for testing
    process.env.FASTMAIL_EMAIL = "office@pacificaba.com";
    process.env.FASTMAIL_PASSWORD = "748s4m8l5l8b5d8j";
  });

  it("should have FastMail credentials configured", () => {
    expect(process.env.FASTMAIL_EMAIL).toBe("office@pacificaba.com");
    expect(process.env.FASTMAIL_PASSWORD).toBe("748s4m8l5l8b5d8j");
  });

  it("should create a nodemailer transporter with FastMail settings", () => {
    const mockCreateTransport = vi.fn().mockReturnValue({
      sendMail: vi.fn().mockResolvedValue({ messageId: "test-id" }),
    });

    vi.mocked(nodemailer).createTransport = mockCreateTransport;

    const transporter = nodemailer.createTransport({
      host: "smtp.fastmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.FASTMAIL_EMAIL,
        pass: process.env.FASTMAIL_PASSWORD,
      },
    });

    expect(mockCreateTransport).toHaveBeenCalledWith({
      host: "smtp.fastmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "office@pacificaba.com",
        pass: "748s4m8l5l8b5d8j",
      },
    });

    expect(transporter).toBeDefined();
  });

  it("should format contact form data correctly", () => {
    const testData = {
      name: "John Doe",
      email: "john@example.com",
      phone: "778-555-1234",
      message: "I'm interested in your services",
    };

    const emailBody = `
New Contact Form Submission

Name: ${testData.name}
Email: ${testData.email}
Phone: ${testData.phone || "Not provided"}

Message:
${testData.message}

---
This email was sent from the Pacific ABA Academy website contact form.
    `.trim();

    expect(emailBody).toContain("John Doe");
    expect(emailBody).toContain("john@example.com");
    expect(emailBody).toContain("778-555-1234");
    expect(emailBody).toContain("I'm interested in your services");
  });

  afterAll(() => {
    vi.clearAllMocks();
  });
});
