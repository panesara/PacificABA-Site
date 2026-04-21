import { getSessionCookieOptions } from "./_core/cookies";
import { COOKIE_NAME } from "@shared/const";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { storeRouter } from "./storeRouter";
import { chatRouter } from "./chatRouter";
import { createContactSubmission } from "./db";
import { notifyOwner } from "./_core/notification";
import { sendContactFormEmail } from "./emailService";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  store: storeRouter,
  chat: chatRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  contact: router({
    submit: publicProcedure
      .input((data: unknown) => {
        const obj = data as any;
        if (!obj.name || !obj.email || !obj.message) {
          throw new Error("Name, email, and message are required");
        }
        return {
          name: obj.name,
          email: obj.email,
          phone: obj.phone || null,
          message: obj.message,
        };
      })
      .mutation(async ({ input }) => {
        try {
          await createContactSubmission({
            name: input.name,
            email: input.email,
            phone: input.phone,
            message: input.message,
          });
          
          // Notify owner of new submission
          await notifyOwner({
            title: "New Contact Form Submission",
            content: `${input.name} (${input.email}) submitted a message: "${input.message.substring(0, 100)}..."`,
          });
          
          // Send email notification to office
          await sendContactFormEmail(
            {
              name: input.name,
              email: input.email,
              phone: input.phone,
              message: input.message,
            },
            "office@pacificaba.com"
          );
          
          return { success: true };
        } catch (error) {
          console.error("Failed to submit contact form:", error);
          throw error;
        }
      }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
