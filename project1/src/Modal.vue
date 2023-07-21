<template>
  <div class="black-bg" v-if="modal == true">
    <div class="white-bg">
      <h4>{{원룸들[누른거].title}}</h4>
      <img :src="원룸들[누른거].image">
      <p>{{ 원룸들[누른거].content }}</p>
      <!-- <input @input="month = $event.target.value"> -->
      <input v-model="month">
      <p>{{ month }} 개월 선택함</p>
      <p>{{ 원룸들[누른거].price * month }}</p>
      <button @click="$emit('closeBtn')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name : 'Modal',
    data(){
      return{
        month:3,
      }
    },

    beforeUpdate(){
      if (this.month < 2 ) {
        alert('3개월 이상부터 결제 가능합니다.');
        this.month = 3;
      }
    },

 
    watch : {
      month(a){
        if(a > 12){
          alert('13이상 입력하지마세요.');
        }
        if (isNaN(a) == true) {
          alert('문자 입력하지마세요.')
          this.month = 1;
        }
      },
    },

    props :{
        원룸들 : Array,
        누른거 : Number,
        modal : Boolean,
    }
}
</script>

<style>

</style>