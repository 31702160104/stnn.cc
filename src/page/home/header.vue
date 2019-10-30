<template>
  <div class="header" id="grad">
    <!-- 滚动导航栏 -->
    <el-row class="header-row">
      <el-col :span="5" :xs="24" :sm="24" :md="5" :lg="5" class="header-logo"><img src="../../images/logo.png" alt=""></el-col>
      <el-col :span="19" :xs="24" :sm="24" :md="19" :lg="19" class="header-title">
         <div id="maincate" class="maincate">
            <a href="#" @click="home" class="hh">首页</a>
            <a href="#" @click="continent">大陆</a>
            <a href="#" @click="hkmacao">港澳</a>
            <a href="#" @click="taiwan">台湾</a>
            <a href="#" @click="international">国际</a>
            <a href="#" @click="society">社会</a>
            <a href="#" @click="guangshen">广深</a>
            <a href="#" @click="decrypt">揭秘</a>
            <a href="#" @click="picture">图集</a>
            <a href="#" @click="football">足球</a>
			<a href="#" @click="contact">联系我们</a>
          </div>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      addClass(index){
      this.current=index;
      },
      home(){
        this.$router.push({path:'/home'});
      },
      continent(){
        this.$router.push({path:'/continent'});
      },
      hkmacao(){
        this.$router.push({path:'/hkmacao'});
      },
      taiwan(){
        this.$router.push({path:'/taiwan'});
      },
      international(){
        this.$router.push({path:'/international'});
      },
      society(){
        this.$router.push({path:'/society'});
      },
      guangshen(){
        this.$router.push({path:'/guangshen'});
      },
      decrypt(){
        this.$router.push({path:'/decrypt'});
      },
      picture(){
        this.$router.push({path:'/picture'});
      },
      football(){
        this.$router.push({path:'/football'});
      },
      contact(){
        this.$router.push({path:'/contact'});
      },
    }
  }
</script>

<style scoped="scoped">
  .active{
    color: red;
  }
a{
  color: #000000;
}
  a:hover{
   color: orangered;
  }
  /* 导航栏 */
  .header{
   max-width: 1400px;
   height:auto;
   margin: 0 auto;
   position: relative;
   top: 0px;
   left: 0px;
   right: 0px;
   background-color: #fff;
   padding-top: 10px;
   padding-bottom: 10px;
  }

 .maincate {
    width: 100%;
    line-height: 50px;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    /* box-shadow: 0 1px 1px rgba(0,0,0,.1); */
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
    -webkit-overflow-scrolling: touch;
    text-align: justify;
    padding: 0px 5px;
    box-sizing: border-box;
  }
  .maincate a{
    color: #000;
    text-decoration: none;
    margin-right: 30px;
    margin-left: 10px;
    }
  .maincate a:hover{
      color: orangered;
    }

  .maincate::-webkit-scrollbar{
    display: none;
    }

</style>
