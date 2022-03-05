<template>
  <router-link :to="{name: path}">{{text}}</router-link>
</template>

<script setup>
defineProps({
  text: String,
  path: String
})
</script>

<style scoped>
</style>
