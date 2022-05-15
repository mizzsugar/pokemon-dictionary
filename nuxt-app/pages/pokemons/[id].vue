<script setup lang='ts'>
  const route = useRoute();
  const { data: pokemon } = await useAsyncData('fetch-pokemon', () =>
    $fetch(
      `/api/pokemons/${route.params.id}`,
    ),
    {
      initialCache: false
    }
  )
</script>

<template>
  <div>
    <Pokemon
      :pokemon="pokemon"
    />
  </div>
</template>
