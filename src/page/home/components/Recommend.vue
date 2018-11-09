<template>
  <div class="recommend">
    <div class="title">
      猜你喜欢
    </div>
    <ul>
      <li class="rec-item" v-for="rec in list" :key="rec.id">
        <div class="rec-img-wrapper">
          <img class="rec-img" :src="rec.imgUrl" alt="sorry">
        </div>
        <div class="rec-info">
          <p class="rec-title">{{rec.title}}</p>
          <p class="rec-desc">{{rec.desc}}</p>
          <div class="rec-price-wrapper">
            <span class="rec-price">￥{{rec.price}}</span>
            <span class="rec-price-deco">起</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="more">
      查看所有产品
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
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
      padding: 0 0 .2rem .2rem;
      margin: 0;
      border-bottom: #eee solid 1px;
      .rec-item{
        list-style: none;
        height: 0;
        padding-bottom: 35%;
        overflow: hidden;
        display: flex;
        padding-top: .2rem;
        .rec-img-wrapper {
          height: 0;
          padding-bottom: 35%;
          width: 35%;
          overflow: hidden;
          background: green;
          .rec-img {
            width: 100%;
          }
        }
        .rec-info{
          flex: 1;
          margin-left: .4rem;
          /* 正确显示ellipsis必须添加此属性 */
          min-width: 0;
          .rec-title{
            margin-top: .2rem;
            font-size: .35rem;
            color: $darkColor;
            @include ellipsis();
          }
          .rec-desc{
            margin-top: .15rem;
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
    .more{
      color: $bgColor;
      text-align: center;
      font-size: .3rem;
      line-height: 1rem;
    }
  }
</style>
