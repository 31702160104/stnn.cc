<template>
  <div class="timepush">
    <div class="timepush-title">时事热点</div>
	<!-- 时事热点轮播图 -->
    <el-carousel :interval="4000" type="card" :height="screenWidth<990 ? '150px':'400px'" class="timepush-carousel">
      <el-carousel-item v-for="(item,index) in timepush_img" :key="index">
          <div class="timepush-carousel-imgbox">
            <div class="timepush-carousel-title">
              {{item.title}}
            </div>
            <img :src="item.src" alt="">
           </div>
      </el-carousel-item>
    </el-carousel>
    <el-row class="timepush-content">
      <el-col :span="15" :xs="24" :sm="24" :md="15" :lg="15" class="timepush-content-left">
        <!-- 时事推荐 -->
        <div class="timepush-content-hot">
          <div class="timepush-content-title">时事推荐</div>
          <ul class="timepush-content-list">
            <li class="timepush-content-item" v-for="(item,index) of timepush_content":key="index">
             <router-link tag="a" target="_blank" :to="{name:'content'}":class="index==0 ?'timepush-item-blod':'' ">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
        <!-- 时事精选 -->
        <div class="timepush-jin-hot">
           <div class="timepush-content-title">时事精选</div>
           <ul class="timepush-jin-list" v-for="(item,index) of timepush_jin":key="index">
             <li class="timepush-jin-item" v-if="index%2==0">
               <router-link tag="a" target="_blank" :to="{name:'content'}">
                 <el-row>
                    <el-col :span="10" :xs="10" :sm="10" :md="10" :lg="10"  class="timepush-jin-img">
                      <div class="timepush-jin-imgbox">
                        <img  :src="item.src" alt="">
                      </div>
                    </el-col>
                    <el-col :span="14" :xs="14" :sm="14" :md="14" :lg="14"  class="timepush-jin-content">
                        <h5 class="timepush-jin-h5">{{item.title}}</h5>
                        <p class="timepush-jin-p">{{item.content}}</p>
                    </el-col>
                 </el-row>
               </router-link>
             </li>
             <li class="timepush-jin-item" v-if="index%2!=0">
               <router-link tag="a" target="_blank" :to="{name:'content'}">
                 <el-row>
                    <el-col :span="14" :xs="14" :sm="14" :md="14" :lg="14"  class="timepush-jin-content">
                        <h5 class="timepush-jin-h5">{{item.title}}</h5>
                        <p class="timepush-jin-p">{{item.content}}</p>
                    </el-col>
                    <el-col :span="10" :xs="10" :sm="10" :md="10" :lg="10"  class="timepush-jin-img">
                      <div class="timepush-jin-imgbox">
                        <img :src="item.src" alt="">
                      </div>
                    </el-col>
                 </el-row>
               </router-link>
             </li>
           </ul>
        </div>
      </el-col>
        <!-- 最新热点 -->
         <el-col :span="9"  :xs="24" :sm="24" :md="9" :lg="9" class="timepush-right">
            <div class="timepush-newshot">
              <b-tabs
                active-nav-item-class="font-weight-bold text-uppercase text-danger"
                active-tab-class="font-weight-bold text-success"
                content-class="mt-3"
              >
                <b-tab title="最新热点" active >
                  <ul class="timepush-newshot-list">
                    <li class="timepush-newshot-item timepush-newshot-height" v-for="(item,index) of timepush_hotnews" :key="index" >
                      <router-link tag="a" target="_blank" :to="{name:'content'}">
                       <p>
                         <span :class="index<3 ? 'timepush-newshot-number-qian3':'timepush-newshot-number'">{{index+=1}}</span>
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
          <div class="timepush-special">
              <div class="timepush-special-title"><span>特别推荐</span></div>
              <ul class="timepush-special-list">
                <li v-for="(item,index) in timepush_special" :key="index"  class="timepush-special-item">
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
		timepush_img: [
		  { src: require("../../images/home/timepush/timepush01.jpg"),title:"重庆大学军训现场 堪比大片重庆大学军训现场 堪比大片！"},
		  { src: require("../../images/home/timepush/timepush02.jpg"),title:"阳澄湖大闸蟹开捕"},
          { src: require("../../images/home/timepush/timepush03.jpg"),title:"加拿大总理人气爆棚 粉丝围观求握手"},
          { src: require("../../images/home/timepush/timepush04.jpg"),title:"'秋老虎'发威了"},
          { src: require("../../images/home/timepush/timepush05.jpg"),title:"大兴机场投运后首飞航班"},
          { src: require("../../images/home/timepush/timepush06.jpg"),title:"国庆阅兵训练场上的女兵"},
		],
		// 时事推荐
		timepush_content: [
		  {title:"人民日报国纪平：大变局中的中国与世界"},
		  {title:"人民日报评论员：坚持为国履职为民尽责"},
          {title:"人民日报钟声评中所建交:符合历史潮流的正确决断"},
          {title:"工信部：我国已成为唯一拥有全部工业门类的国家"},
          {title:"雄安译成Male Safety 中青报:学术翻译不该这么雷"},
		],		
		// 时事精选
		timepush_jin: [
		  { src: require("../../images/home/timepush/timepush07.jpg"),title:"【央视快评】行得通 真管用 有效率",content:"9月24日，中共中央政治局就“新中国国家制度和法律制度的形成和发展”举行第十七次集体学习。"},
		  { src: require("../../images/home/timepush/timepush08.jpg"),title:"受阅女兵超燃视频曝光：她们专属的'阅兵腿'是这样",content:"枪线、帽檐线、下颌线，线线标齐；横排、纵排、斜排，排排分明。首次参阅的女将军霸气领队，女兵们整齐划一、英姿飒爽。"},
          { src: require("../../images/home/timepush/timepush09.jpg"),title:"特朗普联大批评中国 耿爽：听听其他国家反欺压霸凌的声音",content:"24日，美国总统特朗普在联大一般性辩论中发言多次提及中国，批评中国未履行入世承诺，并称希望中方妥善解决香港问题。"},
          { src: require("../../images/home/timepush/timepush10.jpg"),title:"湖南警方兑现举报黑恶势力犯罪奖励，笑星大兵到场领奖",content:"9月25日，湖南省公安厅召开新闻发布会，再次通报湖南省公安机关开展扫黑除恶专项斗争及兑现举报奖励有关情况。"},
          { src: require("../../images/home/timepush/timepush11.jpg"),title:"大兴国际机场'凤凰展翼'！ 外媒感叹：中国智造再度惊艳世界",content:"今天是新中国民航史上一个值得永远铭记的日子。在经历了7次综合模拟演练、3场验证试飞之后，北京大兴国际机场于今天上午正式投运。"},
          { src: require("../../images/home/timepush/timepush12.jpg"),title:"侵害烈士名誉权民事公益诉讼案开庭 章某当庭宣读道歉信",content:"“我认识到自己的错误言论是对救火英雄的侮辱……我错了，我向各位救火英雄的亲属和社会公众表示最真诚的道歉。”"},
		  { src: require("../../images/home/timepush/timepush13.jpg"),title:"张艺谋任国庆70周年联欢活动总导演",content:"今天下午三点，庆祝新中国成立70周年活动举行新闻发布会，介绍群众游行、广场联欢、志愿服务等相关工作。"},
		  { src: require("../../images/home/timepush/timepush14.jpg"),title:"贵州务川小学教师为10岁残疾学生建起“一个人的学校”",content:"今年10岁的申晓燕，是贵州省遵义市务川县都濡街道沙坝村上堡组人，自幼身患二级肢体残疾，不能正常行走，从小就依靠板凳行走。"},
          { src: require("../../images/home/timepush/timepush15.jpg"),title:"乌总统否认被特朗普施压：只有我儿子能向我施压",content:"近日，美国总统特朗普“通乌门”事件持续发酵。据俄罗斯卫星通讯社25日报道，乌克兰总统泽连斯基在回答俄罗斯记者相关提问"},
          { src: require("../../images/home/timepush/timepush16.jpg"),title:"文在寅请求国际奥委会支持朝鲜和韩国联合申办2032年奥运会",content:"文在寅表示：“我们将积极参与，并努力把从平昌冬奥会开始的东亚奥运接力下去。我们希望促成一场成功的对话，从而实现东亚的共同繁荣。”"},		  
		],		
		// 最新热点
		timepush_hotnews:[
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
		timepush_special: [
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
  .timepush{
    height: auto;
    margin: 0 auto;
    max-width: 1400px;
    margin-bottom: 50px;
    background-color: white;
  }
  .timepush-title{
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
  .timepush-carousel{
    margin-top: 20px;
  }
  .timepush-carousel-imgbox{
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .timepush-carousel-imgbox img{
    width: 100%;
    height: 100%;
  }
  .timepush-carousel-title{
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
    .timepush-carousel-title{
       font-size: 1rem;
    }
  }
  /* 时事推荐 */
  .timepush-content-left{
    height: auto;
    padding-left:10px;
    text-align: left;
    background-color: white;
  }
  .timepush-content-hot{
    padding: 10px;
  }
  .timepush-content-title{
    padding-left: 10px;
    width:7.5rem;
    font-size: 1.5rem;
    border-bottom: 2px solid orangered;
  }
  .timepush-content-list{
    padding: 10px;
 }
  .timepush-content-item{
    height: 3.125rem;
    line-height: 3.125rem;
    font-size: 1.25rem;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:1; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
  .timepush-item-blod{
    font-weight: bold;
  }
  /* 时事精选 */
  .timepush-jin-hot{
    padding: 10px;
  }
  .timepush-jin-list{
    padding: 5px;
 }
  .timepush-jin-item{
    padding:10px;
    height: auto;
    max-height: 14.375rem;
    overflow: hidden;
  }
  @media only screen and (max-width:990px) {
    .timepush-jin-item{
        max-height: 100px;
    }
  }
  .timepush-jin-item:hover{
    box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
  }
  .timepush-jin-content{
    padding-left: 5px;
  }
  .timepush-jin-item h5{
    margin: 0px;
    height: 70px;
    line-height: 35px;
    font-weight: bold;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:2; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
  .timepush-jin-item p{
    height:6rem;
    line-height:2rem;
    font-size: 1rem;
    text-indent: 2em;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:3; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
  @media only screen and (max-width:990px) {
    .timepush-jin-h5{
       font-size: 0.8rem;
       margin: 0px;
       height: 29px !important;
       line-height:15px !important;
    }
  }
  @media only screen and (max-width:768px) {
    .timepush-jin-item p{
       font-size: 0.7rem;
        padding: 2px;
        height: 3rem;
        line-height:1rem;
        text-indent: 0em;
        overflow: hidden;/*自动隐藏文字*/
        text-overflow: ellipsis;/*文字隐藏后添加省略号*/
        display: -webkit-box;
        -webkit-line-clamp:3; /*想要显示的行数*/
        -webkit-box-orient: vertical;
    }
  }
  .timepush-jin-img img{
    width: 100%;
    height: 100%;
  }
  .timepush-jin-imgbox{
    max-height: 200px;
    min-height: 100px;
    overflow: hidden;
  }
  .timepush-jin-img img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
	/* 最新热点 */
  .text-danger{
	color: orangered !important;
  }
  .timepush-right{
	padding-top: 10px;
  }
  .timepush-newshot-list{
    text-align: left;
    padding-left: 10px;
    padding-bottom: 20px;
    position: relative;
    height: auto;
    color: #000000;
  }
  .timepush-newshot-item {
    padding: 10px 5px;
    border-bottom: 1px solid #FFCC99;
  }
  .timepush-newshot-item:last-child{
    border: none;
  }
  .timepush-newshot-item span{
    margin-right: 10px;
    line-height: 1.5625rem;
    width: 1.5625rem;
    height: 1.5625rem;
    text-align: center;
    display: inline-block;
    border-radius: 50%
  }

  .timepush-newshot-number{
    background-color: #ddd;
  }
  .timepush-newshot-number-qian3{
    background-color: orangered;
    color: white;
  }

  .timepush-newshot-item p{
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
  .timepush-special{
   background-color: white;
   text-align: left;
   padding-top: 50px;
   height: auto;
  }
  .timepush-special-title{
    padding: 10px 0px 10px 20px;
    border-bottom: 1px solid #ddd;
  }
  .timepush-special-title span{
    padding: 10px 0px 10px 20px;
    font-size: 1rem;
    color: orangered;
    font-weight: bold;
  }
  .timepush-special-list{
    padding: 0px;
  }
  .timepush-special-item{
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
