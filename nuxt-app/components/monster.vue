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
  <div>
    <h2 v-text="props.monster.name" />
    <div>
      <h3>タイプ</h3>
      <p
        v-for="monsterType in props.monster.types"
        :key="monsterType.type.key"
        v-text="monsterType.type.displayName"
      />
    </div>
  </div>
</template>
