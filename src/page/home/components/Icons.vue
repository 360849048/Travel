<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide class="icons" v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="iconInfo in page" :key="iconInfo.id">
          <div class="icon-img-wrapper">
            <img class="icon-img"
                 :src="iconInfo.imgUrl" alt="???">
          </div>
          <p class="icon-desc">{{iconInfo.desc}}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    props: {
      list: Array
    },
    data(){
      return{
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: '.swiper-pagination',
          loop: true,
        }
      }
    },
    computed: {
      pages(){
        const pages = [];
        this.list.forEach((iconInfo, index) => {
          let page = Math.floor((iconInfo.id - 1) / 8);
          if (pages.length <= page){
            pages.push([]);
          }
          pages[page].push(iconInfo);
        });
        return pages;
      }
    }
  }
</script>

<style>
  .swiper-pagination-bullet-active{
    background: #00bcd4 !important;
  }
</style>

<style scoped lang="scss">
  @import '~@/assets/style/variable.scss';
  @import '~@/assets/style/mixin.scss';

  .icons{
    /*background: green;*/
    overflow: hidden;
    padding-bottom: 60%;
    height: 0;
    .icon{
      position: relative;
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      overflow: hidden;
      /*background: red;*/
      float: left;
      .icon-img-wrapper{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        /*bottom: .44rem;*/
        height: 85%;
        /*background: yellow;*/
        box-sizing: border-box;
        padding: .2rem .1rem 0;
        .icon-img{
          top: 0;
          left: 0;
          height: 100%;
          display: block;
          margin: 0 auto;
        }
      }
      .icon-desc{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0;
        margin: 0;
        /*line-height: .44rem;*/
        /*height: .44rem;*/
        /* line-height实现居中最好使用数值，不要用百分号 */
        /*line-height: 150%;*/
        height: 15%;
        text-align: center;
        /* 字体高度随视图宽度变化，兼容性较差 */
        font-size: 2vw;
        color: $darkColor;
        @include ellipsis();
      }
    }
  }
</style>
