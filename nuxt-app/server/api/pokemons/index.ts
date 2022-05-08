import { Guest } from "@/usecase/guest"

export default defineEventHandler(async (event) => {
  return await Guest.query()
})
