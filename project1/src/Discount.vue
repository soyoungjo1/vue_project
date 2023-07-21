<template>
  <div class="discount">
    <h4>지금 결제하면 {{ count }}% 할인</h4>
  </div>
</template>

<script>
export default {
    name: 'TheDiscount',
    data(){
      return{
        count : 30,
      }
    },
    mounted(){
      setInterval(()=>{
        this.count -= 1;
      },1000);
    }
}
</script>

<style>
.discount{
  background:#eee;
  padding:20px 0 10px;
  margin:10px;
  border-radius:5px;
}

.discount h4{
  font-size:18px; 
  font-weight: 600;
}
</style>