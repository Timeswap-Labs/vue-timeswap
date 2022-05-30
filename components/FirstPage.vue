<template>
  <section :class="$style.firstPage">
    <div :class="$style.content">
      <h1 id="bigtitle" :class="$style.mainTitle">
        First fully decentralized AMM based money market protocol
      </h1>
      <div :class="$style.commingTxt">
        Powered by
        <img src="@/assets/images/polygon.svg" width="115px" alt />
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
.firstPage {
  padding: 100px 0;
  position: relative;
  padding-left: 160px;
  display: flex;
  align-items: center;
  position: relative;

  @include media-breakpoint-down(lg) {
    padding-left: 100px;
  }

  @include media-breakpoint-down(md) {
    padding: 80px 0;
    padding-left: 50px;
  }

  @include media-breakpoint-down(sm) {
    width: 100%;
    padding: 120px 24px 100px;
    height: 100vh;
    text-align: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: url('@/assets/images/first-bg.png');
    background-size: cover;
    background-position: left;

    @include media-breakpoint-down(md) {
      background-position: center;
    }

    @include media-breakpoint-down(sm) {
      display: none;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -20%;
    width: 50%;
    height: 100%;
    background: url('@/assets/images/hm-right-side.png') no-repeat;
    background-size: 100% 100%;

    @include media-breakpoint-down(lg) {
      right: -10%;
    }

    @include media-breakpoint-down(sm) {
      right: 0;
    }

    @include media-breakpoint-down(sm) {
      display: none;
    }
  }

  .rightArrow {
    position: absolute;
    background: url('@/assets/images/right-arrow.svg') no-repeat;
    width: 43px;
    height: 44px;
    right: 160px;
    top: 50%;
    transform: translateY(-50%);
    animation: bounce 3s infinite;

    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateX(0);
      }
      40% {
        transform: translateX(-20px);
      }
      60% {
        transform: translateX(-10px);
      }
    }

    @keyframes bounceY {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translate(-50%, 0) rotate(90deg);
      }
      40% {
        transform: translate(-50%, -20px) rotate(90deg);
      }
      60% {
        transform: translate(-50%, -10px) rotate(90deg);
      }
    }

    @include media-breakpoint-down(lg) {
      right: 100px;
    }

    @include media-breakpoint-down(md) {
      right: 50px;
    }

    @include media-breakpoint-down(sm) {
      right: initial;
      left: 50%;
      top: initial;
      bottom: 60px;
      animation: bounceY 3s infinite;
    }
  }

  .content {
    width: 100%;
    max-width: 750px;
    position: relative;
    z-index: 9;

    @include media-breakpoint-down(lg) {
      max-width: 60%;
    }

    @include media-breakpoint-down(md) {
      max-width: 80%;
    }

    @include media-breakpoint-down(sm) {
      max-width: 100%;
    }

    .subTitle {
      line-height: 1.5;
      color: $secondary;
    }

    .mainTitle {
      line-height: 1.2;
      color: $white;
      font-weight: 700;
      font-family: $hk_bold;
      margin-bottom: 20px;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s ease-out 0.4s;
    }

    .commingTxt {
      color: $white;
      display: flex;
      align-items: center;
      color: rgba(255, 255, 255, 0.5);

      @include media-breakpoint-down(sm) {
        justify-content: center;
      }

      img {
        margin-left: 5px;
        margin-top: 3px;
      }
    }
  }
}
</style>
