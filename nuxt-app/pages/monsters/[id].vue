<script setup lang='ts'>

  // monsterを代入する
  // idをパラメータから取得する
  // monsterの型定義
  const _id = 1;
  // const monster = await useFetch(() => `/api/monsters/${id}`)
</script>

<template>
  <div>
    <Monster :name="リザードン" />
  </div>
</template>
