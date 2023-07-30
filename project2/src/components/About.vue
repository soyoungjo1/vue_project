<template>
  <div>
    <div class="about_top" data-aos="fade-up" data-aos-duration="1500">
      <img src="../assets/jsy_intro.gif" />
      <p>
        1996년 4월 10일에 태어난 조소영입니다.<br>
        백문이 불여일견.백 번 듣는것이 한번 보는 것보다 못하다.<br>
        직접 경험해야 확실히 알 수 있다는 말의 뜻을 가진사자성어를 좋아 합니다.<br>
        원하는 삶의 방향성은 어떤것이든 직접 경험 하고
        깨달으며 성장하고 나아가는 사람이 되고자 합니다.
      </p>
    </div>

    <div class="skills" data-aos="fade-up" data-aos-duration="1500">
      <h3>About My Skiils</h3>
      <ul>
        <li v-for="(skilllist, i) in skillData" :key="i">
          <img :src="require(`@/assets/${skilllist.img}`)">
          <p>{{ this.skillUp >= skilllist.num ? skilllist.num : this.skillUp }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import skillData from '../assets/skills.js';

export default {
  name: "About",
  data(){
    return {
      skillData : skillData,
      skillUp : 0,
    }
  },
  mounted() {
    const interval = setInterval(() => {
      if (this.skillUp < 100) {
        this.skillUp++;
      } else {
        clearInterval(interval);
      }
    }, 30);
  },
};
</script>

<style scoped>
.about_top{
  margin:0 20px;
  background:#000;
  border-radius: 10px;
}

.about_top img{ 
  max-width:100%; 
  width:100%; 
  margin:0 auto;
  border-radius:10px;
}

.about_top p{
  word-break: keep-all;
  padding:20px;
  color: #fff;
  font-size:20px;
  line-height: 140%;
}
.skills{
  margin-top:50px;
}

.skills h3{
  padding-left:20px;
  padding-bottom:10px;
  font-size:30px;

}
.skills ul{
  overflow:hidden;
  padding-left:0;
}

.skills li{
  float:left;
  width:23%;
  margin-left:2%;
  text-align:center;
}

.skills li:nth-child(4n+1){
  margin-left:0;
}

.skills li p{
  font-weight: 600;
  font-size:20px;
  padding-top:5px;
}

</style>
