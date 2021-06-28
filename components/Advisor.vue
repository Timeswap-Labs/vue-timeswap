<template>
  <section :class="$style.advisorPage">
    <div :class="$style.advisorRow">
      <!-- <div :class="$style.content">
        <h2 :class="$style.mainTitle">Media Coverage</h2>
        <div :class="$style.advisorList">
          <div
            v-for="(advisor, index) in advisors"
            :key="index"
            :class="[$style.advisor_wrap, 'animateMe']"
          >
            <div
              :class="$style.advisorSingle"
              :style="{
                backgroundImage: `url(${getImgUrl(
                  advisor.image
                )}), linear-gradient(to right, #a0d2eb 15%, #7b78ff 78%)`,
              }"
            >
              <div :class="$style.imgCaption">
                <h4 :class="$style.name">{{ advisor.name }}</h4>
                <p :class="$style.designation">{{ advisor.designation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div :class="[$style.advisorForm, 'animateMe zoomIn']">
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
      advisors: [
        {
          image: 'Sandeep',
          name: 'Sandeep Nailwal',
          designation: 'Advisor',
        },
        {
          image: 'JD',
          name: 'Jaynti Kanani',
          designation: 'Advisor',
        },
      ],
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
          link: 'https://discord.gg/VwZS8BVs',
          name: 'Discord',
        },
      ],
    }
  },

  methods: {
    getImgUrl(advisor) {
      return require(`../assets/images/${advisor}.jpg`)
    },
    getIconUrl(image) {
      return require(`../assets/images/${image}.svg`)
    },
  },
}
</script>

<style lang="scss" module>
.advisorPage {
  position: relative;
  width: 100%;
  padding: 100px 50px;
  padding-right: 0;
  display: flex;
  align-items: center;
  flex: 0 0 600px !important;
  max-width: 600px !important;

  @include media-breakpoint-down(lg) {
    flex: 0 0 600px !important;
    max-width: 600px !important;
    padding-left: 100px;
  }

  @include media-breakpoint-down(md) {
    flex: 0 0 600px !important;
    max-width: 600px !important;
    padding: 80px 50px;
    padding-right: 0;
  }

  @include media-breakpoint-down(sm) {
    max-width: 100% !important;
    flex: 0 0 100% !important;
    padding: 40px 0 0;
  }

  @include media-breakpoint-down(xs) {
    padding: 40px 0 0;
  }

  .advisorRow {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    @include media-breakpoint-down(sm) {
      flex-wrap: wrap;
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

      .advisorList {
        width: 100%;
        margin: 0 -15px;
        display: flex;
        flex-wrap: wrap;
        display: none;

        @include media-breakpoint-down(md) {
          margin: 0 -10px;
          width: auto;
        }

        .advisor_wrap {
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

          .advisorSingle {
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

    .advisorForm {
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
  }
}
</style>
