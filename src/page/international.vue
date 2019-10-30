<template>
  <div class="international">
    <div class="international-header">国际</div>
       <el-row  class="carousel">
         <el-col  :span="14" :xs="24" :sm="24" :md="14" :lg="14"  class="carousel-left">
            <div>
              <el-carousel  class="el-carousel" :height="screenWidth<990 ? '300px':'400px'">
                <el-carousel-item v-for="(item,index) in international_img" :key="index">
                 <img :src="item.src" class="lunbotu" alt="轮播图">
                 <div class="carousel-title">{{item.title}}</div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
         <el-col  :span="10" :xs="24" :sm="24" :md="10" :lg="10"   class="carousel-right">
            <ul class="carousel-right-list">
              <li class="carousel-right-item"  v-for="(item,index) of carousel_right":key="index">
                <router-link tag="a" target="_blank" :to="{name:'content'}">
                   <h4>{{item.title}}</h4>
                   <p>{{item.content}}</p>
                </router-link>
              </li>
            </ul>
          </el-col>

        </el-row>

<!-- 最新国际新闻 -->
 <el-row class="international-news">
      <el-col :span="15" :xs="24" :sm="24" :md="15" :lg="15" class="international-left">
           <div class="international-left-title">最新国际新闻</div>
           <ul class="international-left-center">
             <li class="international-lcent-item" v-for="(item,index) of international_news" :key="index">
               <router-link tag="a" target="_blank" :to="{name:'content'}">
                 <el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="international-leftcenter-img">
                     <div class="international-leftcenter-imgbox"><img :src="item.src" alt=""></div>
                 </el-col>
                 <el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
                   <div class="international-leftcenter-title">
                     <span class="international-leftcenter-titleb international-title">{{item.title}}</span>
                     <span class="international-leftcenter-time ">{{item.time}}</span>
                     <p>{{item.content}}</p>
                     <span class="international-leftcenter-writer">作者：星岛环球网</span>
                   </div>
                 </el-col>
               </router-link>
               </li>
           </ul>
        </el-col>
        <!-- 最新国际热点 -->
    <el-col :span="9"  :xs="24" :sm="24" :md="9" :lg="9" class="international-right">
        <div class="international-newshot">
          <b-tabs
            active-nav-item-class="font-weight-bold text-uppercase text-danger"
            active-tab-class="font-weight-bold text-success"
            content-class="mt-3"
          >
            <b-tab title="最新国际热点" active >
              <ul class="international-newshot-list">
                <li class="international-newshot-item international-newshot-height" v-for="(item,index) of international_hotnews" :key="index" >
                  <router-link tag="a" target="_blank" :to="{name:'content'}">
                   <p>
                     <span :class="index<3 ? 'international-newshot-number-qian3':'international-newshot-number'">{{index+=1}}</span>
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
     <div class="international-special">
          <div class="international-special-title"><span>特别推荐</span></div>
          <ul class="international-special-list">
            <li v-for="(item,index) in international_special" :key="index"  class="international-special-item">
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
      international_img: [
        { src: require("../images/international/international01.jpg") ,title:"以色列边境到底在哪？埃尔多安在联合国晒图质疑！"},
        { src: require("../images/international/international02.jpg") ,title:"英首相自比“普罗米修斯”:脱欧是永无止境的折磨"},
		{ src: require("../images/international/international03.jpg") ,title:"以大选最终结果出炉：利库德集团落后蓝白党1席"}
      ],
	 carousel_right:[
		{title:"特朗普被弹劾调查 美国民主党领导层集体发声",content:"就弹劾程序看，众议院弹劾调查只是第一步，如果相关调查能够提出弹劾条款，并经众议院全院投票通过，现职总统才会.."},
		{title:"美众院对特朗普展开弹劾 拜登：他咎由自取",content:"为避免选情受到影响，拜登的竞选团队曾呼吁外界的关注点药聚焦在特朗普的不当行为，而非拜登父子身上。21日，拜登..."},
		{title:"美媒：中国留学生骤减令美国大学担忧",content:"佛蒙特大学今年秋季也出现了中国留学生大幅减少的现象，中国新生减少了23%。特朗普政府更严格地审查机器人、航空..."},
	 ],
      international_news: [
        { src: require("../images/international/international04.jpg") ,title:"为何此时弹劾特朗普？美民主党：案情严重且好懂",time:"2019-09-25 16:56",content:"中新网9月25日电 据“中央社”报道，美国国会众议长佩洛西24日宣布，众议院就总统特朗普近期“电话门”对其启动弹劾调查。"},
        { src: require("../images/international/international05.jpg") ,title:"俄总统发言人：目前不可能向日本移交争议岛屿",time:"2019-09-25 16:48",content:"海外网9月25日电 共同社25日援引塔斯社报道称，24日，俄罗斯总统发言人佩斯科夫在俄罗斯高等经济学院与学生对话，在回答关于俄罗斯是否要向日本移交南千岛群岛（日本称北方四岛）的相关提问时，表明看法称：“目前情况下不可能”。"},
        { src: require("../images/international/international06.jpg") ,title:"伊朗总统鲁哈尼：美国走到哪 恐怖主义就在哪",time:"2019-09-25 16:47",content:"海外网9月25日电 美伊两国的“口水仗”持续多日。当地时间24日，正在美国参加联合国大会的伊朗总统鲁哈尼对特朗普在联大的演讲做出回应，喊话称美国走到哪，恐怖主义就在哪。"},
        { src: require("../images/international/international07.jpg") ,title:"佩洛西宣布正式启动对特朗普弹劾调查",time:"2019-09-25 07:13 ",content:"当地时间24号下午，美国众议院议长佩洛西宣布正式启动弹劾特朗普总统调查程序。佩洛西称多家媒体报道，特朗普曾在一次电话中多次要求乌克兰总统泽连斯基调查前副总统拜登和他的儿子。"},					   
        { src: require("../images/international/international08.jpg") ,title:"印尼学生爆发骚乱 火烧政府大楼致军警在内26死",time:"2019-09-25 20:00 ",content:"印度尼西亚巴布亚省昨日（23日）再次发生重大骚乱事件。因一则“教师向原住民学生发表种族歧视言论”的传言"},					   
        { src: require("../images/international/international09.jpg") ,title:"在俄罗斯宣传 宜家却打出了一条带纳粹性质的标语",time:"2019-09-25 13:34",content:"据“今日俄罗斯”（RT）24日报道，瑞典家具量贩店宜家在俄罗斯的一场宣传活动中打出了一则带有纳粹性质的标语，引起了俄罗斯公众的批评。最后，宜家道歉了。"},					   
        { src: require("../images/international/international10.jpg") ,title:"沙特外交国务大臣:对伊朗的军事行动仍在考虑之中",time:"2019-09-25 11:06",content:"据英国《卫报》24日消息，沙特外交国务大臣朱拜尔24日表示，美国对伊朗的耐心有限，并警告对伊朗的军事行动仍在考虑之中。"},					   
        { src: require("../images/international/international11.jpg") ,title:"特朗普遭弹劾调查 乌总统：不会主动开口向美要钱",time:"2019-09-25 10:36",content:"海外网9月25日电 美国总统特朗普继“通俄门”后又陷入“通乌门”，并于24日被美国国会正式启动弹劾调查。"},					   
        { src: require("../images/international/international12.jpg") ,title:"特朗普联大发言抨击全球化 遭美国媒体批评",time:"2019-09-25 10:30",content:"中新网9月25日电 综合报道，当地时间24日，联合国大会第74届会议一般性辩论在纽约总部拉开帷幕。"},					   
        { src: require("../images/international/international13.jpg") ,title:"45名谷歌员工举报'黑料':在公司遭歧视、性骚扰",time:"2019-09-25 10:20",content:"海外网9月25日电 近日，一份由45名谷歌员工撰写的“爆炸性文件”称，他们在谷歌遇到性别歧视、违反晋升承诺、骚扰和打击报复等遭遇。"},					   
        { src: require("../images/international/international14.jpg") ,title:"佩洛西宣布启动弹劾特朗普调查程序 拜登表态支持",time:"2019-09-25 08:11",content:"当地时间24号下午，美国众议院议长佩洛西宣布计划启动正式的总统弹劾调查，总统候选人拜登亦表态支持弹劾总统。"},					   
        { src: require("../images/international/international15.jpg") ,title:"英国指责伊朗应为沙特石油设施遇袭负责 伊朗回应",time:"2019-09-25 08:11",content:"海外网9月24日电 面对英国23日表态“伊朗应该为沙特石油设施遇袭负责”，伊朗外交部发言人当日回应称：与其对伊朗作出无端指责，不如少卖点武器给沙特，承认自己在也门犯下的罪行。"},
        { src: require("../images/international/international16.jpg") ,title:"日本下月办自卫队阅舰式 宣布'不邀请韩国'",time:"2019-09-24 16:31",content:"海外网9月24日电 日本海上自卫队阅舰式还有不到一个月就要举办了，中、美、英等多个国家早已收到日方邀请，但韩国一直表示没收到主办方的邀请函。据共同社报道，24日，日本正式宣布阅舰式不会邀请韩国。"},
        { src: require("../images/international/international17.jpg") ,title:"英国民航局：将安排航班把滞留海外13.53万人接回",time:"2019-09-24 16:08",content:"据路透社24日消息，英国民用航空管理局23日表示，将安排紧急航班，将因受托马斯·库克旅行社倒闭而滞留海外的旅客送回英国，未来13天内，预计将13.53万滞留旅客接回英国。"},									   
      ],	
	   international_hotnews:[
		   {title:"特朗普意外现身联合国气候峰会 她的眼神亮了"},
		   {title:"传言成真：日本确认北部一重要岛屿消失(图)"},
		   {title:"遭弹劾调查 特朗普慌了欲公布和乌总统通话内容"},
		   {title:"大选临近捅马蜂窝 特朗普亲自为对手送上弹劾证据"},
		   {title:"美众院对特朗普展开弹劾 拜登：他咎由自取"},
		   {title:"美媒：中国留学生骤减令美国大学担忧"},
		   {title:"特朗普被弹劾调查 美国民主党领导层集体发声"},
		   {title:"特朗普和鲁哈尼就要当面互怼了 欧此时开腔几个意思"},
		   {title:"特朗普联大发言抨击全球化 遭美国媒体批评"},
		   {title:"英议长：国会明日重启 必须毫不动摇地审查约翰逊内阁"},				  
	   ],
	   international_special:[
		   {title:"澳总理莫里森将赴美访问 或不出席联合国气候大会"},
		   {title:"美媒逐一批驳特朗普对华贸易战“不靠谱”言论"},
		   {title:"哥伦比亚一架客机坠毁致7人死亡"},
		   {title:"一天三顿，每顿'吃'4颗月球 这个黑洞不一般!"},
		   {title:"澳洲“夺命公路”再现恐怖车祸 2名中国游客遇难"},
		   {title:"紧张气氛全球蔓延 美欧日经济都不行了？"},
		   {title:"韩媒：金正恩8月曾写信邀请特朗普访问平壤"},
		   {title:"哥伦比亚一客机坠毁致7死 部分残骸落在民房顶部"},
		   {title:"日媒：这个市场或因中国企业加入而增长"},
		   {title:"沙特石油设施遇袭后：美欲保油价，准备“全面战争”"},
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
  .international-header{
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
  .international{
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
   }
   .carousel-right-list{
     padding: 10px;
   }
   .carousel-right-item{
    height: 130px;
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
  /* 最新国际新闻 */
  .international-left-title{
    padding: 20px 0px 10px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: left;
    color: orangered;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }
    .international-news{
     height: auto;
     }
    .international-lcent-item{
      padding-top: 10px;
      margin-left:10px ;
      height: 12.5rem;
    }
   @media only screen and (max-width:990px) {
      .international-lcent-item {
         max-height: 200px;
      }
    }
   @media only screen and (max-width:767px) {
      .international-lcent-item {
         height: 125px;
      }
    }
    .international-lcent-item:hover{
      box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
    }
    .international-left,.international-right{
     padding-right: 10px;
     padding-left: 10px;
     background-color: white;
     margin-top: 10px;
    }
    .international-left-center{
      margin-top: 10px;
      padding: 0px;
      margin: 0px;
    }
	.international-leftcenter-imgbox{
		height: 200px;
	}
 @media only screen and (max-width:990px) {
      .international-leftcenter-imgbox{
       height: 100px;
      }
   }
   .international-leftcenter-img{
    padding-left: 20px;
     padding-right: 20px;
     overflow:hidden;
     max-height: 180px;
   }
   .
 @media only screen and (max-width:990px) {
      .international-leftcenter-img{
        padding-left: 5px;
        padding-right: 0px;
      }
   }
    .international-leftcenter-img img{
      width: 100%;
      height: 100%;
    }
    .international-leftcenter-img img:hover{
      transform: scale(1.1);
      transition: all 0.5s linear;
    }


    .international-leftcenter-title{
      margin-bottom: 10px;
      padding: 10px;
      height: 180px;
    }
    .international-leftcenter-writer{
      float: right;
      color: #999;
      font-size: 14px;
    }
   .international-leftcenter-time{
     color: #999;
     float: left;
     height: 1.25rem;
     font-size: 12px;
   }
 @media only screen and (max-width:990px) {
     .international-leftcenter-title {
        height: 100px;
     },
     .international-leftcenter-time{
       /* height: 10px; */
     }
      .international-leftcenter-writer{
       display: none;
      },
      .international-leftcenter-img{
        /* padding-left: 20px; */
        padding-right: 0px;
      }
   }
  @media only screen and (min-width:990px) {
     .international-title{
       font-size: 1.25rem;
     }
    }
    .international-leftcenter-titleb{
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
      .international-leftcenter-title p{
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

    /* 最新国际热点 */
    .text-danger{
      color: orangered !important;
    }
    .international-right{
      padding-top: 10px;

    }
   .international-newshot-list{
    text-align: left;
    padding-left: 10px;
    /* padding-bottom: 20px; */
    position: relative;
    height: auto;
    color: #000000;

    }
    .international-newshot-item {
     padding: 10px 5px;
    border-bottom: 1px solid #FFCC99;
    }
    .international-newshot-item:last-child{
      border: none;
    }
    .international-newshot-item span{
      margin-right: 10px;
      line-height: 1.5625rem;
      width: 1.5625rem;
      height: 1.5625rem;
      text-align: center;
      display: inline-block;
      border-radius: 50%
    }

    .international-newshot-number{
      background-color: #ddd;

    }
    .international-newshot-number-qian3{
      background-color: orangered;
      color: white;
    }

  .international-newshot-item p{
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
  .international-special{
   background-color: white;
   text-align: left;
   padding-top: 50px;
   height: auto;
  }
  .international-special-title{
    padding: 10px 0px 10px 20px;
    border-bottom: 1px solid #ddd;
  }
  .international-special-title span{
    padding: 10px 0px 10px 20px;
    font-size: 1rem;
    color: orangered;
    font-weight: bold;
  }
  .international-special-list{
    padding: 0px;
  }
  .international-special-item{
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
