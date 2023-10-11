-- DropIndex
DROP INDEX "User_name_key";

-- CreateTable
CREATE TABLE "Prompt" (
    "id" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Prompt_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Prompt" ADD CONSTRAINT "Prompt_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
