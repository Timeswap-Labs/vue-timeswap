<template>
  <header id="header" :class="$style.header">
    <a href="/" :class="$style.logo">
      <img src="@/assets/images/timeswap-logo.svg" alt />
    </a>
    <div :class="$style.info">
      <a
        :class="[$style.text, $style.documentation]"
        href="https://timeswap.gitbook.io/timeswap-v2-money-market/timeswap-v2/introduction"
        target="_blank"
      >
        Docs
      </a>
      <a :class="$style.text" href="/whitepaper.pdf" target="_blank">
        Whitepaper
      </a>
      <span :class="[$style.careers, $style.documentation]">
        <a
          :class="[$style.text, $style.link]"
          href="/TS-careers.pdf"
          target="_blank"
        >
          Careers
        </a>
        <!-- <span :class="$style.hiring">We're hiring</span> -->
      </span>
      <a
        :class="$style.appBtn"
        class="btn"
        href="https://app.timeswap.io"
        target="_blank"
      >
        Launch App
      </a>
      <a
        :class="$style.appBtnMobile"
        class="btn"
        href="https://app.timeswap.io"
        target="_blank"
      >
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
    display: flex;
    align-items: center;

    .appBtn {
      @include media-breakpoint-only(xs) {
        display: none;
      }

      &:hover {
        color: #fff;
      }
    }

    .appBtnMobile {
      display: none;

      @include media-breakpoint-only(xs) {
        display: block;
      }
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

  .careers {
    margin-right: 24px;

    .link {
      margin-right: 5px;
    }

    .hiring {
      background: rgba(82, 204, 184, 0.12);
      padding: 5px 10px;
      color: rgba(82, 204, 184, 1);
      font-size: 10px;
      line-height: 20px;
      border-radius: 28px;
    }
  }
}
</style>
