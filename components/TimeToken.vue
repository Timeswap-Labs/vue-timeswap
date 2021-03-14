<template>
  <section :class="$style.feature_page">
    <div :class="$style.content">
      <h2 :class="$style.main_title">
        Time Token
      </h2>
      <div :class="$style.token_image">
        <img
          src="@/assets/images/five-pg.svg"
          alt
        />
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

.feature_page {
  height: 100vh;
  min-height: 500px;
  position: relative;
  padding: 100px 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(25, 29, 58, 0.7);
  .content{
    width: 100%;
    max-width: 860px;
    .main_title{
      font-size: $h2-font-size;
      font-family: $hk_bold;
      line-height: 1.5;
      color: $white;
      margin-bottom: 0;
    }
    .token_image{
      width: 100%;
      display: block;
      .mobile{
        display: none;
      }
    } 
  }
}

</style>