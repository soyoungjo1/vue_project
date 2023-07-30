<template>
  <div class="contactWrap">
    <h3>Contact Me!</h3>
    <ul>
      <li>
        <img src="../assets/mail_icon.png">
        <a @click="sendEmail" href="#">{{ email }}</a>
      </li>
      <li>
        <img src="../assets/insta_icon.png">
        <a href="https://instagram.com/ya_soyoung_a?igshid=OGQ5ZDc2ODk2ZA==">ya_soyoung_a</a>
      </li>
      <li>
        <img src="../assets/link_icon.png">
        <a href="http://yasoyounga.com/portfolio/">portfolio</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name : 'Contact',
    data(){
      return{
        email : "whthdud1996@naver.com"
      }
    },
    methods :{
      sendEmail(){
        const mailtoLink = `mailto:${this.email}`;
        window.location.href = mailtoLink;
      }
    }
}
</script>

<style scoped>
.contactWrap h3{
  padding-left:20px;
  padding-bottom:10px;
  font-size:30px;

}
.contactWrap ul{
  overflow:hidden;
  padding-left:0;
}

.contactWrap ul li{
  padding:10px 20px;
}

.contactWrap ul li a{
  margin-left:15px;
  font-size:20px;
  cursor:pointer;
}
</style>