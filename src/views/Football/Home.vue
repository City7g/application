<template>
  <section>
    <h1>Football</h1>

    <ul v-if="matches.length">
      <li v-for="match in nowMatches" :key="match.fixture.id">
      {{match.fixture.timestamp}}
        <div>
          <img :src="match.teams.home.logo" alt />
          <h4>{{ match.teams.home.name }}</h4>
        </div>
        {{ match.goals.home }} - {{ match.goals.away }}
        <div>
          <h4>{{ match.teams.away.name }}</h4>
          <img :src="match.teams.away.logo" alt />
        </div>
      </li>
    </ul>

    <MainLoader v-else-if="loading && !error" />
    <MainError v-else />
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      matches: [],

      data: null,
      loading: true,
      error: false,
    }
  },
  computed: {
    primaryMatches(match) {
      return true
    },
    nowMatches() {
      const nowData = Date.now()
      return this.matches.filter(c => {
        if(c.fixture.timestamp > (nowData / 1000)) {
          return true
        } else {
          return false
        }
      })
    }
  },
  mounted() {
    axios.get('https://v3.football.api-sports.io/fixtures?season=2021&league=39', {
      headers: {
        "x-rapidapi-key": "5d435b56cee70358ba2b810a0106a1d0"
      }
    }).then(data => {
      this.matches = data.data.response
      this.loading = false
    }).catch(err => {
      this.error = true
    })
  }
}
</script>

<style lang="scss">
li {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & img {
    width: 20px;
  }

  &.primary {
    background-color: $black;
  }

  & div {
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
}
</style>