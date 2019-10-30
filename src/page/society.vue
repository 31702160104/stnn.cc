<template>
  <div class="society">
    <div class="society-title">社会</div>
      <el-row class="societ-carousely">
        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24"  class="society-carousel-left">
			<!-- 社会轮播图 -->
            <el-carousel :height="screenWidth<990 ? '300px':'500px'" >             
                <el-carousel-item v-for="(item,index) of society_img" :key="index">
					<router-link tag="a" target="_blank" :to="{name:'content'}">	
					  <div class="society-carousel-imgbox"><img :src="item.src" alt=""></div>
						<div class="society-carousel-right">
						  <div :class="screenWidth<990 ? 'society-carousel-title-small':'society-carousel-title'" >"{{item.title}}"</div>
						  <p class="society-carousel-content">"{{item.content}}"</p>
						  <div class="society-carousel-write">星岛环球网</div>
						</div>		
					 </router-link>			  
                </el-carousel-item>     
            </el-carousel>
        </el-col>
		<!-- 轮播图下方图片新闻 -->
        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24"  class="society-slide">
          <ul class="society-slide-list">
            <el-col  :span="6" :xs="12" :sm="12" :md="6" :lg="6" v-for="(item,index) of society_simg" :key="index">
              <li class="society-slide-item">
                 <router-link tag="a" target="_blank" :to="{name:'content'}">
                    <div class="society-slide-imgbox"><img :src="item.src" alt=""></div>
                    <p>{{item.title}}</p>
                 </router-link>
              </li>
            </el-col>
          </ul>
        </el-col>
      </el-row>
      <el-row>
		 <!-- 最新社会新闻 --> 
        <el-col :span="15" :xs="24" :sm="24" :md="15" :lg="15" class="society-news">
        <el-col  :span="24" :xs="24" :sm="24" :md="24" :lg="24" class="society-news-left">
          <div class="society-news-header">最新社会新闻</div>
            <ul class="society-news-list">
              <el-col  :span="8" :xs="12" :sm="12" :md="8" :lg="8"  v-for="(item,index) of society_news" :key="index" class="society-news-itembox">
                <li class="society-news-item">
                    <router-link tag="a" target="_blank" :to="{name:'content'}">
                      <div class="society-news-imgbox"><img :src="item.src" alt=""></div>
                      <div class="society-news-title">{{item.title}}</div>
                      <p class="society-news-content">{{item.content}}</p>
                      <div class="society-news-wirter">星岛环球网<span>{{item.time}}</span></div>
                    </router-link>
                 </li>
              </el-col>
            </ul>
        </el-col>
