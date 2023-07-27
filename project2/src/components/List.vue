<template>
  <div>
    <div class="search_bar">
      <input @keyup="searchResult(keyword)" placeholder="제목을 검색해보세요." v-model="keyword">
      <button type="button" @click="searchResult(keyword)"><img src="../assets/search_icon.png"></button>
    </div>

    <!--검색전-->
    <div v-if="filteredList.length > 0">
      <ul class="blog_list">
        <li v-for="(list, i) in filteredList" :key="i" @click="counter[i]++;">
          <router-link :to="`/detail/${list.id}`" :blogData="blogData">
          <div class="post-img" :style="{ 'background-image': 'url(' + list.img + ')' }"></div>
          <h3>{{ list.title }}</h3>
          <p>{{ list.subtitle }}</p>
          <div class="list_bottom">
            <span>{{ list.date }}</span>
            <span>{{ list.name }}</span>
          </div>
          <p class="counter">조회수 : {{ counter[i] }}</p>
        </router-link>
        </li>
      </ul>
    </div>

    <!--검색후-->
    <div v-else>
      <ul class="blog_list">
        <li v-for="(list, i) in blogData" :key="i" @click="counter[i]++;">
          <router-link :to="`/detail/${list.id}`" :blogData="blogData">
          <div class="post-img" :style="{ 'background-image': 'url(' + list.img + ')' }"></div>
          <h3>{{ list.title }}</h3>
          <p>{{ list.subtitle }}</p>
          <div class="list_bottom">
            <span>{{ list.date }}</span>
            <span>{{ list.name }}</span>
          </div>
          <p class="counter">조회수 : {{ counter[i] }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import blogData from '../assets/blogData';

export default {
  name: 'list',
  data() { 
    return {
      blogData: blogData,
      keyword: '',
      filteredList: [],
      showOriginalLists: true,
      counter: [],
    }
  },
  methods: {
    searchResult(keyword) { 
      if (keyword === '') {
        this.filteredList = this.blogData;
        this.showOriginalLists = true;
      } else {
        this.filteredList = this.blogData.filter(item =>
          item.title.includes(keyword)
        );
        this.showOriginalLists = false;
      }
    },

    saveData() {
      sessionStorage.setItem('counter', JSON.stringify(this.counter));
    },
    loadData() {
      const savedCounter = sessionStorage.getItem('counter');
      if (savedCounter) {
        this.counter = JSON.parse(savedCounter);
      } else { 
        this.counter = this.blogData.map(() => 0);
      }
    },
  },
  mounted() {
    this.loadData();
  },
  watch: {
    counter: {
      handler() {
        this.saveData();
      },
      deep: true,
    },
  },
};
</script>

<style>

.search_bar{
  margin:0 15px;
  position: relative;
}

.search_bar input{
  width:100%;
  border-radius: 5px;
}

.search_bar button{
  position:absolute;
  top:4px;
  right:12px;
  background:none;
  border:none;
}

.blog_list{
  overflow:hidden;
  margin:15px;
  padding-left:0;
}
.blog_list li{
  position:relative;
  background:#f9f9f9;
  margin-bottom:10px;
  padding:20px; 
  border-radius:15px;

}

.blog_list li .post-img{
  background-image: url("https://file.f-lab.kr/blog/c79a788e-4924-44b6-b8a0-15819c825715-p3VjAeZ-Qw013NuU.jpg");
  width:100%;
  height:250px;
  background-size:contain;
  border-radius:10px;
  margin-bottom:15px;
}

.blog_list li h3{
  font-size:20px;
  font-weight:600;
  color:#141414;
}

.blog_list li p{
  font-size:16px;
  font-weight:400;
  color:#333; 
  line-height:140%;

}

.blog_list li .list_bottom{
  margin-top:15px;
  border-top:dotted 1px #eee;
  display:flex;
  align-items: center;
  justify-content:space-between;
}

.blog_list li .list_bottom span{
  padding-top:10px;
  color:#aaa;
  font-size:14px;
}

.blog_list li .counter{
  position:absolute;
  top:10px;
  right:10px;
  font-size:12px;
  font-weight:500;
  background:#0c2aef;
  display:inline-block;
  color:#fff;
  padding:3px 8px;
  border-radius:15px;
}


</style>