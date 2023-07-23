<template>
  <div class="home_Warp">
    <div class="home_top" data-aos="fade-up" data-aos-duration="3000">
      <h4>안녕하세요.<br>실무자조씨의<br>블로그 입니다.</h4>
    </div>

    <div class="home_slide" data-aos="fade-up" data-aos-duration="3000">
      <h5>요즘 읽는 책</h5>
      <p>요즘 인기있는 책은 뭐지?</p>
      <!-- <슬라이드작업> -->
      <carousel :items-to-show="1">
        <slide v-for="(slide,i) in slidetxt" :key="i">
          <div class="slide_content">
            <ul>
              <li>
                <h3 v-html="slidetxt[i].title"></h3>
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
  </div>
  

</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

export default {
  name: 'App',
  data(){
    return{
      slidetxt : [
      { 
          title : '프론트엔드개발자가<br>가장 많이 읽은 책은',
          content : '책책책 책을 읽읍시다!!',
          img : "https://image.yes24.com/goods/58206961/XL",
        },{ 
          title : '두번째로<br> 많이 읽은 책은',
          content : '책책책 책을 읽읍시다!!',
          img : "https://image.yes24.com/goods/116618508/XL",
        }
      ]
    }
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
.home_Warp{
  padding:15px 0 10px;
}
.home_top{
    margin-top:0;
    padding:0 15px;
  }

  .home_top h4{
    padding:0;
    margin-top:30px;
    font-weight:600;
    font-size:30px;
    text-align:left;
    line-height:140%;
  }

  .home_top p{
    padding:0;
    margin:0;
    font-size:16px;

  }

  .home_slide{
    margin-top:50px;
    background:#f9f9f9;
    padding:30px 0 ;
  }
  .home_slide h5{
    text-align:left;
    font-size:25px;
    color:#333;
    padding-left:15px;
    margin-bottom:5px;
    font-weight:600;
  }
  .home_slide p{
    text-align:left;
    font-size:19px;
    margin-bottom:30px;
    color:#555;
    padding-left:15px;
  }
  
  .slide_content{
    width:100%;
    padding:10px 20px;
    background:#fff;
    border-radius:10px;
    margin:0 15px;
  }
  .slide_content ul{
    overflow:hidden;
    display:flex;
    align-items:center;
    padding-left:0;
  }
  .slide_content li{
    list-style: none;
    float:left;
    width:50%;
    text-align:left;
  }
  .slide_content li h3{
    font-size:17px;
    font-weight:600;
  }
  .slide_content li p{
    font-size:14px;
    font-weight:400;
   padding-left:0;
  }
  .slide_content li img{
    max-width:100%;
    width:auto;
    margin:0 auto;
    border:solid 1px #eee
  }
</style>