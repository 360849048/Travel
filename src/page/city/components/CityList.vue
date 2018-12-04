<template>
  <div class="city-list wrapper" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="header">当前城市</div>
        <div class="cities-area">
          <div class="city-wrapper">
            <div class="city">{{curCity}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="header">热门城市</div>
        <div class="cities-area">
          <div
            class="city-wrapper"
            v-for="(hotCity, index) in hotCities"
            :key="index"
            @click="handleClickOnCity(hotCity)">
            <div class="city">{{hotCity}}</div>
          </div>
        </div>
      </div>

      <div class="area">

        <div class="city-category" v-for="item in cityList" :key="item.title" :ref="item.title">
          <div class="header">{{item.title}}</div>
          <div class="cities-area">
            <div
              class="city-one-line"
              v-for="name in item.lists"
              :key="name"
              @click="handleClickOnCity(name)">
              <div class="city">{{name}}</div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: "city-list",
    props: {
      cityList: Array,
      hotCities: Array,
      curLetter: String
    },
    methods: {
      handleClickOnCity(city){
        this.cityChange(city);
        this.$router.push('/');
      },
      ...mapActions(['cityChange'])
    },
    computed: {
      ...mapState({
        curCity: 'city'
      })
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper, {click: true, mouseWheel: true});
    },
    watch: {
      curLetter(){
        this.scroll.scrollToElement(this.$refs[this.curLetter][0]);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variable.scss';
  @import '~@/assets/style/mixin.scss';

  .wrapper{
    margin-top: $citySearchHeight + $headerHeight;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  .area{
    .header{
      @include titleStyle();
    }
    overflow: hidden;
    .cities-area{
      padding: 0 .6rem 0 0;
      .city-wrapper{
        width: 33.33%;
        padding: .2rem .3rem;
        box-sizing: border-box;
        /* 内联块状元素存在回车导致的font-size干扰，不能正确将东西放在一行 */
        /*display: inline-block;*/
        float: left;
        .city{
          border: 1px solid $bgColor;
          border-radius: .1rem;
          text-align: center;
          line-height: .48rem;
          font-size: .24rem;
        }
      }
      .city-one-line{
        line-height: .48rem;
        font-size: .26rem;
        text-indent: .2rem;
        border-bottom: #eee 1px solid;
      }
    }
  }
</style>
