/*
  Warnings:

  - A unique constraint covering the columns `[pageName]` on the table `InfoPages` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `InfoPages` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "InfoPages_pageName_key" ON "public"."InfoPages"("pageName");

-- CreateIndex
CREATE UNIQUE INDEX "InfoPages_slug_key" ON "public"."InfoPages"("slug");
