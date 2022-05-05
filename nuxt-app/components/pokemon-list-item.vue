<script lang="ts" setup>
  import { PokemonType } from '../repository/types';
  import { PropType } from 'nuxt/dist/app/compat/capi';

  const props = defineProps({
    pokemon: {
      type: Object as PropType<PokemonType>,
      required: true,
    }
  })
</script>
<template>
  <p>{{ pokemon.name }}</p>
</template>
