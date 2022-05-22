<script setup lang='ts'>
import { defineEmits } from "vue";

const emit = defineEmits([
  'searchButtonClick'
])
const name = ref('')

const search = () => {
  emit('searchButtonClick', name.value)
}

</script>

<template>
  <div class="search">
    <input v-model="name">
    <button @click="search">
      検索
    </button>
  </div>
</template>
<style scoped>

.search {
  display: flex;
}
</style>
