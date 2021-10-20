<template>
  <section :class="$style.mediaPage">
    <div :class="$style.mediaRow">
      <div :class="$style.mediaContent">
        <h2 :class="$style.mainTitle">Media Coverage</h2>
        <div :class="$style.mediaList">
          <a
            v-for="(media, index) in mediaCoverage"
            :key="index"
            :class="$style.mediaSingle"
            :href="media.link"
            target="_blank"
          >
            <img :src="getIconUrl(media.image)" :alt="media.image" />
          </a>
        </div>
      </div>
      <div :class="$style.securityContent">
        <h2 :class="$style.mainTitle">Security</h2>
        <div :class="$style.securityBlockWrap">
          <div :class="$style.securityBlock">
            <h4 :class="$style.securityTitle">
              Timeswap contracts have been audited by
            </h4>
            <div :class="$style.btnGrp">
              <div :class="$style.btn">
                <img src="@/assets/images/peckshield.svg" alt />
              </div>
              <div :class="$style.btn">
                <img src="@/assets/images/quantstamp.svg" alt />
              </div>
              <div :class="$style.btn">
                <img src="@/assets/images/trailofbits.svg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="[$style.mediaForm, 'animateMe zoomIn']">
        <div :class="$style.formInfo">
          <div :class="$style.logo">
            <img src="@/assets/images/timeswap-slogo.svg" alt />
          </div>
          <h4 :class="$style.formTitle">
            World’s first fully decentralized AMM based money market protocol
          </h4>
        </div>
        <!-- <div :class="$style.form">
          <h4 :class="$style.formTitle">Get early updates</h4>
          <p :class="$style.formContent">
            Subscribe to our newsletter for updates and to get testnet invite.
          </p>
          <form>
            <div :class="$style.input_field">
              <input
                id="email"
                type="email"
                :class="$style.form_control"
                placeholder="Email address"
              />
            </div>
          </form>
        </div> -->
        <div :class="$style.form">
          <h4 :class="$style.formTitle">Join us to get all updates</h4>
          <div :class="$style.socialWrap">
            <a
              v-for="(socialIcon, index) in socialIcons"
              :key="index"
              :class="$style.icons"
              :href="socialIcon.link"
              target="_blank"
            >
              <img
                :src="getIconUrl(socialIcon.image)"
                :alt="socialIcon.image"
              />
              {{ socialIcon.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      socialIcons: [
        {
          image: 'twitterr',
          link: 'https://twitter.com/TimeswapLabs',
          name: 'Twitter',
        },
        {
          image: 'telegramr',
          link: 'https://t.me/timeswap',
          name: 'Telegram',
        },
        {
          image: 'discordr',
          link: 'https://discord.gg/YTUtTJfc6S',
          name: 'Discord',
        },
      ],

      mediaCoverage: [
        {
          image: 'media',
          link: '#',
        },
        {
          image: 'media',
          link: '#',
        },
        {
          image: 'media',
          link: '#',
        },
        {
          image: 'media',
          link: '#',
        },
        {
          image: 'media',
          link: '#',
        },
        {
          image: 'media',
          link: '#',
        },
      ],
    }
  },

  methods: {
    getImgUrl(media) {
      return require(`../assets/images/${media}.jpg`)
    },
    getIconUrl(image) {
      return require(`../assets/images/${image}.svg`)
    },
  },
}
</script>

