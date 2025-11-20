import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { requireSupabaseUser } from "@/lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { user, error } = await requireSupabaseUser(req);
  if (error || !user)
    return res.status(401).json({ error: "Unauthorized" });

  const currUser = await prisma.app_user.findUnique({ where: { id: user.id },});
   
  if(typeof currUser?.points === "undefined"){
    return res.status(400).json({error: "Invalid type for user points"})
  }

  const { pointsAwarded } = req.body as { pointsAwarded?: number }

  if(typeof pointsAwarded === "undefined"){
    return res.status(400).json({error: "Invalid type for points Awarded"})
  }
  
  try {
    const updated = await prisma.app_user.update({
      where: { id: user.id },
      data: {
        points: pointsAwarded + currUser.points,
        updated_at: new Date(),
      },
    });

    return res.status(200).json({ ok: true, user: updated });
  } catch (e) {
    console.error("Error updating points:", e);
    return res.status(500).json({ error: "Failed to update points" });
  }
}