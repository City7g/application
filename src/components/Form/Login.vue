<template>
  <form @submit.prevent="submit" class="main-form" novalidate>
    <input type="email" name="email" v-model="email.value" placeholder="E-mail" :class="{error: email.error}" @focus="email.error = false" />
    <input type="password" name="password" v-model="password.value" placeholder="Password" :class="{error: password.error}" @focus="password.error = false" />
    <button class="main-btn">Login</button>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: {
        value: null,
        error: false
      },
      password: {
        value: null,
        error: false
      },

      error: null
    }
  },
  methods: {
    submit() {
      if(!this.email.value) {
        this.email.error = true
        return
      }
      if(!this.password.value) {
        this.password.error = true
        return
      }
      if (this.email.value === 'City7gor@gmail.com' && this.password.value === '2010dimaD') {
        this.$router.push({ name: 'home' })
      } else {
        this.error = 'Email or password is wrong'
      }
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
