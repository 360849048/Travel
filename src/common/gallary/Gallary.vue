<template>
  <div class="gallary">
    <div class="img-wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide  v-for="(item, index) in list" :key="index">
          <img class="img-item" :src="item" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonGallary",
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observer: true,
          observeParents: true
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .gallary{
    z-index: 999;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background: #000;
    display: flex;
    align-items: center;
    overflow: hidden;
    .img-wrapper{
      width: 100%;
      .img-item{
        width: 100%;
      }
      .swiper-container{
        overflow: inherit;
      }
      .swiper-pagination{
        bottom: -1rem;
        color: #fff;
      }
    }
  }
</style>
