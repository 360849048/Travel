<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-back">&#xe605;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe60a;</span>
      输入需要搜索的内容
    </div>
    <div class="header-right">
      城市
      <span class="iconfont icon-city">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "my-header"
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variable.scss';

  .header{
    font-size: .3rem;
    line-height: .86rem;
    /*height: .86rem;*/
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
      width: 1.24rem;
      text-align: center;
      .icon-city{
        margin-left: -.04rem;
        font-size: .2rem;
      }
    }
  }
</style>
