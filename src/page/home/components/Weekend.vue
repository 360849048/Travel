<template>
  <div class="recommend">
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="rec-item" v-for="rec in list" :key="rec.id">
        <div class="rec-img-wrapper">
          <img class="rec-img" :src="rec.imgUrl" alt="sorry">
        </div>
        <div class="rec-info">
          <p class="rec-title">{{rec.title}}</p>
          <p class="rec-desc">{{rec.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    props: {
      list: Array
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variable.scss';
  @import '~@/assets/style/mixin.scss';

  .recommend{
    .title{
      @include titleStyle();
    }
    ul{
      padding: 0 0 .2rem 0;
      margin: 0;
      border-bottom: #eee solid 1px;
      .rec-item{
        list-style: none;
        /*height: 0;*/
        /*padding-bottom: 50%;*/
        /*overflow: hidden;*/
        /*display: flex;*/
        padding-bottom: .3rem;
        .rec-img-wrapper {
          height: 0;
          padding-bottom: 37%;
          width: 100%;
          overflow: hidden;
          background: green;
          .rec-img {
            width: 100%;
          }
        }
        .rec-info{
          flex: 1;
          margin-left: .2rem;
          /* 正确显示ellipsis必须添加此属性 */
          min-width: 0;
          .rec-title{
            margin-top: .1rem;
            font-size: .3rem;
            color: $darkColor;
            @include ellipsis();
          }
          .rec-desc{
            margin-top: .1rem;
            color: #ccc;
            @include ellipsis();
          }
          .rec-price-wrapper{
            margin-top: .3rem;
            .rec-price{
              color: $priceColor;
              font-size: .4rem;
            }
            .rec-price-deco{

            }
          }
        }
      }
    }
  }
</style>
