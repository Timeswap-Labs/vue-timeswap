<template>
  <section :class="$style.productPage">
    <div :class="$style.content">
      <h2 :class="$style.mainTitle">Our Offerings</h2>
      <div :class="[$style.productList, 'row']">
        <div
          v-for="(product, index) in products"
          :key="index"
          :class="[$style.productWrap, 'col-md-3 animateMe']"
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
          title: 'Fixed interest lending & borrowing',
          description:
            'Timeswap pools provide fixed rate lending/borrowing for the duration of the pool.',
        },
        {
          title: 'Non-Liquidatable Loans',
          description:
            'Timeswap takes away complexity for borrowers to constantly manage their health factors. No more liquidation penalty & dependency on liquidators.',
        },
        {
          title: 'Isolated Risk Profiles',
          description:
            'With Isolated pools, Timeswap offers flexibility for lenders and borrowers to decide their risk profile with interest rates & collateral factors.',
        },
        {
          title: 'Permissionless Pools',
          description:
            'Timeswap AMM enables creation of fixed maturity lending & borrowing markets for any fungible token without dependency on external price feeds.',
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
  flex: 0 0 1500px !important;
  max-width: 1500px !important;
  padding: 100px 0;
  padding-left: 160px;
  display: flex;
  align-items: center;

  @include media-breakpoint-down(lg) {
    flex: 0 0 1340px !important;
    max-width: 1340px !important;
    padding-left: 100px;
  }

  @include media-breakpoint-down(md) {
    flex: 0 0 1300px !important;
    max-width: 1300px !important;
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
      max-width: 1130px;
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
