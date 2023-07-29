<template>
  <div :class="필터 + ' filter-item'" :style="`background-image:url(${imgUrl})`" @click="fire">
    <slot></slot>
  </div> 
</template>

<script>
export default {
    name:'filter',
    methods : {
        fire(){
            this.emitter.emit('필터선택', this.필터)
        }
    },
    props : {
        imgUrl : String,
        필터 : String,
    },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
  position:relative;
}
.filter-item p{
    position:absolute;
    top:0;
    left:0;
    background:#000;
    width: 100%;
    text-align:center;
    margin:0;
    padding:2px 0;
}

</style>