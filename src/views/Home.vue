<template>
  <section>
    <h1>Home</h1>
    <h2 @click="counterStore.changeName">{{ counterStore.nameWithFamily }}</h2>

    <ul>
      <li v-for="item in currency" :key="item.ccy">
        {{ item.base_ccy }}-{{ item.ccy }}
        <br />
        {{ item.buy }} - {{ item.sale }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'
import { useStore } from '../stores/index'

const currency = ref([])

onMounted(() => {
  axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(data => {
      currency.value = data.data
    })
})

const counterStore = useStore()
</script>

<style scoped>
li {
  margin: 10px 0;
}
</style>