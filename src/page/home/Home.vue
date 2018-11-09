<template>
  <div id="home">
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconsList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/MySwiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'

  export default {
    name: "home",
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    data(){
      return{
        city: '',
        swiperList: [],
        iconsList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {
      getRetData(){
        axios.get('/api/homeData.json')
          .then(this.dealRetData)
      },
      dealRetData(res){
        res = res.data;
        this.city = res.city;
        this.swiperList = res.swiperList;
        this.iconsList = res.iconsList;
        this.recommendList = res.recommendList;
        this.weekendList = res.weekendList;
      }
    },
    mounted(){
      this.getRetData();
    }
  }
</script>

<style>
  #home{
    font-size: .2rem;
  }
</style>
