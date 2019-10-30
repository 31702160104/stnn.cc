<template>
  <div class="hotnews">
    <div class="hotnews-title">热点新闻</div>
	<!-- 热点新闻轮播图 -->
    <el-carousel :interval="4000" type="card" :height="screenWidth<990 ? '150px':'400px'" class="hotnews-carousel">
      <el-carousel-item v-for="(item,index) in hotnews_img" :key="index" class="hotnews-carousel-img">
			<div class="hotnews-carousel-imgbox">
				<div class="hotnews-carousel-title">{{item.title}}</div>
				<img :src="item.src" alt="">
			</div>
      </el-carousel-item>
    </el-carousel>
    <el-row class="hotnews-content">
      <el-col :span="15" :xs="24" :sm="24" :md="15" :lg="15" class="hotnews-content-left">
        <!-- 热点推荐 -->
        <div class="hotnews-content-hot">
          <div class="hotnews-content-title">热点推荐</div>
          <ul class="hotnews-content-list">
            <li class="hotnews-content-item" v-for="(item,index) of hotnews_hot":key="index">
              <router-link tag="a" target="_blank" :to="{name:'content'}">
                <div class="hotnews-content-img"><img :src="item.src" alt=""></div>
                <p>{{item.title}}</p>
                <div class="hotnews-content-time" >{{item.time}}</div>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- 热点精选 -->
        <div class="hotnews-jin-hot">
           <div class="hotnews-content-title">热点精选</div>
           <ul class="hotnews-jin-list" v-for="(item,index) of hotnews_jin":key="index">
             <li class="hotnews-jin-item" >
               <router-link tag="a" target="_blank" :to="{name:'content'}">
                 <el-row>
                    <el-col :span="7" :xs="8" :sm="8" :md="7" :lg="7"  class="hotnews-jin-img">
                      <div class="hotnews-jin-imgbox">
                        <img :src="item.src" alt="">
                      </div>
                    </el-col>
                    <el-col :span="17" :xs="16" :sm="16" :md="17" :lg="17"  class="hotnews-jin-content">
                        <div class="hotnews-jin-title">{{item.title}}</div>
                        <div class="hotnews-jin-time">{{item.time}}</div>
                    </el-col>
                 </el-row>
               </router-link>
             </li>
           </ul>
        </div>
      </el-col>
        <!-- 热点图文 -->
         <el-col :span="9"  :xs="24" :sm="24" :md="9" :lg="9" class="hotnews-picture-right">
           <div class="hotnews-picture-col">
             <div class="hotnews-picture-title">热点图文</div>
				<div class="hotnews-picture-box"  v-for="(item,index) of hotnews_picture":key="index">
					<div class="hotnews-picture-boximg">
						<img :src="item.src" alt="">
					</div>
					<p>{{item.title}}</p>
				</div>
			</div>
		<!-- 最新热点 -->
            <div class="hotnews-newshot">
              <b-tabs
                active-nav-item-class="font-weight-bold text-uppercase text-danger"
                active-tab-class="font-weight-bold text-success"
                content-class="mt-3"
              >
                <b-tab title="最新热点" active >
                  <ul class="hotnews-newshot-list">
                    <li class="hotnews-newshot-item hotnews-newshot-height" v-for="(item,index) of hotnews_news" :key="index" >
                      <router-link tag="a" target="_blank" :to="{name:'content'}">
                       <p>
                         <span :class="index<3 ? 'hotnews-newshot-number-qian3':'hotnews-newshot-number'">{{index+=1}}</span>
                           {{item.title}}
                       </p>
                      </router-link>
                    </li>
                  </ul>
                </b-tab>
              </b-tabs>
            </div>
          </el-col>
        <!-- 特别推荐 -->
          <div class="hotnews-special">
              <div class="hotnews-special-title"><span>特别推荐</span></div>
              <ul class="hotnews-special-list">
                <li v-for="(item,index) in hotnews_special" :key="index"  class="hotnews-special-item">
                  <router-link tag="a" target="_blank" :to="{name:'content'}">{{item.title}}</router-link>
                </li>
              </ul>
          </div>
      </el-col>
   </el-row>
  </div>

</template>

