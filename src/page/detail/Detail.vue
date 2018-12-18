<template>
  <div class="detail">
    <detail-banner />
    <detail-header />
    <detail-list :list="list" />
  </div>
</template>

<script>
  import DetailBanner from '@/page/detail/components/Banner'
  import DetailHeader from '@/page/detail/components/Header'
  import DetailList from '@/page/detail/components/List'

  export default {
    name: "detail",
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data () {
      return {
        list: [
          {title: '成人票', children: [
              {title: '场馆一'},
              {title: '场馆二'}
            ]},
          {title: '学生票'},
          {title: '儿童票'},
          {title: '特惠票'}
        ]
      }
    }
  }
</script>

<style scoped>
  .detail {
    height: 100rem;
  }
</style>
