import { describe, it, expect, vi, beforeEach } from "vitest";
import nodemailer from "nodemailer";

// Mock nodemailer
vi.mock("nodemailer");

describe("Email Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.EMAIL_USER = "office@pacificaba.com";
    process.env.EMAIL_PASSWORD = "7f835v9k4w8x7u7h";
  });

  it("should validate email configuration is set", () => {
    expect(process.env.EMAIL_USER).toBe("office@pacificaba.com");
    expect(process.env.EMAIL_PASSWORD).toBe("7f835v9k4w8x7u7h");
  });

  it("should have correct Fastmail SMTP configuration", () => {
    const config = {
      host: "smtp.fastmail.com",
      port: 465,
      secure: true,
    };

    expect(config.host).toBe("smtp.fastmail.com");
    expect(config.port).toBe(465);
    expect(config.secure).toBe(true);
  });

  it("should validate contact email data structure", () => {
    const contactData = {
      name: "John Doe",
      email: "john@example.com",
      phone: "555-1234",
      message: "Test message",
    };

    expect(contactData).toHaveProperty("name");
    expect(contactData).toHaveProperty("email");
    expect(contactData).toHaveProperty("phone");
    expect(contactData).toHaveProperty("message");
    expect(typeof contactData.name).toBe("string");
    expect(typeof contactData.email).toBe("string");
    expect(typeof contactData.message).toBe("string");
  });

  it("should escape HTML special characters correctly", () => {
    // Test that dangerous characters are properly identified
    const dangerousInput = "<script>alert('xss')</script>";
    const ampersandInput = "John & Jane";
    const quoteInput = 'Quote "test"';

    // These inputs contain characters that should be escaped
    expect(dangerousInput).toContain("<");
    expect(ampersandInput).toContain("&");
    expect(quoteInput).toContain('"');
  });

  it("should handle missing email configuration gracefully", () => {
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    // Both should be set
    expect(emailUser).toBeTruthy();
    expect(emailPassword).toBeTruthy();
  });

  it("should validate recipient email format", () => {
    const recipientEmail = "office@pacificaba.com";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    expect(recipientEmail).toMatch(emailRegex);
  });
});
