import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, boolean, json } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Products table for CEU courses and training materials
 */
export const products = mysqlTable("products", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  format: varchar("format", { length: 100 }).notNull(), // "Multimedia Tutorial", "Interactive Video", "Article Quiz"
  category: varchar("category", { length: 100 }).notNull(), // "General", "Ethics", "Supervision"
  ceuCredits: decimal("ceuCredits", { precision: 3, scale: 1 }).notNull(), // e.g., 0.5, 1, 2, 7, 8
  ethicsCredits: decimal("ethicsCredits", { precision: 3, scale: 1 }).default("0"),
  supervisionCredits: decimal("supervisionCredits", { precision: 3, scale: 1 }).default("0"),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  originalPrice: decimal("originalPrice", { precision: 10, scale: 2 }),
  instructor: varchar("instructor", { length: 255 }),
  rating: decimal("rating", { precision: 2, scale: 2 }),
  reviewCount: int("reviewCount").default(0),
  stripeProductId: varchar("stripeProductId", { length: 255 }),
  stripePriceId: varchar("stripePriceId", { length: 255 }),
  isActive: boolean("isActive").default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Product = typeof products.$inferSelect;
export type InsertProduct = typeof products.$inferInsert;

/**
 * Bundles table for pre-curated course collections
 */
export const bundles = mysqlTable("bundles", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  bundleType: varchar("bundleType", { length: 100 }).notNull(), // "Galactic", "Supernova", "Planetary", "Custom"
  totalCeus: decimal("totalCeus", { precision: 4, scale: 1 }).notNull(),
  ethicsCeus: decimal("ethicsCeus", { precision: 3, scale: 1 }).default("0"),
  supervisionCeus: decimal("supervisionCeus", { precision: 3, scale: 1 }).default("0"),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  originalPrice: decimal("originalPrice", { precision: 10, scale: 2 }),
  productIds: json("productIds").$type<number[]>().notNull(), // Array of product IDs in bundle
  stripePriceId: varchar("stripePriceId", { length: 255 }),
  isActive: boolean("isActive").default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Bundle = typeof bundles.$inferSelect;
export type InsertBundle = typeof bundles.$inferInsert;

/**
 * Orders table for tracking purchases
 */
export const orders = mysqlTable("orders", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  stripePaymentIntentId: varchar("stripePaymentIntentId", { length: 255 }),
  stripeSessionId: varchar("stripeSessionId", { length: 255 }),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  currency: varchar("currency", { length: 3 }).default("USD"),
  status: mysqlEnum("status", ["pending", "completed", "failed", "refunded"]).default("pending"),
  itemType: mysqlEnum("itemType", ["product", "bundle"]).notNull(),
  itemIds: json("itemIds").$type<number[]>().notNull(), // Product or bundle IDs
  customerEmail: varchar("customerEmail", { length: 255 }),
  customerName: varchar("customerName", { length: 255 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  completedAt: timestamp("completedAt"),
});

export type Order = typeof orders.$inferSelect;
export type InsertOrder = typeof orders.$inferInsert;

/**
 * Order items table for detailed line items
 */
export const orderItems = mysqlTable("orderItems", {
  id: int("id").autoincrement().primaryKey(),
  orderId: int("orderId").notNull(),
  productId: int("productId"),
  bundleId: int("bundleId"),
  name: varchar("name", { length: 255 }).notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  quantity: int("quantity").default(1),
  ceuCredits: decimal("ceuCredits", { precision: 3, scale: 1 }).default("0"),
});

export type OrderItem = typeof orderItems.$inferSelect;
export type InsertOrderItem = typeof orderItems.$inferInsert;