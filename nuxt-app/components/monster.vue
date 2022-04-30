<script setup>
  import { MonsterType } from '@/repository/types';
  // monsterをinputする
  const props = defineProps({
    name: {
      type: String,
      required: true,
      default: '',
    }
  })
  const id = 1
  const { monster } = await useFetch(() => `/api/monsters/${id}`)
</script>
<template>
  <div>
    <h2 v-text="name" />
    <div>
      <h3>タイプ</h3>
      <p>草</p>
      <p>毒</p>
    </div>
  </div>
</template>