<!-- 社会资讯 -->
        <el-col  :span="24" :xs="24" :sm="24" :md="24" :lg="24"  class="society-zixun-card">
             <div class="society-zixun-title">社会资讯</div>
             <ul class="society-zixun-cardlist">
               <li class="society-zixun-carditem" v-for="(item,index) of society_xun" :key="index">
                 <router-link tag="a" target="_blank" :to="{name:'content'}">
                   <div class="society-zixun-cardtitle">{{item.title}}</div>
                   <p>{{item.content}}</p>
                   <div class="society-zixun-cardwriter">星岛环球网<span>{{item.time}}</span></div>
                 </router-link>
               </li>
             </ul>
           </el-col>
        </el-col>
        <el-col :span="9" :xs="24" :sm="24" :md="9" :lg="9"  >
      <!-- 最新社会热点 -->
       <div class="society-newshot">
          <b-tabs
            active-nav-item-class="font-weight-bold text-uppercase text-danger"
            active-tab-class="font-weight-bold text-success"
            content-class="mt-3"
          >
            <b-tab title="最新社会热点" active >
              <ul class="society-newshot-list">
                <li class="society-newshot-item society-newshot-height" v-for="(item,index) of society_hotnews" :key="index" >
                  <router-link tag="a" target="_blank" :to="{name:'content'}">
                   <p>
                     <span :class="index<3 ? 'society-newshot-number-qian3':'society-newshot-number'">{{index+=1}}</span>
						{{item.title}}
                   </p>
                  </router-link>
                </li>
              </ul>
            </b-tab>
          </b-tabs>
        </div>
		<!-- 特别推荐 -->
        <div class="society-special">
          <div class="society-special-title"><span>特别推荐</span></div>
          <ul class="society-special-list">
            <li v-for="(item,index) in society_special" :key="index"  class="society-special-item">
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
  		society_img: [
  			{ src: require("../images/society/society01.jpg"),title:"最后一架飞机起飞后，中国首座机场正式关闭",content:"新华社北京9月25日电（记者齐中熙、叶昊鸣）25日23时许，随着最后一架飞机从北京南苑机场起飞，经过短暂飞行后降落在北京大兴国际机场。中国首座百年历史的南苑机场正式关闭。"},
  			{ src: require("../images/society/society02.jpg"),title:"新疆库尔勒火车站建成 现代感十足",content:"中新网乌鲁木齐9月25日电（杨厚伟） 9月25日，历时8个月的新疆库尔勒火车站改扩建工程完成，将在十一国庆节前投入使用。"},
            { src: require("../images/society/society03.jpg"),title:"史无前例！带你探访大兴机场背后的'硬核'工程奥秘",content:"飞过万米高空，俯瞰神州大地，金色的机场航站楼在阳光下熠熠生辉。由旅客大厅所在的核心区和五个手指形廊道组成的航站楼，外形酷似“凤凰展翅”"},
            { src: require("../images/society/society04.jpg"),title:"国庆假期或有近8亿人次出游 哪些地方人多？",content:"小长假出行总避免不了“人山人海”的尴尬，不过别担心，今年十一长假许多人选择拼假出行。"},
            { src: require("../images/society/society05.jpg"),title:"这款纪念币刚推出就被伪造 涉案金额超千万",content:"新中国成立70周年金银纪念币一经推出，立即成为“爆款”。该团伙制作一套假的70周年纪念币成本只要几元钱，但一出手就可以谋取成百上千倍的暴利。"},
            { src: require("../images/society/society06.jpg"),title:"俄正妹举重影片曝 超猛身材网惊呆",content:"'天使脸蛋，魔鬼身材'通常都是用来形容长相甜美清秀，但身材却十分火辣的女性，不过俄罗斯却有一名运动员拥有和大家一般想象不同的'魔鬼身材'，"},
  		],
		// 轮播图下面小图
		society_simg:[
			{ src: require("../images/society/society07.jpg"),title:"24岁女子在苏州玄妙广场裸奔 警方:正在调查"},
			{ src: require("../images/society/society08.jpg"),title:"猪肉1天1个价？广西柳州市监局：不得串通涨价"},
			{ src: require("../images/society/society09.jpg"),title:"注意 这样发朋友圈会泄露隐私 请尽快删掉"},						
			{ src: require("../images/society/society10.jpg"),title:"北京:9月30日及10月1日S2线 怀-密线部分列车停运"},						
		],
		// 最新社会新闻
		society_news:[
			{ src: require("../images/society/society11.jpg"),title:"60岁老太频繁在菜场偷包 作案动机让人哭笑不得",content:"前些时候，在扬州市东花园的联谊菜场，接二连三发生盗窃案件，民警调取监控后惊讶地发现，下手的居然是一个老太太。要说这个老太太的作案动机，实在是很奇葩。",time:"2019-09-25 09:15"},
			{ src: require("../images/society/society12.jpg"),title:"受远期航班调整影响 目前首都机场取消多个航班",content:"受远期航班调整影响，目前北京地区始发航班集中调整。截至9月25日08：00",time:"2019-09-25 09:20"},			
			{ src: require("../images/society/society13.jpg"),title:"北京地铁：地铁机场线正式更名为“首都机场线”",content:"9月24日，北京青年报记者从北京地铁公司获悉，按照北京市交通委相关工作要求，北京地铁公司于近日完成既有机场线更名和标志标识更新工作。",time:"2019-09-24 16:03"},			
			{ src: require("../images/society/society14.jpg"),title:"为什么兰州牛肉拉面和沙县小吃飘香中国？",content:"闻名于世的“丝绸之路”，一条经陆上，行过甘肃；一条在海上，途经福建。巧合的是，千百年来，这两地各有一种代表性饮食，不仅在中国的大江南北“遍地开花”，更随着“丝绸之路”走向海外。",time:"2019-09-24 17:03"},			
			{ src: require("../images/society/society15.jpg"),title:"报告称家政业薪资整体上涨 月嫂平均月薪达9795元",content:"中新网客户端北京9月24日电（记者 吴涛）24日，58同城发布的《中国家政市场就业及消费报告》显示，8月家政行业薪资整体上涨，其中月嫂月均薪资达9795元。",time:"2019-09-24 11:38"},
			{ src: require("../images/society/society16.jpg"),title:"重赏一万元寻猫!猫找到了,接下来的故事却让小区炸锅",content:"“我们这小区，这两天因为一只不小心走丢的猫咪炸锅了！”9月22日下午，家住杭州某小区的周先生爆料。",time:"2019-09-24 09:59"},												
		],
		// 社会资讯
		society_xun:[
			{title:"广场“捡”到两岁男孩，她为何没有立刻广播寻人？",content:"随后，民警让江女士广播寻人。保安指着微信里的照片与江女士“捡”到的儿童对比，发现眼前的孩子确实是微信群里传的走失儿童。 民警不放心，于是让黑衣女子带着他找孩子的妈妈。不一会儿，一名保安引着一名穿白色短袖的女子来到男童身边。",time:"2019-09-24 09:55"},
			{title:"奇葩！男子刚买下房子没几天，17户邻居吓得纷纷跑路",content:"据了解，住户周某是黄岩人，在温岭卖空调多年，有了些积蓄后，他在城西街道某小区购买了这套二手房。周某想要重新装修时扩大些空间，就把屋内所有的墙都拆了。",time:"2019-09-24 10:55"},
			{title:"我只想选个座,你却让我社交?这款APP又被曝泄露隐私",content:"当时，针对新功能涉嫌泄露乘客隐私一事，航旅纵横也在微博上发布了《关于“虚拟客舱功能”的回复》一文，表示“非常抱歉”，并称已将引起争议的“虚拟个人主页”设置为默认关闭状态。",time:"2019-09-24 11:01"},
			{title:"济南一296平米租房被改宿舍住48人 邻居登门撵人",content:"最近，在济南一高档小区一栋楼上的业主联名上书，要求撵走其中一户296平米的房子，里面除了要住48个人，就连厕所都快改成“公厕”了",time:"2019-09-24 14:07"},
			{title:"禁猎期捕800多条蛇 5人被判令赔偿20万国家损失",content:"一年多时间里捕了800多条王锦蛇卖给他人当美食。近日,由浙江省杭州市临安区检察院提起的罗某、王某、曹某非法狩猎,黄某、张某掩饰",time:"2019-09-24 15:11"},						
			{title:"女网红回应租房留一屋狗屎后失联 称自己突然住院",content:"月23日，网红李女士现身与房东协商，她称自己搬家后因病住院，将后续处理交给助理负责，但助理忘记打扫房间。自己也并非“失联”，",time:"2019-09-24 11:19"},						
			{title:"朋友圈“精装修”产业链：60元就能“环游世界”",content:"在电商网站上只要花几元钱，就能给社交朋友圈来一次“精装修”，打造各种“高端人设”。",time:"2019-09-24 05:34"},
			{title:"共享充电宝告别1元时代 网友:充电宝自由正在远去",content:"以前花一两元就能充满电，前几天一下子被扣了12元。”吴翔宇自称是共享充电宝的长期用户，因为手机的使用频率高，他习惯了外出时租借充电宝。对于共享充电宝涨价，他表示，“这完全是‘收割韭菜’行为”。",time:"2019-09-24 12:12"},
			{title:"出门旅游遇车祸 “硬核”大爷一声吼连救12人",content:"近日来自沈阳的67岁大爷卜庆平在旅游途中偶遇车祸现场卜大爷和家人走近一看发现12名伤者其中还有孩子一女子被车轮轧住腿孩子被重物压得失去意识",time:"2019-09-24 14:09"},
			{title:"夹娃娃机店不夹娃娃 小情侣上演活春宫全被录",content:"夹娃娃机一般采无人管理，台湾新北市竟有一对中学小情侣，夹娃娃夹到欲火难耐，竟见四下无人",time:"2019-09-24 16:07"},
			{title:"广西岑溪市排查出非洲猪瘟疫情 发病2头死亡2头",content:"农业农村部新闻办公室9月23日发布，广西壮族自治区岑溪市排查出非洲猪瘟疫情。",time:"2019-09-24 19:50"},						
			{title:"热裤妹倒立劈一字马 曲线极致诱人",content:"现在女性不仅追求纤瘦，还要拥有紧实的身材。马来西亚一名运动型正妹，外型相当亮眼，还拥有川字腹肌及逆天长腿，日前她还在IG上，分享她站立劈一字马的照片",time:"2019-09-24 22:15"},													
		],
		// 最新社会热点
		society_hotnews:[
		  {title:"《我们走在大路上》改革开放谱新篇 脱贫攻坚"},
		  {title:"国庆联欢活动将于10月1日晚8时在天安门广场举行"},
          {title:"北京大兴国际机场正式通航！7家航空公司客机起飞"},
          {title:"特朗普联大批评中国未履行入世承诺 外交部回应"},
          {title:"受阅女兵超燃视频曝光！她们专属的'阅兵腿'是这样"},
          {title:"暖新闻 '大衣哥'上午捐款140万,下午回家卖废品"},
		  {title:"女子趁老公出差将其20万私房钱转走 报警称被盗"},
		  {title:"女子悬赏万元寻猫后疑不守承诺 律师:违约 需承责"},
          {title:"19岁女孩涠洲岛失联1月 家属:遗书有矛盾 不信轻生"},
          {title:"孟晚舟律师：加方滥用程序 替美国进行秘密调查"},		  
		],			
		
		// 特别推荐
		society_special: [
		  {title:"韩媒公开'杀人回忆'原型嫌犯照片 母亲:他不会杀人"},
		  {title:"奏响新中国奋斗交响曲 高唱新时代奋斗者之歌"},
          {title:"央视：行得通 真管用 有效率 百姓保健康 农民鼓腰包"},
          {title:"70年风雨兼程 70年沧桑巨变 理上网来 中国答卷"},
          {title:"走好新时代长征路 心连心 爱香港"},
          {title:"为何夫妻档创业难以长久？根源在这儿 | 商业+"},
		  {title:"沙特油田遭空袭对国际油价的影响为什么减弱？"},
		  {title:"躺赚！玻尿酸成本19元 打到脸上3800元"},
          {title:"收评：沪指跌1%创业板跌1.3% 科技股重挫"},
          {title:"韩国终止情报共享后 日本多次未能探测朝鲜导弹"},  
		],	
		// 
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

