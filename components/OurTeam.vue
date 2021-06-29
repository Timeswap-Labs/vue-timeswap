<template>
  <section :class="$style.teamPage">
    <div :class="$style.content">
      <h2 :class="$style.mainTitle">Our Team</h2>
      <p :class="$style.mainDescription">
        Our mission is to build the most capital efficient, secure &
        permissionless money market protocol on web 3.0. Come join the Timeswap
        team and help shape the future of DeFi
      </p>
      <div :class="$style.teamList">
        <div
          v-for="(team, index) in teams"
          :key="index"
          :class="$style.teamWrap"
        >
          <div
            :class="$style.teamSingle"
            :style="{
              backgroundImage: `url(${getImgUrl(team.image)})`,
            }"
          >
            <div :class="$style.imgCaption">
              <h4 :class="$style.name">{{ team.name }}</h4>
              <p :class="$style.designation">{{ team.designation }}</p>
            </div>
            <div :class="$style.teamDetails">
              <div :class="$style.info">
                <h6 :class="$style.name">
                  {{ team.name }}
                </h6>
                <div :class="$style.designation">
                  {{ team.designation }}
                </div>
                <p :class="$style.teamContent">
                  {{ team.description }}
                </p>
              </div>
              <ul :class="$style.socialLinks">
                <li
                  v-for="(social, socialIndex) in team.socials"
                  :key="socialIndex"
                  class="list-inline-item"
                  v-if="social.link"
                >
                  <a :href="social.link" target="_blank">
                    <img :src="getIconUrl(social.image)" :alt="social.image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div :class="$style.teamWrap">
          <div :class="$style.join_us">Join us</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        {
          image: 'ricsson',
          name: 'Ricsson Ngo',
          designation: 'Founder',
          description:
            'Previously founder @Einstar. Master in Financial Mathematics from Ateneo de Manila University.',
          socials: [
            {
              link: 'https://twitter.com/Mathepreneur',
              image: 'twitter',
            },
            {
              link: 'https://www.linkedin.com/in/ricssontimeswap',
              image: 'linkedin',
            },
          ],
        },
        {
          image: 'harshita',
          name: 'Harshita Singh',
          designation: 'Co-Founder',
          description:
            'Previously Head of Supply Budgeting and Planning Private Labels @Walmart-India',
          socials: [
            {
              link: 'https://twitter.com/Harshita_125',
              image: 'twitter',
            },
            {
              link: 'https://www.linkedin.com/in/harshita-singh-a1561a79/',
              image: 'linkedin',
            },
          ],
        },
        {
          image: 'ameeth',
          name: 'Ameeth Devadas',
          designation: 'Co-Founder',
          description: 'Previously Head of Product & Technology @Aurigin',
          socials: [
            {
              link: 'https://twitter.com/0x42069',
              image: 'twitter',
            },
            {
              link: 'https://www.linkedin.com/in/ameeth-devadas-9717679',
              image: 'linkedin',
            },
          ],
        },
        {
          image: 'dalsukh',
          name: 'Dalsukh Tapaniya',
          designation: 'Design Lead',
          description:
            'Making, Breaking and Building Stuff. Contributor @0xEthdesign, Community @EthIndiaco',
          socials: [
            {
              link: 'https://twitter.com/djtapaniya',
              image: 'twitter',
            },
            {
              link: 'https://www.linkedin.com/in/dalsukhtapaniya/',
              image: 'linkedin',
            },
          ],
        },
        {
          image: 'anupama',
          name: 'Anupama Singh',
          designation: 'Operations Lead',
          description:
            'Previously worked as an Assistant Professor of Engineering',
          socials: [
            {
              link: 'https://twitter.com/Anupama77220271',
              image: 'twitter',
            },
            {
              link: 'https://www.linkedin.com/in/anupama-singh-855619a1/',
              image: 'linkedin',
            },
          ],
        },
        {
          image: 'keyur',
          name: 'Keyur Shah',
          designation: 'Finance & Legal',
          description: 'Previously VP-Finance & Treasury @Polygon',
          socials: [
            {
              link: 'https://twitter.com/keyur12392',
              image: 'twitter',
            },
            {
              link: '',
              image: 'linkedin',
            },
          ],
        },
        {
          image: 'shruthi',
          name: 'Shruthi G',
          designation: 'Content Lead',
          description: '',
          socials: [
            {
              link: '',
              image: 'twitter',
            },
            {
              link: '',
              image: 'linkedin',
            },
          ],
        },
        {
          image: 'aditya',
          name: 'Aditya Gupta',
          designation: 'Smart Contract Developer',
          description: 'Previously Founder @HopOn, Blockchain Lead @ MSRIT',
          socials: [
            {
              link: 'https://twitter.com/thesoberguy13',
              image: 'twitter',
            },
            {
              link: '',
              image: 'linkedin',
            },
          ],
        },
        {
          image: 'antony',
          name: 'Emmanuel Antony',
          designation: 'Engineering Intern',
          description: 'Rust Developer and FOSS Enthusiast',
          socials: [
            {
              link: 'https://twitter.com/EmmanuelAntony5',
              image: 'twitter',
            },
            {
              link: 'https://www.linkedin.com/in/emmanuel-antony/',
              image: 'linkedin',
            },
          ],
        },
        {
          image: 'varun',
          name: 'Varun Krishna',
          designation: 'Engineering Intern',
          description: '',
          socials: [
            {
              link: 'https://twitter.com/_vhawk19_',
              image: 'twitter',
            },
            {
              link: 'https://www.linkedin.com/in/vhawk19/',
              image: 'linkedin',
            },
          ],
        },
        {
          image: 'satyarth',
          name: 'Satyarth Kumar',
          designation: 'Engineering Intern',
          description: '',
          socials: [
            {
              link: 'https://twitter.com/ksatyarth2',
              image: 'twitter',
            },
            {
              link: 'https://www.linkedin.com/in/ksatyarth2/',
              image: 'linkedin',
            },
          ],
        },
        {
          image: 'jay',
          name: 'Jay Rank',
          designation: 'Engineering Intern',
          description: '',
          socials: [
            {
              link: 'https://twitter.com/RankJay1',
              image: 'twitter',
            },
            {
              link: 'https://www.linkedin.com/in/jay-rank-019909190/',
              image: 'linkedin',
            },
          ],
        },
      ],
    }
  },

  methods: {
    getImgUrl(team) {
      return require(`../assets/images/${team}.png`)
    },
    getIconUrl(image) {
      return require(`../assets/images/icons/${image}.svg`)
    },
  },
}
</script>

