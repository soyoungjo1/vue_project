<template>
  <div class="Main_ContentWrap">
    <h3 class="today_count">TODAY : {{ today }}</h3>

    <!-- 슬라이드 구현-->
    <div class="content_slide" data-aos="fade-up" data-aos-duration="1500">
        <carousel :items-to-show="1">
          <slide v-for="(slide, i) in slidetxt" :key="i">
            <div class="slide_content">
              <h3 v-html="slide.title"></h3>
              <ul class="slide_box">
                <li>
                  <p>{{ slidetxt[i].content }}</p>
                </li>
                <li>
                  <img :src="slide.img" alt="Slide Image">
                </li>
              </ul>
            </div>
          </slide>

          <template #addons>
            <!-- <navigation /> -->
            <pagination />
          </template>
        </carousel>
    </div>
    <!-- //슬라이드 구현-->

    <div class="content_about" data-aos="fade-up" data-aos-duration="1500">
      <ul @click="$router.push('/about')">
        <li>
          <p>Front-End Developer</p>
          <h3>About Me</h3>
        </li>
        <li><img src="../assets/jsy_intro.gif"></li>
      </ul>
    </div>

    <div class="content_sub" data-aos="fade-up" data-aos-duration="1500">
      <ul>
        <li class="news" @click="$router.push('/list')">
          <h3>News</h3>
        </li>
        <li class="contact" @click="$router.push('/contact')">
          <h3>Contact Me</h3>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';


export default {
  name: 'MainContent',
  data() {
    return {
      today: 0,
       slidetxt: [
        {
          title: `There is<br>someghing else<br>for you`,
          content: 'Do it Vue',
          img: "https://image.yes24.com/goods/58206961/XL",
        }, {
          title: `Where there <br>is a will there<br> is a way`,
          content: 'Do it React',
          img: "https://image.yes24.com/goods/116618508/XL",
        }
      ]
    }
  },
  mounted() {
    const saveToday = localStorage.getItem('today');
    if (saveToday) {
      this.today = parseInt(saveToday);
    }
    this.today++;
    this.saveData(); // 페이지가 로드될 때마다 데이터를 로컬 스토리지에 저장
  },

  methods: {
    saveData() {
      localStorage.setItem('today', this.today.toString());
    },
  },

  components: {
     Carousel,
     Slide,
     Pagination,
      // Navigation,
  },
}
</script>


<style>
.Main_ContentWrap{background:#f9f9f9; padding:20px 15px;}
.today_count{text-align:right; padding:30px 0 10px; font-size:22px; }

.slide_content {width:100%; text-align:left; }
.content_slide{background:#1234e1; border-radius:15px; padding:20px;}
.content_slide h3{ display:inline-block; color:#fff; font-size:28px; line-height:130%; text-align:left;}
.content_slide p{color:#fff; font-size:25px; line-height:130%; text-align:left;}
.content_slide img{ width:180px; margin:0 auto;}
.content_slide .slide_box{display:flex; align-items:flex-end; justify-content: space-between; margin-top:-15px; height: auto; padding-left:0; }
.content_slide .slide_box li{margin:0;}
.carousel__pagination-button--active::after{background-color:#fff !important;}
.carousel__pagination-button::after{background-color:rgba(255, 255,255,.5); width:5px; height:5px; border-radius: 100px;}
.carousel__pagination{margin-top:20px;}

.content_about{background:#000; margin-top:20px; border-radius:15px; padding:15px 20px; cursor:pointer;}
.content_about ul{overflow:hidden; padding-left:0; display:flex; align-items: center; width:100%;}
.content_about li{float:left; width:45%; text-align:center;}
.content_about li:nth-child(2){width:55%;}
.content_about li h3{color:#fff; font-size:28px;}
.content_about li p{color:#fff; font-size:18px; margin-bottom:5px;}
.content_about li img{max-width:100%; width:auto; margin: 0 auto;}

.content_sub ul{overflow:hidden; padding-left:0; margin-top:20px;}
.content_sub li{float:left; width:48%; margin-left:4%; background:#f346d9; color:#fff; padding:60px 20px 15px; border-radius:15px; cursor:pointer;}
.content_sub li:first-child{margin-left:0; background:#35e956; color:#141414; }

</style>