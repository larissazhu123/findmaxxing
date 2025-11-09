import { PrismaClient } from "../../../generated/prisma";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"], // drop or tweak in production
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;