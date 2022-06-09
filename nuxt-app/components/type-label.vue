<script setup lang='ts'>
import { typeToJapanese } from '@/components/libs/translate';

const props = defineProps({
  type: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div
    class="type-label label"
    :class="type"
  >
    {{ typeToJapanese(props.type) }}
  </div>
</template>
<style lang="sass" scoped>
@import "@/assets/sass/main"


.type-label
  width: 60px
</style>
