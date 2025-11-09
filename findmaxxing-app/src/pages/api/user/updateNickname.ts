import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { requireSupabaseUser } from "@/lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { user, error } = await requireSupabaseUser(req);
  if (error || !user)
    return res.status(401).json({ error: "Unauthorized" });

  const { newNickname } = req.body as { newNickname?: string };

  if (!newNickname || !newNickname.trim()) {
    return res.status(400).json({ error: "Nickname required" });
  }

  const sanitized = newNickname.trim().slice(0, 16);
  if (sanitized.length < 3) {
    return res.status(400).json({ error: "Nickname must be at least 3 characters long" });
  }

  try {
    const updated = await prisma.app_user.update({
      where: { id: user.id },
      data: {
        username: sanitized,
        updated_at: new Date(),
      },
    });

    return res.status(200).json({ ok: true, user: updated });
  } catch (e) {
    console.error("Error updating nickname:", e);
    return res.status(500).json({ error: "Failed to update nickname" });
  }
}
