<template>
  <div class="preloader">
    <span class="preloader__text">L</span>
  </div>
</template>

<script>
</script>

<style lang="scss">
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $white;

  &__text {
    position: relative;
    z-index: 2;

    font-size: 30px;
    line-height: 36px;
    color: $white;

    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);

    display: block;

    width: 80px;
    height: 80px;

    background: $black;
    animation: loader 3s infinite;
    content: "";

    @media (max-width: 767px) {
      width: 60px;
      height: 60px;
    }
  }
}

// @keyframes loader {
//   0% {
//     transform: translate(-50%, -50%) rotate(-45deg);
//   }
//   25% {
//     transform: translate(-50%, -50%) rotate(45deg);
//   }
//   50% {
//     transform: translate(-50%, -50%) rotate(135deg);
//   }
//   75% {
//     transform: translate(-50%, -50%) rotate(225deg);
//   }
//   100% {
//     transform: translate(-50%, -50%) rotate(45deg);
//   }
// }
</style>
