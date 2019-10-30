<template>
  <div class="decrypt">
    <div class="decrypt-header">揭秘</div>
       <el-row  class="carousel">
         <el-col  :span="14" :xs="24" :sm="24" :md="14" :lg="14"  class="carousel-left">
            <div>
              <el-carousel  class="el-carousel" :height="screenWidth<990 ? '300px':'400px'">
                <el-carousel-item v-for="(item,index) in decrypt_img" :key="index">
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
              <li class="carousel-right-item"  v-for="(item,index) of carousel_right":key="index">
                <router-link tag="a" target="_blank" :to="{name:'content'}">
                   <h4>{{item.title}}</h4>
                   <p>{{item.content}}</p>
                </router-link>
              </li>
            </ul>
          </el-col>

        </el-row>

<!-- 最新揭秘新闻 -->
 <el-row class="decrypt-news">
      <el-col :span="15" :xs="24" :sm="24" :md="15" :lg="15" class="decrypt-left">
           <div class="decrypt-left-title">最新揭秘新闻</div>
           <ul class="decrypt-left-center">
             <li class="decrypt-lcent-item" v-for="(item,index) of decrypt_news" :key="index">
               <router-link tag="a" target="_blank" :to="{name:'content'}">
                 <el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="decrypt-leftcenter-img">
                     <div class="decrypt-leftcenter-imgbox"><img :src="item.src" alt=""></div>
                 </el-col>
                 <el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
                   <div class="decrypt-leftcenter-title">
                     <span class="decrypt-leftcenter-titleb decrypt-title">{{item.title}}</span>
                     <span class="decrypt-leftcenter-time ">{{item.time}}</span>
                     <p>{{item.content}}</p>
                     <span class="decrypt-leftcenter-writer">作者：星岛环球网</span>
                   </div>
                 </el-col>
               </router-link>
               </li>
           </ul>
        </el-col>
        <!-- 最新揭秘热点 -->
    <el-col :span="9"  :xs="24" :sm="24" :md="9" :lg="9" class="decrypt-right">
        <div class="decrypt-newshot">
          <b-tabs
            active-nav-item-class="font-weight-bold text-uppercase text-danger"
            active-tab-class="font-weight-bold text-success"
            content-class="mt-3"
          >
            <b-tab title="最新揭秘热点" active >
              <ul class="decrypt-newshot-list">
                <li class="decrypt-newshot-item decrypt-newshot-height" v-for="(item,index) of decrypt_hotnews" :key="index" >
                  <router-link tag="a" target="_blank" :to="{name:'content'}">
                   <p>
                     <span :class="index<3 ? 'decrypt-newshot-number-qian3':'decrypt-newshot-number'">{{index+=1}}</span>
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
     <div class="decrypt-special">
          <div class="decrypt-special-title"><span>特别推荐</span></div>
          <ul class="decrypt-special-list">
            <li v-for="(item,index) in decrypt_special" :key="index"  class="decrypt-special-item">
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
      decrypt_img: [
        { src: require("../images/decrypt/decrypt01.jpg") ,title:"46年毛泽东如何“摆平”陈毅与粟裕的战略之争？"},
        { src: require("../images/decrypt/decrypt02.jpg") ,title:"许世友曾当着徐向前的面怒抽钢刀 发下一个狠誓"},
		{ src: require("../images/decrypt/decrypt03.jpg") ,title:"72年毛泽东保邓小平:他曾是毛派头子,没历史问题"}
      ],
	 carousel_right:[
		{title:"张学良替宋美龄守了一生的是什么秘密？",content:"当然，这件事情最积极的意义是推动了中国反侵略的抗日战争，并取得了最终的胜利，这是中国自鸦片战争抵御外侮以来..."},
		{title:"毛泽东写字条指示华国锋“有问题，找江青”？",content:"江青在受到审判时，曾经谈到毛泽东的这一字条，一语惊人。那是1980年12月3日上午，在最高人民法院审判江青。这次..."},
		{title:"46年毛泽东如何“摆平”陈毅与粟裕的战略之争？",content:"人们期待着和平，也盼望着和平，但是，6月26日，国民党蒋介石以三十万大军向我中原解放区大举围攻，又挑起新的全..."},
	 ],
      decrypt_news: [
        { src: require("../images/decrypt/decrypt04.jpg") ,title:"毛泽东扶植红卫兵的初衷：防止中国被和平演变",time:"2019-09-22 10:34",content:"毛泽东历来认为，青年学生最具有革命精神。“五四”运动由学生而起，自天安门广场而始。"},
        { src: require("../images/decrypt/decrypt05.jpg") ,title:"华国锋粉碎“四人帮”是没有遵照毛泽东的决策",time:"2019-09-21 09:47",content:"毛泽东认为“四人帮”“问题不大”，他并没有列出解决的时间表，而认为“四人帮”的问题并不急于解决。这点华国锋多次谈过。"},
        { src: require("../images/decrypt/decrypt06.jpg") ,title:"病魔缠身:刘少奇在中南海的最后日子",time:"2019-09-20 13:50",content:"那时，连刘少奇的房间里，也有“打倒叛徒、内奸、工贼刘少奇”这样的标语了，甚至有的标语把刘少奇的名字倒过来写，并打上了叉字。"},
        { src: require("../images/decrypt/decrypt07.jpg") ,title:"揭秘：“四人帮”中有两个是叛徒",time:"2019-09-20 13:49",content:"文革”时大抓“叛徒”，无数冤狱遍于国中。刘少奇被诬为“大叛徒”，薄一波等61人被诬为“叛徒集团”，瞿秋白也被掘坟揪出，诬为“叛徒”"},					   
        { src: require("../images/decrypt/decrypt08.jpg") ,title:"贺子珍离开毛泽东是江青‘插足’造成的吗？",time:"2019-09-20 10:19",content:"过去，在社会上广为流传这样一种说法：1937年，贺子珍从延安出走离开毛泽东，是因为江青“插足”导致毛泽东与贺子珍夫妻关系破裂造成的。"},					   
        { src: require("../images/decrypt/decrypt09.jpg") ,title:"林彪集团失势，毛泽东教训江青：屁股别坐错了位置",time:"2019-09-20 10:19",content:"据庐山档案记载，江青曾三次登临庐山，这三次都是跟随毛泽东去的。但前两次她只是作为毛泽东的夫人和秘书前往的，所以并无多少风光。"},					   
        { src: require("../images/decrypt/decrypt10.jpg") ,title:"毛泽东五评《金瓶梅》：只暴露黑暗人们不爱看",time:"2019-09-18 09:37",content:"书于明代隆庆至万历年间的《金瓶梅》，是中国第一部长篇社会世情小说。它借小说《水浒传》中描写西门庆与潘金莲的故事"},					   
        { src: require("../images/decrypt/decrypt11.jpg") ,title:"67年刘少奇中南海内被批斗：饱受谩骂和殴打",time:"2019-09-18 09:35",content:"江青、康生、陈伯达、戚本禹一伙在中南海内策划了一场批斗刘邓陶的大会，分别在各家院内举行，与天安门的百万人大会遥相呼应。"},					   
        { src: require("../images/decrypt/decrypt12.jpg") ,title:"贺子珍在苏联为何会被强行关进疯人院？",time:"2019-09-18 09:33",content:"他是国际儿童院的绝对权威，整天板着脸，走路腆着肚子，俨然一副大官大员的派头，一年难见他有一个笑容，说话就是千篇一律的命令口气。"},					   
        { src: require("../images/decrypt/decrypt13.jpg") ,title:"江青曾五次要求继承毛泽东的遗产均遭拒绝",time:"2019-09-18 09:22",content:"近日《党史文苑》发表《毛泽东亿万稿酬的争议》一文，透露毛泽东著作的稿酬累计加上利息，共有1.3121亿元人民币。"},					   
        { src: require("../images/decrypt/decrypt14.jpg") ,title:"美国专家谈邓小平的政治角色和历史遗产",time:"2019-09-17 09:45",content:"992年当邓小平退居幕后的时候，他已完成了150年来中国历任领导者孜孜以求却未能达成的使命：他和他的同事们终于找到了一条富民强国的道路。"},					   
        { src: require("../images/decrypt/decrypt15.jpg") ,title:"末代皇帝溥仪在“文革”中经受了哪些批判",time:"2019-09-17 09:21",content:"一本国际公认的名著奇书，在“文化大革命”中遭到沉重打击，尽管它还是毛主席、周总理等老一辈无产阶级革命家认为“写得不错”的书。"},
        { src: require("../images/decrypt/decrypt16.jpg") ,title:"剖析毛泽东特定知识结构与其晚年错误的关系",time:"2019-09-17 09:18",content:"关于毛泽东晚年探索出现的失误，有学术研究认为这是社会历史发展的，必然结果，不应从他自身找原因。"},
        { src: require("../images/decrypt/decrypt17.jpg") ,title:"王光美回忆：刘少奇与邓小平最后一次对话",time:"2019-09-17 09:12",content:"在10月中央工作会议前的一次小会上，除过去检讨的内容外，少奇同志对请示过毛主席并得到主席同意的事，也承担了责任。"},									   
      ],	
	   decrypt_hotnews:[
		   {title:"揭秘：1976年周恩来逝世时的政治乱象"},
		   {title:"毛泽东为何下定决心打中印边境之战?"},
		   {title:"高华谈九一三：毛泽东赔了老本 林彪全家灭门"},
		   {title:"揭秘文革时期的两性关系：最恐怖就是女流氓"},
		   {title:"1978年邓小平到处“点火”：毛主席究竟哪里伟大?"},
		   {title:"毛泽东发动文革三目标：夺回权力培养接班人"},
		   {title:"江青被捕庭审时做“最后陈述”：咒骂华国锋是叛徒"},
		   {title:"解密：刘少奇为何说不能给彭德怀平反"},
		   {title:"中共历史上最著名的六对“军事搭档”"},
		   {title:"中南海生活回忆：政治局委员家里住一个警卫班"},				  
	   ],
	   decrypt_special:[
		   {title:"1975年毛泽东对邓小平说的这句话有何深意?"},
		   {title:"黄克诚治家三事"},
		   {title:"邓子恢的雅号"},
		   {title:"日本二战后赔偿给中国的7艘驱逐舰"},
		   {title:"王光美珍贵的影像,年轻时光彩照人"},
		   {title:"称霸西北的“四马”军阀，谁的结局最惨？"},
		   {title:"揭秘：哪位传奇参谋长辅佐过五位开国元帅？"},
		   {title:"钱学森为何主动要求降职？为何遭到“软禁”?"},
		   {title:"江青的所谓“绝命书”：主席除刘未除邓，后患无穷"},
		   {title:"揭秘：死后骨灰被请出八宝山革命公墓的开国少将"},
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
  .decrypt-header{
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
  .decrypt{
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

  /* 最新揭秘新闻 */
  .decrypt-left-title{
    padding: 20px 0px 10px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: left;
    color: orangered;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }

    .decrypt-news{
     /* height: 2000px; */
     height: auto;
     }
    .decrypt-lcent-item{
      padding-top: 10px;
      margin-left:10px ;
      height: 12.5rem;
    }
   @media only screen and (max-width:990px) {
      .decrypt-lcent-item {
         max-height: 200px;
      }
    }
   @media only screen and (max-width:767px) {
      .decrypt-lcent-item {
         height: 125px;
      }
    }
    .decrypt-lcent-item:hover{
      box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
    }
    .decrypt-left,.decrypt-right{
     padding-right: 10px;
     padding-left: 10px;
     background-color: white;
     margin-top: 10px;
    }
    .decrypt-left-center{
      margin-top: 10px;
      padding: 0px;
      margin: 0px;
    }
	.decrypt-leftcenter-imgbox{
		height: 12.5rem;
	}
 @media only screen and (max-width:990px) {
      .decrypt-leftcenter-imgbox{
       height: 100px;
      }
   }
   .decrypt-leftcenter-img{
    padding-left: 20px;
    padding-right: 20px;
    overflow:hidden;
    max-height: 180px;
   }
   .
 @media only screen and (max-width:990px) {
      .decrypt-leftcenter-img{
        padding-left: 0px;
        padding-right: 0px;
      }
   }
    .decrypt-leftcenter-img img{
      width: 100%;
      height: 100%;
    }
    .decrypt-leftcenter-img img:hover{
      transform: scale(1.1);
      transition: all 0.5s linear;
    }


    .decrypt-leftcenter-title{
      margin-bottom: 10px;
      padding: 10px;
      height: 180px;
    }
    .decrypt-leftcenter-writer{
      float: right;
      color: #999;
      font-size: 14px;
    }
   .decrypt-leftcenter-time{
     color: #999;
     float: left;
     height: 1.25rem;
     font-size: 12px;
   }
 @media only screen and (max-width:990px) {
     .decrypt-leftcenter-title {
        height: 100px;
     },
     .decrypt-leftcenter-time{
       /* height: 10px; */
     }
      .decrypt-leftcenter-writer{
       display: none;
      },
      .decrypt-leftcenter-img{
        /* padding-left: 20px; */
        padding-right: 0px;
      }
   }
  @media only screen and (min-width:990px) {
     .decrypt-title{
       font-size: 1.25rem;
     }
    }
    .decrypt-leftcenter-titleb{
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
      .decrypt-leftcenter-title p{
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

    /* 最新揭秘热点 */
    .text-danger{
      color: orangered !important;
    }
    .decrypt-right{
      padding-top: 10px;

    }
   .decrypt-newshot-list{
    text-align: left;
    padding-left: 10px;
    /* padding-bottom: 20px; */
    position: relative;
    height: auto;
    color: #000000;

    }
    .decrypt-newshot-item {
     padding: 10px 5px;
    border-bottom: 1px solid #FFCC99;
    }
    .decrypt-newshot-item:last-child{
      border: none;
    }
    .decrypt-newshot-item span{
      margin-right: 10px;
      line-height: 1.5625rem;
      width: 1.5625rem;
      height: 1.5625rem;
      text-align: center;
      display: inline-block;
      border-radius: 50%
    }

    .decrypt-newshot-number{
      background-color: #ddd;

    }
    .decrypt-newshot-number-qian3{
      background-color: orangered;
      color: white;
    }

  .decrypt-newshot-item p{
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
  .decrypt-special{
   background-color: white;
   text-align: left;
   padding-top: 50px;
   height: auto;
  }
  .decrypt-special-title{
    padding: 10px 0px 10px 20px;
    border-bottom: 1px solid #ddd;
  }
  .decrypt-special-title span{
    padding: 10px 0px 10px 20px;
    font-size: 1rem;
    color: orangered;
    font-weight: bold;
  }
  .decrypt-special-list{
    padding: 0px;
  }
  .decrypt-special-item{
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
