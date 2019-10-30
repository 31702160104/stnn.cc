<template>				  
  <div class="continent">
    <div class="continent-header">大陆</div>
       <el-row  class="carousel">
         <el-col  :span="14" :xs="24" :sm="24" :md="14" :lg="14"  class="carousel-left">
            <div>
              <el-carousel  class="el-carousel" :height="screenWidth<990 ? '300px':'400px'">
                <el-carousel-item v-for="(item,index) in continent_img" :key="index">
									<router-link tag="a" target="_blank" :to="{name:'content'}">
										 <img :src="item.src" class="lunbotu" alt="轮播图">
										 <div class="carousel-title">{{item.title}}</div>						
									</router-link>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
         <el-col  :span="10" :xs="24" :sm="24" :md="10" :lg="10"   class="carousel-right">
            <ul class="carousel-right-list">
              <li class="carousel-right-item">
                <router-link tag="a" target="_blank" :to="{name:'content'}">
                   <h4>8月国民经济“成绩单”将揭晓：消费增速或将回升</h4>
                   <p>增速比去年同期提升0.2个百分点，保持了平稳增长的态势，呈现制造业投资增速持续小幅回升、高技术产业投资快速增长、社会领域投资继续保持两位数增长</p>
                </router-link>
              </li>
              <li class="carousel-right-item">
                <router-link tag="a" target="_blank" :to="{name:'content'}">
                  <h4>国企高管甘心为行贿人“打工” 断送前程又被判刑</h4>
                  <p>张杰“不遗余力”地背书、站台，周某自然少不了“表示”，前后共给予张杰“酬劳”人民币100万元。张杰最终呈现人...</p>
                </router-link>
              </li>
              <li class="carousel-right-item">
                <router-link tag="a" target="_blank" :to="{name:'content'}">
                  <h4>主播海霞:香港未来系之于祖国 窜访只能讨来无趣</h4>
                  <p>今天是9月16日，联播报道了中秋小长假国内旅游市场的相关情况以及总台大湾区之声对澳门特别行政区第五任行政长官...</p>
                </router-link>
              </li>
            </ul>
          </el-col>

        </el-row>

<!-- 最新大陆新闻 -->
 <el-row class="continent-news">
      <el-col :span="15" :xs="24" :sm="24" :md="15" :lg="15" class="continent-left">
           <div class="continent-left-title">最新大陆新闻</div>
           <ul class="continent-left-center">
             <li class="continent-lcent-item" v-for="(item,index) of continent_news" :key="index">
               <router-link tag="a" target="_blank" :to="{name:'content'}">
                 <el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="continent-leftcenter-img">
                     <div class="continent-leftcenter-imgbox"><img :src="item.src" alt=""></div>
                 </el-col>
                 <el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
                   <div class="continent-leftcenter-title">
                     <span class="continent-leftcenter-titleb continent-title">{{item.title}}</span>
                     <span class="continent-leftcenter-time ">{{item.time}}</span>
                     <p>{{item.content}}</p>
                     <span class="continent-leftcenter-writer">作者：星岛环球网</span>
                   </div>
                 </el-col>
               </router-link>
              </li>
           </ul>
        </el-col>
        <!-- 最新大陆热点 -->
    <el-col :span="9"  :xs="24" :sm="24" :md="9" :lg="9" class="continent-right">
        <div class="continent-newshot">
          <b-tabs
            active-nav-item-class="font-weight-bold text-uppercase text-danger"
            active-tab-class="font-weight-bold text-success"
            content-class="mt-3"
          >
            <b-tab title="最新大陆热点" active >
              <ul class="continent-newshot-list">
                <li class="continent-newshot-item continent-newshot-height" v-for="(item,index) of continent_hotnews" :key="index" >
                  <router-link tag="a" target="_blank" :to="{name:'content'}">
                   <p>
                     <span :class="index<3 ? 'continent-newshot-number-qian3':'continent-newshot-number'">{{index+=1}}</span>
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
     <div class="continent-special">
          <div class="continent-special-title"><span>特别推荐</span></div>
          <ul class="continent-special-list">
            <li v-for="(item,index) in continent_special" :key="index"  class="continent-special-item">
              <router-link tag="a" target="_blank" :to="{name:'content'}">{{item.title}}</router-link>
            </li>
          </ul>
      </div>
</el-row>



  </div>
</template>

