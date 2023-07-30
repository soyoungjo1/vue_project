<template>
  <div>
    <div v-if="step == 0">
      <Post :postlist="post" v-for="(post, i) in postlist" :key="i" />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div :class="selectfilter + ` upload-image`" :style="`background-image:url(${imgUrl})`"></div>
      <div class="filters">
       <FilterBox :imgUrl="imgUrl" :필터="필터" v-for="필터 in filter" :key="필터">
        <p>{{ 필터 }}</p>
      </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div :class="selectfilter + ` upload-image`" :style="`background-image:url(${imgUrl})`"></div>
      <div class="write">
        <textarea @input="$emit('write', $event.target.value)" class="write-box">글을 작성해보세요.</textarea>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 3">
      <MyPage/>
    </div>

     
  </div>
</template>

<script>
import Filter from '../assets/filterData.js';
import Post from "./Post.vue";
import FilterBox from "./Filterbox.vue";
import MyPage from './MyPage.vue';

export default {
  name: "container",
  data(){
    return{
      filter : Filter,
    }
  },
  
  components: {
    Post,
    FilterBox,
    MyPage,
  },

  props: {
    postlist: Array,
    step: Number,
    imgUrl : String,
    selectfilter : String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
