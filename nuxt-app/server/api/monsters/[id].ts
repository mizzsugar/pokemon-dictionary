import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient({
  log: ['query']
})


export default defineEventHandler(async (event) => {
  return await prisma.monster.findUnique({
    where: {
      id: parseInt(event.context.params.id),
    },
  })
});