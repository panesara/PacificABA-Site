import { drizzle } from "drizzle-orm/mysql2";
import { products, bundles } from "./drizzle/schema.ts";
import mysql from "mysql2/promise";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("DATABASE_URL environment variable is not set");
  process.exit(1);
}

async function seed() {
  try {
    const connection = await mysql.createConnection(DATABASE_URL);
    const db = drizzle(connection);

    console.log("🌱 Seeding database with sample CEU products and bundles...");

    // Sample products
    const sampleProducts = [
      {
        name: "B.F. Skinner on Behaviorism and Verbal Behavior",
        description: "An in-depth exploration of B.F. Skinner's foundational work on behaviorism and verbal behavior.",
        format: "Interactive Video",
        category: "General",
        ceuCredits: "2",
        ethicsCredits: "0",
        supervisionCredits: "0",
        price: "16.99",
        originalPrice: "19.99",
        instructor: "B.F. Skinner & Eve Segal",
        rating: "4.75",
        reviewCount: 4,
      },
      {
        name: "When Science Meets Animal Training: An Interview with Bob Bailey",
        description: "A fascinating interview with renowned animal trainer Bob Bailey.",
        format: "Interactive Video",
        category: "General",
        ceuCredits: "0.5",
        ethicsCredits: "0",
        supervisionCredits: "0",
        price: "4.24",
        originalPrice: "4.99",
        instructor: "Bob Bailey",
        rating: "4.0",
        reviewCount: 1,
      },
      {
        name: "How to Identify Ethical Practices in Organizations",
        description: "Learn how to evaluate organizational ethics before employment.",
        format: "Article Quiz",
        category: "Ethics",
        ceuCredits: "1",
        ethicsCredits: "1",
        supervisionCredits: "0",
        price: "8.49",
        originalPrice: "9.99",
        instructor: "Matthew Brodhead",
        rating: "5.0",
        reviewCount: 4,
      },
      {
        name: "An Introduction to Relational Frame Theory (RFT)",
        description: "Comprehensive introduction to Relational Frame Theory.",
        format: "Multimedia Tutorial",
        category: "General",
        ceuCredits: "7",
        ethicsCredits: "0",
        supervisionCredits: "0",
        price: "59.49",
        originalPrice: "69.99",
        instructor: "Eric J. Fox",
        rating: "4.55",
        reviewCount: 504,
      },
      {
        name: "Supervision Best Practices for BCBA Supervisors",
        description: "Comprehensive guide to providing effective supervision as a BCBA.",
        format: "Multimedia Tutorial",
        category: "Supervision",
        ceuCredits: "3",
        ethicsCredits: "0",
        supervisionCredits: "3",
        price: "29.99",
        originalPrice: "34.99",
        instructor: "Dr. Ramen Saggu",
        rating: "4.8",
        reviewCount: 42,
      },
      {
        name: "Ethical Decision-Making in Applied Behavior Analysis",
        description: "Deep dive into ethical frameworks and decision-making processes.",
        format: "Article Quiz",
        category: "Ethics",
        ceuCredits: "2",
        ethicsCredits: "2",
        supervisionCredits: "0",
        price: "16.99",
        originalPrice: "19.99",
        instructor: "Shawn Quigley",
        rating: "4.7",
        reviewCount: 67,
      },
    ];

    // Insert products
    const insertedProducts = await db.insert(products).values(sampleProducts);
    console.log(`✅ Inserted ${sampleProducts.length} products`);

    // Sample bundles - using product IDs 1-6
    const sampleBundles = [
      {
        name: "Galactic Bundle – 32 BCBA CEUs (with Ethics & Supervision)",
        description: "Our most comprehensive bundle featuring 32 total CEUs.",
        bundleType: "Galactic",
        totalCeus: "32",
        ethicsCeus: "4",
        supervisionCeus: "3",
        price: "216.99",
        originalPrice: "319.86",
        productIds: JSON.stringify([1, 2, 3, 4, 5, 6]),
      },
      {
        name: "Supernova Bundle – 20 BCBA CEUs (with Ethics & Supervision)",
        description: "A substantial bundle with 20 total CEUs.",
        bundleType: "Supernova",
        totalCeus: "20",
        ethicsCeus: "4",
        supervisionCeus: "3",
        price: "139.89",
        originalPrice: "199.89",
        productIds: JSON.stringify([1, 4, 5]),
      },
      {
        name: "Planetary Bundle – 7 BCBA CEUs (with Ethics & Supervision)",
        description: "A focused bundle with 7 total CEUs.",
        bundleType: "Planetary",
        totalCeus: "7",
        ethicsCeus: "4",
        supervisionCeus: "3",
        price: "48.94",
        originalPrice: "69.94",
        productIds: JSON.stringify([3, 5, 6]),
      },
      {
        name: "Celestial Bundle – 15 BCBA CEUs",
        description: "A well-rounded bundle with 15 total CEUs.",
        bundleType: "Custom",
        totalCeus: "15",
        ethicsCeus: "2",
        supervisionCeus: "1",
        price: "99.99",
        originalPrice: "129.99",
        productIds: JSON.stringify([1, 4, 5]),
      },
    ];

    // Insert bundles
    const insertedBundles = await db.insert(bundles).values(sampleBundles);
    console.log(`✅ Inserted ${sampleBundles.length} bundles`);

    console.log("\n🎉 Database seeding completed successfully!");
    await connection.end();
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seed();
