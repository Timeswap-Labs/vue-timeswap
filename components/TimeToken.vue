<template>
  <section :class="$style.featurePage">
    <div :class="$style.content">
      <h2 :class="$style.mainTitle">Time Token</h2>
      <div :class="$style.tokenImage">
        <img :class="['animateMe']" src="@/assets/images/five-pg.svg" alt />
        <img
          :class="[$style.mobile, 'animateMe']"
          src="@/assets/images/five-pg-mobile.svg"
          alt
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
.featurePage {
  position: relative;
  padding: 100px 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(25, 29, 58, 0.7);
  max-width: 1200px !important;
  flex: 0 0 1200px !important;

  @include media-breakpoint-down(lg) {
    padding-left: 100px;
    max-width: 1000px !important;
    flex: 0 0 1000px !important;
  }

  @include media-breakpoint-down(md) {
    flex: 0 0 800px !important;
    max-width: 800px !important;
    padding: 80px 50px;
  }

  @include media-breakpoint-down(sm) {
    max-width: 100% !important;
    flex: 0 0 100% !important;
    padding: 60px 24px;
  }

  @include media-breakpoint-down(xs) {
    padding: 40px 24px;
  }

  .content {
    width: 100%;
    max-width: 860px;

    .mainTitle {
      font-family: $hk_bold;
      line-height: 1.5;
      color: $white;
      margin-bottom: 0;

      @include media-breakpoint-down(xs) {
        margin-bottom: 30px;
      }
    }

    .tokenImage {
      width: 100%;
      display: block;

      img {
        width: 100%;
        height: auto;

        @include media-breakpoint-down(sm) {
          display: none;
        }
      }

      .mobile {
        display: none;

        @include media-breakpoint-down(sm) {
          display: block;
          max-width: 300px;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
