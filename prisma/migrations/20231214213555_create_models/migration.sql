/*
  Warnings:

  - Added the required column `name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "messagens" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "register_id" TEXT NOT NULL,

    CONSTRAINT "messagens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dateofbirth" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "registers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "messagens" ADD CONSTRAINT "messagens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messagens" ADD CONSTRAINT "messagens_register_id_fkey" FOREIGN KEY ("register_id") REFERENCES "registers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
