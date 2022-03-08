<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="header-logo">
        <span class="header-logo__text">L</span>
      </router-link>

      <nav class="header-nav" :class="{ 'open': isHamburgerOpen }">
        <div v-for="link in links" :key="link.name" class="header-nav__item">
          <router-link :to="{ name: link.path }" @click="hideMenu">{{ link.name }}</router-link>
          <div v-if="link.intro" class="header-nav__intro">
            <router-link
              v-for="sublink in link.intro"
              :key="sublink.name"
              :to="{ name: 'football-country', params: { country: sublink.path } }"
              @click="hideMenu"
            >{{ sublink.name }}</router-link>
          </div>
        </div>
      </nav>

      <BaseButton text="Login" path="login" class="header__login main-btn" />
      <BaseButton text="Register" path="register" class="header__register secondary-btn" @click="hideMenu" />
      <button class="header__theme main-btn" @click="changeTheme">Theme</button>

      <button class="header-hamburger" :class="{ 'open': isHamburgerOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const links = reactive([
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
    path: 'football',
    intro: [
      {
        name: 'England',
        path: 'england',
      },
      {
        name: 'Spain',
        path: 'spain',
      },
      {
        name: 'France',
        path: 'france',
      },
    ]
  }
])
// Open menu
const isHamburgerOpen = ref(false)
const toggleMenu = () => isHamburgerOpen.value = !isHamburgerOpen.value
const hideMenu = () => isHamburgerOpen.value = false
onMounted(() => window.addEventListener('click', e => {
  if (!document.querySelector('.header').contains(e.target)) {
    hideMenu()
  }
}))

// Change Theme
const changeTheme = () => {
  document.querySelector('html').classList.toggle('dark')
  localStorage.setItem('theme', document.querySelector('html').classList.contains('dark') ? 'dark' : 'light')
}

// Header Shadow
const headerShadow = () => {
  if (window.pageYOffset > 10) {
    document.querySelector('.header').classList.add('header--scrolled')
  } else {
    document.querySelector('.header').classList.remove('header--scrolled')
  }
}

onMounted(() => { window.addEventListener('scroll', headerShadow) })
onUnmounted(() => { window.removeEventListener('scroll', headerShadow) })

// Hide btn
const hideBtn = () => {
  if (window.innerWidth < 450) {
    document.querySelector('.header-nav').append(document.querySelector('.header__register'))
  } else {
    document.querySelector('.header-hamburger').before(document.querySelector('.header__register'))
  }
  if (window.innerWidth < 767) {
    document.querySelector('.header-nav').append(document.querySelector('.header__theme'))
  } else {
    document.querySelector('.header-hamburger').before(document.querySelector('.header__theme'))
  }
}

onMounted(() => {
  hideBtn()
  window.addEventListener('resize', hideBtn)
})
onUnmounted(() => { window.addEventListener('resize', hideBtn) })
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 10;

  background-color: $white;
  transition: 0.3s background-color ease;

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
}

.header-logo {
  flex-shrink: 0;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  margin-right: auto;

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
    border-radius: 25%;
    transform: rotate(45deg);
  }
}

.header-nav {
  display: flex;
  gap: 20px;

  margin-right: 50px;

  @media (max-width: 767px) {
    position: fixed;
    z-index: 12;
    top: 0;
    right: 0;
    bottom: 0;

    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 100%;
    max-width: 300px;
    padding: 20px;
    margin-right: 0;

    background-color: $white;
    transform: scaleX(0);
    transform-origin: center right;
    transition: 0.3s transform ease, 0.3s background-color ease;

    &.open {
      transform: scaleX(1);
    }
  }

  &__item {
    position: relative;
  }

  &__intro {
    display: none;
  }

  &__item:hover &__intro {
    position: absolute;
    top: 100%;
    left: 50%;
    z-index: 11;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;

    padding: 10px;
    border-radius: $radius;
    border: 1px solid $black;
    background-color: $white;
  }
}

.header__login,
.header__register,
.header__theme {
  margin-left: 10px;

  @media (max-width: 767px) {
    margin-left: 0;
    margin-right: 15px;
  }
}

.header-hamburger {
  position: relative;
  z-index: 13;
  display: none;

  width: 30px;
  height: 30px;

  @media (max-width: 767px) {
    display: block;
  }

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: block;
    width: 25px;
    height: 1px;

    transition: 0.3s all ease;
    background-color: $black;

    &:nth-child(1) {
      transform: translate(-50%, calc(-50% - 6px));
    }

    &:nth-child(3) {
      transform: translate(-50%, calc(-50% + 6px));
    }
  }

  &.open span {
    &:nth-child(1) {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
