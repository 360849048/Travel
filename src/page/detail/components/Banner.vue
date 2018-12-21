<template>
  <div class="banner" @click="showGallary = !showGallary">
    <img class="banner-img" :src="list[0]" />
    <div class="img-number-wrapper">
      <span class="iconfont img-logo">&#xe616;</span>
      <span class="img-number">{{imgNum}}</span>
    </div>
    <div class="name-info-wrapper">
      <div class="name-info">{{name}}</div>
    </div>
    <fade>
      <common-gallary
        v-show="showGallary"
        :list="list">
      </common-gallary>
    </fade>
  </div>
</template>

<script>
  import CommonGallary from '@/common/gallary/Gallary'
  import Fade from '@/common/fade/Fade'

  export default {
    name: "DetailBanner",
    components: {
      CommonGallary,
      Fade
    },
    props: {
      name: String,
      list: Array,
    },
    data () {
      return {
        showGallary: false,
      }
    },
    computed: {
      imgNum () {
        return this.list.length;
      }
    }
  }
</script>

<style scoped lang="scss">
  .banner{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 55%;
    position: relative;
    &::after{
      content: '';
      position: absolute;
      bottom: 0;
      height: .8rem;
      width: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .2), rgba(0, 0, 0, .8));
    }
    .banner-img{
      width: 100%;
    }
    .img-number-wrapper{
      position: absolute;
      left: .2rem;
      bottom: .86rem;
      background-color: rgba(0, 0, 0, .5);
      border-radius: .4rem;
      width: 1.2rem;
      height: .4rem;
      color: #fff;
      text-align: center;
      .img-logo{
        line-height: .4rem;
        font-size: .1rem;
      }
      .img-number{
        margin-left: .1rem;
      }
    }
    .name-info-wrapper{
      position: absolute;
      bottom: .2rem;
      width: 100%;
      display: flex;
      .name-info{
        line-height: .4rem;
        font-size: .36rem;
        color: #fff;
        z-index: 1;
        text-indent: .24rem;
        text-shadow: 1px 2px rgba(0, 0, 0, .5);
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
