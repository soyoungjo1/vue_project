<template>
<div>
  <Header></Header>
  <div>
    <router-view :블로그글="블로그글"></router-view>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue';
// import List from './List.vue';
import Blog from './assets/blog.js';


export default {
  name: 'App',
  components: {
    Header : Header,
    // List : List,
  },
  data(){
    return{
      블로그글 : Blog,
    }
  },
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

</style>
