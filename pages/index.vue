<template>
  <div>
    <Header />
    <main id="page" :class="$style.main_page">
      <FirstPage />
      <SecondPage />
      <OurProduct />
      <KeyFeature />
      <TimeToken />
      <OurTeam />
      <Advisor />
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module>

.main_page{
  display: flex;
  width: 655vw;
}

</style>
