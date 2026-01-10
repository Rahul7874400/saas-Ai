import { prisma } from "@/lib/prisma";

export async function getUserContext(clerkUserId: string) {
  const user = await prisma.user.findUnique({
    where: { clerkUserId },
    include: {
      usage: true,
      subscription: {
        include: {
          plan: true,
        },
      },
    },
  });

  if (!user || !user.usage) {
    throw new Error("User or usage not found");
  }

  const planCredits = user.subscription?.plan.credits ?? 50; // default Free
  const usedCredits = user.usage.credits;

  return {
    user,
    planCredits,
    usedCredits,
  };
}
