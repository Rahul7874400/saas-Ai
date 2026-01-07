import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.plan.createMany({
    data: [
      {
        name: "Free",
        priceMonthly: 0,
        credits: 50,
      },
      {
        name: "Pro",
        priceMonthly: 999,
        credits: 500,
      },
      {
        name: "Premium",
        priceMonthly: 1999,
        credits: 2000,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
