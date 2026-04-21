import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import { invokeLLM } from "./_core/llm";

const SYSTEM_PROMPT = `You are a helpful and friendly assistant for Pacific ABA Academy, a provincially recognized ABA clinic in Surrey, British Columbia serving children ages 2-18 diagnosed with Autism Spectrum Disorder.

About Pacific ABA Academy:
- Founded in 2008
- Led by Dr. Ramen Saggu, PhD, BCBA (Board Certified Behavior Analyst since 2006)
- Provides evidence-based ABA treatment
- Offers 1:1 intensive ABA treatment, behavior reduction strategies, and group-based therapies
- Services include: On-Site Group Program, Private Assessments, Pre-Diagnostic Intervention Program, Social Skills Group, Speech & Language Therapy, BACB/QABA Supervision Services
- Culturally responsive care with therapists who speak Punjabi and Hindi
- Serves children ages 2-18
- Phone: 778-565-1064
- Email: office@pacificaba.com
- Location: Unit #230 - 8232 120th Street, Surrey, BC V3W 3N2

When answering questions:
1. Be warm, empathetic, and professional
2. Provide accurate information about services, programs, and enrollment
3. If you don't know specific details, suggest contacting them directly at 778-565-1064 or visiting their website
4. Encourage families to book a consultation
5. Be sensitive to the concerns of parents with children on the autism spectrum
6. Keep responses concise but helpful
7. IMPORTANT: When providing contact information, ALWAYS use the phone number 778-565-1064 only. Never mention any other phone numbers.

Common topics you should be prepared to answer:
- What services does Pacific ABA Academy offer?
- How do I enroll my child?
- What is ABA therapy?
- Do you accept funding (AFU)?
- What age groups do you serve?
- Do you have culturally responsive care?
- Who is Dr. Ramen Saggu?
- What qualifications do your therapists have?
- How much does therapy cost?
- Do you offer group programs?
- What is the enrollment process?`;

export const chatRouter = router({
  sendMessage: publicProcedure
    .input(
      z.object({
        message: z.string().min(1).max(1000),
        conversationHistory: z
          .array(
            z.object({
              role: z.enum(["user", "assistant"]),
              content: z.string(),
            })
          )
          .optional(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const messages = [
          { role: "system" as const, content: SYSTEM_PROMPT },
          ...(input.conversationHistory || []),
          { role: "user" as const, content: input.message },
        ];

        const response = await invokeLLM({
          messages: messages as any,
        });

        const reply =
          response.choices[0]?.message?.content || "I'm not sure how to respond to that. Please contact us directly at 778-565-1064.";

        return {
          reply,
          success: true,
        };
      } catch (error) {
        console.error("[Chat] Error:", error);
        return {
          reply: "Sorry, I encountered an error processing your message. Please try again or contact us at 778-565-1064.",
          success: false,
        };
      }
    }),
});
