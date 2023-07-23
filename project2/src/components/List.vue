<template>
  <div class="bloglist" v-for="(List,i) in 블로그글" :key="i">
    <h5 @click="$router.push('/detail/' + i)">{{블로그글[i].title}}</h5>
    <p>{{블로그글[i].date}}</p>
  </div>
  
</template>

<script>
export default {
    name : 'List',
    props : {
        블로그글 : Array,
    },
}
</script>

<style>
.bloglist{
  border-bottom:dotted 2px #ddd;
  padding:30px 0;
}
.bloglist:last-child{
  border-bottom:none;
}
.bloglist h5{
   margin-bottom:0;
   padding-bottom:10px;
   cursor:pointer;
}
.bloglist h5:hover{
  color:brown;
  transition:ease all .5s;
}
.bloglist p{
   margin-bottom:0;
}
</style>