<script>
export default {
	data() {
	  return {
		  // 轮播图
		hotnews_img: [
		  { src: require("../../images/home/hotnews/hotnews01.jpg"),title:"蔡英文妄称'大陆最怕台湾三件事' 国台办:不值一驳"},
		  { src: require("../../images/home/hotnews/hotnews02.jpg"),title:"国庆阅兵训练场画面曝光 来提前感受受阅官兵风姿"},
          { src: require("../../images/home/hotnews/hotnews03.jpg"),title:"酒店大亨希尔顿去世 8个孩子15个孙辈无缘巨额遗产"},
          { src: require("../../images/home/hotnews/hotnews04.jpg"),title:"现实版孤儿怨？女子伪装6岁孩童 被收养后欲杀养母"},
		],
		// 热点推荐
		hotnews_hot: [
		  { src: require("../../images/home/hotnews/hotnews05.jpg"),title:"北京大兴国际机场通航 总投资4500亿元",time:"2019-09-25 19:02"},
		  { src: require("../../images/home/hotnews/hotnews06.jpg"),title:"揭秘'杀猪盘':被害人自杀率高 有人6天被骗1660万",time:"2019-09-23 02:00:22"},
          { src: require("../../images/home/hotnews/hotnews07.jpg"),title:"猪肉价格降了！又有1万吨'国家存的猪肉'即将投放",time:"2019-09-25 07:20:14"},
		],
		// 热点精选
		hotnews_jin: [
		  { src: require("../../images/home/hotnews/hotnews08.jpg"),title:"华人女子在美国闹市狂追偷包贼 交警围观：帮不了",time:"2019-09-25 10:29:11"},
		  { src: require("../../images/home/hotnews/hotnews09.jpg"),title:"郭台铭退党案　国民党中常会决议慰留",time:"2019-09-25 16:38"},
          { src: require("../../images/home/hotnews/hotnews10.jpg"),title:"国民党今处理郭党籍　郭董交代发言人这样说",time:"2019-09-25 16:56"},
          { src: require("../../images/home/hotnews/hotnews11.jpg"),title:"国庆大阅兵 这个方队有27名将军国庆大阅兵",time:"2019-09-25 20:14"},
		  { src: require("../../images/home/hotnews/hotnews12.jpg"),title:"9月25日外交部例行记者会(全文)",time:"2019-09-25 20:13"},
		  { src: require("../../images/home/hotnews/hotnews13.jpg"),title:"赵少康将控告李登辉、刘泰英涉背信",time:"2019-09-25 15:58"},
          { src: require("../../images/home/hotnews/hotnews14.jpg"),title:"华为重塑供应链！美企正被这些公司取代",time:"2019-09-25 09:26:09"},
          { src: require("../../images/home/hotnews/hotnews15.jpg"),title:"孟买上百万人挤贫民窟 首富1家5口住27层高楼豪宅",time:"2019-09-23 07:06:31　"},
          { src: require("../../images/home/hotnews/hotnews16.jpg"),title:"李子柒入选福布斯榜 做家具超火却被批评宣扬女德",time:"2019-09-18 07:02:31"},
          { src: require("../../images/home/hotnews/hotnews17.jpg"),title:"深圳互联网老总买几千万豪宅 装修花了一百多万",time:"2019-09-20 07:08:32"},					
		],	
		// 热点图文
		hotnews_picture: [
		  { src: require("../../images/home/hotnews/hotnews18.jpg"),title:"中国小伙勇闯印度最大贫民窟 几千人共用一个厕所"},
		  { src: require("../../images/home/hotnews/hotnews19.jpg"),title:"韩国贫富差距大到惊人 穷人拼尽全力才能住地下室"},
		],	
		// 最新热点
		hotnews_news: [
		  {title:"蔡英文妄称'大陆最怕台湾三件事' 国台办:不值一驳"},
		  {title:"独家视频丨习近平乘坐轨道列车前往北京大兴国际"},
          {title:"大妈想透气打开飞机安全门?厦航:提醒后仍触碰开关"},
          {title:"班主任被举报收礼 家长联名挽留:公平公正却被陷害"},
		  {title:"国庆阅兵训练场画面曝光 来提前感受受阅官兵风姿"},
		  {title:"6台湾绿媒称张家界景区是'台独' 被网友一句话破功"},
          {title:"华为或把5G技术卖给美国？华为董事长：是真心的"},
          {title:"20031笔！男子打工10年攒55万 被抑郁妻子"},		  
          {title:"特朗普登机时一张20美金在裤兜随风飘扬 总统回应"},
          {title:"俄首播新中国成立彩色纪录片 含大量未公开过影像"},			
		],		
       // 特别推荐
		hotnews_special: [
		  {title:"华为重塑供应链！美企正被这些公司取代"},
		  {title:"重点来了 王毅在纽约这样谈中美关系重点来了"},
          {title:"国庆大阅兵 这个方队有27名将军国庆大阅兵"},
          {title:"沈富雄：朱韩角色对调　保证选情逆转"},
		  {title:"“邦交”国全断台湾就“独立”？马英九：头壳坏掉了"},
		  {title:"赵少康将控告李登辉、刘泰英涉背信"},
          {title:"私烟案发酵两月调查无进展 台当局被讽：大事化小？"},
          {title:"空降浙江任纪委书记的他 曾在金融系统工作34年"},		  
          {title:"已有六位阅兵将军领队披露 3位出身陆军"},
          {title:"人民日报：推特为“港独”站台 打错了利益算盘"},			  
		],				
     screenWidth: document.body.clientWidth
	  };
	},
  mounted () {
    const that = this
    window.onresize = () => {
        return (() => {
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
        })()
    }

  },
watch:{
  screenWidth(val){
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if(!this.timer){
          // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
          this.screenWidth = val
          this.timer = true
          let that = this
          setTimeout(function(){
              // 打印screenWidth变化的值
              that.timer = false
          },400)
      }
  }
}
};

