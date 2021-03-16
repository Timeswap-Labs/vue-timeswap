<template>
  <section :class="$style.secondPage">
    <div :class="$style.content">
      <h5 :class="$style.mainTitle">
        Timeswap is a self-sufficient, fully decentralized, non-custodial, fixed
        maturity lending/borrowing protocol that works without the need of price
        feeds, oracles & liquidators.
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url('@/assets/images/glass-bg.png') no-repeat center right;
  background-size: 671px;

  .content {
    width: 100%;
    max-width: 480px;
    padding: 100px 0;

    .mainTitle {
      font-size: $h5-font-size;
      line-height: 1.5;
      color: $white;
      font-weight: 400;
      margin-bottom: 16px;
    }

    .paragraph {
      line-height: 1.5;
      opacity: 0.6;
      color: $white;
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
  }
}
</style>
