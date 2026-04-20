import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { getAllProducts, getAllBundles, getProductById, getBundleById, getUserOrders, createOrder } from "./store";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2026-01-28.clover",
});

export const storeRouter = router({
  // Get all products
  products: publicProcedure.query(async () => {
    return await getAllProducts();
  }),

  // Get all bundles
  bundles: publicProcedure.query(async () => {
    return await getAllBundles();
  }),

  // Get single product
  getProduct: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      return await getProductById(input.id);
    }),

  // Get single bundle
  getBundle: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      return await getBundleById(input.id);
    }),

  // Get user's orders
  getOrders: protectedProcedure.query(async ({ ctx }) => {
    return await getUserOrders(ctx.user.id);
  }),

  // Create checkout session
  createCheckoutSession: protectedProcedure
    .input(
      z.object({
        itemType: z.enum(["product", "bundle"]),
        itemIds: z.array(z.number()),
        amount: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

        if (input.itemType === "product") {
          for (const productId of input.itemIds) {
            const product = await getProductById(productId);
            if (product && product.stripePriceId) {
              lineItems.push({
                price: product.stripePriceId,
                quantity: 1,
              });
            }
          }
        } else if (input.itemType === "bundle") {
          for (const bundleId of input.itemIds) {
            const bundle = await getBundleById(bundleId);
            if (bundle && bundle.stripePriceId) {
              lineItems.push({
                price: bundle.stripePriceId,
                quantity: 1,
              });
            }
          }
        }

        if (lineItems.length === 0) {
          throw new Error("No valid items to checkout");
        }

        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: lineItems,
          mode: "payment",
          customer_email: ctx.user.email || undefined,
          client_reference_id: ctx.user.id.toString(),
          metadata: {
            user_id: ctx.user.id.toString(),
            customer_email: ctx.user.email || "",
            customer_name: ctx.user.name || "",
            item_type: input.itemType,
            item_ids: input.itemIds.join(","),
          },
          success_url: `${ctx.req.headers.origin || "https://example.com"}/store/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${ctx.req.headers.origin || "https://example.com"}/store`,
          allow_promotion_codes: true,
        });

        // Create pending order in database
        await createOrder(
          ctx.user.id,
          input.amount,
          input.itemType,
          input.itemIds,
          ctx.user.email || "",
          ctx.user.name || ""
        );

        return {
          sessionId: session.id,
          url: session.url,
        };
      } catch (error) {
        console.error("[Store] Checkout error:", error);
        throw error;
      }
    }),
});
