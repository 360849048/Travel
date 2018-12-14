<template>
  <div class="detail">
    <detail-banner />
    <detail-header />
    hello
  </div>
</template>

<script>
  import DetailBanner from '@/page/detail/components/Banner'
  import DetailHeader from '@/page/detail/components/Header'

  export default {
    name: "detail",
    components: {
      DetailBanner,
      DetailHeader
    }
  }
</script>

<style scoped>
  .detail {
    height: 100rem;
  }
</style>
