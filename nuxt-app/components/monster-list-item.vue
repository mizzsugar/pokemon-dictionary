<script lang="ts" setup>
  import { PokemonType } from '../repository/types';
  import { PropType } from 'nuxt/dist/app/compat/capi';

  const props = defineProps({
    monster: {
      type: Object as PropType<PokemonType>,
      required: true,
    }
  })
</script>
<template>
  <p>{{ monster.name }}</p>
</template>
