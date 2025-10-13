-- CreateEnum
CREATE TYPE "public"."ParticipantType" AS ENUM ('USER', 'AVATAR');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "deviceDetails" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletionStatus" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Avatar" (
    "id" SERIAL NOT NULL,
    "readyPlayerMeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "personality" TEXT NOT NULL,
    "glbURL" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Avatar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Conversation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "avatarId" INTEGER NOT NULL,

    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Message" (
    "id" SERIAL NOT NULL,
    "conversationId" INTEGER NOT NULL,
    "userId" INTEGER,
    "avatarId" INTEGER,
    "senderType" "public"."ParticipantType" NOT NULL,
    "receiverType" "public"."ParticipantType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DeleteAccountRequest" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "DeleteAccountRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ContactUsRequest" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactUsRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InfoPages" (
    "id" SERIAL NOT NULL,
    "pageName" TEXT NOT NULL,
    "pageBody" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "InfoPages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Avatar" ADD CONSTRAINT "Avatar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Conversation" ADD CONSTRAINT "Conversation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Conversation" ADD CONSTRAINT "Conversation_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "public"."Avatar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Message" ADD CONSTRAINT "Message_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "public"."Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DeleteAccountRequest" ADD CONSTRAINT "DeleteAccountRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
