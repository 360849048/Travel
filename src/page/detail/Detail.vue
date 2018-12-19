<template>
  <div class="detail">
    <detail-banner :name="name" :list="imgList" />
    <detail-header :name="name" />
    <detail-list :list="ticketList" />
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  import axios from 'axios'

  export default {
    name: "detail",
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data () {
      return {
        name: '',
        ticketList: [],
        imgList: []
      }
    },
    methods: {
      dealRetData (res) {
        res = res.data;

        this.name = res.name;
        this.ticketList = res.ticketList;
        this.imgList = res.imgList;
      }
    },
    mounted () {
      axios.get('/api/detailData.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.dealRetData);
    }
  }
</script>

<style scoped>
  .detail {
    height: 100rem;
  }
</style>
