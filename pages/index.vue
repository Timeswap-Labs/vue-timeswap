<template>
  <div>
    <Header />

    <Hyperbola />

    <main ref="page" :class="$style.main">
      <FirstPage :class="$style.section" />
      <SecondPage :class="$style.section" />
      <OurProduct :class="$style.section" />
      <KeyFeature :class="$style.section" />
      <TimeToken :class="$style.section" />
      <OurTeam :class="$style.section" />
      <Advisor :class="$style.section" />
    </main>
  </div>
</template>

<script>
import FirstPage from '@/components/FirstPage.vue'
import SecondPage from '@/components/SecondPage.vue'
import OurProduct from '@/components/OurProduct.vue'
import KeyFeature from '@/components/KeyFeature.vue'
import TimeToken from '@/components/TimeToken.vue'
import OurTeam from '@/components/OurTeam.vue'
import Advisor from '@/components/Advisor.vue'

export default {
  components: {
    FirstPage,
    SecondPage,
    OurProduct,
    KeyFeature,
    TimeToken,
    OurTeam,
    Advisor,
  },

  mounted() {
    this.setHorizontalScroll()
  },

  methods: {
    setHorizontalScroll() {
      const page = this.$refs.page
      let lastSection = page.querySelectorAll('section')
      lastSection = lastSection[lastSection.length - 1]
      let dummyX = null

      function gecoKa() {
        const e = page.scrollWidth - window.innerWidth + window.innerHeight
        document.body.style.height = e + 'px'
        dummyX = lastSection.getBoundingClientRect().left + window.scrollY

        const html = document.getElementsByTagName('html')[0]
        const wchange = window.pageYOffset / 250
        if ('ontouchstart' in document.documentElement) {
          if (wchange < 1) {
            html.style.setProperty('--scalesm', 1 - wchange)
          } else {
            html.style.setProperty('--scalesm', 0)
          }
        } else if (wchange < 1) {
          html.style.setProperty('--scales', 1 - wchange)
        } else {
          html.style.setProperty('--scales', 0)
        }

        window.requestAnimationFrame(gecoKa)
      }
      window.requestAnimationFrame(gecoKa)

      function reszajz() {
        if ('ontouchstart' in document.documentElement === false) {
          page.classList.add('smooth')
        }

        const t = document.body
        const e = document.querySelector('.smooth')
        let o = 0
        let n = 0
        let s = o
        let i = n
        function a(t, e, o) {
          return (1 - o) * t + o * e
        }

        t.style.height = e.style.width + 'px'
        e.style.position = 'fixed'
        e.style.top = 0
        e.style.left = 0

        window.addEventListener(
          'scroll',
          function () {
            o = window.pageYOffset
            n = window.pageXOffset
          },
          { passive: true, capture: false }
        )

        window.requestAnimationFrame(function t() {
          if (navigator.userAgent.toLowerCase().includes('firefox')) {
            s = a(s, o, 0.3)
          } else {
            s = a(s, o, 0.07)
            i = a(i, n, 0.07)
            s = Math.floor(100 * s) / 100
            i = Math.floor(100 * i) / 100
          }
          if (navigator.userAgent.toLowerCase().includes('firefox')) {
            e.style.transform = `translate3d(-${s}px, 0px, 0.01px)`
          } else {
            e.style.transform = `translate3d(-${s}px, -${i}px, 0px)`
          }
          window.requestAnimationFrame(t)
        })
      }

      reszajz()
    },
  },
}
</script>

<style lang="scss" module>
.main {
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  will-change: transform;
  border: none;
  margin: none;

  .section {
    transition: background-color 1s;

    @include media-breakpoint-up(md) {
      flex: 0 0 100vw;
      height: 100vh;
      min-height: 100vh;
      width: 100vw;
      max-width: 100%;
    }

    @include media-breakpoint-down(sm) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
