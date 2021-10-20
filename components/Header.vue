<template>
  <header :class="$style.header">
    <a href="/" :class="$style.logo">
      <img src="@/assets/images/timeswap-logo.svg" alt />
    </a>
    <div :class="$style.info">
      <a
        :class="$style.text"
        href="https://timeswap.gitbook.io/timeswap/"
        target="_blank"
      >
        Gitbook
      </a>
      <a :class="$style.text" href="/whitepaper.pdf" target="_blank">
        Whitepaper
      </a>
      <button
        type="button"
        class="btn"
        data-toggle="tooltip"
        data-placement="top"
        data-html="true"
        title="COMING SOON!"
      >
        App
      </button>
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
    // display: none;
    align-items: center;
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
}
</style>
