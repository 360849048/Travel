<template>
  <div class="detail-list-wrapper">
    <div class="item-list" v-for="(item, index) in list" :key="index">
      <div class="item-title">
        <span class="title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailList",
    props: {
      list: Array
    }
  }
</script>

<style scoped>
 .title-icon {
   display: inline-block;
   position: relative;
   top: .08rem;
   left: .2rem;
   width: .36rem;
   height: .36rem;
   background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
   margin-right: .1rem;
   background-size: .4rem 3rem;
 }
  .item-title {
    line-height: .8rem;
    font-size: .32rem;
    padding: 0 .1rem;
    border-bottom: 1px solid #ccc;
  }
  .item-children {
    text-indent: .4rem;
  }
</style>
