<script lang="ts" setup>
  import { MonsterType } from '../repository/types';
  import { PropType } from 'nuxt/dist/app/compat/capi';

  const props = defineProps({
    monster: {
      type: Object as PropType<MonsterType>,
      required: true,
    }
  })
</script>
<template>
  <p>{{ monster.name }}</p>
</template>
