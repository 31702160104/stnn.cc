<template>
   <div class="guangshen">
    <div class="guangshen-title">广深</div>
     <el-row type="flex">
       <el-col :span="1"></el-col>
	   <!-- 顶部大图 -->
       <el-col :span="22" class="guangshen-bigimg">
         <router-link tag="a" target="_blank" :to="{name:'content'}">
          <div class="guangshen-bigimgbox"><img src="../images/guangshen/guangshen01.jpg" alt=""></div>
          <div class="guangshen-bigimg-content">
            <div class="guangshen-bigimg-contentbox">
              <div class="guangshen-bigimg-title">深圳一职坪山校区揭牌成立，首批开设四个班招生近200人</div>
              <p >9月16日，深圳市第一职业技术学校坪山校区揭牌仪式暨开学典礼在坪山区坑梓街道荣峰路2号的过渡校区隆重举行。该校区首批开设机器人应用与维护、楼宇智能化设备安装与运行、药品食品检验等专业，首批开设四个班，招收学生约200人。</p>
              <div  class="guangshen-bigimg-time">2019-09-17</div>
            </div>
          </div>
         </router-link>
       </el-col>
       <el-col :span="1"></el-col>
     </el-row>
     <el-row >
	<!-- 最新广深新闻 -->
      <el-col :span="16" :xs="24" :sm="24" :md="16" :lg="16" class="guangshen-news-left">
        <div class="guangshen-news-title">最新广深新闻</div>
        <el-row>
			<!-- 最新广深新闻轮播图 -->
          <el-col  :span="11" :xs="24" :sm="24" :md="11" :lg="11">
              <div class="guangshen-carousel">
                <el-carousel height="250px">
                  <el-carousel-item v-for="(item,index) in guangshen_lunbo" :key="index">
                    <div class="guangshen-carousel-imgbox"><img :src="item.src" alt=""></div>
                    <div class="guangshen-carousel-title">{{item.title}}</div>
                  </el-carousel-item>

                </el-carousel>
              </div>
			<!-- 最新广深新闻底部图片内容 -->
              <el-col  :span="12" :xs="12" :sm="12" :md="12" :lg="12" class="guangshen-img-bottom" v-for="(item,index) in guangshen_img" :key="index">
                <div class="guangshen-bimg-bimgbox"><img :src="item.src" alt=""></div>
                    <div class="guangshen-bimg-title">{{item.title}}</div>
              </el-col>
          </el-col>
		   <!-- 最新广深新闻右侧内容 -->
         <el-col  :span="13" :xs="24" :sm="24" :md="13" :lg="13"  class="guangshen-img-right">
            <div class="guangshen-content-hot">
              <ul class="guangshen-content-list" >
                <li class="guangshen-content-item" v-for="(item,index) of guangshen_news":key="index">
                  <router-link tag="a" target="_blank" :to="{name:'content'}"  :class="index==0||index==5 ?'guangshen-item-blod':'' ">{{item.title}}</router-link>
                </li>
              </ul>
            </div>
          </el-col>
          <!-- 广深资讯 -->
          <el-col  :span="24" :xs="24" :sm="24" :md="24" :lg="24"  class="guangshen-news-card">
            <div class="guangshen-zhi-title">广深资讯</div>
            <ul class="guangshen-news-cardlist">
              <li class="guangshen-news-carditem" v-for="(item,index) of guangshen_xun" :key="index">
                <router-link tag="a" target="_blank" :to="{name:'content'}">
                  <div class="guangshen-news-cardtitle">{{item.title}}</div>
                  <p>{{item.content}}</p>
                  <div class="guangshen-news-cardwriter">星岛环球网<span>{{item.time}}</span></div>
                </router-link>
              </li>
            </ul>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="8" :xs="24" :sm="24" :md="8" :lg="8" class="guangshen-right">
        <!-- 最新广深热点 -->
        <div class="guangshen-newshot">
              <b-tabs
                active-nav-item-class="font-weight-bold text-uppercase text-danger"
                active-tab-class="font-weight-bold text-success"
                content-class="mt-3"
              >
                <b-tab title="最新广深热点" active >
                  <ul class="guangshen-newshot-list">
                    <li class="guangshen-newshot-item guangshen-newshot-height" v-for="(item,index) of guangshen_hot" :key="index" >
                      <router-link tag="a" target="_blank" :to="{name:'content'}">
                       <p>
                         <span :class="index<3 ? 'guangshen-newshot-number-qian3':'guangshen-newshot-number'">{{index+=1}}</span>
							{{item.title}}
                       </p>
                      </router-link>
                    </li>
                  </ul>
                </b-tab>
              </b-tabs>
            </div>
          <!-- 特别推荐 -->
            <div class="guangshen-special">
                <div class="guangshen-special-title"><span>特别推荐</span></div>
                <ul class="guangshen-special-list">
                  <li v-for="(item,index) in guangshen_special" :key="index"  class="guangshen-special-item">
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
		// 最新广深新闻轮播图
		guangshen_lunbo: [
			{ src: require("../images/guangshen/guangshen02.jpg"),title:"坪盐通道马峦山隧道贯通！长7.9公里，双向6车道"},
			{ src: require("../images/guangshen/guangshen03.jpg"),title:"福田将新增一条跨河桥，形似叶脉！设计双向4车道"},
			{ src: require("../images/guangshen/guangshen04.jpg"),title:"外国人听广州十三行的文物“讲”故事"},
		],
		// 最新广深新闻轮播底部
		guangshen_img: [
			{ src: require("../images/guangshen/guangshen05.jpg"),title:"南沙东湾村集体物业开工，建66.5万㎡综合体"},
			{ src: require("../images/guangshen/guangshen06.jpg"),title:"深圳大街小巷处处“国旗红” 灯杆悬挂超10万面国旗"},
		],	
		// 最新广深新闻轮播右侧
		guangshen_news:[
			{title:"广州孤儿成年后欲购商品房，可提前申领安置补贴"},
			{title:"广州保姆不慎烫伤半岁男孩下体 家政公司：不该告我"},
			{title:"广东拟立法赋予老师教育惩戒权：罚站罚跑不属于体罚"},
			{title:"李希到文化文艺单位调研 共商文化发展大计"},					
			{title:"这条街火了，深港军民快闪表白祖国"},					
			{title:"深圳一男童竟开着玩具车冲上北环大道，横穿马路"},
			{title:"女子与人发生口角恶意扎车轮胎 光明警方连夜速破案"},
			{title:"“金九银十”？深圳一二手住宅周成交量环比回升"},
			{title:"彭海斌当选深圳市总工会主席"},					
			{title:"@深圳人，做好准备！24-27日这些地方将停水"},											
		],
		// 广深资讯
		guangshen_xun:[
			{title:"广东拟规定:孩子上课喧闹 老师或可依法“罚站”",content:"9月24日，广东省十三届人大常委会第十四次会议首次审议《广东省学校安全条例（草案）》（以下简称草案），草案对学校校园内部安全管理、校园周边的安全管理等问题进行明确。",time:"2019-09-24 11:47"},
			{title:"广州已是红色的海洋，快来一起拍 “我和国旗同框”",content:"广州塔附近，一排鲜艳的国旗迎风飘扬 国旗和“小蛮腰”广州塔的双人照 花城广场，红彤彤的灯笼和灯饰让广场充满节日气氛 广州大道与金穗路交汇处",time:"2019-09-24 11:31"},
			{title:"广州番禺沙湾古镇新增打卡点 民国历史建筑变身民宿",content:"既加固承重又保留木结构特点 当你走进农荫厅的民宿房里,一定会惊讶地发现,在现代时尚的客房里,竟然还能见到头上古朴的木梁屋顶,这是原汁原味的民国时期的木梁。",time:"2019-09-24 11:07"},
			{title:"凌晨广州一女子遇“黑摩的”，幸好正规“的哥”及时出现",content:"“只有3公里的路程，我乘坐的车却越走越远，往反方向走了10多公里。我害怕极了，幸好出租车司机潘立雄师傅及时救了我！”",time:"2019-09-24 10:48"},				
			{title:"广东省公开招录1000名消防员 高中以上文化程度即可",content:"广东面向社会公开招录男性消防员1000名，其中定向招录退役士兵400名、公开招录社会青年600名。",time:"2019-09-22 11:30"},			
			{title:"揭开神秘面纱！广州新CBD是这样子的！",content:"潮起大湾区，扬帆正当时。为把握粤港澳大湾区打造国际一流湾区和世界级城市群的重大机遇，加快打造粤港澳大湾区文商旅融合发展典范片区，9月23日上午，广州市番禺区举办汉溪长隆万博片区投资发展系列活动。",time:"2019-09-24 10:32"},
			{title:"盐田要建17万㎡城市综合体 含住宅、商业、酒店等",content:"规划容积为169970平方米，其中住宅110390平方米(含保障性住房17663平方米)，商业、办公及旅馆业建筑42750平方米",time:"2019-09-24 10:13"},
			{title:"边坡危险提前知！深圳将建斜坡类地质灾害预警系统",content:"为统筹推进该项工作，并形成市区协同的系统网络，市规划和自然资源局和深圳市地质局会同各区编制了《深圳市斜坡类地质灾害区级自动化监测预警系统建设和运营维护技术指引》",time:"2019-09-24 10:13"},
			{title:"“十一”起3个月广东人游贵州景区门票打五折",content:"此次活动现场，贵州省文化和旅游厅用“非遗展示”“文艺展演”“旅游展销”三展合一的形式，向广东民众推介贵州浓郁的少数民族文化及多姿多彩的山水自然风光。",time:"2019-09-24 09:00"},				
			{title:"马兴瑞：全力以赴做好国庆各项安全防范工作",content:"省长马兴瑞出席会议并讲话，强调要深入学习贯彻习近平总书记关于安全生产工作的重要论述和重要指示精神",time:"2019-09-24 09:38"},										
		],				
		// 最新广深热点
		guangshen_hot:[
			{title:"曾被公安局纪委书记GPS定位跟踪的官员被双开"},
			{title:"东莞男开奥迪珠海洗车，做完保养竟不要车了！"},
			{title:"广东侦破特大网络赌博案，涉案200亿！"},
			{title:"假老板QQ让财务转账！警方及时止付挽回损失"},					
			{title:"广东省国有资产“家底”出炉 总资产超15万亿元"},					
			{title:"深圳少年生命垂危，只因爸爸亲手送上的致命快递"},
			{title:"又涨了！粤B车牌竞价出炉：个人最低成交价42000元"},
			{title:"深圳一豪宅将由租转售传言被证实 曾被质疑变相捂盘"},
			{title:"家政业薪资整体上涨，月嫂平均月薪9795元堪比白领"},					
			{title:"外籍旅客突发身体不适，生死关头边检民警伸援手"},											
		],				
		// 特别推荐
		guangshen_special:[
			{title:"男子朋友圈留遗言欲轻生 定位在南澳西涌"},
			{title:"突发！宝安一路口搅拌车侧翻，过路小车被压变形"},
			{title:"住址、电话、微信号，或3毛钱被卖 源头是招聘网站"},
			{title:"一线城市AI政策对比：广州真金白银 深圳瞄准高端人才"},					
			{title:"深圳地铁国庆主题专列上线 还设有三座主题枢纽站"},					
			{title:"广州番禺沙湾古镇新增打卡点 民国历史建筑变身民宿"},
			{title:"广州海珠广场升级换新颜 突出市民化和智慧生态化"},
			{title:"网约车司机坐地起价遭拒 乘客半夜被扔高速公路"},
			{title:"相当于十几层楼高！前海深隧工程钢筋笼成功起吊"},					
			{title:"年薪近30万招教师 龙华“求贤令”引关注"},											
		],								     
  	  };
  	},
  };
