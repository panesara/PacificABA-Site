import { eq } from "drizzle-orm";
import { products, bundles, orders, orderItems, Product, Bundle, Order } from "../drizzle/schema";
import { getDb } from "./db";

/**
 * Get all active products
 */
export async function getAllProducts(): Promise<Product[]> {
  const db = await getDb();
  if (!db) return [];

  try {
    return await db.select().from(products).where(eq(products.isActive, true));
  } catch (error) {
    console.error("[Store] Failed to get products:", error);
    return [];
  }
}

/**
 * Get product by ID
 */
export async function getProductById(id: number): Promise<Product | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  try {
    const result = await db.select().from(products).where(eq(products.id, id)).limit(1);
    return result.length > 0 ? result[0] : undefined;
  } catch (error) {
    console.error("[Store] Failed to get product:", error);
    return undefined;
  }
}

/**
 * Get all active bundles
 */
export async function getAllBundles(): Promise<Bundle[]> {
  const db = await getDb();
  if (!db) return [];

  try {
    return await db.select().from(bundles).where(eq(bundles.isActive, true));
  } catch (error) {
    console.error("[Store] Failed to get bundles:", error);
    return [];
  }
}

/**
 * Get bundle by ID
 */
export async function getBundleById(id: number): Promise<Bundle | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  try {
    const result = await db.select().from(bundles).where(eq(bundles.id, id)).limit(1);
    return result.length > 0 ? result[0] : undefined;
  } catch (error) {
    console.error("[Store] Failed to get bundle:", error);
    return undefined;
  }
}

/**
 * Get user's orders
 */
export async function getUserOrders(userId: number): Promise<Order[]> {
  const db = await getDb();
  if (!db) return [];

  try {
    return await db.select().from(orders).where(eq(orders.userId, userId));
  } catch (error) {
    console.error("[Store] Failed to get user orders:", error);
    return [];
  }
}

/**
 * Create a new order
 */
export async function createOrder(
  userId: number,
  amount: string,
  itemType: "product" | "bundle",
  itemIds: number[],
  customerEmail: string,
  customerName: string
): Promise<Order | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  try {
    const result = await db.insert(orders).values({
      userId,
      amount: amount as any,
      itemType,
      itemIds: itemIds as any,
      customerEmail,
      customerName,
      status: "pending",
    });

    // Get the created order
    const orderId = result[0].insertId;
    return await db.select().from(orders).where(eq(orders.id, orderId as number)).limit(1).then(r => r[0]);
  } catch (error) {
    console.error("[Store] Failed to create order:", error);
    return undefined;
  }
}

/**
 * Update order status
 */
export async function updateOrderStatus(
  orderId: number,
  status: "pending" | "completed" | "failed" | "refunded",
  stripePaymentIntentId?: string,
  stripeSessionId?: string
): Promise<void> {
  const db = await getDb();
  if (!db) return;

  try {
    const updates: any = { status };
    if (stripePaymentIntentId) updates.stripePaymentIntentId = stripePaymentIntentId;
    if (stripeSessionId) updates.stripeSessionId = stripeSessionId;
    if (status === "completed") updates.completedAt = new Date();

    await db.update(orders).set(updates).where(eq(orders.id, orderId));
  } catch (error) {
    console.error("[Store] Failed to update order status:", error);
  }
}

/**
 * Get products by category
 */
export async function getProductsByCategory(category: string): Promise<Product[]> {
  const db = await getDb();
  if (!db) return [];

  try {
    return await db
      .select()
      .from(products)
      .where(eq(products.category, category));
  } catch (error) {
    console.error("[Store] Failed to get products by category:", error);
    return [];
  }
}
