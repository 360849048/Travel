<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont">&#xe605;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="{opacity: opacity}">
      <router-link tag="div" to="/" class="city-back">
        <span class="iconfont detail-back">&#xe605;</span>
      </router-link>
      {{name}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailHeader",
    props: {
      name: String
    },
    data () {
      return {
        showAbs: true,
        opacity: 0
      }
    },
    methods: {
      handleScroll() {
        const top = document.documentElement.scrollTop;
        this.showAbs = top <= 40;
        if (!this.showAbs){
          let opacity = (top - 40) / 80;
          this.opacity = opacity > 1 ? 1 : opacity;
        }
      }
    },
    activated () {
      window.addEventListener('scroll', this.handleScroll);
    },
    deactivated () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variable.scss';

  .header {
    position: absolute;
    top: 0;
    left: 0;
    .header-abs {
      position: absolute;
      top: .1rem;
      left: .1rem;
      width: .79rem;
      height: .79rem;
      line-height: .79rem;
      border-radius: 50%;
      text-align: center;
      background-color: hsla(0, 0, 0, .3);
      color: #fff;
    }
    .header-fixed {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: $headerHeight;
      width: 100%;
      background-color: $bgColor;
      text-align: center;
      line-height: $headerHeight;
      color: #fff;
      font-size: .35rem;
      z-index: 10;
      .city-back {
        position: absolute;
        top: 0;
        left: 0;
        width: .64rem;
        text-align: center;
        .detail-back {
          font-size: .35rem;
        }
      }
    }
  }
</style>
