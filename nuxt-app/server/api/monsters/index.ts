import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient({
  log: ['query']
})


export default defineEventHandler(async (event) => {
  return await prisma.monster.findMany({
    include: { types: { include: { type: true } } },
  })
})
