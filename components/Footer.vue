<template>
  <footer :class="$style.footer">
    <div id="pageTitle" :class="$style.introduction">Introduction</div>
    <div :class="$style.progressContainer">
      <div id="myBar" :class="$style.progressBar"></div>
    </div>
    <div :class="$style.socialWrap">
      <div :class="[$style.progressWrap, 'progress-wrap']">
        <svg
          :class="$style.progressCircle"
          width="100%"
          height="100%"
          viewBox="-50 -50 200 200"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            stroke-width="100"
            style="
              stroke-dasharray: 307.919, 307.919;
              stroke-dashoffset: 307.919;
              stroke: rgb(160, 210, 235);
              transition: stroke-dashoffset 10ms linear 0s;
            "
          />
        </svg>
      </div>
      <div :class="$style.socialIcons">
        <a
          v-for="(socialIcon, index) in socialIcons"
          :key="index"
          :class="$style.icons"
          :href="socialIcon.link"
          target="_blank"
        >
          <img :src="getImgUrl(socialIcon.image)" :alt="socialIcon.image" />
        </a>
      </div>
    </div>
    <div :class="$style.copyRight">
      <ul :class="$style.privacyMenu">
        <li
          v-for="(copyright, index) in getDesktopLinks(externalLinks)"
          :key="index"
          :class="[$style.privacyMenuLink, $style[copyright.class]]"
        >
          <a :href="copyright.link" target="_blank">
            {{ copyright.name }}
          </a>
        </li>
      </ul>
      <p :class="$style.copyrightTxt">
        Copyright © {{ getCurrentYear() }} Timeswap.
      </p>
    </div>
    <div :class="$style.mobileTerms">
      <ul :class="$style.privacyMenu">
        <li
          v-for="(copyright, index) in externalLinks"
          :key="index"
          :class="$style.privacyMenuLink"
        >
          <a :href="copyright.link" target="_blank">
            {{ copyright.name }}
          </a>
        </li>
      </ul>
      <p :class="$style.copyrightTxt">
        Copyright © {{ getCurrentYear() }} Timeswap.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialIcons: [
        {
          image: 'ftr-twitter',
          link: 'https://twitter.com/TimeswapLabs',
        },
        {
          image: 'ftr-telegram',
          link: 'https://t.me/timeswap',
        },
        {
          image: 'ftr-four-icon',
          link: 'https://discord.GG/timeswap',
        },
        {
          image: 'ftr-five-icon',
          link: 'https://timeswap.medium.com/',
        },
        {
          image: 'ftr-github',
          link: 'https://github.com/Timeswap-Labs',
        },
        {
          image: 'ftr-youtube',
          link: 'https://www.youtube.com/channel/UCY8rACVXfPNP-P3M0cCvuEw',
        },
        {
          image: 'ftr-dune',
          link: 'https://dune.com/timeswap-labs/timeswap-v2-master-dashboard',
        },
        {
          image: 'ftr-defillama',
          link: 'https://defillama.com/protocol/timeswap-v2',
        },
      ],
      externalLinks: [
        {
          link: 'https://timeswap.gitbook.io/timeswap-v2-money-market/timeswap-v2/introduction',
          name: 'Docs',
          class: 'mobile-only',
        },
        // {
        //   link: 'https://angel.co/company/timeswap-labs/jobs/',
        //   name: 'Careers',
        //   class: 'mobile-only',
        // },
        {
          link: 'https://timeswaplabs.notion.site/Timeswap-Media-Kit-01ae2de623e04ea291e331a336b1b3ee',
          name: 'Brand Kit',
        },
        {
          link: '/terms',
          name: 'Terms of service',
        },
      ],
    }
  },

  methods: {
    getImgUrl(icon) {
      return require(`@/assets/images/icons/${icon}.svg`)
    },

    getCurrentYear() {
      return new Date().getFullYear()
    },

    getDesktopLinks(links) {
      return links.filter((linkObj) => !linkObj.class)
    },
  },
}
</script>

