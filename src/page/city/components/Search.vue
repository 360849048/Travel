<template>
  <div class="search">
    <input class="search-city" type="text" placeholder="请输入需要搜索的城市或拼音">
  </div>
</template>

<script>
  export default {
    name: "search"
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variable.scss';

  .search{
    background: $bgColor;
    height: $citySearchHeight;
    padding: 0 .1rem;
    box-sizing: border-box;
    .search-city{
      width: 100%;
      border-radius: .1rem;
      border: 0;
      outline: none;
      height: .62rem;
      line-height: .62rem;
      text-align: center;
      color: #666;
      padding: 0 .1rem;
      box-sizing: border-box;
    }
  }
</style>
