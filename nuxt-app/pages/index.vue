<script setup>
  const { data } = await useFetch(() => `/api/hello`)
</script>

<template>
  <div class="hello">
    Hello Nuxt {{ data.api }}!
  </div>
</template>

<style scoped>
.hello {
  font-size: 3rem;
  padding: 10rem;
}
</style>
