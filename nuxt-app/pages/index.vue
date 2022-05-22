<script lang="ts" setup>
  const { data } = await useAsyncData('sample', () => 
    $fetch(`/api`),
    {initialCache: false},
  )

  const pokemons = ref([])

  pokemons.value = await $fetch(
    `/api/pokemons`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // TODO: 検索窓を作成して検索窓に入力した値を入れる
      // https://github.com/mizzsugar/pokemon-dictionary/issues/2
      body: JSON.stringify({name: 'フシギ'}),
    }
  )

  const search = async (name: string) => {
    pokemons.value = await $fetch(
      `/api/pokemons`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name}),
      }
    )
}

</script>

<template>
  <div>
    <div class="hello">
      Hello Nuxt {{ data.api }}!
    </div>
    <SearchBar @search-button-click="search" />
    <nuxt-link
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :to="`/pokemons/${pokemon.id}`"
    >
      <PokemonListItem :pokemon="pokemon" />
    </nuxt-link>
  </div>
</template>

<style scoped>
.hello {
  font-size: 3rem;
  padding: 10rem;
}
</style>
