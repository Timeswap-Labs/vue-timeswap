<template>
  <header id="header" :class="$style.header">
    <a href="/" :class="$style.logo">
      <img src="@/assets/images/timeswap-logo.svg" alt />
    </a>
    <div :class="$style.info">
      <a
        :class="[$style.text, $style.documentation]"
        href="https://timeswap.gitbook.io/timeswap/"
        target="_blank"
      >
        Gitbook
      </a>
      <a :class="$style.text" href="/whitepaper.pdf" target="_blank">
        Whitepaper
      </a>
      <a href="https://app.timeswap.io" class="btn app-btn" target="_blank">
        App
      </a>
    </div>
  </header>
</template>

<style lang="scss" module>
.header {
  position: relative;
  padding: 35px 160px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    align-items: center;
  }

  .app-btn {
    &:hover {
      color: #fff;
    }
  }

  .text {
    font-size: 14px;
    opacity: 0.8;
    color: $white;
    margin-right: 24px;
    letter-spacing: 0.6px;
    text-transform: capitalize;

    @include media-breakpoint-down(sm) {
      font-size: 12px;
      margin-right: 12px;
    }
  }

  .documentation {
    @include media-breakpoint-down(xs) {
      display: none;
    }
  }
}
</style>
