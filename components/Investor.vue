<template>
  <section :class="$style.investorPage">
    <div :class="$style.investorRow">
      <div :class="$style.investorContent">
        <h2 :class="$style.mainTitle">Investors</h2>
        <div :class="$style.investorList">
          <a
            v-for="(investor, index) in investors"
            :key="index"
            :class="$style.investorSingle"
            :href="investor.link"
            target="_blank"
          >
            <img :src="getIconUrl(investor.image)" :alt="investor.image" />
          </a>
        </div>
      </div>
      <div :class="$style.investorPContent">
        <div :class="$style.investorPList">
          <a
            v-for="(investorPerson, index) in investorPersons"
            :key="index"
            :class="$style.investorPSingle"
            :href="investorPerson.link"
            target="_blank"
          >
            <img
              :src="getImgUrl(investorPerson.person)"
              :alt="investorPerson.person"
            />
            <div :class="$style.investorPContent">
              <h4 :class="$style.name">{{ investorPerson.name }}</h4>
              <p :class="$style.designation">
                {{ investorPerson.designation }}
              </p>
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
      investors: [
        {
          image: 'multicoin',
          link: 'https://multicoin.capital/',
        },
        {
          image: 'capital',
          link: 'https://www.mechanism.capital/',
        },
        {
          image: 'definance',
          link: 'https://www.defiance.capital/',
        },
        {
          image: 'symbolic',
          link: 'https://www.symbolic.capital/',
        },
        {
          image: 'ldcap',
          link: 'https://ldcap.com/',
        },
        {
          image: 'sharding',
          link: 'https://www.sharding.capital/',
        },
        {
          image: 'lolcapital',
          link: 'https://www.lolcapital.io/',
        },
      ],
      investorPersons: [
        {
          person: 'balaji',
          link: 'https://twitter.com/balajis',
          name: 'Balaji Srinivasan',
          designation: 'ex CTO - Coinbase, ex - a16z',
        },
        {
          person: 'surojit',
          link: 'https://twitter.com/surojit',
          name: 'Surojit Chatterjee',
          designation: 'CPO, Coinbase',
        },
        {
          person: 'mihailo',
          link: 'https://twitter.com/MihailoBjelic',
          name: 'Mihailo Bjelic',
          designation: 'Co-founder, Polygon',
        },
        {
          person: 'ryan',
          link: 'https://twitter.com/RyanSAdams',
          name: 'Ryan Sean Adams',
          designation: 'Bankless / Mythos Capital',
        },
        {
          person: 'alex',
          link: 'https://twitter.com/ASvanevik',
          name: 'Alex Svanevik',
          designation: 'CEO & Co-founder, Nansen',
        },
        {
          person: 'john',
          link: 'https://twitter.com/JohnLilic',
          name: 'John Lilic',
          designation: 'Ex Consensys / Advisor - Polygon',
        },
        {
          person: 'larry',
          link: 'https://twitter.com/lawmaster',
          name: 'Larry Cermak',
          designation: 'CEO - The Block',
        },
        {
          person: 'mika',
          link: 'https://twitter.com/mhonkasalo',
          name: 'Mika Honkasalo',
          designation: 'DeFi Research, The Block',
        },
        {
          person: 'kenzi',
          link: 'https://twitter.com/macrokenzi',
          name: 'Kenzi Wang',
          designation: 'Symbolic Capital / Beacon',
        },
        {
          person: 'calvin',
          link: 'https://twitter.com/cjliu49',
          name: 'Calvin Liu',
          designation: 'Eigen Layer / ex Compound',
        },
        {
          person: 'george',
          link: 'https://twitter.com/gpl_94',
          name: 'George Lambeth',
          designation: 'DAO5',
        },
        {
          person: 'vaibhav',
          link: 'https://twitter.com/vasa_develop',
          name: 'Vaibhav',
          designation: 'Co-Founder Opensea Pro / Gem',
        },
        {
          person: 'sina',
          link: 'https://twitter.com/sinahab',
          name: 'Sina Habibian',
          designation: 'Ethereum Foundation',
        },
        {
          person: 'tanmay',
          link: 'https://twitter.com/thetanmay',
          name: 'Tanmay Bhat',
          designation: 'Co-founder, Superteam DAO',
        },
        {
          person: 'akshay',
          link: 'https://twitter.com/akshaybd',
          name: 'Akshay BD',
          designation: 'Co-founder, Superteam DAO',
        },
        {
          person: 'ajit',
          link: 'https://twitter.com/chainyoda',
          name: 'Ajit Tripathi',
          designation: 'Head of Institutional Business, Aave',
        },
        {
          person: 'sanket',
          link: 'https://twitter.com/sourcex44',
          name: 'Sanket Shah',
          designation: 'Strategy Lead, Polygon',
        },
        {
          person: 'sachin',
          link: 'https://twitter.com/schin_tomar',
          name: 'Sachin Tomar',
          designation: 'Founder & CTO, Biconomy',
        },
        {
          person: 'shreyansh_27',
          link: 'https://twitter.com/shreyansh_27',
          name: 'Shreyansh Singh',
          designation: 'Polygon Ventures',
        },
        {
          person: 'aniket_jindal08',
          link: 'https://twitter.com/aniket_jindal08',
          name: 'Aniket Jindal',
          designation: 'Co Founder Biconomy',
        },
        {
          person: 'ryanfang95',
          link: 'https://twitter.com/ryanfang95',
          name: 'Ryan Fang',
          designation: 'Founder Ankr',
        },
        {
          person: 'TakayamaJoe',
          link: 'https://twitter.com/TakayamaJoe',
          name: 'Joe Takayama',
          designation: 'ex Morgan Stanley / Youtuber',
        },
        {
          person: 'logo-wihout-text',
          link: 'https://twitter.com/ryanfang95',
          name: 'Todd Zhou',
          designation: 'ex Sequoia China',
        },
        {
          person: 'midcurve',
          link: 'https://twitter.com/midcurve',
          name: 'Midcurve',
          designation: '',
        },
        {
          person: 'dingalingts',
          link: 'https://twitter.com/dingalingts',
          name: 'Dinagling',
          designation: 'Angel / ex Binance Labs',
        },
        {
          person: 'CryptoGorillaYT',
          link: 'https://twitter.com/CryptoGorillaYT',
          name: 'Crypto Gorilla',
          designation: 'Youtuber',
        },
        {
          person: 'crypturco',
          link: 'https://twitter.com/crypturco',
          name: '3nes',
          designation: '',
        },
      ],
    }
  },

  methods: {
    getImgUrl(person) {
      return require(`../assets/images/${person}.png`)
    },
    getIconUrl(image) {
      return require(`../assets/images/${image}.png`)
    },
  },
}
</script>

