<template>
  <section>
    <h1>Home</h1>
    <h2 @click="counterStore.changeName">{{ counterStore.nameWithFamily }}</h2>

    <ul class="currency-list" v-if="currency.length">
      <li v-for="item in currency" :key="item.ccy">
        {{ item.base_ccy }}-{{ item.ccy }}
        <br />
        {{ item.buy }} - {{ item.sale }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios'
import { TimelineMax } from 'gsap'
import { useStore } from '../stores/index'

const currency = ref([])

onMounted(() => {
  axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(data => {
      currency.value = data.data

      nextTick(() => {
        const tl = new TimelineMax()
        tl.staggerFrom('.currency-list li', 0.5, {
          y: 100,
          opacity: 0
        }, 0.2)
      })
    })
})

const counterStore = useStore()
</script>

<style scoped>
li {
  margin: 10px 0;
}
</style>