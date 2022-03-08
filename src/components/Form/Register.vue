<template>
  <form @submit.prevent class="main-form" novalidate>
    <input type="text" name="name" v-model="name" placeholder="Name" />
    <input type="email" name="email" v-model="email" placeholder="E-mail" />
    <input type="password" name="password" v-model="password" placeholder="Password" />
    <button class="main-btn">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: null,
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

  max-width: 400px;
  margin: 0 auto;

  background-color: $white;
  transition: 0.3s background-color ease;

  & p {
    margin-top: 5px;
    
    color: $error;
  }
}
</style>