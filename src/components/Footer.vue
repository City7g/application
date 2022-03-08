<template>
  <footer class="footer">
    <div class="container">
      <router-link to="/" class="footer-logo">
        <span class="footer-logo__text">L</span>
      </router-link>

      <nav class="footer-nav">
        <router-link
          v-for="link in links"
          :key="link.name"
          :to="{ name: link.path }"
          class="footer-nav__item"
        >{{ link.name }}</router-link>
      </nav>

      <BaseButton text="Login" path="login" class="footer-btn main-btn" />
      <BaseButton text="Register" path="register" class="footer-btn secondary-btn" />
    </div>
  </footer>
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
  },
  {
    name: 'Football',
    path: 'football'
  }
]

const footerShadow = () => {
  if (window.pageYOffset > 10) {
    document.querySelector('.footer').classList.add('footer--scrolled')
  } else {
    document.querySelector('.footer').classList.remove('footer--scrolled')
  }
}

onMounted(() => { window.addEventListener('scroll', footerShadow) })
onUnmounted(() => { window.removeEventListener('scroll', footerShadow) })
</script>

<style lang="scss">
.footer {
  position: sticky;
  top: 100%;
  z-index: 10;

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
    flex-shrink: 0;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    // background: $black;
    // clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

    // transition: 0.3s all ease;

    @media (max-width: 767px) {
      width: 40px;
      height: 40px;
    }

    &:focus-visible {
      outline: 2px solid $black;
      outline-offset: 5px;
    }

    &__text {
      position: relative;
      z-index: 2;

      color: $white;
    }

    &:hover {
      text-decoration: none;
      // clip-path: polygon(60% 0%, 100% 60%, 40% 100%, 0% 40%);
      // clip-path: polygon(100% 50%, 50% 100%, 0% 50%, 50% 0%);
    }

    &::before {
      position: absolute;
      display: block;
      width: 80%;
      height: 80%;

      background: $black;
      transform: rotate(-45deg);
      transition: 0.3s all ease;

      content: "";
    }

    &:focus-visible::before,
    &:hover::before {
      transform: rotate(45deg);
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

  // Delete
  @media (max-width: 400px) {
    & .footer-btn:last-child {
      display: none;
    }
  }
}
</style>
