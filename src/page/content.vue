<template>
  <div class="content">
    <div class="cblock">
      <h1>香港市民高唱国歌 毋惧“点相”报复</h1>
      <div class="time"><span>2019-09-15 08:26</span> <span>星岛环球网</span> <span>来源</span></div>
      <section class="content-center">
        <a>
          <p>星岛环球网消息：香港《文汇报》报道，“你们非法集会破坏公物、打人就得，我们和平集会唱国歌就俾你们捣乱，算什么民主？”昨日中秋节假期，一批爱国爱港人士自发到淘大商场唱国歌，其间被黑衣暴徒“踩场”，大批爱国爱港人士不忿被搞破坏，毋惧被“点相”报复，与暴徒理论说：“我们是中国人，在中国人的地方，唱国歌有什么不对？”
          过去3个多月暴力示威者罔顾公众安全，不断作出投掷汽油弹、纵火、堵路及破坏公众设施等暴力行为，严重破坏社会治安及引起市民强烈不满，连日来全港各区商场也有爱国爱港人士自发唱国歌，为香港打气。
          昨日下午2时许，数百名市民趁中秋节假期聚集淘大商场一边挥动大小国旗、一边高唱国歌，以示撑警及支持早前在该商场唱国歌期间遇袭的小学教师。
          黑衣人到挑衅引冲突</p>
        </a>
        <a>
          <p>昨日所见，商场到处一片殷红的“旗海”，气氛非常融洽和平。突然，大批黑衣人杀气腾腾进入商场，他们大声唱“港独”歌曲及叫骂挑衅，两批人继而发生口角。黑衣人一言不合，更出手强抢市民的国旗及伤人，在场人士尝试劝阻但不成功，之后商场到处有人扭打，场面非常混乱，商场店铺纷纷紧急落闸。
          大批防暴警赶至分隔双方，经初步调查后带走数名涉案者，但黑衣人沿途叫嚣要求警方“放人”，场面再次混乱需要增援，防暴警多次警告无效被迫使用武力驱散，制服数名滋事分子带署，现场秩序一度受控后，防暴警便撤退。讵料黑衣人去而复返，再次聚集商场叫嚣，不时与唱国歌市民发生冲突，防暴警再次到场执法，平息事件。
          有参与唱国歌的市民对黑衣人大表不满，“这算什么民主？他们非法集会搞破坏就得，我们和平集会唱国歌，无搞事、无破坏，他们唔锺意可以唔好来，点解要阻止我们呢？”
          有市民表示，对暴徒打人“睇唔过眼”，“之前一名手抱年幼女儿与家人逛淘大商场的老师，高唱中华人民共和国国歌，遭逾百示威者包围辱骂，老师血流披面，又被人起底凌辱，我们唔想日后连唱国歌的自由也没有，所以今日(昨日)要行出来，集体唱国歌，唱畀他们知我们是中国人。”甚至有人对着镜头向暴徒说：“我就系爱国爱港，你们(暴徒)唔钟意就认住我，我唔怕你们(起底)。”
          淘大冲突时序</p>
        </a>
		<p>14:45</p>
		<p>大批爱国爱港人士聚集淘大商场挥国旗，齐唱国歌撑警察及声援早前被黑衣人围殴的李老师</p>
		<p>15:00</p>
		<p>一批黑衣暴徒“踩场”，挑衅在场声援人士，双方陆续在商场内及附近街头发生冲突及殴斗，商场内外大部分商户立即落闸关门</p>
		<p>15:15</p>
		<p>大批警员赶至制止，在商场外制服至少10人，在商场不同楼层再拘捕多人</p>
		<p>16:00</p>
		<p>大批防暴警增援在商场内外控制场面，有数人受伤需救护车送院，情况一度受控，但仍有黑衣人继续指骂挑衅警员及声援人士</p>
		<p>16:35</p>
		<p>大批声援人士离开，防暴警乘警车撤离，但有黑衣人一度堵塞牛头角道，包围袭击警车，警员要喷射胡椒喷剂才能驶走</p>
		<p>17:00</p>
		<p>大批黑衣人再度聚集占领商场，在商场内外及附近街道四处搞事，不时包围殴打落单的不同意见市民，现场混乱</p>
		<p>18:00</p>
		<p>两名男女市民在商场被黑衣人包围指骂，获市民挺身保护离开，但两人在商场外再被一批黑衣人追打，穿蓝衣男事主遭围殴受伤倒地，警方赶到替事主解围，带上警车离开</p>
		<p>20:30</p>
		<p>商场内暴徒渐散，数十名自称是淘大花园居民不满警方进入商场执法，到管理处要求交代云云</p>
      </section>
    </div>
    <!-- 48小时排行榜 -->
    <div class="bang">
      <b-tabs
        active-nav-item-class="font-weight-bold text-uppercase text-danger"
        active-tab-class="font-weight-bold text-success"
        content-class="mt-3"
      >
        <b-tab title="推荐新闻" active >
          <ul class="bang-list">
         	<li class="bang-item bang-height" v-for="(item,index) of content_img" :key="index" >
				<span class="bang-writer">作者：{{item.writer}}</span>
              <router-link tag="a" target="_blank" :to="{name:'content'}"class="bang-a bang-a-p">
                 <el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="bang-img">
                     <img :src="item.src" alt="">
                 </el-col>
                 <el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
                   <div class="bang-title">
                    <span class="bang-titleb timenews-title">{{item.title}}</span>
                     <span class="bang-time">{{item.time}}</span>
                     <span class="bang-conten">{{item.content}}</span>
                   </div>
                 </el-col>
               </router-link>
            </li>
          </ul>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
	data() {
	  return {
      content_img: [
        { src: require("../images/content/content01.jpg") ,title:"星岛新闻集团主席何柱国写给香港教师的一封信",time:"2019-09-25 19:54",content:"星岛新闻集团主席何柱国先生再次撰文，质问学生只擅长搞政治运动，香港还有未来吗？何柱国先生呼吁，全港的各大教师工会和教育组织应严肃思考，给我们年轻人一条活路，请政治必须远离校园。",writer:" 星岛环球网"},
        { src: require("../images/content/content02.jpg") ,title:"高雄市议会今开议　韩国瑜率官员拜码头",time:"2019-09-25 19:27",content:"韩国瑜25日上午参加高雄市议会第三届第二次定期大会开幕，原本预定9时在会前先拜访党团，韩提早12分钟抵达，陆续前往议长室、副议长室、国民党团、民进党团、无党团结联盟进行拜会。",writer:" 星岛环球网"},
        { src: require("../images/content/content03.jpg") ,title:"香港如何破局？这位新闻大佬有话说",time:"2019-09-25 18:01",content:"近日，香港传媒业资深人士——星岛新闻集团主席何柱国在《星岛日报》连刊三文，呼吁香港青年创新创业，呼吁全港市民保持冷静，亦喊话外部势力勿要乱港。",writer:" 星岛环球网"},
		{ src: require("../images/content/content04.jpg") ,title:"四煞伏击邝俊宇 政府强烈谴责暴力",time:"2019-09-25 17:42",content:"香港《文汇报》报道，民主党立法会议员邝俊宇报称，昨晨在天水围遭3名男子拖出车厢外拳打脚踢及击打后颈，另一人用手机拍摄整个袭击过程。",writer:" 星岛环球网"},
        { src: require("../images/content/content05.jpg") ,title:"重磅！我国两栖攻击舰首舰下水",time:"2019-09-25 17:09",content:"9月25日上午，中国海军首艘两栖攻击舰下水仪式在上海举行。",writer:" 星岛环球网"},
		{ src: require("../images/content/content06.jpg") ,title:"13岁小暴徒袋3万元 想叫弟弟“入伙”",time:"2019-09-25 17:01",content:"香港《文汇报》报道，近月连串暴乱中，不乏年仅十二三岁的小暴徒全副武装走在暴冲现场“最前线”，不知政治为何物的少年，上街动机何在？",writer:" 星岛环球网"},
        { src: require("../images/content/content07.jpg") ,title:"两岸不同调泛蓝开杠　韩办低调：韩主张务实",time:"2019-09-25 16:52",content:"中评社台北9月25日电（记者　张嘉文）针对新党、中国国民党为两岸路线开杠，是否影响国民党2020参选人韩国瑜选情？",writer:" 星岛环球网"},
        { src: require("../images/content/content08.jpg") ,title:"高铁董座拒说明陈明文300万　蓝委怒轰",time:"2019-09-25 16:40",content:"中评社台北9月25日电（记者　洪德谕）针对民进党“立委”陈明文在高铁遗失新台币300万风波，“立法院”今对此事邀请相关人员进行报告并备质询。",writer:" 星岛环球网"},
		{ src: require("../images/content/content09.jpg") ,title:"亲民党和谁合作？李鸿钧：不会让大家猜太久",time:"2019-09-25 16:08",content:"李鸿钧今天在“立法院”受访时，针对亲民党是否和他党合作推2020大选人选问题，作出以上表述。",writer:" 星岛环球网"},
        { src: require("../images/content/content10.jpg") ,title:"海军空军少将领衔受阅 首次亮相的方队有27位将军",time:"2019-09-25 15:09",content:"根据央视新闻报道，上述领导指挥方队的两名将军领队分别为姜国平少将和陈作松少将，前者是方队右领队，后者为左领队。",writer:" 星岛环球网"},
      ]
	  };
	},
};	
</script>

