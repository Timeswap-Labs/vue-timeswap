<template>
  <section :class="$style.secondPage">
    <div :class="$style.content">
      <h5 :class="$style.mainTitle">
        Timeswap is the first fully permissionless, oracle-less,
        non-liquiditable, fixed maturity lending/borrowing protocol.
      </h5>
      <p :class="$style.paragraph">
        Timeswap aims to revolutionize money markets via its unique 3 variable
        constant product AMM
      </p>
    </div>
    <div :class="$style.imgBlock" />
  </section>
</template>

<style lang="scss" module>
.secondPage {
  position: relative;
  width: 100%;
  max-width: 1000px !important;
  flex: 0 0 1000px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url('@/assets/images/glass-bg.png') no-repeat center right;
  background-size: contain;

  @include media-breakpoint-down(md) {
    max-width: 900px !important;
    flex: 0 0 900px !important;
  }

  @include media-breakpoint-down(sm) {
    max-width: 100% !important;
    flex: 0 0 100% !important;
    padding: 60px 24px 0;
    flex-wrap: wrap;
    justify-content: center;
    background-size: cover;
  }

  .content {
    width: 100%;
    max-width: 480px;
    padding: 100px 0;

    @include media-breakpoint-down(md) {
      padding: 80px 0;
      max-width: 50%;
    }

    @include media-breakpoint-down(sm) {
      padding: 0;
      max-width: 100%;
    }

    @include media-breakpoint-down(xs) {
      margin-bottom: 20px;
    }

    .mainTitle {
      line-height: 1.5;
      color: $white;
      font-weight: 400;
      margin-bottom: 21px;
    }

    .paragraph {
      line-height: 1.5;
      color: $white;
      padding: 10px 15px;
      position: relative;
      color: #a0d2eb;

      &:after {
        content: '';
        width: 90%;
        height: 100%;
        background: linear-gradient(89.83deg, #2f3e51 0.15%, #0e132500 99.85%);
        left: 0;
        top: 0;
        position: absolute;
        z-index: -1;
      }

      &:before {
        content: '';
        width: 5px;
        height: 100%;
        background: #a0d2eb;
        left: 0;
        top: 0;
        position: absolute;
      }
    }
  }

  .imgBlock {
    max-width: 396px;
    width: 100%;
    height: 600px;
    background: url('@/assets/images/second-pg.png') no-repeat;
    background-position: right bottom;
    background-size: contain;
    align-self: flex-end;

    @include media-breakpoint-down(md) {
      max-width: 285px;
    }

    @include media-breakpoint-down(sm) {
      max-width: 250px;
      height: 420px;
    }
  }
}
</style>
