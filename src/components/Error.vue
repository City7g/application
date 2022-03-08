<template>
  <div class="error">
    <span class="error__text">!</span>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.error {
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
    animation: error 5s infinite;
    content: "";

    @media (max-width: 767px) {
      width: 30px;
      height: 30px;
    }
  }
}

@keyframes error {
  0%, 15% {
    border-radius: 0;
  }
  25% {
    border-radius: 25%;
  }
  35%, 50%, 65% {
    border-radius: 0;
  }
  75% {
    border-radius: 25%;
  }
  85%, 100% {
    border-radius: 0;
  }
}
</style>
