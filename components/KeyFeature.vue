<template>
  <section :class="$style.feature_page">
    <div :class="$style.content">
      <h2 :class="$style.main_title">
        Key Features
      </h2>
      <div :class="$style.feature_list">
        <div
          v-for="(feature, index) in features"
          :key="index"   
          :class="$style.feature_wrap"       
        >
          <div :class="$style.feature_single">
            <figure>
              <img
                :src="getImgUrl(feature.image)"
                :alt="feature.image"
              />
            </figure>
            <h6 :class="$style.feature_title">
              {{feature.title}}
            </h6>
            <p :class="$style.feature_content">
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
          title: 'Market Driven Collateral', 
          description: 'Collateral is based on prevailing market demand and supply allowing for greater capital efficiency'         
        },
        {
          image: "key-icon-2",
          title: 'Unique AMM with insurance',  
          description: 'AMM is an upgrade on the Uniswap Constant product function equation with insurance'        
        },
        {
          image: "key-icon-3",
          title: 'Flexible Interest Rates',
          description: 'Timeswap provides users with flexibility to decide their risk profile and select a custom interest rate'        
        },
        {
          image: "key-icon-4",
          title: 'Oracle-less & Gas Efficient',
          description: 'Timeswap is brutally gas efficienct and does not require oracles or liquidators'        
        },
        {
          image: "key-icon-5",
          title: 'Decentralized & Permission-less',
          description: 'Collateral is decided based on prevailing market demand and supply'        
        },
        {
          image: "key-icon-6",
          title: 'ERC20-Agnostic',
          description: 'Any ERC-20 token pool can be created on Timeswap by providing necessary liquidity'        
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

.feature_page {
  height: 100vh;
  min-height: 500px;
  position: relative;
  width: 100%;  
  max-width: 1700px;
  padding: 100px 0;
  padding-left: 80px; 
  display: flex;
  align-items: center;
  .content{
    width: 100%;
    .main_title{
      font-size: $h2-font-size;
      font-family: $hk_bold;
      line-height: 1.5;
      color: $white;
      margin-bottom: 100px;
    }
    .feature_list{
      width: 100%;
      margin: 0 -15px;
      display: flex;
      flex-wrap: wrap;
      .feature_wrap{
        padding: 0 15px;
        max-width: 235px;
        .feature_single{
          padding: 24px;
          border-radius: 15px;
          background: linear-gradient(90deg, rgba(123, 120, 255, 0.25) 0%, rgba(0, 0, 0, 0) 80%);
          height: 100%;
          figure{
            max-width: 50px;
            margin: 0;
            margin-bottom: 16px;
            img{
              display: block;
            }
          }
          .feature_title{
            font-size: $h6-font-size;
            font-family: $hk_bold;
            line-height: 1.2;
            color: $white;
            margin-bottom: 8px;            
          }
          .feature_content{
            font-size: 14px;
            color: $white;
            opacity: 0.6;
            margin: 0;
          }
        }
        &:nth-child(2n){
          .feature_single{
            background: linear-gradient(90deg, rgba(160, 210, 235, 0.24) 0%, rgba(0, 0, 0, 0) 80%);
          }          
        }
      }      
    }
  }
}

</style>