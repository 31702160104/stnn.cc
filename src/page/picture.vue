<template>
  <div class="picture">
    <div class="picture-header">图集</div>
    <!-- 大图 -->
    <div class="picture-bigimg">
      <el-row>
        <el-col :span="17" :xs="15" :sm="15" :md="17" :lg="17" >
			<router-link tag="a" target="_blank" :to="{name:'content'}">
				<div class="picture-bigimg-left">
					<div class="picture-bigleft-img"><img src="../images/picture/picture01.jpg" alt=""></div>
					<div class="picture-bigimg-title">国庆阅兵倒计时 直击受阅部队官兵冲刺训练</div>
				</div>
			</router-link>
        </el-col>
	<!-- 右侧两小图 -->
        <el-col :span="7" :xs="9" :sm="9" :md="7" :lg="7" >
          <div class="picture-bigimg-right">
			<router-link tag="a" target="_blank" :to="{name:'content'}">
				<div class="picture-bigimg-rbox">
					<div class="picture-bigright-img"><img src="../images/picture/picture02.jpg" alt=""></div>
					<div class="picture-bigimg-title">我国落差最大的天然石桥，横跨高山之巅，这座旅游石桥你敢走吗？</div>
				</div>							
			</router-link>
			<router-link tag="a" target="_blank" :to="{name:'content'}">
				<div  class="picture-bigimg-rbox">
					<div class="picture-bigright-img"><img src="../images/picture/picture03.jpg" alt=""></div>
					<div class="picture-bigimg-title">6岁烧伤男孩被母亲抛弃上幼儿园又被拒，大哭：我很吓人吗？</div>
				</div>							
			</router-link>
          </div>
        </el-col>
      </el-row>
    </div>


    <div class="picture-newsp">
      <el-row>
        <!-- 最新图片新闻 -->
        <el-col :span="17" :xs="24" :sm="24" :md="17" :lg="17" >
          <el-row class="picture-newsp-list">
            <div class="picture-special-title">最新图片新闻</div>
            <el-col :span="6" :xs="12" :sm="12" :md="6" :lg="6" v-for="(item,index) of picture_news" :key="index" class="picture-newsplist-item">
				<router-link tag="a" target="_blank" :to="{name:'content'}">
					<div class="picture-newsp-imgbox"><img :src="item.src" /></div>
					<p>{{item.title}}</p>					
				</router-link>
            </el-col>
          </el-row>
        </el-col>
        <!-- 精选图片新闻 -->
       <el-col  :span="7"  :xs="24" :sm="24" :md="7" :lg="7"  class="picture-special-col">
          <div class="picture-special-title">精选图片新闻</div>
          <div class="picture-special-box" v-for="(item,index) of picture_jin":key="index">
			  <router-link tag="a" target="_blank" :to="{name:'content'}">
					<div class="picture-special-boximg"><img :src="item.src" alt=""></div>
					<p>{{item.title}}</p>				  
			  </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
  	data() {
		return{
		// 最新图片新闻
		picture_news: [
			{ src: require("../images/picture/picture04.jpg"),title:"圆明园启动修复11件文物 康熙、雍正、乾隆三朝文物同修"},
			{ src: require("../images/picture/picture05.jpg"),title:"2019年趣味野生动物摄影大赛入围作品赏"},
			{ src: require("../images/picture/picture06.jpg"),title:"“出村”的路上，我们照亮彼此"},
			{ src: require("../images/picture/picture07.jpg"),title:"看完这组照片都会思考人生，时间真的好快，转眼父母老去我们长大"},
			{ src: require("../images/picture/picture08.jpg"),title:"男模T台走出“六亲不认”步伐，却受高赞美，时尚女魔头罕露笑容"},
			{ src: require("../images/picture/picture09.jpg"),title:"美国11岁熊孩子为见网友，半夜开走家里的车，狂飙300公里"},			
			{ src: require("../images/picture/picture10.jpg"),title:"第一代人民海军孙世友：“现在海军越来越强大，可惜我也老了”"},
			{ src: require("../images/picture/picture11.jpg"),title:"美恶魔医生袭击28岁女子致其瘫痪，30年后案件重启，凶手伏法"},
			{ src: require("../images/picture/picture12.jpg"),title:"保定清晨，城市间一幕独特的风景"},			
			{ src: require("../images/picture/picture13.jpg"),title:"意想不到！褪去颜色的海底世界竟然是这样……"},
			{ src: require("../images/picture/picture14.jpg"),title:"阿奇在妈妈怀中开心大笑，梅根曝光宝宝可爱小名；母子温馨动人心"},
			{ src: require("../images/picture/picture15.jpg"),title:"特朗普遭弹劾调查着急洗白，乌总统帮忙：只有6岁儿子能对我施压"},			
			{ src: require("../images/picture/picture16.jpg"),title:"插画家手绘一系列“社会现象”，引人深思"},
			{ src: require("../images/picture/picture17.jpg"),title:"大兴国际机场正式启用，英媒点赞，并鼓励英国人买票去看看"},
			{ src: require("../images/picture/picture18.jpg"),title:"遭弹劾调查，特朗普：美国没有哪位总统像我这样被如此恶劣地对待"},		
			{ src: require("../images/picture/picture19.jpg"),title:"一个篮球场停13辆车，小孩夹缝中练球，男篮基本功能好吗？"},	
			{ src: require("../images/picture/picture20.jpg"),title:"伊万卡穿纯白西装开会，酷似当年希拉里，和主播准大嫂同框比美！"},
			{ src: require("../images/picture/picture21.jpg"),title:"他修过文物当过老师 如今用太空泥“盖”青岛里院"},
			{ src: require("../images/picture/picture22.jpg"),title:"摄影师捕捉到了大自然的珍贵瞬间"},					
			{ src: require("../images/picture/picture23.jpg"),title:"他被誉为“行走的调色盘”，拍下的照片美似电影截图"},
			{ src: require("../images/picture/picture24.jpg"),title:"大山深处发现个石头院，有人搭话可半小时开不了门，看看是谁在家"},
			{ src: require("../images/picture/picture25.jpg"),title:"中国大熊猫妈妈拥抱亲吻幼崽，萌化全球网友，登上英国媒体"},	
			{ src: require("../images/picture/picture26.jpg"),title:"51岁邓文迪新恋情后晒照，百褶裙小白鞋好年轻，不爱鲜肉爱大叔"},
			{ src: require("../images/picture/picture27.jpg"),title:"英记者披露：BBC刻意夸大戴安娜之死，为搏收视率炒作王室伤痛"},
			{ src: require("../images/picture/picture28.jpg"),title:"新疆这条峡谷，是地震后留下的伤疤，如今却美得不像人间！"},								
			{ src: require("../images/picture/picture29.jpg"),title:"安徽马鞍山：700年古寺中，聆听一位正道修行的老师父诵经说法"},
			{ src: require("../images/picture/picture30.jpg"),title:"幸福与金钱无关，这些瞬间照有钱也买不到，原来快乐这么简单"},
			{ src: require("../images/picture/picture31.jpg"),title:"“富养”女儿关键不在花钱，而是给她这4样东西，将会越来越优秀"},								
							
		],
		// 精选图片新闻
		picture_jin: [
			{ src: require("../images/picture/picture32.jpg"),title:"印尼森林大火持续燃烧，整个国土被雾霾笼罩，孩子戴着口罩上课"},
			{ src: require("../images/picture/picture33.jpg"),title:"最“丑”的湖，湖中一滴水也没有，全是沥青"},
			{ src: require("../images/picture/picture34.jpg"),title:"古代皇帝为何独尊泰山，这句“重如泰山”，五岳之首令人无话可说"},
			{ src: require("../images/picture/picture35.jpg"),title:"现实版张无忌 一对冒险家带着孩子去孤岛 这个荒野求生太刺激"},
			{ src: require("../images/picture/picture36.jpg"),title:"金秋游京北第一天路，您可以见到秋天想的全部风景，我选了白桦"},
			{ src: require("../images/picture/picture37.jpg"),title:"石泉云雾山鬼谷岭游客挤爆山门，鬼谷子隐居授徒之地成旅游热地"},				
			
		],
			
		}
	
	}
  }
	
