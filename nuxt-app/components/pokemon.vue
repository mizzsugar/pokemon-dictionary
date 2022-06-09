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
  <div>
    <h2 v-text="props.pokemon.name" />
    <div>
      <h3>タイプ</h3>
      <TypeLabel
        v-for="type in props.pokemon.types"
        :key="type"
        :type="type"
      />
    </div>
  </div>
</template>
