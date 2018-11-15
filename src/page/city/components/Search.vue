<template>
  <div class="wrapper">
    <div class="search">
      <input class="search-city"
             type="text"
             placeholder="请输入需要搜索的城市"
             v-model="searchText">
    </div>

    <div class="search-result" v-show="searchText.length"  ref="content">
      <ul>
        <li
          v-for="city in searchResult"
          :key="city"
          class="city-item"
          @click="handleClickOnCity(city)">{{city}}
        </li>
        <li v-show="hasNoData" class="no-city">
          没有找到任何城市
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "search",
    props: {
      cityList: Array
    },
    data(){
      return{
        searchText: '',
        searchResult: [],
        timer: null,
        hasNoData: false
      }
    },
    methods: {
      searchCity(){
        this.searchResult = [];
        if(this.searchText === '') return;
        for(let city of this.cityList){
          if (city.indexOf(this.searchText) >= 0){
            this.searchResult.push(city);
          }
        }
        this.hasNoData = !this.searchResult.length;
      },
      handleClickOnCity(city){
        this.$store.dispatch('cityChange', city);
        this.$router.push('/');
      },
    },
    watch: {
      searchText(){
        if(this.timer){
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(()=>{
          this.searchCity();
        }, 100);
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.content, {click: true});
    }
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
  .search-result{
    position: fixed;
    top: $citySearchHeight + $headerHeight;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 10;
    background-color: #eee;
    .city-item{
      border-bottom: 1px solid #ddd;
      font-size: .25rem;
      padding: .1rem 0 .05rem .2rem;
      background-color: #fff;
      color: #666;
    }
    .no-city{
      text-align: center;
      padding: .3rem;
      font-size: .3rem;
      color: #666;
    }
  }
</style>
