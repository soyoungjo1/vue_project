m that is currently selected. When a content item is clicked, the openModal method is called, which sets the selectedContent and selectedIndex to the clicked content item's data. The modal is shown when selectedContent is not null, and it displays the details of the selected content item. The closeModal method is used to close the modal when the close button is clicked.

Make sure to add the styles to the existing CSS styles so that the modal looks visually appealing. You may also customize the appearance of the modal as per your preference.




User
한국말로 해줘
ChatGPT
좋습니다! 모달을 구현하려면 Vue.js 템플릿에 몇 가지 수정을 해야 하며, 추가적인 코드를 추가해야 합니다. 아래는 모달 구현을 포함한 업데이트된 코드입니다:

html
Copy code
<template>
  <div>
    <!-- 검색 바 -->
    <div class="search_bar">
      <input @keyup="searchResult(keyword)" placeholder="제목을 검색해보세요." v-model="keyword">
      <button type="button" @click="searchResult(keyword)"><img src="../assets/search_icon.png"></button>
    </div>

    <!-- 컨텐츠 목록 -->
    <div>
      <!-- 검색 전 -->
      <div v-if="filteredList.length > 0">
        <ul class="blog_list" v-for="(list, i) in filteredList" :key="i" data-aos="fade-up" data-aos-duration="1500">
          <li @click="openModal(list); counter[i]++">
            <div class="post-img" :style="{ 'background-image': 'url(' + list.img + ')' }"></div>
            <h3>{{ list.title }}</h3>
            <p>{{ list.subtitle }}</p>
            <div class="list_bottom">
              <span>{{ list.date }}</span>
              <span>{{ list.name }}</span>
            </div>
            <p class="counter">조회수 : {{ counter[i] }}</p>
          </li>
        </ul>
      </div>

      <!-- 검색 후 -->
      <div v-else>
        <ul class="blog_list" v-for="(list, i) in blogData" :key="i" data-aos="fade-up" data-aos-duration="1500">
          <li @click="openModal(list); counter[i]++">
            <div class="post-img" :style="{ 'background-image': 'url(' + list.img + ')' }"></div>
            <h3>{{ list.title }}</h3>
            <p>{{ list.subtitle }}</p>
            <div class="list_bottom">
              <span>{{ list.date }}</span>
              <span>{{ list.name }}</span>
            </div>
            <p class="counter">조회수 : {{ counter[i] }}</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 모달 -->
    <div v-if="selectedContent" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h3>{{ selectedContent.title }}</h3>
        <div class="post-img" :style="{ 'background-image': 'url(' + selectedContent.img + ')' }"></div>
        <p class="sub_title">{{ selectedContent.subtitle }}</p>
        <p>{{ selectedContent.content}}</p>
        <div class="list_bottom">
          <span>{{ selectedContent.date }}</span>
          <span>{{ selectedContent.name }}</span>
        </div>
        <p class="counter">조회수 : {{ counter[selectedIndex] }}</p>
      </div>
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
      selectedContent: null,
      selectedIndex: null,
    };
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
    openModal(content) {
      this.selectedContent = content;
      this.selectedIndex = this.blogData.indexOf(content);
    },
    closeModal() {
      this.selectedContent = null;
      this.selectedIndex = null;
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

.modal {
  display: block;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border: 1px solid #888;
  width: 100%;
  border-radius: 10px;
}
.modal-content .post-img{
  height:350px;
  background-size:contain;
  background-position-y:center;
}
.modal-content h3{
  font-size:30px;
  margin:5px 0 15px;
  font-weight:600;
}
.modal-content .sub_title{
  font-size:22px;
  font-weight: 500;
  padding-top:10px;
  line-height:130%;
  color: #141414;
}
.modal-content p{
  font-size:16px;
  font-weight:400;
  color:#555;
  line-height:140%;
}

.modal-content .list_bottom{
  padding-top:10px;
  border-top:dotted 1px #ddd;
}

.modal-content .list_bottom span{
  float:right;
}

.modal-content .list_bottom span:first-child{
  float:left;
}

.modal-content .counter{
  padding-top:5px; 
  font-size:15px;
  color:#aaa;
}

.close {
  color: #aaa;
  float: right;
  font-size: 35px;
  font-weight: bold;
  padding-bottom:5px;
  text-align:right;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

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