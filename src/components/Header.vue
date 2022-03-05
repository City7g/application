<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="header-logo">L</router-link>

      <nav class="header-nav">
        <router-link
          v-for="link in links"
          :key="link.name"
          :to="{ name: link.path }"
          class="header-nav__item"
        >{{ link.name }}</router-link>
      </nav>

      <BaseButton text="Login" path="login" class="header-btn main-btn" />
      <BaseButton text="Register" path="register" class="header-btn secondary-btn" />
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const links = [
  {
    name: 'Home',
    path: 'home'
  },
  {
    name: 'About',
    path: 'about'
  }
]

const headerShadow = () => {
  if (window.pageYOffset > 10) {
    document.querySelector('.header').classList.add('header--scrolled')
  } else {
    document.querySelector('.header').classList.remove('header--scrolled')
  }
}

onMounted(() => { window.addEventListener('scroll', headerShadow) })
onUnmounted(() => { window.removeEventListener('scroll', headerShadow) })
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;

  background-color: $white;

  & > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 80px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  &--scrolled {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  &-logo {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    background: $black;
    color: $white;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

    transition: 0.3s all ease;

    &:hover {
      text-decoration: none;
      clip-path: polygon(60% 0%, 100% 60%, 40% 100%, 0% 40%);
      // clip-path: polygon(100% 50%, 50% 100%, 0% 50%, 50% 0%);
    }
  }

  &-nav {
    margin-left: auto;
    margin-right: 50px;

    @media (max-width: 767px) {
      margin-right: 20px;
    }

    &__item {
      margin-left: 10px;
    }
  }

  &-btn {
    margin-left: 10px;
  }
}
</style>
