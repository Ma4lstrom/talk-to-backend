FROM node:20-alpine as builder

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm prisma generate

RUN pnpm run build


FROM node:20-alpine

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY package*.json pnpm-lock.yaml ./
COPY prisma ./prisma
COPY views ./views 
COPY public ./public

EXPOSE 3000

CMD pnpm prisma generate && pnpm prisma migrate deploy && node dist/main.js