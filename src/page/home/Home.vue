<template>
  <div id="home">
    <home-header></home-header>
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
  import { mapState } from 'vuex'

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
        lastCity: '',
        swiperList: [],
        iconsList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {
      getRetData(){
        axios.get(`/api/homeData.json?city=${this.city}`)
          .then(this.dealRetData)
      },
      dealRetData(res){
        res = res.data;
        this.swiperList = res.swiperList;
        this.iconsList = res.iconsList;
        this.recommendList = res.recommendList;
        this.weekendList = res.weekendList;
      }
    },
    computed: {
      ...mapState(['city'])
    },
    mounted() {
      this.lastCity = this.city;
      this.getRetData();
    },
    activated() {
      if( this.lastCity !== this.city ){
        this.lastCity = this.city;
        this.getRetData();
      }
    }
  }
</script>

<style>
  #home{
    font-size: .2rem;
  }
</style>
