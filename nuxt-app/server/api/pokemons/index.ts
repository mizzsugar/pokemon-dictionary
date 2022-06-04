import { Guest } from "@/usecase/guest"

export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  return await Guest.query(body ? JSON.parse(body) : null)
})
