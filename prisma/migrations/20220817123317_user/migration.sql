/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `HomeAddress` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IdNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MobileNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `WorkAddress` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `HomeAddress` VARCHAR(191) NOT NULL,
    ADD COLUMN `IdNumber` INTEGER NOT NULL,
    ADD COLUMN `MobileNumber` INTEGER NOT NULL,
    ADD COLUMN `WorkAddress` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);