<style lang="scss" module>
.footer {
  @include media-breakpoint-up(md) {
    position: fixed;
    left: 160px;
    transition: all 0.6s ease;
    bottom: 0;
    z-index: 99;
    width: calc(100% - 160px);
    display: flex;
    flex-direction: column;
  }

  @include media-breakpoint-down(lg) {
    left: 100px;
    width: calc(100% - 100px);
  }

  @include media-breakpoint-down(md) {
    left: 50px;
    width: calc(100% - 50px);
  }

  @include media-breakpoint-down(sm) {
    padding: 24px;
    padding-bottom: 20px;
    width: 100%;
  }

  .introduction {
    font-size: 12px;
    color: #e7e9ee;
    line-height: 16px;
    display: inline-block;
    margin-bottom: 7px;

    @include media-breakpoint-down(sm) {
      display: none;
    }
  }

  .progressContainer {
    width: 100%;
    height: 1px;
    background: rgba(256, 256, 256, 0.1);
    margin-bottom: 17px;

    @include media-breakpoint-down(sm) {
      display: none;
    }

    .progressBar {
      height: 1px;
      width: 0%;
      background: #fff;
    }
  }

  .socialWrap {
    height: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 22px;

    @include media-breakpoint-down(sm) {
      margin-bottom: 0;
    }

    .progressWrap {
      height: 54px;
      width: 46px;
      display: block;
      border-radius: 50px;
      z-index: 9;
      -webkit-transition: all 200ms linear;
      transition: all 200ms linear;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        background: url('@/assets/images/Clock-new.svg');
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
      }

      @include media-breakpoint-down(sm) {
        display: none;
      }

      svg {
        width: 46px;
        height: 46px;
        position: relative;
        z-index: 1;
        top: 4.05px;
        left: 0.2px;

        &.progressCircle {
          path {
            stroke: var(--grey);
            box-sizing: border-box;
            -webkit-transition: all 200ms linear;
            transition: all 200ms linear;
          }
        }
      }

      svg {
        path {
          fill: none;
        }
      }
    }

    .socialIcons {
      display: flex;
      align-items: center;
      margin-left: 22px;

      @include media-breakpoint-down(md) {
        margin-left: 15px;
      }

      @include media-breakpoint-down(sm) {
        margin-left: 0;
        margin-bottom: 24px;
      }

      .icons {
        margin-right: 16px;
      }
    }
  }

  .mobileTerms {
    display: none;

    @include media-breakpoint-down(sm) {
      display: block;
    }

    .copyrightTxt {
      margin: 0;
      font-size: 12px;
      color: $white;
      opacity: 0.8;
      line-height: 17px;
      margin-bottom: 19px;
    }

    .privacyMenu {
      margin: 0;
      padding: 0;
      display: flex;
      margin-bottom: 19px;

      .privacyMenuLink {
        position: relative;
        list-style: none;
        color: $white;
        padding-left: 15px;
        margin-left: 10px;

        &:before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
          opacity: 0.8;
          left: 0;
          top: 7px;
          position: absolute;
          display: block;
        }

        &:first-child {
          padding-left: 0;
          margin-left: 0;
          &:before {
            display: none;
          }
        }

        a {
          font-size: 12px;
          color: $white;
          opacity: 0.8;
          line-height: 17px;
          display: block;
        }
      }
    }

    .sitemap {
      font-size: 12px;
      color: $white;
      opacity: 0.8;
      line-height: 17px;
      display: block;
    }
  }

  .copyRight {
    position: absolute;
    right: 45px;
    bottom: 42px;
    display: flex;
    align-items: center;

    @include media-breakpoint-down(md) {
      right: 40px;
    }

    @include media-breakpoint-down(sm) {
      display: none;
    }

    .copyrightTxt {
      margin: 0;
      font-size: 12px;
      color: $white;
      opacity: 0.8;
      line-height: 17px;
      padding-left: 15px;
      margin-left: 10px;
      position: relative;

      &:before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #fff;
        opacity: 0.8;
        left: 0;
        top: 7px;
        position: absolute;
        display: block;
      }
    }

    .privacyMenu {
      margin: 0;
      display: flex;
      padding-left: 27px;

      .privacyMenuLink {
        position: relative;
        list-style: none;
        color: $white;
        padding-left: 15px;
        margin-left: 10px;

        &:before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
          opacity: 0.8;
          left: 0;
          top: 7px;
          position: absolute;
          display: block;
        }

        &:first-child {
          padding-left: 0;
          margin-left: 0px;

          &:before {
            display: none;
          }
        }

        &.mobile-only {
          display: none;
        }

        a {
          font-size: 12px;
          color: $white;
          opacity: 0.8;
          line-height: 17px;
          display: block;
        }
      }
    }
  }
}
</style>