<style lang="scss" module>
.investorPage {
  position: relative;
  width: 100%;
  padding: 100px 200px;
  padding-right: 0;
  display: flex;
  align-items: center;
  flex: 0 0 2600px !important;
  max-width: 2600px !important;
  background: rgba(25, 29, 58, 0.7);

  @include media-breakpoint-down(lg) {
    padding-left: 100px;
  }

  @include media-breakpoint-down(md) {
    padding: 80px 50px;
  }

  @include media-breakpoint-down(sm) {
    max-width: 100% !important;
    flex: 0 0 100% !important;
    padding: 40px 0 0;
  }

  @include media-breakpoint-down(xs) {
    padding: 40px 0 0;
  }

  .investorRow {
    display: flex;
    width: 100%;

    @include media-breakpoint-down(sm) {
      flex-wrap: wrap;
      text-align: center;
    }

    .investorContent {
      max-width: 370px;
      width: 100%;
      margin-right: 150px;

      @include media-breakpoint-down(sm) {
        max-width: 100%;
        margin-right: 0;
        padding: 0 24px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        margin-bottom: 60px;
      }

      .mainTitle {
        font-family: $hk_bold;
        line-height: 1.2;
        color: $white;
        margin-bottom: 60px;

        @include media-breakpoint-down(md) {
          margin-bottom: 40px;
        }

        @include media-breakpoint-down(sm) {
          margin-bottom: 60px;
        }
      }

      .investorList {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 40px;

        @include media-breakpoint-down(sm) {
          justify-content: center;
          align-items: center;
        }

        .investorSingle {
          width: 100%;
          margin-bottom: 55px;

          @include media-breakpoint-down(sm) {
            max-width: 250px;
          }

          img {
            max-width: 100%;
            display: block;
            max-height: 70px;
          }
        }
      }
    }

    .investorPContent {
      padding-top: 15px;

      @include media-breakpoint-down(sm) {
        padding-top: 0px;
        padding: 0 24px;
        margin-bottom: 30px;
      }

      .investorPList {
        display: flex;
        flex-wrap: wrap;

        @include media-breakpoint-down(sm) {
          justify-content: center;
          margin: 0 -8px;
        }

        .investorPSingle {
          max-width: 245px;
          width: 100%;
          margin-right: 32px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;

          @include media-breakpoint-down(sm) {
            max-width: 156px;
            margin: 0 8px;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin-bottom: 22px;
          }

          img {
            width: 60px;
            height: auto;
            position: relative;
            z-index: 1;
          }

          .investorPContent {
            padding: 14px 16px 14px 40px;
            background: #0e1325;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: -30px;
            min-height: 86px;
            width: 100%;

            @include media-breakpoint-down(sm) {
              padding: 46px 10px 12px;
              margin-left: 0;
              margin-top: -34px;
            }

            .name {
              font-size: 12px;
              line-height: 1.5;
              margin-bottom: 4px;
              color: $white;
              font-weight: 700;
              text-transform: uppercase;

              @include media-breakpoint-down(sm) {
                font-size: 10px;
              }
            }

            .designation {
              font-size: 12px;
              line-height: 1.5;
              margin-bottom: 0;
              color: rgba(255, 255, 255, 0.5);

              @include media-breakpoint-down(sm) {
                font-size: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
