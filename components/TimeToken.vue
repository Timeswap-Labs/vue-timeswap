<template>
  <section :class="$style.featurePage">
    <div :class="$style.content">
      <h2 :class="$style.mainTitle">Time Token</h2>
      <div :class="$style.tokenImage">
        <img src="@/assets/images/five-pg.svg" alt />
        <img
          :class="$style.mobile"
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

  .content {
    width: 100%;
    max-width: 860px;

    .mainTitle {
      font-size: $h2-font-size;
      font-family: $hk_bold;
      line-height: 1.5;
      color: $white;
      margin-bottom: 0;
    }

    .tokenImage {
      width: 100%;
      display: block;

      .mobile {
        display: none;
      }
    }
  }
}
</style>
