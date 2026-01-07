import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const client = await clerkClient();
  const clerkUser = await client.users.getUser(userId);

  const email = clerkUser.emailAddresses[0]?.emailAddress;
  if (!email) return NextResponse.json({ error: "Email missing" }, { status: 400 });

  const user = await prisma.user.upsert({
    where: { clerkUserId: userId },
    update: {},
    create: {
      clerkUserId: userId,
      email,
      usage: { create: {} },
    },
  });

  return NextResponse.json(user);
}
