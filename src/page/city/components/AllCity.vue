<template>
  <div class="all">
    <div class="header">
      字母排序
    </div>
    <ul class="alpha-list clear-fix">
      <li class="alpha" v-for="alpha in alphaBet"><a :href="'#pos'+alpha">{{alpha}}</a></li>

    </ul>
    <div class="city-list-wrapper"  :id="'pos'+ item.title" v-for="item in list" :key="item.title">
      <div class="header">{{item.title}}</div>
      <ul class="city-list">
        <li class="city" v-for="name in item.lists" :key="name">{{name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array
    },
    name: "all-city",
    data(){
      return{
        alphaBet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
          'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
          'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variable.scss';
  @import '~@/assets/style/mixin.scss';

  .header{
    @include titleStyle();
  }
  .all{
    .alpha-list{
      /*overflow: hidden;*/
      .alpha{
        display: inline-block;
        width: 16.66%;
        float: left;
        line-height: .89rem;
        font-size: .28rem;
        text-align: center;
      }
    }
    .city-list-wrapper{
      &:target{
        padding-top: $citySearchHeight + $headerHeight;
      }
      .city-list{
        position: relative;
        overflow: hidden;
        &:before{
          content: '';
          display: inline-block;
          width: 33.33%;
          height: 100%;
          border-left: 1px solid #eee;
          border-right: 1px solid #eee;
          position: absolute;
          left: 33.33%;
        }
        .city{
          width: 33.33%;
          float: left;
          line-height: .89rem;
          font-size: .28rem;
          text-align: center;
          border-bottom: 1px solid #eee;
          @include ellipsis();
        }
      }
    }
  }
</style>
