import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { requireSupabaseUser } from "@/lib/auth";
//random username generator
function generateRandomNickname() {
  return "user-" + Math.random().toString(36).substring(2, 10);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user, error } = await requireSupabaseUser(req);
  if (error || !user) return res.status(401).json({ error: "Unauthorized" });

  console.log("syncing user to user database");
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

//when doing google authentication 
//when google calls the callback endpoint, and that endpoint synch the user to supabase
//implement a way supabase can notify when the data has been regisetered 
//or a way to implement a way to verify that the data is in the database 
//if there is no data for 5 seconds, after three attempts (on dev side), can throw an error 
//retry logic

//issue was me.ts file /me endpoint is trying to get data from the database
//could not find, throws error from usercontext 
//in my case, clearing cookies, clearing cache, new slate 
//could be that cookies were malformed 
//merged main?
