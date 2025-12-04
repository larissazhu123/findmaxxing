import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { requireSupabaseUser } from "@/lib/auth";

function generateRandomNickname() {
  return "user-" + Math.random().toString(36).substring(2, 10);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { user, error } = await requireSupabaseUser(req);
  if (error || !user) return res.status(401).json({ error: "Unauthorized" });

  console.log("Syncing user to database:", user.id);

  try {
    const synced = await prisma.app_user.upsert({
      where: { id: user.id },
      update: { email: user.email, updated_at: new Date() },
      create: {
        id: user.id,
        email: user.email,
        username: generateRandomNickname(),
      },
    });

    return res.status(200).json(synced);
  } catch (err) {
    console.error("Error syncing user:", err);
    return res.status(500).json({ error: "Failed to sync user" });
  }
}


