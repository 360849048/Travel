<template>
  <div id="home">
    <my-header></my-header>
  </div>
</template>

<script>
  import MyHeader from './components/Header'
  export default {
    name: "home",
    components: {
      MyHeader
    }
  }
</script>

<style scoped>
  #home{
  }
</style>
