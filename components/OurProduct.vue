<template>
  <section :class="$style.product_page">
    <div :class="$style.content">
      <h2 :class="$style.main_title">
        Our Products
      </h2>
      <div :class="[$style.product_list, 'row']">
        <div
          v-for="(product, index) in products"
          :key="index"   
          :class="[$style.product_wrap, 'col-md-3']"       
        >
          <div :class="$style.product_single">
            <h4 :class="$style.product_title">
              {{product.title}}
            </h4>
            <p :class="$style.product_content">
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
          description: 'Timeswap allows fixed maturing lending & borrowing of any ERC-20 token in non-custodial fully decentralized manner'         
        },
        {
          title: 'Liquidity Pools',  
          description: 'Timeswap liquidity providers interact with our unique AMM to provide deep liquidity for our lenders & borrowers and earn transaction fees'        
        },
        {
          title: 'Flexible Risk Profile',
          description: 'Timeswap offers flexibility for lenders and borrowers to decide their risk profile through flexible interest rates & insurance cover'        
        },
        {
          title: 'Bootstrap Liquidity',
          description: 'Timeswap allows any ERC-20 projects to bootstrap liquidity by providing their native token as collateral to our liquidity pools'        
        },
      ],
    }
  },
}
</script>

<style lang="scss" module>

.product_page {
  height: 100vh;
  min-height: 500px;
  position: relative;
  width: 100%;  
  max-width: 1300px;
  padding: 100px 0;
  padding-left: 160px; 
  display: flex;
  align-items: center;
  .content{
    width: 100%;
    .main_title{
      font-size: $h2-font-size;
      font-family: $hk_bold;
      line-height: 1.5;
      color: $white;
      margin-bottom: 60px;
    }
    .product_list{
      max-width: 1030px;
      width: 100%;
      margin: 0 -15px;
      .product_wrap{
        padding: 0 15px;
        .product_single{
          padding: 24px;
          border-radius: 15px;
          background: $secondary;
          .product_title{
            font-size: $h5-font-size;
            font-family: $hk_bold;
            line-height: 1.5;
            color: $primary;
            margin-bottom: 8px;            
          }
          .product_content{
            color: $primary;
            margin: 0;
          }
        }
        &:nth-child(2n){
          margin-top: 55px;
          .product_single{
            background: $light-navy;
            .product_title{
              color: $white;
            }
            .product_content{
              color: $white;
            }
          }          
        }
      }      
    }
  }
}

</style>