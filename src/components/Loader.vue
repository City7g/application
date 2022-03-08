<template>
  <div class="loader">
    <span class="loader__text">L</span>
  </div>
</template>

<script>
</script>

<style lang="scss">
.loader {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;

  background-color: $white;
  transition: 0.3s background-color ease;

  &__text {
    position: relative;
    z-index: 2;

    font-size: 16px;
    line-height: 21px;
    color: $white;

    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 18px;
    }
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);

    display: block;

    width: 30px;
    height: 30px;

    background: $black;
    animation: loader 2s infinite;
    content: "";

    @media (max-width: 767px) {
      width: 30px;
      height: 30px;
    }
  }
}

@keyframes loader {
  0% {
    transform: translate(-50%, -50%) rotate(-45deg);
    border-radius: 0;
  }
  25% {
    transform: translate(-50%, -50%) rotate(45deg);
    border-radius: 25%;
  }
  50% {
    transform: translate(-50%, -50%) rotate(135deg);
    border-radius: 0;
  }
  75% {
    transform: translate(-50%, -50%) rotate(225deg);
    border-radius: 25%;
  }
  100% {
    transform: translate(-50%, -50%) rotate(45deg);
    border-radius: 0;
  }
}
</style>
