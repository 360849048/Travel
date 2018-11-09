<template>
  <ul class="alphabet">
    <li class="item"
        v-for="(alpha, idx) in letterList"
        :ref="idx"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
      {{alpha}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "alpha-bet",
    props:{
      letterList: Array
    },
    data(){
      return{
        touchStatus: false,
        offsetTop: 0,
        lineHeight: 0,
        timer: null
      }
    },
    updated(){
      if(this.letterList.length < 2) return;
      // 字母A距离顶部的距离
      this.offsetTop = this.$refs['1'][0].offsetTop;
      // 每个占据的高度 = 字母B距离顶部的距离 - 字母A距离顶部的距离
      this.lineHeight = this.$refs['2'][0].offsetTop - this.offsetTop;
    },
    methods: {
      handleLetterClick(e){
        this.$emit('letterchange', e.target.innerText);
      },
      handleTouchStart(){
        this.touchStatus = true;
      },
      handleTouchMove(e){
        if(!this.touchStatus) return;
        if(this.timer){
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          let letterNum = this.letterList.length;

          if(letterNum < 2) return;
          let mousePosY = e.touches[0].clientY;
          let index = Math.floor((mousePosY - this.offsetTop) / this.lineHeight);
          index = Math.max(0, index);
          index = Math.min(letterNum - 1, index);

          this.$emit('letterchange', this.letterList[index]);
        }, 10);

      },
      handleTouchEnd(){
        this.touchStatus = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variable.scss';

  .alphabet{
    width: .6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    .item{
      padding: .01rem 0;
      color: $bgColor;
    }
  }
</style>
