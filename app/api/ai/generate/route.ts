import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { generateMockAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { prompt } = await req.json();

  const aiResult = await generateMockAI(prompt);

  await prisma.aiRequest.create({
    data: {
      userId,
      prompt,
      response: aiResult.text,
      tokensUsed: aiResult.tokensUsed
    }
  });

  return NextResponse.json(aiResult);
}
