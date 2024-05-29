/*
  Warnings:

  - You are about to drop the column `has` on the `PasswordStore` table. All the data in the column will be lost.
  - Added the required column `hash` to the `PasswordStore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PasswordStore" DROP COLUMN "has",
ADD COLUMN     "hash" TEXT NOT NULL;
