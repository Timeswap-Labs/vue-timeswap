<template>
  <section :class="$style.advisor_page">
    <div :class="$style.advisor_row">
      <div :class="$style.content">
        <h2 :class="$style.main_title">Advisor</h2>
        <div :class="$style.advisor_list">
          <div
            v-for="(advisor, index) in advisors"
            :key="index"
            :class="$style.advisor_wrap"
          >
            <div
              :class="$style.advisor_single"
              :style="{
                backgroundImage: `url(${getImgUrl(
                  advisor.image
                )}), linear-gradient(to right, #a0d2eb 15%, #7b78ff 78%)`,
              }"
            >
              <div :class="$style.img_caption">
                <h4 :class="$style.name">{{ advisor.name }}</h4>
                <p :class="$style.designation">{{ advisor.designation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.advisor_form">
        <div :class="$style.form_info">
          <div :class="$style.logo">
            <img src="@/assets/images/logo-wihout-text.png" alt />
          </div>
          <h6 :class="$style.form_title">
            World’s first Fully decentralized AMM based money market protocol
          </h6>
        </div>
        <div :class="$style.form">
          <h6 :class="$style.form_title">Get early updates</h6>
          <p :class="$style.form_content">
            Subscribe to our newsletter for updates and to get testnet invite.
          </p>
          <form>
            <div :class="$style.input_field">
              <input
                id="email"
                type="email"
                :class="$style.form_control"
                placeholder="Email address"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      advisors: [
        {
          image: 'team-one',
          name: 'Ricsson Ngo',
          designation: 'Founder',
        },
        {
          image: 'team-two',
          name: 'Ameeth Devadas',
          designation: 'Co-Founder',
        },
      ],
    }
  },

  methods: {
    getImgUrl(advisor) {
      return require(`../assets/images/${advisor}.jpg`)
    },
  },
}
</script>

<style lang="scss" module>
.advisor_page {
  height: 100vh;
  min-height: 500px;
  position: relative;
  width: 100%;
  max-width: 1360px;
  padding: 100px 160px;
  padding-right: 0;
  display: flex;
  align-items: center;
  .advisor_row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .content {
      width: 100%;
      .main_title {
        font-size: $h2-font-size;
        font-family: $hk_bold;
        line-height: 1.2;
        color: $white;
        margin-bottom: 90px;
      }
      .advisor_list {
        width: 100%;
        margin: 0 -5px;
        display: flex;
        flex-wrap: wrap;
        .advisor_wrap {
          padding: 0 5px;
          max-width: 231px;
          width: 100%;
          .advisor_single {
            border-radius: 10px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: flex-end;
            height: 288px;
            background-blend-mode: luminosity;
            background-size: cover;
            width: 100%;
            .img_caption {
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
          }
        }
      }
    }
    .advisor_form {
      max-width: 410px;
      width: 100%;
      .form_info {
        padding: 24px 39px;
        background: $dark-blue;
        .logo {
          max-width: 35px;
          width: 100%;
          margin-bottom: 16px;
        }
        .form_title {
          background: linear-gradient(to right, #a0d2eb 0%, #7b78ff 70%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: $h4-font-size;
          font-family: $hk_bold;
          line-height: 1.2;
          padding-right: 20px;
        }
      }
      .form {
        background: $corn-flower;
        padding: 48px 39px;
        .form_title {
          font-size: 16px;
          font-family: $hk_bold;
          line-height: 1.2;
          color: $gray-900;
        }
        .form_content {
          font-size: 14px;
          line-height: 1.5;
          color: $gray-900;
        }
        .input_field {
          .form_control {
            color: $black;
            background: rgba(14, 19, 37, 0.1);
            border-color: rgba(14, 19, 37, 0.1);
            padding: 10px;
            border-radius: 4px;
            font-size: 16px;
            line-height: 1.5;
            color: $gray-900;
            width: 100%;
            display: block;
            outline: none;
            transition: box-shadow 0.15s ease-in-out;
            border: 0;
            &:focus {
              box-shadow: 0 0 0 2px #007bff40;
            }
          }
        }
      }
    }
  }
}
</style>
