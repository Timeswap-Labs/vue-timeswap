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

      <Investor :class="$style.section" />

      <Media :class="$style.section" />
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
import Investor from '@/components/Investor.vue'
import Media from '@/components/Media.vue'

export default {
  components: {
    FirstPage,
    SecondPage,
    OurProduct,
    KeyFeature,
    TimeToken,
    OurTeam,
    Investor,
    Media,
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
        document.getElementById('pageTitle').innerHTML = ''
        if (scrolled > 0 && scrolled < 24) {
          document.getElementById('pageTitle').innerHTML = 'Introduction'
        } else if (scrolled > 25 && scrolled < 37) {
          document.getElementById('pageTitle').innerHTML = 'Our Offerings'
        } else if (scrolled > 38 && scrolled < 48) {
          document.getElementById('pageTitle').innerHTML = 'Key Fetatures'
        } else if (scrolled > 49 && scrolled < 58) {
          document.getElementById('pageTitle').innerHTML = 'Time Token'
        } else if (scrolled > 59 && scrolled < 80) {
          document.getElementById('pageTitle').innerHTML = 'Our Team'
        } else if (scrolled > 81 && scrolled < 98) {
          document.getElementById('pageTitle').innerHTML = 'Investors'
        } else if (scrolled > 99 && scrolled < 120) {
          document.getElementById('pageTitle').innerHTML = 'Security'
        }
      }

      function circleProgressBar() {
        const progressPath = document.querySelector('.progress-wrap path')
        const pathLength = progressPath.getTotalLength()
        // progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength
        progressPath.style.strokeDashoffset = pathLength
        progressPath.getBoundingClientRect()
        progressPath.style.stroke = 'rgba(255,255,255,0.4)'
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
