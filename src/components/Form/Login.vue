<template>
  <form @submit.prevent="submit" class="main-form" novalidate>
    <input type="email" name="email" v-model="email" placeholder="E-mail" />
    <input type="password" name="password" v-model="password" placeholder="Password" />
    <button class="main-btn">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    submit() {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style lang="scss">
.main-form {
  display: flex;
  flex-direction: column;

  background-color: #fff;
}
</style>
