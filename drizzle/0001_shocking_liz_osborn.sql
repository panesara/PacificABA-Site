CREATE TABLE `bundles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`bundleType` varchar(100) NOT NULL,
	`totalCeus` decimal(4,1) NOT NULL,
	`ethicsCeus` decimal(3,1) DEFAULT '0',
	`supervisionCeus` decimal(3,1) DEFAULT '0',
	`price` decimal(10,2) NOT NULL,
	`originalPrice` decimal(10,2),
	`productIds` json NOT NULL,
	`stripePriceId` varchar(255),
	`isActive` boolean DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bundles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `orderItems` (
	`id` int AUTO_INCREMENT NOT NULL,
	`orderId` int NOT NULL,
	`productId` int,
	`bundleId` int,
	`name` varchar(255) NOT NULL,
	`price` decimal(10,2) NOT NULL,
	`quantity` int DEFAULT 1,
	`ceuCredits` decimal(3,1) DEFAULT '0',
	CONSTRAINT `orderItems_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`stripePaymentIntentId` varchar(255),
	`stripeSessionId` varchar(255),
	`amount` decimal(10,2) NOT NULL,
	`currency` varchar(3) DEFAULT 'USD',
	`status` enum('pending','completed','failed','refunded') DEFAULT 'pending',
	`itemType` enum('product','bundle') NOT NULL,
	`itemIds` json NOT NULL,
	`customerEmail` varchar(255),
	`customerName` varchar(255),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`completedAt` timestamp,
	CONSTRAINT `orders_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`format` varchar(100) NOT NULL,
	`category` varchar(100) NOT NULL,
	`ceuCredits` decimal(3,1) NOT NULL,
	`ethicsCredits` decimal(3,1) DEFAULT '0',
	`supervisionCredits` decimal(3,1) DEFAULT '0',
	`price` decimal(10,2) NOT NULL,
	`originalPrice` decimal(10,2),
	`instructor` varchar(255),
	`rating` decimal(2,2),
	`reviewCount` int DEFAULT 0,
	`stripeProductId` varchar(255),
	`stripePriceId` varchar(255),
	`isActive` boolean DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
