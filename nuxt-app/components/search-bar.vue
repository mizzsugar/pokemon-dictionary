<script setup lang='ts'>
import { defineEmits } from "vue";
import { types } from "@/components/libs/types"
import { typeToJapanese } from "@/components/libs/translate"

const emit = defineEmits([
  'searchButtonClick',
  'selectType',
])
const name = ref('')
const selectedTypes = ref([])

const search = () => {
  emit('searchButtonClick', name.value)
}

const select = (type: string) => {
  emit('selectType', selectedTypes.value, type)
}

const isSelected = (type: string) => {
  return selectedTypes.value.includes(type)
}

</script>

<template>
  <div>
    <div class="form">
      <div class="input">
        <label>名前</label>
        <input v-model="name">
      </div>
      <div class="input">
        <label>タイプ</label>
        <div class="types">
          <div
            v-for="type in types"
            :key="type"
            :value="type"
            class="label-outline type-button"
            :class="[type, { 'selected': isSelected(type) }]"
            @click="select(type)"
          >
            {{ typeToJapanese(type) }}
          </div>
        </div>
      </div>
    </div>
    <button
      class="search-button"
      @click="search"
    >
      検索
    </button>
  </div>
</template>
<style lang="sass" scoped>
@import "@/assets/sass/main"
@import "@/assets/sass/variables"

label
  font-weight: bold
  margin-right: 4px
.search-button
  margin-top: 8px


.label-outline
  &.normal
    &:hover
      background-color: $normal-color
      color: white
    &.selected
      background-color: $normal-color
      color: white

  &.fire
    &:hover
      background-color: $fire-color
      color: white
    &.selected
      background-color: $fire-color
      color: white

  &.water
    &:hover
      background-color: $water-color
      color: white
    &.selected
      background-color: $water-color
      color: white

  &.grass
    &:hover
      background-color: $grass-color
      color: white
    &.selected
      background-color: $grass-color
      color: white

  &.electric
    &:hover
      background-color: $electric-color
      color: white
    &.selected
      background-color: $electric-color
      color: white

  &.ice
    &:hover
      background-color: $ice-color
      color: white
    &.selected
      background-color: $ice-color
      color: white

  &.fighting
    &:hover
      background-color: $fighting-color
      color: white
    &.selected
      background-color: $fighting-color
      color: white

  &.poison
    &:hover
      background-color: $poison-color
      color: white
    &.selected
      background-color: $poison-color
      color: white

  &.ground
    &:hover
      background-color: $ground-color
      color: white
    &.selected
      background-color: $ground-color
      color: white

  &.flying
    &:hover
      background-color: $flying-color
      color: white
    &.selected
      background-color: $flying-color
      color: white

  &.psychic
    &:hover
      background-color: $psychic-color
      color: white
    &.selected
      background-color: $psychic-color
      color: white

  &.bug
    &:hover
      background-color: $bug-color
      color: white
    &.selected
      background-color: $bug-color
      color: white

  &.rock
    &:hover
      background-color: $rock-color
      color: white
    &.selected
      background-color: $rock-color
      color: white

  &.ghost
    &:hover
      background-color: $ghost-color
      color: white
    &.selected
      background-color: $ghost-color
      color: white

  &.dragon
    &:hover
      background-color: $dragon-color
      color: white
    &.selected
      background-color: $dragon-color
      color: white

  &.dark
    &:hover
      background-color: $dark-color
      color: white
    &.selected
      background-color: $dark-color
      color: white

  &.steel
    &:hover
      background-color: $steel-color
      color: white
    &.selected
      background-color: $steel-color
      color: white

  &.fairy
    &:hover
      background-color: $fairy-color
      color: white
    &.selected
      background-color: $fairy-color
      color: white

.form
  display: flex
  flex-direction: column
  gap: 16px

.type-button
  width: 60px

.types
  width: 320px
  margin-top: 8px
  display: flex
  gap: 8px
  flex-wrap: wrap
</style>
