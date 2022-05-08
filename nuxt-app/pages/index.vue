<script lang="ts" setup>
  const { data } = await useFetch(() => `/api`)
  const { data: pokemons } = await useFetch(`/api/pokemons`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // TODO: 検索窓を作成して検索窓に入力した値を入れる
    // https://github.com/mizzsugar/pokemon-dictionary/issues/2
    body: JSON.stringify({name: 'フシギ'}),
  })
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
