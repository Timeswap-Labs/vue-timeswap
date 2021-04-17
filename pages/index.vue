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

    <Footer />
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
    if (!this.$device.isMobile) {
      this.setHorizontalScroll()
    }
    this.loadAnimation()
  },

  beforeMount() {
    this.pageLoadAnim()
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

      window.onwheel = (e) => {
        const directionHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY)

        if (directionHorizontal) {
          const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

          window.scrollTo(0, winScroll + e.deltaX)
        }
      }

      window.onscroll = function () {
        myScrollFunction()
        circleProgressBar()
      }
      function myScrollFunction() {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 100

        document.getElementById('myBar').style.width = scrolled + '%'
        if (scrolled > 0 && scrolled < 25) {
          document.getElementById('pageTitle').innerHTML = 'Introduction'
        } else if (scrolled > 26 && scrolled < 38) {
          document.getElementById('pageTitle').innerHTML = 'Our Product'
        } else if (scrolled > 42 && scrolled < 61) {
          document.getElementById('pageTitle').innerHTML = 'Key Fetatures'
        } else if (scrolled > 62 && scrolled < 77) {
          document.getElementById('pageTitle').innerHTML = 'Time Token'
        } else if (scrolled > 79 && scrolled < 93) {
          document.getElementById('pageTitle').innerHTML = 'Our Team'
        } else if (scrolled > 94 && scrolled < 110) {
          document.getElementById('pageTitle').innerHTML = 'Advisor'
        }
      }

      function circleProgressBar() {
        const progressPath = document.querySelector('.progress-wrap path')
        const pathLength = progressPath.getTotalLength()
        // progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength
        progressPath.style.strokeDashoffset = pathLength
        progressPath.getBoundingClientRect()
        progressPath.style.stroke = '#6A6D7E'
        progressPath.style.transition = progressPath.style.WebkitTransition =
          'stroke-dashoffset 10ms linear'
        const updateProgress = function () {
          const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
          const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight
          const progress = pathLength - (winScroll * pathLength) / height
          progressPath.style.strokeDashoffset = progress
        }
        updateProgress()
      }

      reszajz()
    },

    pageLoadAnim() {
      document.fonts.ready.then(function () {
        document.getElementById('bigtitle').style.opacity = 1
        document.getElementById('bigtitle').style.transform = 'translateY(0px)'
      })
    },

    loadAnimation() {
      if ('ontouchstart' in document.documentElement) {
      } else {
        const animBlock = document.querySelectorAll('.animateMe')

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
              entry.target.classList.add('addAnimation')
            } else {
              entry.target.classList.remove('addAnimation')
            }
          })
        })

        animBlock.forEach(
          (block) => {
            observer.observe(block)
          },
          { threshold: 0.5 }
        )
      }
    },
  },
}
</script>

<style lang="scss" module>
:global {
  html,
  body {
    overscroll-behavior: contain;
  }
}
.main {
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  will-change: transform;
  border: none;
  margin: none;

  @include media-breakpoint-down(sm) {
    display: block;
  }

  .section {
    transition: background-color 1s;

    @include media-breakpoint-up(md) {
      flex: 0 0 100vw;
      height: 100vh;
      min-height: 100vh;
      width: 100vw;
      max-width: 100%;
    }
  }
}
</style>
