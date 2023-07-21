<template>  
  <div>
    <transition name="fade">
      <Modal @closeBtn="modal = false" :원룸들="원룸들" :누른거="누른거" :modal="modal"></Modal>
    </transition>

    <div class="menu">
        <a v-for="메뉴 in menu" :key="메뉴">{{ 메뉴 }}</a>
    </div>

    <TheDiscount v-if="showDiscount==true"></TheDiscount>

    <div class="btn_Wrap">
      <button @click="sortBack">되돌리기</button>
      <button @click="priceSort">낮은가격순</button>
      <button @click="highSort">높은가격순</button>
      <button @click="titleSort">abc순</button>
    </div>
 
    <Card @openModal="modal = true" :원룸="원룸들[i]" v-for="(room,i) in 원룸들" :key="i"></Card>
  </div>
 

</template>

<script>

import data from "./assets/oneroom.js";
import TheDiscount from "./Discount.vue";
import Modal from "./Modal.vue";
import Card from "./Card.vue"


export default {
  name: 'App',
  
  data() {
    return {
      원룸오리지널 : [...data],
      showDiscount : true,
      누른거 : 0,
      원룸들 : data,
      modal : false,
      신고수 : [0,0,0],
      menu : ['Home','Products','About'],
    }
  },
  methods : {
    
    sortBack(){
      this.원룸들 = [...this.원룸오리지널];
    },

    priceSort(){
      this.원룸들.sort(function(a,b){
        return a.price - b.price;
      });
    },

    highSort(){
      this.원룸들.sort(function(a,b){
        return b.price - a.price;
      });
    },
    titleSort(){
      this.원룸들.sort(function(a,b){
        if(a.title > b.title) return 1;
        if(a.title === b.title) return 0;
        if(a.title < b.title) return -1;
      });
    }
    
  },

  mounted(){
    setTimeout(()=>{
      this.showDiscount = false;
    },5000);
  },

  components : {
   TheDiscount : TheDiscount,
   Modal : Modal,
   Card : Card,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin : 0;
}

div {
  box-sizing: border-box;
}

.btn_Wrap{
  margin:20px 0 10px;
}

button{
  background:blueviolet;
  color: #fff;
  cursor:pointer;
  border:none;
  padding:5px 10px;
  margin-right:10px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 13px;
}

button:hover{
  background: darkslateblue;
}

.box{
  background:#f9f9f9; 
  padding:15px 15px 35px; 
  border-bottom:dotted 1px #ddd;

}

.box h4{
  cursor:pointer;
  font-size:18px; 
  font-weight:600;
  margin:20px 0 5px 0;
}

.box p{
  margin:0 0 5px;
  font-size:18px;
  font-weight:600;
  color:blueviolet;
}

.menu {
  background : darkslateblue;
  padding : 15px;
  border-radius : 5px;
}
.menu a {
  color : white !important;
  padding : 10px;
  font-weight: 600;
}

span{
  display:block;
}

.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 

img{
  max-width:100%; 
  width:auto;
  margin:0 auto;
}

.fade-enter-from{
  transform:translateY(-1000px);
}
.fade-enter-active{
  transition:ease all .5s;
}
.fade-enter-to{
  transform:translateY(0);
}

.fade-leave-from{
  transform:translateY(0);
}
.fade-leave-active{
  transition:ease all .5s;
}
.fade-leave-to{
  transform:translateY(-1000px);
}


</style>