import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { requireSupabaseUser } from "@/lib/auth";

// Helper: generate a random, readable nickname like "user-ab12cd34"
function generateRandomNickname() {
  return "user-" + Math.random().toString(36).substring(2, 10);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user, error } = await requireSupabaseUser(req);
  if (error || !user) return res.status(401).json({ error: "Unauthorized" });

  try {
    const synced = await prisma.app_user.upsert({
      where: { id: user.id },
      update: { email: user.email, updated_at: new Date() },
      create: {
        id: user.id,
        email: user.email,
        username: generateRandomNickname(), // random nickname on first login
      },
    });

    return res.status(200).json(synced);
  } catch (err) {
    console.error("Error syncing user:", err);
    return res.status(500).json({ error: "Failed to sync user" });
  }
}
