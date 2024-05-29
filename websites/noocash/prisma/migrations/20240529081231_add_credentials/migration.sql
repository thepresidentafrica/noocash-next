/*
  Warnings:

  - Added the required column `passwordStoreId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "passwordStoreId" UUID NOT NULL;

-- CreateTable
CREATE TABLE "PasswordStore" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "has" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" UUID,

    CONSTRAINT "PasswordStore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreviousPasswords" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "hash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "storeId" UUID,

    CONSTRAINT "PreviousPasswords_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PasswordStore_userId_key" ON "PasswordStore"("userId");

-- AddForeignKey
ALTER TABLE "PasswordStore" ADD CONSTRAINT "PasswordStore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PreviousPasswords" ADD CONSTRAINT "PreviousPasswords_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "PasswordStore"("id") ON DELETE CASCADE ON UPDATE CASCADE;
