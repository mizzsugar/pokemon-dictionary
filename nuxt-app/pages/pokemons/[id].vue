<script setup lang='ts'>
  const route = useRoute();
  const { data: pokemon } = await useFetch(`/api/pokemons/${route.params.id}`)
</script>

<template>
  <div>
    <Pokemon
      :pokemon="pokemon"
    />
  </div>
</template>
