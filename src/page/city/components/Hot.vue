<template>
  <div class="hot">
    <div class="title">
      热门城市
    </div>
    <ul class="hot-city-list">
      <li class="hot-city" v-for="(city, index) in list" :key="index">{{city}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array
    },
    name: "hot"
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variable.scss';
  @import '~@/assets/style/mixin.scss';
  .hot{
    .title {
      @include titleStyle();
    }
    .hot-city-list{
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      overflow: hidden;
      position: relative;
      &::before{
        /* 伪元素类似于子元素 */
        position: absolute;
        left: 33.33%;
        width: 33.33%;
        content: '';
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        height: 100%;
      }
      .hot-city{
        width: 33.33%;
        float: left;
        text-align: center;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        line-height: .89rem;
        font-size: .28rem;
        @include ellipsis();
        z-index: 10;
        padding: 0 .05rem;
      }
    }
  }
</style>
