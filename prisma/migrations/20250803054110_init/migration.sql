/*
  Warnings:

  - You are about to alter the column `type` on the `pet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - Added the required column `updatedAt` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pet` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `type` ENUM('DOG', 'CAT', 'BIRD', 'OTHER') NOT NULL;

-- CreateIndex
CREATE INDEX `Pet_type_idx` ON `Pet`(`type`);

-- CreateIndex
CREATE INDEX `Pet_name_idx` ON `Pet`(`name`);
