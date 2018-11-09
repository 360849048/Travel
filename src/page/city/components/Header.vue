<template>
  <div class="header">
    <router-link to="/">
      <div class="city-back">
        <span class="iconfont icon-back">&#xe605;</span>
      </div>
    </router-link>
    城市选择
  </div>
</template>

<script>
  export default {
    name: "CityHeader"
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variable.scss';

  .header{
    background: $bgColor;
    height: $headerHeight;
    line-height: $headerHeight;
    color: #fff;
    font-size: .35rem;
    text-align: center;
    position: relative;
    .city-back{
      position: absolute;
      left: 0;
      top: 0;
      width: .64rem;
      text-align: center;
      color: #fff;
      height: 100%;
      .icon-back{
        font-size: .35rem;
      }
    }
  }
</style>
