<script lang="ts" setup>
  const { data } = await useFetch(() => `/api`)
  const { data: monsters } = await useFetch(() => `/api/monsters`)
</script>

<template>
  <div>
    <div class="hello">
      Hello Nuxt {{ data.api }}!
    </div>
    <ul>
      <li
        v-for="monster in monsters"
        :key="monster.id"
      >
        <nuxt-link :to="`/monsters/${monster.id}`">
          <MonsterListItem :monster="monster" />
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
