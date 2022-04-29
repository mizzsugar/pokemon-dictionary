export default defineEventHandler((event) => {
   return {
     name: event.context.params.name
   }
})
