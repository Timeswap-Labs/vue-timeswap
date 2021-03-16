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
  max-width: 1300px !important;
  padding: 100px 0;
  padding-left: 160px;
  display: flex;
  align-items: center;

  .content {
    width: 100%;

    .mainTitle {
      font-size: $h2-font-size;
      font-family: $hk_bold;
      line-height: 1.2;
      color: $white;
      margin-bottom: 50px;
    }

    .productList {
      max-width: 1030px;
      width: 100%;
      margin: 0 -15px;
      align-items: stretch;

      .productWrap {
        padding: 0 15px;

        .productSingle {
          padding: 24px;
          border-radius: 15px;
          background: $secondary;
          height: 100%;

          .productTitle {
            font-size: $h4-font-size;
            font-family: $hk_bold;
            line-height: 1.5;
            color: $primary;
            margin-bottom: 8px;
          }

          .productContent {
            color: $primary;
            margin: 0;
          }
        }

        &:nth-child(2n) {
          top: 55px;

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
