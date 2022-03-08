<template>
  <template v-if="loading">
    <Preloader />
  </template>

  <main v-else>
    <Header />
    <router-view></router-view>
    <!-- <Footer /> -->
  </main>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Preloader from './components/Preloader.vue'

export default {
  components: {
    Header,
    Footer,
    Preloader
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 200);
  }
}
</script>