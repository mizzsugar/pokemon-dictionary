import { Guest } from "@/usecase/guest";


export default defineEventHandler(async (event) => {
  return await Guest.fetchPokemonById( parseInt(event.context.params.id))
});
