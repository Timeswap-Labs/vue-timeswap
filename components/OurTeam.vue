<template>
  <section :class="$style.teamPage">
    <div :class="$style.content">
      <h2 :class="$style.mainTitle">Our Team</h2>
      <p :class="$style.mainDescription">
        Want to work with some of the best global talent and build a tool used
        by all the companies you know and love? Join the Timeswap team and help
        shape the future of Defi.
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
              backgroundImage: `url(${getImgUrl(
                team.image
              )}), linear-gradient(to right, #a0d2eb 15%, #7b78ff 78%)`,
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
          image: 'team-one',
          name: 'Ricsson Ngo',
          designation: 'Founder',
          description:
            'Previously founder @Einstar. Master in Financial Mathematics from Ateneo de Manila University.',
          socials: [
            {
              link: '#',
              image: 'twitter',
            },
            {
              link: '#',
              image: 'github',
            },
            {
              link: '#',
              image: 'fb',
            },
          ],
        },
        {
          image: 'team-two',
          name: 'Ameeth Devadas',
          designation: 'Co-Founder',
          description: 'Previously Head of Product & Technology @Aurigin',
          socials: [
            {
              link: '#',
              image: 'twitter',
            },
            {
              link: '#',
              image: 'github',
            },
            {
              link: '#',
              image: 'fb',
            },
          ],
        },
        {
          image: 'team-three',
          name: 'Harshita Singh',
          designation: 'Co-Founder',
          description:
            'Previously Head of Supply Budgeting and Plannning Private Labels @Walmart-India',
          socials: [
            {
              link: '#',
              image: 'twitter',
            },
            {
              link: '#',
              image: 'github',
            },
            {
              link: '#',
              image: 'fb',
            },
          ],
        },
      ],
    }
  },

  methods: {
    getImgUrl(team) {
      return require(`../assets/images/${team}.jpg`)
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
  max-width: 1100px !important;
  padding: 100px 160px;
  padding-right: 0;
  display: flex;
  align-items: center;

  .content {
    width: 100%;

    .mainTitle {
      font-size: $h2-font-size;
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
    }

    .teamList {
      width: 100%;
      margin: 0 -15px;
      display: flex;
      flex-wrap: wrap;

      .teamWrap {
        padding: 0 15px;
        max-width: 230px;
        width: 100%;

        .teamSingle {
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          height: 288px;
          background-blend-mode: luminosity;
          background-size: cover;
          width: 100%;

          .imgCaption {
            width: 100%;
            padding: 16px;

            .name {
              font-size: 16px;
              font-family: $hk_bold;
              line-height: 1.2;
              color: $white;
              margin-bottom: 8px;
            }

            .designation {
              font-size: 16px;
              line-height: 1.5;
              color: $white;
              opacity: 0.6;
              margin-bottom: 0;
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

            .info {
              .name {
                font-size: 16px;
                font-family: $hk_bold;
                line-height: 1.5;
                color: $gray-900;
                margin-bottom: 0;
              }

              .designation {
                font-size: 16px;
                line-height: 1.5;
                color: $gray-900;
                margin-bottom: 16px;
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
        }
      }
    }
  }
}
</style>
