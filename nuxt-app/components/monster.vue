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
  <div>
    <h2 v-text="props.monster.name" />
    <div>
      <h3>タイプ</h3>
      <p
        v-for="type in props.monster.types"
        :key="type.type.key"
        v-text="type.type.displayName"
      />
    </div>
  </div>
</template>