<style lang="scss" module>
.mediaPage {
  position: relative;
  width: 100%;
  padding: 100px 150px;
  padding-right: 0;
  display: flex;
  align-items: center;
  flex: 0 0 1550px !important;
  max-width: 1550px !important;

  @include media-breakpoint-down(sm) {
    max-width: 100% !important;
    flex: 0 0 100% !important;
    padding: 40px 0px 0;
  }

  @include media-breakpoint-down(xs) {
    padding: 40px 0 0;
  }

  .mediaRow {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @include media-breakpoint-down(sm) {
      flex-wrap: wrap;
    }

    .mediaContent {
      max-width: 700px;
      width: 100%;
      margin-right: 165px;
      display: none;

      @include media-breakpoint-down(sm) {
        margin: 0;
        padding: 0 24px;
      }

      .mainTitle {
        font-family: $hk_bold;
        line-height: 1.2;
        color: $white;
        margin-bottom: 90px;

        @include media-breakpoint-down(md) {
          margin-bottom: 40px;
        }
      }

      .mediaList {
        display: flex;
        flex-wrap: wrap;
        @include media-breakpoint-down(sm) {
          margin: 0 -8px;
        }

        .mediaSingle {
          max-width: 160px;
          width: 100%;
          margin-right: 69px;
          margin-bottom: 66px;

          @include media-breakpoint-down(sm) {
            margin: 0;
            padding: 0 15px;
            margin-bottom: 20px;
          }

          img {
            max-width: 100%;
            display: block;
          }
        }
      }
    }

    .content {
      width: 100%;

      @include media-breakpoint-down(sm) {
        padding: 0 24px;
      }

      .mainTitle {
        font-family: $hk_bold;
        line-height: 1.2;
        color: $white;
        margin-bottom: 90px;

        @include media-breakpoint-down(md) {
          margin-bottom: 40px;
        }
      }

      .mediaList {
        width: 100%;
        margin: 0 -15px;
        display: flex;
        flex-wrap: wrap;
        display: none;

        @include media-breakpoint-down(md) {
          margin: 0 -10px;
          width: auto;
        }

        .media_wrap {
          padding: 0 15px;
          max-width: 245px;
          width: 100%;

          @include media-breakpoint-down(md) {
            padding: 0 10px;
          }

          @include media-breakpoint-down(sm) {
            margin-bottom: 30px;
          }

          @include media-breakpoint-down(xs) {
            margin-bottom: 20px;
            max-width: 50%;
          }

          .mediaSingle {
            border-radius: 10px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: flex-end;
            height: 288px;
            background-blend-mode: luminosity;
            background-size: cover;
            width: 100%;
            background-position: center;

            @include media-breakpoint-down(md) {
              height: 270px;
            }

            @include media-breakpoint-down(sm) {
              margin-bottom: 20px;
            }

            @include media-breakpoint-down(xs) {
              height: 207px;
            }

            .imgCaption {
              width: 100%;
              padding: 16px;

              @include media-breakpoint-down(md) {
                padding: 13px;
              }

              .name {
                font-size: 16px;
                font-family: $hk_bold;
                line-height: 1.2;
                color: $white;
                margin-bottom: 8px;

                @include media-breakpoint-down(md) {
                  font-size: 15px;
                  margin-bottom: 6px;
                }

                @include media-breakpoint-down(xs) {
                  font-size: 13px;
                  margin-bottom: 1px;
                }
              }

              .designation {
                font-size: 16px;
                line-height: 1.5;
                color: $white;
                opacity: 0.6;
                margin-bottom: 0;

                @include media-breakpoint-down(md) {
                  font-size: 15px;
                }

                @include media-breakpoint-down(sm) {
                  font-size: 12px;
                }
              }
            }
          }

          &:nth-child(2n) {
            top: 72px;
            position: relative;

            @include media-breakpoint-down(md) {
              top: 50px;
            }

            @include media-breakpoint-down(sm) {
              top: 0px;
            }
          }
        }
      }
    }

    .mediaForm {
      max-width: 410px;
      width: 100%;

      @include media-breakpoint-down(md) {
        max-width: 350px;
      }

      @include media-breakpoint-down(sm) {
        max-width: 100%;
      }

      .formInfo {
        padding: 32px 54px;
        background: $dark-blue;

        @include media-breakpoint-down(md) {
          padding: 20px 35px;
        }

        .logo {
          max-width: 35px;
          width: 100%;
          margin-bottom: 16px;
        }

        .formTitle {
          background: linear-gradient(to right, #a0d2eb 0%, #7b78ff 70%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: $hk_bold;
          line-height: 1.2;
          padding-right: 20px;
        }
      }

      .form {
        background: $corn-flower;
        padding: 57px 54px;

        @include media-breakpoint-down(md) {
          padding: 40px 35px;
        }

        @include media-breakpoint-down(sm) {
          padding: 35px 24px;
        }

        .formTitle {
          font-size: 20px;
          font-family: $hk_bold;
          line-height: 1.2;
          color: $gray-900;
          margin-bottom: 19px;

          @include media-breakpoint-down(md) {
            font-size: 15px;
          }
        }

        .socialWrap {
          display: flex;
          flex-direction: column;

          .icons {
            display: flex;
            font-size: 12px;
            line-height: 16px;
            color: #0f1426;
            margin-bottom: 10px;
            align-items: center;
            font-weight: 700;

            img {
              margin-right: 8px;
            }
          }
        }

        .formContent {
          font-size: 14px;
          line-height: 1.5;
          color: $gray-900;
        }

        .input_field {
          .form_control {
            color: $black;
            background: rgba(14, 19, 37, 0.1);
            border-color: rgba(14, 19, 37, 0.1);
            padding: 10px;
            border-radius: 4px;
            font-size: 16px;
            line-height: 1.5;
            color: $gray-900;
            width: 100%;
            display: block;
            outline: none;
            transition: box-shadow 0.15s ease-in-out;
            border: 0;
            &:focus {
              box-shadow: 0 0 0 2px #007bff40;
            }
          }
        }
      }
    }

    .securityContent {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 882px;
      margin-right: 105px;

      @include media-breakpoint-down(sm) {
        padding: 0 20px;
        margin: 0;
      }

      .mainTitle {
        font-family: $hk_bold;
        line-height: 1.2;
        color: $white;
        margin-bottom: 0;
        justify-self: flex-start;

        @include media-breakpoint-down(sm) {
          margin-bottom: 20px;
        }
      }

      .securityBlockWrap {
        flex: 1;
        display: flex;
        align-items: center;

        @include media-breakpoint-down(sm) {
          margin-bottom: 40px;
        }

        .securityBlock {
          max-width: 882px;
          width: 100%;
          background: #191d3a;
          border-radius: 8px;
          padding: 40px;
          position: relative;

          @include media-breakpoint-down(sm) {
            padding: 20px;
          }

          &:after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 171px;
            height: 100%;
            background: url('@/assets/images/security.svg');
            background-size: cover;
            z-index: 0;

            @include media-breakpoint-down(sm) {
              width: 120px;
            }

            @include media-breakpoint-down(xs) {
              width: 71px;
            }
          }

          .securityTitle {
            font-size: 16px;
            line-height: 24px;
            color: $white;
            margin-bottom: 18px;
            font-weight: 400;
            position: relative;
            z-index: 1;

            @include media-breakpoint-down(xs) {
              font-size: 12px;
            }
          }

          .btnGrp {
            display: flex;
            position: relative;
            z-index: 1;

            @include media-breakpoint-down(xs) {
              flex-wrap: wrap;
            }

            .btn {
              display: flex;
              align-items: center;
              justify-self: center;
              margin-right: 30px;

              @include media-breakpoint-down(sm) {
                max-width: 200px;
                margin-right: 15px;
              }

              @include media-breakpoint-down(xs) {
                margin-bottom: 17px;
              }

              img {
                display: block;
                max-width: 100%;

                @include media-breakpoint-down(xs) {
                  max-width: 175px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>