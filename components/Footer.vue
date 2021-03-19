<template>
  <footer :class="$style.footer">
      <div :class="$style.introduction" id="pageTitle">
        Introduction
      </div>
      <div :class="$style.progressContainer">
        <div :class="$style.progressBar" id="myBar"></div>
      </div>
      <div
        :class="$style.socialWrap"
      >
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
            />
          </svg>
        </div>
        <div :class="$style.socialIcons"> 
          <a
            v-for="(socialIcon, index) in socialIcons"
            :key="index"
            :class="$style.icons"
            :href="socialIcon.link"
          >         
            <img :src="getImgUrl(socialIcon.image)" :alt="socialIcon.image" />
          </a>
        </div>
      </div>
      <div :class="$style.mobileTerms">
        <p :class="$style.copyrightTxt">Copyright © 2020 Timeswap.</p>
        <ul :class="$style.privacyMenu">
          <li
            v-for="(copyright, index) in copyrights"
            :key= "index"
            :class="$style.privacyMenuLink"
          >
            <a :href="copyright.link">
              {{ copyright.name }}
            </a>
          </li>
        </ul>
        <a :class="$style.sitemap" link="#">Sitemap</a>
      </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialIcons: [
        {
          image: 'ftr-fb',
          link: '#',
        },
        {
          image: 'ftr-telegram',
          link: '#',
        },
        {
          image: 'ftr-github',
          link: '#',
        },
        {
          image: 'ftr-four-icon',
          link: '#',
        },
        {
          image: 'ftr-five-icon',
          link: '#',
        },
      ],
      copyrights: [
        {
          link: "#",
          name: "Cookies"
        },
        {
          link: "#",
          name: "Privacy Policy"
        },
      ]
    }
  },

  methods: {
    getImgUrl(icon) {
      return require(`@/assets/images/icons/${icon}.svg`)
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
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @include media-breakpoint-down(lg) {
    left: 100px;
  }

  @include media-breakpoint-down(md) {
    left: 50px;
  }

  @include media-breakpoint-down(sm) {
    padding: 24px;
    padding-bottom: 47px;
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
    
    .progressWrap {
      height: 44px;
      width: 44px;
      display: block;
      border-radius: 50px;
      background: linear-gradient(180deg, rgba(123, 120, 255, 0.35) 0%, #9DCEEC 50.26%, rgba(123, 120, 255, 0.35) 98.47%);;
      z-index: 9;
      -webkit-transition: all 200ms linear;
      transition: all 200ms linear;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &:after{
        content: "";
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #0f1426;
        z-index: 0;
      }

      @include media-breakpoint-down(sm) {
        display: none;
      }

      svg{
        width: 32px;
        height: 32px;
        position: relative;
        z-index: 1;

        &.progressCircle {
          path {
            stroke: var(--grey);
            box-sizing: border-box;
            -webkit-transition: all 200ms linear;
            transition: all 200ms linear;
          }
        }
      } 

      svg{
        path {
          fill: none;
        }
      }   
    }

    .socialIcons{
      display: flex;
      align-items: center;
      margin-left: 22px;

      @include media-breakpoint-down(sm) {
        margin-left: 0;
        margin-bottom: 24px;
      }

      .icons{
        margin-right: 16px;
      }

    }
  }

  .mobileTerms {
    display: none;

    @include media-breakpoint-down(sm) {
      display: block;
    }

    .copyrightTxt{
      margin: 0;      
      font-size: 12px;
      color: $white;
      opacity: 0.8;
      line-height: 17px;
      margin-bottom: 19px;
    }

    .privacyMenu{
      margin: 0;
      padding: 0;
      display: flex;
      margin-bottom: 19px;

      .privacyMenuLink{
        position: relative;
        list-style: none;
        color: $white;
        padding-left: 15px;
        margin-left: 10px;

        &:before{
          content: "";
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
        
        &:first-child{
          padding-left: 0;
          margin-left: 0;
          &:before{
            display: none;
          }
        }

        a{
          font-size: 12px;
          color: $white;
          opacity: 0.8;
          line-height: 17px;
          display: block;
        }
      }
    }

    .sitemap{
      font-size: 12px;
      color: $white;
      opacity: 0.8;
      line-height: 17px;
      display: block;
    }
  }
}

</style>
