<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-back">&#xe605;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe60a;</span>
      输入需要搜索的内容
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{city}}
        <span class="iconfont icon-city">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "HomeHeader",
    computed: {
      ...mapState(['city'])
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variable.scss';
  @import '~@/assets/style/mixin.scss';

  .header{
    font-size: .3rem;
    line-height: $headerHeight;
    height: $headerHeight;
    display: flex;
    background: $bgColor;
    color: #fff;
    .header-left{
      width: .64rem;
      text-align: center;
      .icon-back{
        font-size: .35rem;
      }
    }
    .header-input{
      background: #fff;
      margin-top: .12rem;
      height: .64rem;
      line-height: .64rem;
      border-radius: .1rem;
      color: #ccc;
      flex: 1;
      padding-left: .2rem;
    }
    .header-right{
      min-width: 1.04rem;
      padding: 0 .1rem;
      text-align: center;
      color: #fff;
      .icon-city{
        margin-left: -.04rem;
        font-size: .2rem;
      }
    }
  }
</style>
