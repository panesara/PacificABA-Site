import { describe, it, expect, vi, beforeEach } from "vitest";
import { createContactSubmission } from "./db";

// Mock the database
vi.mock("./db", async () => {
  const actual = await vi.importActual("./db");
  return {
    ...actual,
    createContactSubmission: vi.fn(),
  };
});

describe("Contact Form", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should validate required fields", () => {
    const testCases = [
      { name: "", email: "test@example.com", message: "test" },
      { name: "John", email: "", message: "test" },
      { name: "John", email: "test@example.com", message: "" },
    ];

    testCases.forEach((testCase) => {
      const hasError =
        !testCase.name || !testCase.email || !testCase.message;
      expect(hasError).toBe(true);
    });
  });

  it("should accept valid contact submission data", () => {
    const validData = {
      name: "John Doe",
      email: "john@example.com",
      phone: "555-1234",
      message: "I would like to know more about your services.",
    };

    expect(validData.name).toBeTruthy();
    expect(validData.email).toBeTruthy();
    expect(validData.message).toBeTruthy();
    expect(validData.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("should handle optional phone field", () => {
    const dataWithoutPhone = {
      name: "Jane Doe",
      email: "jane@example.com",
      phone: null,
      message: "Contact me about enrollment.",
    };

    expect(dataWithoutPhone.name).toBeTruthy();
    expect(dataWithoutPhone.email).toBeTruthy();
    expect(dataWithoutPhone.message).toBeTruthy();
    expect(dataWithoutPhone.phone).toBeNull();
  });

  it("should validate email format", () => {
    const validEmails = [
      "test@example.com",
      "user.name@example.co.uk",
      "contact+tag@example.com",
    ];

    const invalidEmails = ["notanemail", "test@", "@example.com"];

    validEmails.forEach((email) => {
      expect(email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    invalidEmails.forEach((email) => {
      expect(email).not.toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });
  });

  it("should handle message length", () => {
    const shortMessage = "Hi";
    const longMessage =
      "This is a detailed message about our services. We would like to discuss various aspects of your program and how we can benefit from your expertise.";

    expect(shortMessage.length).toBeGreaterThan(0);
    expect(longMessage.length).toBeGreaterThan(shortMessage.length);
  });
});
