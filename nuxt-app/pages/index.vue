<script lang="ts" setup>
  const { data } = await useFetch(() => `/api`)
  const { data: pokemons } = await useFetch(() => `/api/pokemons`)
</script>

<template>
  <div>
    <div class="hello">
      Hello Nuxt {{ data.api }}!
    </div>
    <ul>
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
      >
        <nuxt-link :to="`/pokemons/${pokemon.id}`">
          <PokemonListItem :pokemon="pokemon" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.hello {
  font-size: 3rem;
  padding: 10rem;
}
</style>
