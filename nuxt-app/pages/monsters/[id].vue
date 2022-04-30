<script setup lang='ts'>
  const route = useRoute();
  const { data: monster } = await useFetch(`/api/monsters/${route.params.id}`)
</script>

<template>
  <div>
    <Monster
      :monster="monster"
    />
  </div>
</template>
