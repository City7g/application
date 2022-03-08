<template>
  <section>
    <h1>Football</h1>

    <h2>{{$route.params.country}}</h2>

    <MainLoader v-if="loading" />
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: true,
      matches: []
    }
  },
  computed: {
    primaryMatches(match) {

    }
  },
  mounted() {
    // axios.get('https://v3.football.api-sports.io/fixtures?season=2021&league=39', {
    //   headers: {
    //     "x-rapidapi-key": "5d435b56cee70358ba2b810a0106a1d0"
    //   }
    // }).then(data => {
    //   this.matches = data.data.response
    //   console.log(data.data.response)
    // })
  }
}
</script>

<style lang="scss">
li {
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 20px;
  }

  &.primary {
    background-color: $black;
  }
}
</style>