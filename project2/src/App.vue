<template>
  <div>
    <!-- 메뉴바 -->
    <div class="nav_bar_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">JO_C Blog</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link to="/"><a class="nav-link active" aria-current="page" href="#">Home</a></router-link>
              <router-link to="/about"><a class="nav-link" href="#">About</a></router-link>
              <router-link to="/list"><a class="nav-link" href="#">News</a></router-link>
              <router-link to="/deatil"><a class="nav-link" href="#">Contact Me</a></router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- 상단 타이틀 -->
    <div class="mainTitle" data-aos="fade-up" data-aos-duration="1500">
      <h2>
        A working-level official<br>
        Front-End Developer<br>
        Jo_C Blog
      </h2>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  
  components: {
    
  },
}
</script>

<style>
@import '../src/assets/common.css';
@import '../src/assets/font/font.css';


.nav_bar_menu{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  background:#fff;
  z-index:99;
}
.navbar-nav{
  background:#fff;
}
.navbar{
  padding:10px 15px !important;
}

.mainTitle{
  padding:30px 15px 20px;
  text-align:left; 
}

.mainTitle h2{
  font-size:45px;
  line-height:120%;
  font-weight:600;
  padding:80px 0 30px;
}


</style>