<style  scoped="scoped">
  a{
    color: #000000;
  }
  a:hover{
    color: orangered;
  }
  .society{
    height: auto;
    margin: 0 auto;
    max-width: 1400px;
    margin-bottom: 50px;
    background-color: white;
  }
  .society-title{
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
  .societ-carousely{
    height: auto;
  }
  .society-carousel-left{
   padding: 20px;
   position: relative;
  }
  .society-carousel-imgbox{
	position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .society-carousel-imgbox img{
    width: 100%;
    height: 100%;
  }
  .society-carousel-imgbox img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  /* 右侧内容 */
  .society-carousel-right{
    position: absolute;
    padding: 20px;
    z-index:5;
    width: 18.75rem;
    height:auto;
    top: 0px;
    bottom: 0px;
    right: 0px;
    text-align: left;
    background: url(../images/home-titileback.png);
  }
 @media only screen and (max-width:990px) {
    .society-carousel-right{
      background: none;
    }
   }
  /* 屏幕大于显示 */
  .society-carousel-title{
    height: 5.3125rem;
    line-height: 2.8125rem;
    color: white;
    font-size: 1.125rem;
    font-weight: bold;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  /* 屏幕小于显示 */
  .society-carousel-title-small{
	  position: absolute;
	  color: white;
	  bottom: 0px;
	  left: 0px;
	  text-align: center;
	  width: 100%;
	  height: 100px;

  }
  .society-carousel-content{
    height:12.5rem;
    line-height: 2.5rem;
    color: white;
    font-size: 1rem;
    text-indent: 2em;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:5;
  }
  .society-carousel-write{
    text-align: right;
    height: 1.25rem;
    line-height: 1.25rem;
    color: white;
  }
 @media only screen and (max-width:990px) {
    .society-carousel-content,.society-carousel-write{
      display:none;
    }
   }
   /* 模块新闻 */
  .society-slide{
    padding-top: 5px;
  }
  .society-slide-list{
    width: 100%;
    padding: 0px;
   }
  .society-slide-imgbox{
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
    height:250px;
    overflow: hidden;
   }
  @media only screen and (max-width:990px) {
    .society-slide-imgbox{
      height: 150px;
    }
  }    
  .society-slide-imgbox img{
   width: 100%;
   height: 100%;
 }
  .society-slide-imgbox img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .society-slide-item p{
	padding: 5px;
    height:3.5rem;
    line-height:1.3rem;
    font-size: 1rem;
    text-align: left;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    /* background-color: #0000FF; */
  }
  @media only screen and (max-width:990px) {
    .society-slide-item p{
       text-align: center;
    }
  }     
 
/* 社会资讯 */
  .society-zixun-card{
    margin-top:40px;
    height: auto;
  }
  .society-zixun-title{
    width: 100%;
    height: 2.1875rem;
    font-size: 1.5rem;
    color: orangered;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
    padding-left: 20px;
    border-bottom: 2px solid orangered;
  }
  .society-zixun-cardlist{
    margin: 5px;
    padding: 5px;
  }
  .society-zixun-carditem{
    height: 10.625rem;
    padding: 10px;
    text-align: left;
    margin-top: 15px;
    border-bottom: 1px solid #ddd;
  }
  .society-zixun-carditem a:hover{
    color: #000000;
    text-decoration: none;
  }
  .society-zixun-carditem:hover{
    box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
  }
  .society-zixun-cardtitle{
    color: orangered;
    font-weight: bold;
    font-size:1.125rem;
    height:1.5rem;
    line-height:1.5rem;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:1; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
  .society-zixun-carditem p{
    height: 3.75rem;
    line-height: 2rem;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:2; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
  .society-zixun-cardwriter{
	height: 20px;
	line-height: 20px;
    color: #aaa;
    text-decoration: none !important;
  }
  .society-zixun-cardwriter:hover{
    text-decoration: none !important;
  }
  .society-zixun-cardwriter span{
	height: 20px;
	line-height: 20px;
    margin-left: 50px;
  }
/* 最新社会新闻 */
  .society-news-header{
    width:97%;
    height: 2.1875rem;
    font-size: 1.2rem;
    color: orangered;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
    margin-left: 15px;
    padding-left: 15px;
    border-bottom: 2px solid orangered;
  }
  .society-news-list{
   padding-left: 10px;
   padding-right: 10px;
   width: 100%;
   height: auto;
   display: flex;
   flex-wrap:wrap ;
  }
  .society-news-item{
    height: auto;
    margin-bottom: 10px;
  }
  .society-news-itembox:hover{
   box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
 }
  .society-news-itembox{
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
  }
  .society-news-imgbox{
	height: 200px;
    overflow: hidden;
  }
  @media only screen and (max-width:990px) {
    .society-news-imgbox{
        height: 150px;
    }
  }   
  .society-news-imgbox img{
    width: 100%;
    height: 100%;
  }
  .society-news-imgbox img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .society-news-title{
    padding:0px 10px;
    height: 2.7rem;
    line-height:1.4375rem;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .society-news-content{
    padding:5px 10px;
    height: 4.2rem;
    line-height: 1.4rem;
	font-size: 0.9375rem;
    text-align: left;
    text-indent: 2em;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
  }
   .society-news-content:hover{
    text-decoration: none !important;
  }
  .society-news-wirter{
	font-size: 0.875rem;
	color: #999;
    text-align: left;
  }
  .society-news-wirter span{
	font-size: 0.875rem;
	color: #999;
    float: right;
  }
  /* 最新社会热点 */
  .text-danger{
    color: orangered !important;
  }
  .society-right{
    padding-top: 10px;
  }
  .society-newshot-list{
    text-align: left;
    padding-left: 10px;
    padding-bottom: 20px;
    position: relative;
    height: auto;
    color: #000000;
  }
  .society-newshot-item:last-child{
    border: none;
  }
  .society-newshot-item span{
    margin-right: 10px;
    line-height: 1.5625rem;
    width: 1.5625rem;
    height: 1.5625rem;
    text-align: center;
    display: inline-block;
    border-radius: 50%
  }
  .society-newshot-number{
    background-color: #ddd;
  }
  .society-newshot-number-qian3{
    background-color: orangered;
    color: white;
  }
  .society-newshot-item p{
    height:1.6rem;
    line-height: 1.6rem;
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
  .society-special{
    background-color: white;
    text-align: left;
    padding-top: 50px;
    height: auto;
  }
  .society-special-title{
    padding: 10px 0px 10px 20px;
    border-bottom: 1px solid #ddd;
  }
  .society-special-title span{
    padding: 10px 0px 10px 20px;
    font-size: 1rem;
    color: orangered;
    font-weight: bold;
  }
  .society-special-list{
    padding: 0px;
  }
  .society-special-item{
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