<script >
export default {
	data() {
	  return {
      continent_img: [
        { src: require("../images/continent/continent01.jpg") ,title:"雪山怀抱的拿日雍错"},
        { src: require("../images/continent/continent02.jpg") ,title:"“水墨”大明湖"},
		{ src: require("../images/continent/continent03.jpg") ,title:"万众云集海宁盐官 一睹八月十八钱江潮"}
      ],
      continent_news: [
        { src: require("../images/continent/continent04.jpg") ,title:"新中国成立70周年群众游行:10万群众70组彩车行进",time:"2019-09-25 15:18",content:"25日，庆祝中华人民共和国成立70周年活动新闻中心举办第二场专题集体采访。"},
		{ src: require("../images/continent/continent05.jpg") ,title:"今天中国工程“上天下海” 再创多个“世界之最”",time:"2019-09-25 15:16",content:"北京大兴国际机场今天正式投运，作为全球最大的单体航站楼，北京大兴机场工程建设难度世界少有，建设过程中不断攻坚克难，创多个“世界之最”"},
        { src: require("../images/continent/continent06.jpg") ,title:"蓬佩奥一再污蔑中国治疆政策 王毅在美国放出警告",time:"2019-09-25 15:06",content:"9月22日美国国务卿蓬佩奥在会见中亚五国外长期间谈及涉疆问题，称中方在新疆的行动与反恐无关，呼吁所有国家拒绝向中方遣返维吾尔族人。"},
        { src: require("../images/continent/continent07.jpg") ,title:"倪斌跨省调任天津滨海新区任区委副书记",time:"2019-09-25 14:04",content:"今年5月，江苏镇江市委副书记倪斌跨省调任天津滨海新区任区委副书记。时隔4个月后，倪斌的职务再次变动。"},
        { src: require("../images/continent/continent08.jpg") ,title:"停车费每天80元封顶 大兴机场将提供近万个车位",time:"2019-09-25 14:09",content:"北京大兴国际机场今天（9月25日）正式投入运营，对于选择小汽车接驳的旅客，机场停车问题很受关注。"},
        { src: require("../images/continent/continent09.jpg") ,title:"阅兵女兵方队：站军姿2小时不倒 练眼神40秒不眨",time:"2019-09-25 15:20",content:"探访国庆70周年大阅兵训练场 ：阅兵女兵方队的一天"},
        { src: require("../images/continent/continent10.jpg") ,title:"今天投入运营，北京大兴机场凤凰展翅迎高光时刻",time:"2019-09-25 13:37",content:"两阶段试飞顺利开展，飞行程序正式获批，7次综合演练圆满完成，15家国内外航司马上入驻，116条航线即将开通……金秋九月，北京大兴国际机场已经做好运营准备。"},
        { src: require("../images/continent/continent11.jpg") ,title:"哈尔滨政协主席落马 会不会带起一波新节奏？",time:"2019-09-25 10:45",content:"爱好传统文化的人都知道，“三不朽”里立德居首，立功其次，立言排在最次。没有德行和功业支撑的“一家之言”，不但立不住，往往还会成为话柄。9月24日刚刚落马的哈尔滨市政协主席姜国文大概就属于这号人。"},								
        { src: require("../images/continent/continent12.jpg") ,title:"我国成功发射云海一号02星(多图)",time:"2019-09-25 09:57",content:"019年9月25日8时54分，我国在酒泉卫星发射中心用长征二号丁运载火箭，成功将云海一号02星发射升空，卫星顺利进入预定轨道，任务获得圆满成功。云海一号02星，主要用于大气海洋环境要素探测、空间环境探测、防灾减灾和科学试验等领域。"},
        { src: require("../images/continent/continent13.jpg") ,title:"让14亿人不仅“穿暖”而且“穿好” 中国为什么能",time:"2019-09-25 09:52",content:"中国城镇居民人均衣着消费增长了53.6倍农村居民人均衣着消费增长了82倍从穿暖到穿好中国为什么能做到？"},				
        { src: require("../images/continent/continent14.jpg") ,title:"国旗做微信头像违法？律师说法来了",time:"2019-09-25 09:38",content:"给我一面国旗 @微信官方昨天（24日），所有人的朋友圈都被这句话攻占了"},				
        { src: require("../images/continent/continent15.jpg") ,title:"9000米 这群海洋石油人在南海海底打洞(图)",time:"2019-09-25 08:45",content:"9月的南海，烟波浩渺，海天一色。直升机轰鸣着从海南三亚出发，向东南海域飞行约1个小时，降落在一艘“怪异”的“大船”之上。"},		
        { src: require("../images/continent/continent16.jpg") ,title:"猪肉价格降了 又有1万吨“国家存的猪肉”将投放",time:"2019-09-25 08:21",content:"昨日（9月24日），商务部网站公布的最新监测数据显示，上周（9月16日至22日），猪肉价格为每公斤36.39元，比前一周下降0.4%。"},
        { src: require("../images/continent/continent17.jpg") ,title:"史上规模最大国庆阅兵：59个方队、160余架飞机",time:"2019-09-25 08:19",content:"月24日下午，庆祝中华人民共和国成立70周年活动新闻中心在梅地亚中心二层新闻发布厅举办第一场专题集体采访活动。"},
		{ src: require("../images/continent/continent18.jpg") ,title:"海外学子共迎新中国70华诞：祖国是最强大的后盾",time:"2019-09-25 07:53",content:"9月21日，在芬兰赫尔辛基市中心拥有悠久历史的萨沃伊剧院内，近700名中国学子、学者参加了由赫尔辛基大学中国学生学者联合会主办的“冰芬同庆 华彩乐章”国庆晚会。"},				
      ],	
	   continent_hotnews:[
		   {title:"9级强震突袭，中国大使面临生死考验"},
		   {title:"在市委宿舍里自杀未遂的“内鬼”，是“保护伞”"},
		   {title:"首艘国产航母国庆前的这一“特殊”动作，缘何？"},
		   {title:"蓬佩奥在中亚五国外长面前泼中国脏水 外交部回应"},
		   {title:"9月24日外交部例行记者会(全文)"},
		   {title:"习近平宣布北京大兴国际机场正式投运"},
		   {title:"阅兵大量细节透露 多项“首次”“之最”令人瞩目"},
		   {title:"王毅集体会见海合会“三驾马车”外长"},
		   {title:"下轮中美经贸磋商或于10月10至11日举行?中方回应"},
		   {title:"这个阅兵方队最大59岁,最小24岁:首位将军领队亮相"},			  
	   ],
	   continent_special:[
		   {title:"郭信良变脸返绿营　谢龙介感叹人情薄如纸"},
		   {title:"张学良替宋美龄守了一生的是什么秘密？"},
		   {title:"港铁多站排长龙 乘客闹爆暴徒破坏"},
		   {title:"郭台铭弃选前后发生了什么？前台东县长还原经"},
		   {title:"级强震突袭，中国大使面临生死考验"},
		   {title:"汤家骅：不支持以紧急法引入禁蒙面法"},
		   {title:"Twitter副总裁背景神秘助乱港 狂删反暴账户非"},
		   {title:"13岁小暴徒袋3万元 想叫弟弟“入伙”"},
		   {title:"媒体：王金平若参选充其量是“蓝营吕秀莲”"},
		   {title:"重磅！我国两栖攻击舰首舰下水"},
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
  .continent-header{
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
  a{
    color: #000000;
  }
  a:hover{
   color: orangered;
  }
  .continent{
    height: auto;
    max-width: 1400px;
    margin: 0 auto;
    margin-bottom: 50px;
    background-color: white;

  }
  /* 轮播 */
  .carousel{
    position: relative;
    width: 100%;
    height: auto;
    /* background-color: red; */
    padding: 10px;
  }
  .el-carousel__container{
    height:450px !important;
  }
/* 轮播左侧 */
  .carousel-left{
    position: relative;
    max-height: 450px;
  }
  .el-carousel{
    height: auto;
  }
  .lunbotu{
    width: 100%;
    height: 100%;
  }
    @media only screen and (max-width:990px) {
     .lunbotu{
       height: 300px !important;
      }
    }
  .carousel-title{
    position: absolute;
    height: 3.125rem;
    line-height: 2rem;
    bottom: 30px;
    left: 0px;
    right: 0px;
    color: white;
    font-size: 1.25rem;
    /* background: url(../images/home-titileback.png); */
  }
  /* 轮播右侧 */
  .carousel-right{
    text-align: left;
    height:auto;
    /* background-color: red; */
   }
   .carousel-right-list{
     padding: 10px;
   }
   .carousel-right-item{
    height: 130px;
    /* line-height: 50px; */
   }
   .carousel-right-item h4{
     height: 50px;
     line-height: 30px;
   }
  .carousel-right-item p{
    height:60px;
    line-height:33px;
    text-indent: 2em;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
   }

  /* 最新大陆新闻 */
  .continent-left-title{
    padding: 20px 0px 10px 30px;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    color: orangered;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }

    .continent-news{
     height: auto;
     }
    .continent-lcent-item{
      padding-top: 10px;
      margin-left:10px ;
      height: 12.5rem;
     /* background-color: red; */
    }
   @media only screen and (max-width:990px) {
      .continent-lcent-item {
         max-height: 200px;
      }
    }
   @media only screen and (max-width:767px) {
      .continent-lcent-item {
         height: 125px;
      }
    }
    .continent-lcent-item:hover{
      box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
    }
    .continent-left,.continent-right{
     padding-right: 10px;
     padding-left: 10px;
     background-color: white;
     margin-top: 10px;
    }
    .continent-left-center{
      margin-top: 10px;
      padding: 0px;
      margin: 0px;
    }
	.continent-leftcenter-imgbox{
		height: 200px;
	}
 @media only screen and (max-width:990px) {
      .continent-leftcenter-imgbox{
       height: 100px;
      }
   }
   .continent-leftcenter-img{
    padding-left: 20px;
     padding-right: 20px;
     overflow:hidden;
     max-height: 11.25rem;
   }
   .
 @media only screen and (max-width:990px) {
      .continent-leftcenter-img{
        padding-left: 5px;
        padding-right: 0px;
      }
   }
    .continent-leftcenter-img img{
      width: 100%;
      height: 100%;
    }
    .continent-leftcenter-img img:hover{
      transform: scale(1.1);
      transition: all 0.5s linear;
    }
    .continent-leftcenter-title{
      margin-bottom: 10px;
      padding: 10px;
      height: 11.25rem;
    }
    .continent-leftcenter-writer{
      float: right;
      color: #999;
      font-size: 14px;
    }
   .continent-leftcenter-time{
     color: #999;
     float: left;
     height: 1.25rem;
     font-size: 12px;
   }
 @media only screen and (max-width:990px) {
    .continent-leftcenter-title {
        height: 100px;
    }
      .continent-leftcenter-writer{
       display: none;
      }
      .continent-leftcenter-img{
        /* padding-left: 20px; */
        padding-right: 0px;
      }
   }
  @media only screen and (min-width:990px) {
     .continent-title{
       font-size: 1.25rem;
     }
    }
    .continent-leftcenter-titleb{
      height: 1.5625rem;
      line-height: 1.5rem;
      width: 100%;
      text-align: left;
      font-size: 1rem;
      font-weight: bold;
      overflow: hidden;/*自动隐藏文字*/
      text-overflow: ellipsis;/*文字隐藏后添加省略号*/
      display: -webkit-box;
      -webkit-line-clamp:1; /*想要显示的行数*/
      -webkit-box-orient: vertical;
    }
      .continent-leftcenter-title p{
      height: 2.8rem;
      color: #111;
      width: 100%;
      font-size: 0.875rem;
      text-indent: 2em;
      text-align: left;
      overflow: hidden;/*自动隐藏文字*/
      text-overflow: ellipsis;/*文字隐藏后添加省略号*/
      display: -webkit-box;
      -webkit-line-clamp:2; /*想要显示的行数*/
      -webkit-box-orient: vertical;
    }
    /* 最新大陆热点 */
  .text-danger{
    color: orangered !important;
  }
  .continent-right{
    padding-top: 10px;
  }
  .continent-newshot-list{
    text-align: left;
    padding-left: 10px;
    position: relative;
    height: auto;
    color: #000000;
  }
  .continent-newshot-item {
    padding: 10px 5px;
    border-bottom: 1px solid #FFCC99;
  }
  .continent-newshot-item:last-child{
     border: none;
  }
  .continent-newshot-item span{
    margin-right: 10px;
    line-height: 1.5625rem;
    width: 1.5625rem;
    height: 1.5625rem;
    text-align: center;
    display: inline-block;
    border-radius: 50%
  }

  .continent-newshot-number{
    background-color: #ddd;
  }
  .continent-newshot-number-qian3{
    background-color: orangered;
    color: white;
  }
  .continent-newshot-item p{
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
  .continent-special{
   background-color: white;
   text-align: left;
   padding-top: 50px;
   height: auto;
  }
  .continent-special-title{
    padding: 10px 0px 10px 20px;
    border-bottom: 1px solid #ddd;
  }
  .continent-special-title span{
    padding: 10px 0px 10px 20px;
    font-size: 1rem;
    color: orangered;
    font-weight: bold;
  }
  .continent-special-list{
    padding: 0px;
  }
  .continent-special-item{
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
