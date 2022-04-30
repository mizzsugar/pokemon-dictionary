import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient({
  log: ['query']
})


export default defineEventHandler(async (event) => {
  // const query = useQuery(event)
  // return { a: query.param1, b: query.param2 }

  return await prisma.monster.findUnique({
    where: {
      id: parseInt(event.context.params.id),
    },
  })
});
