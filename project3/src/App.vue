<template>
<div>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step == 1" @click="step--">Prev</li>
      <li v-if="step == 2" @click="step-=2">Cancle</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">업로드</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- <vuex 사용법> 
  <p>{{ name }} {{ age }} {{ likes }} {{ 내이름 }} {{ 카운터 }}</p>
  <button @click="카운터++">버튼</button>
  <h4>안녕 {{ $store.state.name }}</h4>
  <h3 >{{ $store.state.age }}</h3>
  <button @click="$store.commit('이름변경')">버튼</button>
  <button @click="$store.commit('나이올리기', 10)">나이올리기</button> 
  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기더보기</button>-->

  <Container :postlist="postlist" :step="step" :imgUrl="imgUrl" :selectfilter="selectfilter" @write="textbox = $event"/>
  <button :style="{display:`none`}" class="morebtn" @click="more">더보기 +</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" @update:vlaue="updateText"/>
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>



</div>
</template>

<script>
import postData from './assets/postData.js';
import Container from './components/Container.vue';
import axios from 'axios';
import {mapMutations, mapState} from 'vuex';

export default {


  name: 'App',
  data(){
    return{
      postlist : postData,
      num : 0,
      step : 0,
      imgUrl : '',
      textbox:'',
      selectfilter:'',
      카운터 :0,
    }
  },

  mounted(){
    this.emitter.on('필터선택', (a)=>{
      this.selectfilter = a;
    });
  },

  methods :{
    ...mapMutations(['이름변경','나이올리기','좋아요']),

    now(){
      return new Date()
    },
    publish(){
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.imgUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.textbox,
        filter: this.selectfilter,
      };
      this.postlist.unshift(내게시물);
      this.step = 0;
    },
    upload(e){
      let file = e.target.files;
      console.log(file[0]);
      this.imgUrl = URL.createObjectURL(file[0]);
      this.step++;
    },
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.num}.json`)
      .then((result)=>{
        this.postlist.push(result.data);
        this.num++;
      });
    }
  },

  components: {
    Container : Container,
  },
  computed : {
    name(){
      return this.$store.state.name
    },
    ...mapState(['name','age','likes']),
    ...mapState({내이름 :'name', }),

  },
}
</script>

<style>
@import 'style.css';

</style>
