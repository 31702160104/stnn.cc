<template>
  <div class="hkmacao">
    <div class="hkmacao-header">港澳</div>
       <el-row  class="carousel">
         <el-col  :span="14" :xs="24" :sm="24" :md="14" :lg="14"  class="carousel-left">
            <div>
              <el-carousel  class="el-carousel" :height="screenWidth<990 ? '300px':'400px'">
                <el-carousel-item v-for="(item,index) in hkmacao_img" :key="index">
                 <img :src="item.src" class="lunbotu" alt="轮播图">
                 <div class="carousel-title">{{item.title}}</div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
         <el-col  :span="10" :xs="24" :sm="24" :md="10" :lg="10"   class="carousel-right">
            <ul class="carousel-right-list">
              <li class="carousel-right-item" v-for="(item,index) of carousel_right":key="index">
                <router-link tag="a" target="_blank" :to="{name:'content'}">
                   <h4>{{item.title}}</h4>
                   <p>{{item.content}}</p>
                </router-link>
              </li>
         
            </ul>
          </el-col>

        </el-row>

<!-- 最新港澳新闻 -->
 <el-row class="hkmacao-news">
      <el-col :span="15" :xs="24" :sm="24" :md="15" :lg="15" class="hkmacao-left">
           <div class="hkmacao-left-title">最新港澳新闻</div>
           <ul class="hkmacao-left-center">
             <li class="hkmacao-lcent-item" v-for="(item,index) of hkmacao_news" :key="index">
               <router-link tag="a" target="_blank" :to="{name:'content'}">
                 <el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="hkmacao-leftcenter-img">
                     <div class="hkmacao-leftcenter-imgbox"><img :src="item.src" alt=""></div>
                 </el-col>
                 <el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
                   <div class="hkmacao-leftcenter-title">
                     <span class="hkmacao-leftcenter-titleb hkmacao-title">{{item.title}}</span>
                     <span class="hkmacao-leftcenter-time ">{{item.time}}</span>
                     <p>{{item.content}}</p>
                     <span class="hkmacao-leftcenter-writer">作者：星岛环球网</span>
                   </div>
                 </el-col>
               </router-link>
               </li>
           </ul>
        </el-col>
        <!-- 最新港澳热点 -->
    <el-col :span="9"  :xs="24" :sm="24" :md="9" :lg="9" class="hkmacao-right">
        <div class="hkmacao-newshot">
          <b-tabs
            active-nav-item-class="font-weight-bold text-uppercase text-danger"
            active-tab-class="font-weight-bold text-success"
            content-class="mt-3"
          >
            <b-tab title="最新港澳热点" active >
              <ul class="hkmacao-newshot-list">
                <li class="hkmacao-newshot-item hkmacao-newshot-height" v-for="(item,index) of hkmacao_hotnews" :key="index" >
                  <router-link tag="a" target="_blank" :to="{name:'content'}">
                   <p>
                     <span :class="index<3 ? 'hkmacao-newshot-number-qian3':'hkmacao-newshot-number'">{{index+=1}}</span>
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
     <div class="hkmacao-special">
          <div class="hkmacao-special-title"><span>特别推荐</span></div>
          <ul class="hkmacao-special-list">
            <li v-for="(item,index) in hkmacao_special" :key="index"  class="hkmacao-special-item">
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
      hkmacao_img: [
        { src: require("../images/hkmacao/hkmacao01.jpg") ,title:"今天投入运营！大兴机场，凤凰展翅！"},
        { src: require("../images/hkmacao/hkmacao02.jpg") ,title:"资深英裔“香港通”：指望英美救香港，除非猪能飞上天"},
		{ src: require("../images/hkmacao/hkmacao03.jpg") ,title:"我爱你中国！这群大学生表白方式帅呆了"}
      ],
	  carousel_right:[
		  {title:"四人涉辱国旗及暴乱提堂 陈浩天庭外指挥伞阵护送",content:"据了解，罗涉嫌在新城市广场与他人“玩游戏”时践踏国旗、将国旗丢入垃圾桶，并推落喷水池。情侣被拘 身上搜出铁..."},
		  {title:"涉“9．22”踩国旗 跟车工禁足“新城市”",content:"另案被控“参与暴动”罪的2男1女被告，依次为女侍应陈乐怡（24岁）、男工程师周锦威（23岁）及男地产中介区域经理..."},
		  {title:"香港今年登记选民413.3万人创新高",content:"3万新登记选民当中，介乎18至35岁较年轻的群组占四成八，但分析整体选民人数，18至35岁群组，只占整体选民两成四..."},
	  ],
      hkmacao_news: [
        { src: require("../images/hkmacao/hkmacao04.jpg") ,title:"港澳办致唁电对曾宪梓先生逝世表示哀悼",time:"2019-09-25 15:03",content:"9月24日，国务院港澳办致唁电对曾宪梓先生逝世表示哀悼，并对其亲属表示慰问。"},
        { src: require("../images/hkmacao/hkmacao05.jpg") ,title:"在香港，这样的“表白”成新潮流",time:"2019-09-25 15:51",content:"新中国成立以来的70年，风云跌宕。这70年，香港社会同样经历沧桑巨变。两者之变息息相关，有互相扶持，更有相得益彰。"},
        { src: require("../images/hkmacao/hkmacao06.jpg") ,title:"中学语文题含污蔑警察 家长促请校长公开解释",time:"2019-09-25 14:37",content:"大公文汇全媒体报道，近日，网上流传一份香港保良局何荫棠中学语文科温习题目，其中第十六题内容污蔑警察。"},
        { src: require("../images/hkmacao/hkmacao07.jpg") ,title:"调查：香港受访父母80%愿资助子女买房",time:"2019-09-25 16:23",content:"中新网9月25日电 据香港《大公报》报道，保诚公司近日的一项调查发现，过半受访香港父母表示会让子女到外地升学，其中9成会提供资助，平均已储蓄69.6万元，预计资助150.1万元。"},					   
        { src: require("../images/hkmacao/hkmacao08.jpg") ,title:"涉“9．22”踩国旗 跟车工禁足“新城市”",time:"2019-09-25 10:23",content:"香港《文汇报》报道，在刚过去的周日（22日）纵暴派发起“和你shop”活动终演变成暴动，暴徒在沙田新城市广场非法集结，大肆破坏港铁站设施、纵火，更破坏及践踏国旗。"},					   
        { src: require("../images/hkmacao/hkmacao09.jpg") ,title:"杨海明：台湾乡道桥梁可承受M1A2战车",time:"2019-09-25 15:47",content:"中评社台北9月25日电（记者 黄筱筠））陆军明年度将编列新台币405亿预算购买108辆M1A2T战车，台湾民众党主席、台北市长柯文哲日前质疑认为M1A2重达60余吨，台湾桥梁承受不了。"},					   
         { src: require("../images/hkmacao/hkmacao10.jpg") ,title:"谈“外交”情势　马：现在不是最坏　还会更坏",time:"2019-09-25 14:28",content:"马英九以“如何因应当前“外交”危机”为题，今天上午到东吴大学演讲。"},					   
        { src: require("../images/hkmacao/hkmacao11.jpg") ,title:"上周连“断交”两国　马英九点出三原因港澳惩罚",time:"2019-09-25 14:43",content:"中评社台北9月25日电（记者　倪鸿祥）马英九今天上午在东吴大学演讲时指出，台湾5天内连断所罗门与基里巴斯两个南太平洋“邦交”国，是因为蔡英文拒绝“九二共识”，又在台湾推动“去中国化”，"},					   
        { src: require("../images/hkmacao/hkmacao12.jpg") ,title:"赵少康轰李登辉　利用'中广'五鬼搬运",time:"2019-09-25 15:22",content:"中评社台北9月25日电（记者　张嘉文）不当党产处理委员会24日认定中广为中国国民党附随组织，并向'中广'追征高达新台币77亿元不动产处分之不当利得；限一个月缴纳。"},					   
        { src: require("../images/hkmacao/hkmacao13.jpg") ,title:"华航私烟案　郑文灿指示桃园市府开罚600万",time:"2019-09-2515:49",content:"郑文灿上午出席市政会议，会后接受媒体访问，被问到私烟案市府也针对华航开罚600万，做以上表示。 "},					    
        { src: require("../images/hkmacao/hkmacao14.jpg") ,title:"韩国瑜举办施政亮点说明会　绿议员好奇旁听",time:"2019-09-25 16:14",content:"中评社高雄9月25日电（记者　蒋继平）中国国民党2020参选人、高雄市长韩国瑜下午在高雄市议会举办施政亮点说明会，更要安排三个地点进行实地考察，"},					   
        { src: require("../images/hkmacao/hkmacao15.jpg") ,title:"驻港部队为香港中学行升旗礼 五星红旗闪耀全香港",time:"2019-09-25 08:09 ",content:"9月23日，香港培侨中学，为庆祝新中国成立70周年，举行了一场升国旗仪式，驻香港部队仪仗队也应邀参加。在雄壮的国歌声中，鲜艳的五星红旗冉冉升起，全体师生高唱国歌并向国旗行注目礼。"},
        { src: require("../images/hkmacao/hkmacao16.jpg") ,title:"李小龙故居今日动工清拆",time:"2019-09-24 15:28",content:"大公文汇全媒体报道，一代武打巨星李小龙位于香港九龙塘的故居逃不过拆卸厄运。“李小龙会”今日(24日)于社交网站公布，因业主及政府“弃救”，李小龙故居今日正式动工拆毁，一代巨星故居作飞灰。"},
        { src: require("../images/hkmacao/hkmacao17.jpg") ,title:"“摘口罩！”香港爱国青年正气凛然直面黑衣人",time:"2019-09-24 15:54",content:"“起来！起来！起来！”9月24日中午，《义勇军进行曲》在香港金钟太古广场中庭唱响。期间，有个别戴口罩的黑衣人混入人群，意图起哄破坏，参加活动的香港青年毫无惧色，用歌声回击，挫败了他们的嚣张气焰。"},									   
      ],	
	   hkmacao_hotnews:[
		   {title:"港铁多站排长龙 乘客闹爆暴徒破坏"},
		   {title:"汤家骅：不支持以紧急法引入禁蒙面法”"},
		   {title:"13岁小暴徒袋3万元 想叫弟弟“入伙”"},
		   {title:"台湾网红“芒果干”：炒热“台独”选情，冰冻台湾行情"},
		   {title:"看着都累，为什么台湾一年到头总在忙选举？"},
		   {title:"台湾各界痛批民进党当局强推“去中国化”教科书"},
		   {title:"港媒：暴力就是暴力 为何反对派搞双重标准？"},
		   {title:"港媒：《苹果》急于漂白暴力恶行说明什么？"},
		   {title:"两岸专家齐聚浙江共话乡村振兴 推动浙台农业合作"},
		   {title:"2020蔡英文或许会连任，但民进党的好日子快到头了"},			  
	   ],
	   hkmacao_special:[
		   {title:"习近平：支持国际刑警联合反恐"},
		   {title:"中评镜头：韩国瑜拜会民进党团开心吃水果"},
		   {title:"郭信良接蔡后援总会长　台南英系新系拼场"},
		   {title:"蓝委怒骂烂官蔡碧仲回击　委员会休息降温"},
		   {title:"高铁董座拒说明陈明文300万　蓝委怒轰"},
		   {title:"高雄市议会今开议　韩国瑜率官员拜码头"},
		   {title:"国台办：民进党当局破坏两岸交流本性不改"},
		   {title:"香港今年登记选民413.3万人创新高"},
		   {title:"港媒：香港最自由地位 岂能靠颠倒是非来维护？"},
		   {title:"四煞伏击邝俊宇 政府强烈谴责暴力"},
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
  .hkmacao-header{
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
  .hkmacao{
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

  /* 最新港澳新闻 */
  .hkmacao-left-title{
    padding: 20px 0px 10px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: left;
    color: orangered;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }
  .hkmacao-news{
    height: auto;
  }
  .hkmacao-lcent-item{
    padding-top: 10px;
    margin-left:10px ;
    height: 12.5rem;
  }
  @media only screen and (max-width:990px) {
    .hkmacao-lcent-item {
       max-height: 200px;
    }
  }
  @media only screen and (max-width:767px) {
    .hkmacao-lcent-item {
      height: 125px;
    }
  }
  .hkmacao-lcent-item:hover{
     box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
  }
  .hkmacao-left,.hkmacao-right{
    padding-right: 10px;
    padding-left: 10px;
    background-color: white;
    margin-top: 10px;
  }
  .hkmacao-left-center{
    margin-top: 10px;
    padding: 0px;
    margin: 0px;
  }
	.hkmacao-leftcenter-imgbox{
	  height: 200px;
	}
 @media only screen and (max-width:990px) {
      .hkmacao-leftcenter-imgbox{
       height: 100px;
      }
   }
   .hkmacao-leftcenter-img{
    padding-left: 20px;
    padding-right: 20px;
    overflow:hidden;
    max-height: 180px;
   }
   .
 @media only screen and (max-width:990px) {
    .hkmacao-leftcenter-img{
        padding-left: 5px;
        padding-right: 0px;
    }
  }
  .hkmacao-leftcenter-img img{
    width: 100%;
    height: 100%;
  }
  .hkmacao-leftcenter-img img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .hkmacao-leftcenter-title{
    margin-bottom: 10px;
    padding: 10px;
    height: 180px;

  }
  .hkmacao-leftcenter-writer{
    float: right;
    color: #999;
    font-size: 14px;
  }
  .hkmacao-leftcenter-time{
    color: #999;
    float: left;
    height: 1.25rem;
    font-size: 12px;
   }
 @media only screen and (max-width:990px) {
    .hkmacao-leftcenter-title {
        height: 100px;
    }
    .hkmacao-leftcenter-writer{
       display: none;
    }
    .hkmacao-leftcenter-img{
        padding-right: 0px;
    }
   }
  @media only screen and (min-width:990px) {
     .hkmacao-title{
       font-size: 1.25rem;
     }
    }
  .hkmacao-leftcenter-titleb{
    height: 1.5625rem;
    line-height: 1.5rem;
    width: 100%;
    text-align: left;
    font-size: 1rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:1; 
    -webkit-box-orient: vertical;
    }
  .hkmacao-leftcenter-title p{
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
    /* 最新港澳热点 */
  .text-danger{
    color: orangered !important;
  }
  .hkmacao-right{
    padding-top: 10px;

  }
  .hkmacao-newshot-list{
    text-align: left;
    padding-left: 10px;
    position: relative;
    height: auto;
    color: #000000;
  }
  .hkmacao-newshot-item {
    padding: 10px 5px;
    border-bottom: 1px solid #FFCC99;
  }
  .hkmacao-newshot-item:last-child{
    border: none;
  }
  .hkmacao-newshot-item span{
    margin-right: 10px;
    line-height: 1.5625rem;
    width: 1.5625rem;
    height: 1.5625rem;
    text-align: center;
    display: inline-block;
    border-radius: 50%
  }
  .hkmacao-newshot-number{
    background-color: #ddd;
  }
  .hkmacao-newshot-number-qian3{
    background-color: orangered;
    color: white;
    }

  .hkmacao-newshot-item p{
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
  .hkmacao-special{
   background-color: white;
   text-align: left;
   padding-top: 50px;
   height: auto;
  }
  .hkmacao-special-title{
    padding: 10px 0px 10px 20px;
    border-bottom: 1px solid #ddd;
  }
  .hkmacao-special-title span{
    padding: 10px 0px 10px 20px;
    font-size: 1rem;
    color: orangered;
    font-weight: bold;
  }
  .hkmacao-special-list{
    padding: 0px;
  }
  .hkmacao-special-item{
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
