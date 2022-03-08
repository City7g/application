<template>
  <section>
    <h1 @dblclick="double">About</h1>
    {{ count }}
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
let count = ref(1)

const double = () => {count.value++}
</script>