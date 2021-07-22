<template>
  <section :class="$style.teamPage">
    <div :class="$style.content">
      <div :class="$style.teamList">
        <div :class="$style.teamHeading">
          <h2 :class="$style.mainTitle">Our Team</h2>
          <p :class="$style.mainDescription">
            Our mission is to build the most capital efficient, secure &
            permissionless money market protocol on web 3.0. Come join the
            Timeswap team and help shape the future of DeFi
          </p>
        </div>
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
              <div :class="$style.nameWrap">
                <h4 :class="$style.name">{{ team.name }}</h4>
                <h4 :class="$style.name">{{ team.lname }}</h4>
              </div>
              <p :class="$style.designation">{{ team.designation }}</p>
            </div>
            <div :class="$style.teamDetails">
              <div :class="$style.info">
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
      <div :class="$style.advisorList">
        <h2 :class="$style.mainTitle">Advisors</h2>
        <div :class="$style.teamWrapList">
          <a
            v-for="(advisor, index) in advisors"
            :key="index"
            :class="$style.teamWrap"
            :href="advisor.link"
            target="_blank"
          >
            <div
              :class="$style.teamSingle"
              :style="{
                backgroundImage: `url(${getImgUrl(advisor.image)})`,
              }"
            >
              <div :class="$style.imgCaption">
                <div :class="$style.nameWrap">
                  <h4 :class="$style.name">{{ advisor.name }}</h4>
                  <h4 :class="$style.name">{{ advisor.lname }}</h4>
                </div>
                <p :class="$style.designation">{{ advisor.designation }}</p>
              </div>
            </div>
          </a>
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
          name: 'Ricsson',
          lname: 'Ngo',
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
          name: 'Harshita',
          lname: 'Singh',
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
          name: 'Ameeth',
          lname: 'Devadas',
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
          name: 'Dalsukh',
          lname: 'Tapaniya',
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
          name: 'Anupama',
          lname: 'Singh',
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
          name: 'Keyur',
          lname: 'Shah',
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
          name: 'Shruthi',
          lname: 'G',
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
          name: 'Aditya',
          lname: 'Gupta',
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
          name: 'Emmanuel',
          lname: 'Antony',
          designation: 'Smart Contract Developer',
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
          name: 'Varun',
          lname: 'Krishna',
          designation: 'Smart Contract Developer',
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
          name: 'Satyarth',
          lname: 'Kumar',
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
          image: 'manvinder',
          name: 'Manvinder',
          lname: 'Arora',
          designation: 'Intern - Community Manager',
          description: 'Reader I Writer I Thinker',
          socials: [
            {
              link: 'https://twitter.com/Manvinder02',
              image: 'twitter',
            },
            {
              link: 'https://www.linkedin.com/in/manvinder-arora-2520/',
              image: 'linkedin',
            },
          ],
        },
        {
          image: 'sounak',
          name: 'Sounak',
          lname: 'Roy',
          designation: 'Intern - Community Manager',
          description: 'Working at the intersection of law and technology.',
          socials: [
            {
              link: 'https://twitter.com/AncapSansad',
              image: 'twitter',
            },
          ],
        },
        {
          image: 'paarug',
          name: 'Paarug',
          lname: 'Sethi',
          designation: 'Intern - Community Manager',
          description: 'A curiosity-driven multitasker',
          socials: [
            {
              link: 'https://mobile.twitter.com/paarugsethi',
              image: 'twitter',
            },
            {
              link: 'https://www.linkedin.com/in/paarugsethi',
              image: 'linkedin',
            },
          ],
        },
      ],
      advisors: [
        {
          image: 'sandeep',
          name: 'Sandeep',
          lname: 'Nailwal',
          designation: 'Co-founder, Polygon',
          link: 'https://twitter.com/sandeepnailwal',
        },
        {
          image: 'jaynti',
          name: 'Jaynti',
          lname: 'Kanani',
          designation: 'Co-founder, Polygon',
          link: 'https://twitter.com/_jdkanani',
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
  flex: 0 0 2500px !important;
  max-width: 2500px !important;
  padding-left: 100px;

  @include media-breakpoint-down(lg) {
    padding-left: 100px;
  }

  @include media-breakpoint-down(md) {
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
    display: flex;
    align-items: flex-start;

    @include media-breakpoint-down(sm) {
      flex-wrap: wrap;
    }

    .teamList {
      display: grid;
      grid-template-columns: repeat(6, 250px);
      justify-content: start;
      grid-gap: 24px;
      margin-right: 250px;
      grid-auto-flow: column;
      grid-template-rows: repeat(3, 140px);

      @include media-breakpoint-down(sm) {
        width: calc(100% + 16px);
        display: flex;
        flex-wrap: wrap;
        margin: 0 -8px;
        grid-gap: 0px;
        margin-bottom: 50px;
        justify-content: center;
      }

      .teamHeading {
        grid-column-start: 1;
        grid-column-end: 4;

        @include media-breakpoint-down(sm) {
          width: 100%;
          padding: 0 8px;
          text-align: center;
        }

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
          margin-bottom: 0;
          max-width: 900px;

          @include media-breakpoint-down(lg) {
            margin-bottom: 30px;
          }

          @include media-breakpoint-down(xs) {
            max-width: 100%;
          }
        }
      }

      .teamWrap {
        max-width: 250px;
        width: 100%;

        @include media-breakpoint-down(sm) {
          margin-bottom: 20px;
          padding: 0 8px;
          max-width: 266px;
        }

        // Founder Cards
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          grid-row-start: 2;
          grid-row-end: 4;

          .teamSingle {
            height: 304px !important;
            max-width: auto !important;
            align-items: flex-end !important;

            &.teamContent {
              font-size: 16px !important;
            }
          }
        }

        .teamSingle {
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          height: 140px;
          background-size: cover;
          width: 250px;
          background-position: center;

          .imgCaption {
            width: 100%;
            padding: 16px 25px;
            max-width: 70%;

            @include media-breakpoint-down(sm) {
              padding: 15px;
            }

            .nameWrap {
              margin-bottom: 10px;

              @include media-breakpoint-down(xs) {
                margin-bottom: 1px;
              }

              .name {
                font-size: 16px;
                font-family: $hk_bold;
                line-height: 1.3;
                color: $white;
                padding-right: 14px;
                margin-bottom: 0;

                @include media-breakpoint-down(xs) {
                  font-size: 14px;
                  margin-bottom: 1px;
                }
              }
            }

            .designation {
              font-size: 14px;
              line-height: 1.5;
              color: $white;
              opacity: 0.6;
              margin-bottom: 0;

              @include media-breakpoint-down(xs) {
                font-size: 13px;
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
            padding: 20px;
            background: $corn-flower;
            opacity: 0;
            pointer-events: none;
            transition: all 0.5s;
            transform: translateY(30px);
            border-radius: 10px;

            @include media-breakpoint-down(sm) {
              padding: 14px;
            }

            .info {
              .teamContent {
                font-size: 12px;
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

    .advisorList {
      max-width: 314px;
      width: 100%;

      @include media-breakpoint-down(sm) {
        width: 100%;
        max-width: 100%;
        margin-bottom: 50px;
      }

      .mainTitle {
        font-family: $hk_bold;
        line-height: 1.2;
        color: $white;
        margin-bottom: 50px;

        @include media-breakpoint-down(sm) {
          text-align: center;
        }
      }

      .teamWrapList {
        @include media-breakpoint-down(sm) {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -8px;
          justify-content: center;
        }

        .teamWrap {
          max-width: 314px;
          width: 100%;
          margin-bottom: 20px;
          display: inline-block;

          @include media-breakpoint-down(sm) {
            margin-bottom: 20px;
            max-width: 266px;
            padding: 0 8px;
          }

          .teamSingle {
            border-radius: 10px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            height: 175px;
            background-size: cover;
            width: 100%;
            background-position: center;

            @include media-breakpoint-down(sm) {
              height: 140px;
            }

            .imgCaption {
              width: 100%;
              padding: 16px 25px;
              max-width: 70%;

              @include media-breakpoint-down(sm) {
                padding: 15px;
              }

              .nameWrap {
                margin-bottom: 10px;

                @include media-breakpoint-down(xs) {
                  margin-bottom: 1px;
                }

                .name {
                  font-size: 16px;
                  font-family: $hk_bold;
                  line-height: 1.3;
                  color: $white;
                  padding-right: 14px;
                  margin-bottom: 0;

                  @include media-breakpoint-down(md) {
                    font-size: 15px;
                  }

                  @include media-breakpoint-down(xs) {
                    font-size: 13px;
                  }
                }
              }
              .designation {
                font-size: 14px;
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
              padding: 20px;
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

                  @include media-breakpoint-down(sm) {
                    font-size: 13px;
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

                  @include media-breakpoint-down(sm) {
                    font-size: 12px;
                    margin-bottom: 8px;
                  }
                }

                .teamContent {
                  font-size: 12px;
                  color: $gray-900;
                  margin: 0;

                  @include media-breakpoint-down(sm) {
                    font-size: 13px;
                    line-height: 1.4;
                  }
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
}
</style>
