<template>
  <section :class="$style.firstpage">
    <div :class="$style.content">
      <h5 :class="$style.subtitle">World's first</h5>
      <h1 :class="$style.maintitle">
        Fully decentralized AMM based money market protocol
      </h1>
      <div :class="$style.commingtxt">COMING SOON</div>
    </div>
  </section>
</template>

<style lang="scss" module>
.firstpage {
  height: 100vh;
  min-height: 500px;
  padding: 100px 0;
  position: relative;
  width: 100vw;
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
    background: url('@/assets/images/hm-left-side.png');
    background-size: cover;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: url('@/assets/images/hm-right-side.png');
    background-size: cover;
  }
  .content {
    width: 100%;
    max-width: 750px;
    position: relative;
    z-index: 9;
    .subtitle {
      font-size: $h5-font-size;
      line-height: 1.5;
      color: $secondary;
    }
    .maintitle {
      font-size: $h1-font-size;
      line-height: 1.2;
      color: $white;
      font-weight: 700;
      font-family: $hk_bold;
      margin-bottom: 20px;
    }
    .commingtxt {
      color: $white;
      opacity: 0.6;
    }
  }
}
</style>