<style scoped="scoped">
  a{
    color: #000000;
  }
  a:hover{
   color: orangered;
  }
  .content{
    margin: 0 auto;
    height: auto;
    max-width: 1300px;
    margin-bottom: 100px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media only screen and (max-width:990px) {
    .content {
      position: relative;
      padding: 0px;
    }
  }
  .cblock{
    height: auto;
    border: 3px solid #ff9b75;
    background:white ;
    display: block;
    text-align: left;
    text-indent:2em;
    padding: 20px;
    line-height:50px;
    margin-bottom: 10px;

  }
  .cblock h1{
    text-align: center;
  }
  .time{
    width: 100%;
    position: relative;
    text-align: center;
    height:40px;
    line-height: 50px;
    color: #777;
    border-bottom: 1px solid orangered;
  }
/*推荐新闻 */
  .bang{
    width: 100%;
    height:auto;
    position: relative;
    background:white ;
    margin-top: 10px;
	padding-bottom: 20px;
  }
  .text-danger{
    color: orangered;
  }
   .bang-a{
    position: absolute;
    padding: 20px;
    left: 0px;
   }
 .bang-list{
    position: relative;
    height: auto;
    padding: 0px;
    margin: 0px;
  }
  .bang-item{
    height: 250px;
    width: 100%;
    padding-left: 0px;
    margin-bottom: 10px;
    border-bottom: 1px solid darkorange;
	position: relative;
  }
  .bang-item:hover{
    height: 250px;
    box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
  }
  @media only screen and (max-width:990px) {
    .bang-height{
      height: 300px;
      margin-top: 20px;
      border-bottom: 1px solid darkorange;
    },
    .bang-a-p{
       padding:1px;
    }
  }
  @media only screen and (max-width:768px) {
    .bang-height{
      height: 150px;
      margin-top: 20px;
      border-bottom: 1px solid darkorange;
    },
    .bang-a-p{
      padding:1px;
    }
  }
  .bang-img{
    margin-bottom: 10px;
    max-height: 200px;
    max-width: 300px;
    overflow:hidden;
    height: 100%;
  }
  @media only screen and (max-width:768px) {
    .bang-img{
    height: 130px;
    width: 150px;
    }
  }  
  .bang-img img{
    width: 100%;
    height: 100%;
  }
  .bang-title{	  
	width: auto;
    padding: 10px;
    height: 200px;
	position: relative;
  }
  .bang-writer{
	position: absolute;
	top: 200px;
	right: 20px;
	height: 2rem;
	line-height: 2rem;
    color: #999;
    font-size: 14px;
  }
  .bang-time{
    color: #999;
    float: left;
    height: 1.25rem;
    font-size: 12px;
  }
  @media only screen and (min-width:990px) {
    .timenews-title{
      font-size: 1rem;
    }
  }
  .bang-titleb{
    height: 1.5625rem;
    line-height: 1.5rem;
    width: 100%;
    text-align: left;
    font-size: 1.125rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
   }
  .bang-conten{
    height:3rem;
	line-height: 1.5rem;
    color: #111;
    width: 100%;
    font-size: 0.875rem;
    text-align: left;
    text-indent:2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }

</style>
