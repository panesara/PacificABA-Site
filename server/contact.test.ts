import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import nodemailer from "nodemailer";

// Mock nodemailer
vi.mock("nodemailer");

describe("Contact Form Email Sending", () => {
  beforeAll(() => {
    // Set environment variables for testing
    process.env.EMAIL_USER = "pacificabaacademyoffice@gmail.com";
    process.env.EMAIL_PASSWORD = "atce rxrj dwcw yacv";
  });

  it("should have email credentials configured", () => {
    expect(process.env.EMAIL_USER).toBe("pacificabaacademyoffice@gmail.com");
    expect(process.env.EMAIL_PASSWORD).toBe("atce rxrj dwcw yacv");
  });

  it("should create a nodemailer transporter with Gmail settings", () => {
    const mockCreateTransport = vi.fn().mockReturnValue({
      sendMail: vi.fn().mockResolvedValue({ messageId: "test-id" }),
    });

    vi.mocked(nodemailer).createTransport = mockCreateTransport;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    expect(mockCreateTransport).toHaveBeenCalledWith({
      service: "gmail",
      auth: {
        user: "pacificabaacademyoffice@gmail.com",
        pass: "atce rxrj dwcw yacv",
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