</script>

<style  scoped="scoped">
  a{
    color: #000000;
  }
  a:hover{
    color: orangered;
  }
  .guangshen{
    height: auto;
    margin: 0 auto;
    max-width: 1400px;
    margin-bottom: 50px;
    background-color: white;
  }
  .guangshen-title{
    width: 100%;
    height: 3.75rem;
    line-height: 3.75rem;
    color:orangered;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: left;
    padding-left: 50px;
    background-color: white;
    border-bottom:1px solid #FF6633;
  }
  /* 大图 */
  .guangshen-bigimg{
    margin-top: 10px;
    position: relative;
    width: 100%;
    height: 37.5rem;
    /* background-color: red; */
  }
  @media only screen and (max-width:990px) {
    .guangshen-bigimg{
      display: none;
    }
  }
  .guangshen-bigimgbox{
    z-index: 10;
    position: absolute;
    left: 4%;
    width: 40.625rem;
    height: 28.125rem;
    overflow: hidden;
  }
  .guangshen-bigimgbox{
   box-shadow: 10px 10px 10px 2px rgba(0, 0, 0, .5);
 }
  .guangshen-bigimgbox img{
    width: 100%;
    height: 100%;
  }
  .guangshen-bigimgbox img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .guangshen-bigimg-content{
    width: 80%;
    height: 29.375rem;
    position: absolute;
    top: 5%;
    right: 0px;
    bottom: 0px;
    background-color: #FF4500;
  }
  .guangshen-bigimg-contentbox{
    position: absolute;
    width:25rem;
    height: 16.875rem;
    right: 4%;
    bottom: 0px;
    top:20%;
  }
  .guangshen-bigimg-title{
    color: white;
    padding: 10px;
    height: 5rem;
    line-height: 1.7rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .guangshen-bigimg-content p{
    color: white;
    height:9.5rem;
    line-height:2rem;
    font-size: 1rem;
    text-indent: 2em;
    text-align: left;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:5;
  }
  .guangshen-bigimg-time{
    text-align: right;
    padding-right: 10px;
    height: 1.25rem;
    line-height: 1.25rem;
    color: white;
  }
/* 最新广深新闻 */
  .guangshen-news-title{
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
 @media only screen and (max-width:990px) {
   .guangshen-news-title{
	 display: none;
    }
  }
/* 最新广深新闻左侧轮播 */
  .guangshen-news-left{	
    height:auto;
    padding-left: 20px;
  }
  @media only screen and (max-width:990px) {
    .guangshen-news-left{
	  padding: 10px;
    }
  }
  .guangshen-carousel{
    height: auto;
  }
  .guangshen-carousel-imgbox{
    height: 200px;
    overflow: hidden;
  }
  .guangshen-carousel-imgbox img{
    width: 100%;
    height: 100%;
  }
 .guangshen-carousel-imgbox img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .guangshen-carousel-title{
    height:1.5rem;
    line-height: 1.5625rem;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;
  }
/* 最新广深新闻左侧下面 */
  .guangshen-img-bottom{
    padding-top: 10px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 10px;
  }
  .guangshen-bimg-bimgbox{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .guangshen-bimg-bimgbox img{
    width: 100%;
    height: 100%;
  }
 .guangshen-bimg-bimgbox img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .guangshen-bimg-title{
    height:2.3rem;
    line-height: 1.25rem;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
/* 最新广深新闻右侧内容 */
  .guangshen-img-right{
    height: auto;
    padding-left:10px;
    text-align: left;
  }
   .guangshen-content-list{
     padding: 0px;
   }
  .guangshen-content-item{
    height: 40px;
    line-height: 50px;
    font-size: 1rem;
    color: #ddd;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:1; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
  .guangshen-content-item a{
    color: #333;
  }
  .guangshen-item-blod{
    color: #000000;
    font-size: 1.0625rem;
    font-weight: bold;
  }
/* 广深资讯 */
  .guangshen-zhi-title{
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
  .guangshen-news-card{
    margin-top:40px;
    height: auto;
  }
  .guangshen-news-cardlist{
    margin: 5px;
    padding: 5px;
  }
  .guangshen-news-carditem{
    height: 10rem;
    padding: 10px;
    text-align: left;
    margin-top: 15px;
    border-bottom: 1px solid #ddd;
  }
  .guangshen-news-carditem:hover{
   box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
 }
  .guangshen-news-cardtitle{
    color: orangered;
    font-weight: bold;
    font-size:1.125rem;
    height:2rem;
    line-height:1.875rem;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:1; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
  .guangshen-news-carditem p{
    height: 3.125rem;
    line-height: 1.5625rem;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:2; /*想要显示的行数*/
    -webkit-box-orient: vertical;

  }
  .guangshen-news-cardwriter{
    color: #aaa;
    text-decoration: none !important;
  }
  .guangshen-news-cardwriter:hover{
    text-decoration: none !important;
  }
  .guangshen-news-cardwriter span{
    margin-left: 50px;
  }
  /* 最新广深热点 */
  .text-danger{
    color: orangered !important;
  }
  .guangshen-right{
    padding-right: 10px;
  }
 .guangshen-newshot-list{
    text-align: left;
    padding-left: 10px;
    padding-bottom: 20px;
    position: relative;
    height: auto;
    color: #000000;
  }
  .guangshen-newshot-item:last-child{
    border: none;
  }
  .guangshen-newshot-item span{
    margin-right: 10px;
    line-height: 1.5625rem;
    width: 1.5625rem;
    height: 1.5625rem;
    text-align: center;
    display: inline-block;
    border-radius: 50%
  }
  .guangshen-newshot-number{
    background-color: #ddd;
  }
  .guangshen-newshot-number-qian3{
    background-color: orangered;
    color: white;
  }
  .guangshen-newshot-item p{
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
  .guangshen-special{
   background-color: white;
   text-align: left;
   padding-top: 50px;
   height: auto;
  }
  .guangshen-special-title{
    padding: 10px 0px 10px 20px;
    border-bottom: 1px solid #ddd;
  }
  .guangshen-special-title span{
    padding: 10px 0px 10px 20px;
    font-size: 1rem;
    color: orangered;
    font-weight: bold;
  }
  .guangshen-special-list{
    padding: 0px;
  }
  .guangshen-special-item{
    padding: 0px 20px;
    height: 3.125rem;
    line-height: 50px;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:1; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
</style>
