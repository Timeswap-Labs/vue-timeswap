<template>
  <section :class="$style.productPage">
    <div :class="$style.content">
      <h2 :class="$style.mainTitle">Our Products</h2>
      <div :class="[$style.productList, 'row']">
        <div
          v-for="(product, index) in products"
          :key="index"
          :class="[$style.productWrap, 'col-md-3']"
        >
          <div :class="$style.productSingle">
            <h4 :class="$style.productTitle">
              {{ product.title }}
            </h4>
            <p :class="$style.productContent">
              {{ product.description }}
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
      products: [
        {
          title: 'Fixed Maturing Lending & Borrowing',
          description:
            'Timeswap allows fixed maturing lending & borrowing of any ERC-20 token in non-custodial fully decentralized manner',
        },
        {
          title: 'Liquidity Pools',
          description:
            'Timeswap liquidity providers interact with our unique AMM to provide deep liquidity for our lenders & borrowers and earn transaction fees',
        },
        {
          title: 'Flexible Risk Profile',
          description:
            'Timeswap offers flexibility for lenders and borrowers to decide their risk profile through flexible interest rates & insurance cover',
        },
        {
          title: 'Bootstrap Liquidity',
          description:
            'Timeswap allows any ERC-20 projects to bootstrap liquidity by providing their native token as collateral to our liquidity pools',
        },
      ],
    }
  },
}
</script>

<style lang="scss" module>
.productPage {
  position: relative;
  width: 100%;
  flex: 0 0 1300px !important;
  max-width: 1300px !important;
  padding: 100px 0;
  padding-left: 160px;
  display: flex;
  align-items: center;

  @include media-breakpoint-down(lg) {
    flex: 0 0 1240px !important;
    max-width: 1240px !important;
    padding-left: 100px;
  }

  @include media-breakpoint-down(md) {
    flex: 0 0 1200px !important;
    max-width: 1200px !important;
    padding: 80px 0;
    padding-left: 50px;
  }

  @include media-breakpoint-down(sm) {
    max-width: 100% !important;
    flex: 0 0 100% !important;
    padding: 60px 24px 20px;
  }

  .content {
    width: 100%;

    .mainTitle {
      font-family: $hk_bold;
      line-height: 1.2;
      color: $white;
      margin-bottom: 50px;

      @include media-breakpoint-down(lg) {
        margin-bottom: 30px;
      }
    }

    .productList {
      max-width: 1030px;
      width: 100%;
      margin: 0 -15px;
      align-items: stretch;

      @include media-breakpoint-down(sm) {
        margin: 0 -10px;
        width: auto;
      }

      .productWrap {
        padding: 0 15px;

        @include media-breakpoint-down(sm) {
          padding: 0 10px;
          width: 50%;
          margin-bottom: 20px;
        }

        @include media-breakpoint-down(xs) {
          padding: 0 10px;
          width: 100%;
        }

        .productSingle {
          padding: 24px;
          border-radius: 15px;
          background: $secondary;
          height: 100%;

          @include media-breakpoint-down(lg) {
            padding: 20px;
          }

          .productTitle {
            font-family: $hk_bold;
            line-height: 1.5;
            color: $primary;
            margin-bottom: 8px;

            @include media-breakpoint-down(lg) {
              line-height: 1.3;
            }
          }

          .productContent {
            color: $primary;
            margin: 0;
          }
        }

        &:nth-child(2n) {
          top: 55px;

          @include media-breakpoint-down(sm) {
            top: 0;
          }

          .productSingle {
            background: $light-navy;

            .productTitle {
              color: $white;
            }

            .productContent {
              color: $white;
            }
          }
        }
      }
    }
  }
}
</style>
