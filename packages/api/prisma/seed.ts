import { PrismaClient } from "@prisma/client";

const seeds = ["react", "vue"];

const prisma = new PrismaClient();

seeds.map((item) =>
  prisma.package
    .create({
      data: {
        type: "npm",
        name: item,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
);