<style lang="scss" module>
.teamPage {
  position: relative;
  width: 100%;
  padding: 100px 160px;
  padding-right: 0;
  display: flex;
  align-items: center;
  flex: 0 0 3300px !important;
  max-width: 3300px !important;
  padding-left: 100px;

  @include media-breakpoint-down(lg) {
    flex: 0 0 3200px !important;
    max-width: 3200px !important;
    padding-left: 100px;
  }

  @include media-breakpoint-down(md) {
    flex: 0 0 3200px !important;
    max-width: 3200px !important;
    padding: 80px 50px;
  }

  @include media-breakpoint-down(sm) {
    max-width: 100% !important;
    flex: 0 0 100% !important;
    padding: 60px 24px 40px;
  }

  @include media-breakpoint-down(xs) {
    padding: 40px 24px 0;
  }

  .content {
    width: 100%;

    .mainTitle {
      font-family: $hk_bold;
      line-height: 1.2;
      color: $white;
      margin-bottom: 16px;
    }

    .mainDescription {
      font-size: 14px;
      color: $white;
      opacity: 0.6;
      line-height: 1.5;
      margin-bottom: 57px;
      max-width: 900px;

      @include media-breakpoint-down(lg) {
        margin-bottom: 30px;
      }

      @include media-breakpoint-down(xs) {
        max-width: 100%;
      }
    }

    .teamList {
      width: 100%;
      margin: 0 -15px;
      display: flex;
      flex-wrap: wrap;

      @include media-breakpoint-down(md) {
        margin: 0 -10px;
        width: auto;
      }

      .teamWrap {
        padding: 0 15px;
        max-width: 245px;
        width: 100%;

        @include media-breakpoint-down(md) {
          padding: 0 10px;
        }

        @include media-breakpoint-down(sm) {
          margin-bottom: 20px;
        }

        @include media-breakpoint-down(xs) {
          margin-bottom: 20px;
          max-width: 50%;
        }

        .teamSingle {
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          height: 290px;
          background-size: cover;
          width: 100%;
          background-position: center;

          @include media-breakpoint-down(md) {
            height: 270px;
          }

          @include media-breakpoint-down(xs) {
            height: 207px;
          }

          .imgCaption {
            width: 100%;
            padding: 16px;
            background: linear-gradient(
              180.53deg,
              rgba(0, 0, 0, 0) 0.45%,
              #000000 120.37%
            );

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

              @include media-breakpoint-down(xs) {
                font-size: 12px;
              }
            }
          }

          .teamDetails {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 22px;
            background: $corn-flower;
            opacity: 0;
            pointer-events: none;
            transition: all 0.5s;
            transform: translateY(30px);
            border-radius: 10px;

            @include media-breakpoint-down(md) {
              padding: 15px;
            }

            .info {
              .name {
                font-size: 16px;
                font-family: $hk_bold;
                line-height: 1.5;
                color: $gray-900;
                margin-bottom: 0;

                @include media-breakpoint-down(md) {
                  font-size: 15px;
                }
              }

              .designation {
                font-size: 16px;
                line-height: 1.5;
                color: $gray-900;
                margin-bottom: 16px;

                @include media-breakpoint-down(md) {
                  font-size: 15px;
                }
              }

              .teamContent {
                font-size: 14px;
                color: $gray-900;
                margin: 0;
              }
            }

            .socialLinks {
              display: flex;
              width: 100%;
              justify-content: flex-start;
              margin: 0;
              padding: 0;
              list-style: none;

              li {
                margin-right: 4px;
              }
            }
          }

          &:hover {
            .teamDetails {
              opacity: 1;
              pointer-events: auto;
              transform: translateY(0);
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

        .join_us {
          width: 100%;
          color: $white;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          background: $ldark-navy;
          border-radius: 10px;
          cursor: pointer;
          display: none;

          @include media-breakpoint-down(md) {
            height: 270px;
          }

          @include media-breakpoint-down(xs) {
            height: 207px;
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>