</script>

<style scoped="scoped">
  a{
    color: #000000;
  }
  a:hover{
    color: orangered;
  }
  .hotnews{
    height: auto;
    margin: 0 auto;
    max-width: 1400px;
    margin-bottom: 50px;
    background-color: white;
  }
  .hotnews-title{
    width: 100%;
    height: 60px;
    line-height: 60px;
    color:orangered;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: left;
    padding-left: 50px;
    background-color: white;
    border-bottom:1px solid #FF6633;
  }
  /* 轮播图 */
  .hotnews-carousel{
    margin-top: 20px;
    height: auto;
  }
  .hotnews-carousel-imgbox{
	width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .hotnews-carousel-imgbox img{
    width: 100%;
    height: 100%;
  }
  .hotnews-carousel-title{
   position: absolute;
   height: 3.125rem;
   line-height: 3.125rem;
   bottom: 0px;
   left: 0px;
   right: 0px;
   color: white;
   font-size: 1.25rem;
   overflow:hidden;
   text-overflow:ellipsis;
   display:-webkit-box;
   -webkit-box-orient:vertical;
   -webkit-line-clamp:1;
   background: url(../../images/home-titileback.png);
  }
  @media only screen and (max-width:990px) {
    .hotnews-carousel-title{
	    height: 30px;
	    line-height: 30px;
	    font-size: 1rem;
	    bottom: 18px;
    }
  }  
  /* 热点推荐 */
  .hotnews-content-left{
    height: auto;
    padding-left:10px;
    text-align: left;
    background-color: white;
  }
  .hotnews-content-hot{
    padding: 10px;
  }
  .hotnews-content-title{
    padding-left: 10px;
    width:7.5rem;
    font-size: 1.5rem;
    border-bottom: 2px solid orangered;
  }
  .hotnews-content-list{
    height: auto;
    padding: 10px;
 }
  .hotnews-content-item{
    max-height:25rem;
    padding: 20px;
  }
  .hotnews-content-item:hover{
   box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
 }
  .hotnews-content-img{
    width:100%;
    max-height: 18.75rem;
    overflow: hidden;
  }
  .hotnews-content-img img{
    width: 100%;
    height: 100%;
  }
  .hotnews-content-img img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .hotnews-content-item p{
    height: 1.875rem;
    line-height: 1.875rem;
    padding-left: 15px;
    font-size: 1rem;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:1; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
  .hotnews-content-time{
    height: 20px;
    line-height: 20px;
    padding-left: 15px;
    font-size: 1rem;
  }
  /* 热点精选 */
   .hotnews-jin-hot{
    padding: 10px;
  }
  .hotnews-jin-list{
    padding: 5px;
 }
  .hotnews-jin-item{
   padding:10px;
   height: 5rem;
   max-height: 14.375rem;
 }
  @media only screen and (max-width:990px) {
    .hotnews-jin-item{
        max-height: 90px;
    }
  }
  .hotnews-jin-item:hover{
    box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
  }
  .hotnews-jin-content{
    padding-left: 5px;
  }
  .hotnews-jin-item {
    margin: 0px;
    height: 12.5rem;
    line-height: 2.1875rem;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:2; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }

  .hotnews-jin-title{
    height:5rem;
	font-weight: bold;
    line-height:4rem;
    font-size: 1.2rem;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:1; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
  @media only screen and (max-width:990px) {
    .hotnews-jin-title{
       margin: 0px;
	   font-size: 1rem;
       height: 40px !important;
       line-height:40px !important;
    }
  }
   .hotnews-jin-time{ 
    font-size:0.9375rem;
    padding: 2px;
    height: 1.2rem;
    line-height:1.2rem;
   }
  .hotnews-jin-img img{
    width: 100%;
    height: 100%;
  }
  .hotnews-jin-imgbox{
	margin-bottom: 10px;
	height:180px;
	background-color: red;
    overflow: hidden;
  }
 @media only screen and (max-width:990px) {
     .hotnews-jin-imgbox {
		height: 100px;
     }
   }    
  .hotnews-jin-img img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  /* 热点图文 */
  .hotnews-picture-col{
    padding-top: 10px;
    height: auto;
    padding-bottom: 10px;
  }
   .hotnews-picture-title{
    width:150px;
    height: 2.1875rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
    margin-left: 30px;
    padding-left: 15px;
    border-bottom: 2px solid orangered;
  }
  .hotnews-hotnews-col{
    margin-top: 10px;
  }
  .hotnews-picture-box{
    height: 300px;
    width: auto;
    margin-right:30px;
    margin-left:30px;
    margin-top: 10px;
	margin-bottom: 1.875rem;
    padding: 10px;
  }
  .hotnews-picture-boximg{
    width:100%;
    height:280px;
    overflow: hidden;
  }
  .hotnews-picture-box img{
    width: 100%;
    height: 100%;
  }
 .hotnews-picture-box img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .hotnews-picture-box p{
    height: 1.875rem;
    line-height: 1.875rem;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;
  }
    /* 最新热点新闻 */
  .text-danger{
    color: orangered !important;
  }
  .hotnews-right{
    padding-top: 10px;
  }
  .hotnews-newshot{
	margin-top: 20px;
  }
  .hotnews-newshot-list{
    text-align: left;
    padding-left: 10px;
    padding-bottom: 20px;
    position: relative;
    height: auto;
    color: #000000;
  }
  .hotnews-newshot-item {
    padding: 10px 5px;
    border-bottom: 1px solid #FFCC99;
  }
  .hotnews-newshot-item:last-child{
    border: none;
  }
  .hotnews-newshot-item span{
    margin-right: 10px;
    line-height: 1.5625rem;
    width: 1.5625rem;
    height: 1.5625rem;
    text-align: center;
    display: inline-block;
    border-radius: 50%
  }
  .hotnews-newshot-number{
    background-color: #ddd;
  }
  .hotnews-newshot-number-qian3{
    background-color: orangered;
    color: white;
  }
  .hotnews-newshot-item p{
    height:1.5625rem;
    line-height: 1.5rem;
    width: 100%;
    font-size: 1rem;
    font-weight: normal;
    text-align: left;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:1; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
/* 特别推荐 */
  .hotnews-special{
   background-color: white;
   text-align: left;
   padding-top: 50px;
   height: auto;
  }
  .hotnews-special-title{
    padding: 10px 0px 10px 20px;
    border-bottom: 1px solid #ddd;
  }
  .hotnews-special-title span{
    padding: 10px 0px 10px 20px;
    font-size: 1rem;
    color: orangered;
    font-weight: bold;
  }
  .hotnews-special-list{
    padding: 0px;
  }
  .hotnews-special-item{
    padding: 0px 20px;
    height: 3.125rem;
    line-height: 3.125rem;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:1; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
</style>
