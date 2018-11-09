<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <!-- slides -->
      <swiper-slide  v-for="item in list" :key="item.id" >
        <img class="swiper-img" :src="item.imgUrl" alt="sorry">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 2000,
          speed: 500,
          autoplayDisableOnInteraction: false
        }
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 66.7%;
    background: #eee;
  }
  .swiper-img{
    width: 100%;
  }
  /* 为了不受scoped影响，需要使用 >>> 进行穿透 */
  .wrapper >>> .swiper-pagination-bullet-active{
    background: #fff !important;
  }
</style>
