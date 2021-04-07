<template>
  <section :class="$style.featurePage">
    <div :class="$style.content">
      <h2 :class="$style.mainTitle">Key Features</h2>
      <div :class="$style.featureList">
        <div
          v-for="(feature, index) in features"
          :key="index"
          :class="[$style.featureWrap, 'animateMe']"
        >
          <div :class="$style.featureSingle">
            <figure>
              <img :src="getImgUrl(feature.image)" :alt="feature.image" />
            </figure>
            <h6 :class="$style.featureTitle">
              {{ feature.title }}
            </h6>
            <p :class="$style.featureContent">
              {{ feature.description }}
            </p>
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
      features: [
        {
          image: 'key-icon-1',
          title: 'Flexible interest rate & collateral factors',
          description:
            'Users have the flexibility to decide their risk-return profile by selecting custom Interest rates and collateral factors based on prevailing market conditions for greater capital efficiency',
        },
        {
          image: 'key-icon-4',
          title: 'Oracle-less & Gas Efficient',
          description:
            'Timeswap is brutally gas efficienct and does not require oracles or liquidators',
        },
        {
          image: 'key-icon-6',
          title: 'ERC20 agnostic',
          description:
            'Anyone can create any ERC20 pool by providing necessary liquidity',
        },
      ],
    }
  },

  methods: {
    getImgUrl(feature) {
      return require(`../assets/images/icons/${feature}.svg`)
    },
  },
}
</script>

<style lang="scss" module>
.featurePage {
  position: relative;
  flex: 0 0 1300px !important;
  max-width: 1300px !important;
  width: 100%;
  padding: 100px 0;
  padding-left: 80px;
  display: flex;
  align-items: center;

  @include media-breakpoint-down(md) {
    flex: 0 0 1200px !important;
    max-width: 1200px !important;
    padding: 80px 0;
    padding-left: 50px;
  }

  @include media-breakpoint-down(sm) {
    max-width: 100% !important;
    flex: 0 0 100% !important;
    padding: 60px 24px 40px;
  }

  @include media-breakpoint-down(xs) {
    padding: 20px 24px 40px;
  }

  .content {
    width: 100%;

    .mainTitle {
      font-family: $hk_bold;
      line-height: 1.5;
      color: $white;
      margin-bottom: 50px;

      @include media-breakpoint-down(lg) {
        margin-bottom: 50px;
      }

      @include media-breakpoint-down(md) {
        margin-bottom: 30px;
      }
    }

    .featureList {
      width: 100%;
      margin: 0 -15px;
      display: flex;
      flex-wrap: wrap;

      .featureWrap {
        padding: 0 15px;
        max-width: 300px;

        @include media-breakpoint-down(sm) {
          max-width: 50%;
          margin-bottom: 20px;
        }

        @include media-breakpoint-down(xs) {
          padding: 0 10px;
          max-width: 100%;
        }

        .featureSingle {
          padding: 24px;
          border-radius: 15px;
          background: linear-gradient(
            90deg,
            rgba(123, 120, 255, 0.25) 0%,
            rgba(0, 0, 0, 0) 80%
          );
          height: 100%;

          @include media-breakpoint-down(lg) {
            padding: 20px;
          }

          figure {
            max-width: 50px;
            margin: 0;
            margin-bottom: 16px;

            img {
              display: block;
            }
          }

          .featureTitle {
            font-family: $hk_bold;
            line-height: 1.4;
            color: $white;
            margin-bottom: 10px;
          }

          .featureContent {
            font-size: 14px;
            color: $white;
            opacity: 0.6;
            margin: 0;
          }
        }

        &:nth-child(2n) {
          .featureSingle {
            background: linear-gradient(
              90deg,
              rgba(160, 210, 235, 0.24) 0%,
              rgba(0, 0, 0, 0) 80%
            );
          }
        }
      }
    }
  }
}
</style>
