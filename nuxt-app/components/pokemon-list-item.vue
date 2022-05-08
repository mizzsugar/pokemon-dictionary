<script lang="ts" setup>
  import { Pokemon } from '@/domain/entities';
  import { PropType } from 'nuxt/dist/app/compat/capi';

  const props = defineProps({
    pokemon: {
      type: Object as PropType<Pokemon>,
      required: true,
    }
  })
</script>
<template>
  <p>{{ pokemon.name }}</p>
</template>
