<template>
  <div class="city">
    <div class="header-area">
      <city-header/>
      <city-search :cityList="cityList" />
    </div>
    <!--<div class="city-area">-->
      <!--<city-hot :list="hotCities"/>-->
      <!--<city-all :list="cityItemList"/>-->
    <!--</div>-->
    <city-list :cityList="cityItemList" :hotCities="hotCities" :curLetter="curLetter"/>
    <city-alphabet :letterList="letterList" @letterchange="handleLetterChange"/>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityHot from './components/Hot'
  import CityAll from './components/AllCity'
  import CityList from './components/CityList'
  import CityAlphabet from './components/AlphaBet'
  import axios from 'axios'

  export default {
    name: "City",
    components: {
      CityHeader,
      CitySearch,
      CityHot,
      CityAll,
      CityList,
      CityAlphabet
    },
    data(){
      return {
        cityItemList: [],
        letterList: [],
        cityList: [],
        hotCities: [],
        curLetter: 'A'
      }
    },
    mounted(){
      this.getRetData();
    },
    methods: {
      getRetData(){
        axios.get('/api/cityData.json')
          .then(this.dealRetData)
      },
      dealRetData(res){
        let data = res.data;
        this.cityItemList = data.allCities;
        this.hotCities = data.hotCities;
        for (let item of this.cityItemList){
          this.letterList.push(item['title']);
          for (let city of item.lists){
            this.cityList.push(city);
          }
        }
      },
      handleLetterChange(e){
        this.curLetter = e;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variable.scss';

  .header-area{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  .city-area{
    margin-top: $citySearchHeight + $headerHeight;
  }
</style>
