<template>
  <section :class="$style.firstPage">
    <div :class="$style.content">
      <h5 :class="$style.subTitle">World's first</h5>
      <h1 :class="$style.mainTitle">
        Fully decentralized AMM based money market protocol
      </h1>
      <div :class="$style.commingTxt">Coming soon</div>
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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: url('@/assets/images/first-left-bg.png');
    background-size: cover;
    background-position: left;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -40%;
    width: 50%;
    height: 100%;
    background: url('@/assets/images/hm-right-side.png') no-repeat;
    background-size: 100% 100%;
  }

  .content {
    width: 100%;
    max-width: 750px;
    position: relative;
    z-index: 9;

    .subTitle {
      font-size: $h5-font-size;
      line-height: 1.5;
      color: $secondary;
    }

    .mainTitle {
      font-size: $h1-font-size;
      line-height: 1.2;
      color: $white;
      font-weight: 700;
      font-family: $hk_bold;
      margin-bottom: 20px;
    }

    .commingTxt {
      color: $white;
      opacity: 0.6;
      text-transform: uppercase;
    }
  }
}
</style>