</script>

<style scoped="scoped">
  a{
    color: #000000;
  }
  a:hover{
   color: orangered;
  }
  .picture{
    margin: 0 auto;
    /* padding-bottom: 30px; */
    margin-bottom: 30px;
    height: auto;
    width: 100%;
    max-width: 1400px;
    margin-bottom: 30px;
  }
  .picture-header{
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
 /* 大图 */
  .picture-bigimg{
    padding:10px;
    height: auto;
    background-color: white;
   }


  .picture-bigimg-left{
    padding-right: 20px;
    width: 100%;
    height: 550px;
    padding: 10px;
    /* background-color: red; */
  }
  @media only screen and (max-width:990px) {
    .picture-bigleft-img{
     height: 200px !important;
    }
  } 
  @media only screen and (max-width:990px) {
    .picture-bigimg-left{
      height:250px;
    }
  }
  .picture-bigleft-img{
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
  }
  .picture-bigimg-left img{
    width: 100%;
    height: 100%;
   }
  .picture-bigimg-left img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .picture-bigimg-title{
   position: relative;
   height: 50px;
   line-height: 50px;
   bottom: 50px;
   left: 0px;
   right: 0px;
   color: white;
   font-size: 1.25rem;
   overflow:hidden;
   text-overflow:ellipsis;
   display:-webkit-box;
   -webkit-box-orient:vertical;
   -webkit-line-clamp:1;
   background: url(../images/home-titileback.png);
  }
 @media only screen and (max-width:990px) {
    .picture-bigimg-title{
      height: 20px;
      line-height: 1.25rem;
      font-size: 0.875rem;
      bottom: 20px;
    }
 }
/* 右侧 */
  .picture-bigimg-right{
    height: 500px;
    width: 100%;
  }
  @media only screen and (max-width:990px) {
    .picture-bigimg-right{
     height: 250px !important;
    },
    .picture-bigimg-rbox{
      height: 100 !important;
    }
  }
  .picture-bigimg-rbox{
    height: 260px;
  }
 @media only screen and (max-width:990px) {
    .picture-bigimg-rbox{
      height: 100px;
    }
 }
  .picture-bigright-img{
    width: 100%;
    height:250px;
    padding-top: 10px;
    overflow: hidden;
  }
 @media only screen and (max-width:990px) {
    .picture-bigright-img{
     height: 100px !important;
    }
  }
  .picture-bigimg-right img{
    width: 100%;
    height: 100%;
   }
  .picture-bigimg-right img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  /* 最新图片新闻 */
  .picture-newsp{
    background-color: white;
  }
  .picture-newsp-list{
    height: auto;
  }
  .picture-newsplist-item{
    padding: 10px;
  }
  .picture-newsplist-item:hover{
    box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
  }
  .picture-newsp-imgbox{
	width: 100%;
    overflow: hidden;
  }
 @media only screen and (max-width:990px) {
    .picture-newsplist-item img{
      width:170px;
      height:150px;
    }
  }
  .picture-newsplist-item img{
    width:250px;
    height:150px;

  }
  .picture-newsplist-item img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .picture-newsplist-item p{
    height: 2.8rem;
    line-height: 1.5rem;
    padding-left: 5px;
    text-align: left;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  /* 精选图片新闻 */
  .picture-special-col{
    position: relative;
    height: auto;
    padding-bottom: 10px;
  }
   .picture-special-title{
    width: 100%;
    height: 2.1875rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
    padding-left: 20px;
    border-bottom: 2px solid orangered;
  }
  .picture-hotnews-col{
    margin-top: 10px;
  }
  .picture-special-box{
    height: 270px;
    width: auto;
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 10px;
    padding: 10px;
  }
  .picture-special-boximg{
    width:100%;
    height: 200px;
    overflow: hidden;
  }
  .picture-special-box img{
    width: 100%;
    height: 100%;
  }
 .picture-special-box img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .picture-special-box p{
    height: 1.875rem;
    line-height: 1.875rem;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;
  }
</style>
