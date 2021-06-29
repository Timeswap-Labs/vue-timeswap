<template>
  <header :class="$style.header">
    <a href="/" :class="$style.logo">
      <img src="@/assets/images/timeswap-logo.svg" alt />
    </a>
    <div :class="$style.info">
      <span :class="$style.text">whitepaper</span>
      <button type="button" class="btn">App</button>
    </div>
  </header>
</template>

<style lang="scss" module>
.header {
  position: relative;
  padding: 35px 160px 0;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;

  @include media-breakpoint-down(lg) {
    padding: 25px 100px 0;
  }

  @include media-breakpoint-down(md) {
    padding: 20px 50px 0;
  }

  @include media-breakpoint-down(sm) {
    padding: 20px 15px;
    background: #101527;
  }

  .logo {
    display: block;
    max-width: 157px;
    width: 100%;
    img {
      display: block;
    }

    @include media-breakpoint-down(xs) {
      max-width: 80px;
    }
  }

  .info {
    display: none;
    align-items: center;
  }

  .text {
    font-size: 14px;
    opacity: 0.6;
    color: $white;
    padding-right: 24px;
    text-transform: capitalize;

    @include media-breakpoint-down(sm) {
      font-size: 12px;
      padding-right: 12px;
    }
  }
}
</style>
