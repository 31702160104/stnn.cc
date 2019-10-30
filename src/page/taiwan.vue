<template>
  <div class="taiwan">
    <div class="taiwan-header">台湾</div>
       <el-row  class="carousel">
         <el-col  :span="14" :xs="24" :sm="24" :md="14" :lg="14"  class="carousel-left">
            <div>
              <el-carousel  class="el-carousel" :height="screenWidth<990 ? '300px':'400px'">
                <el-carousel-item v-for="(item,index) in taiwan_img" :key="index">
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

<!-- 最新台湾新闻 -->
 <el-row class="taiwan-news">
      <el-col :span="15" :xs="24" :sm="24" :md="15" :lg="15" class="taiwan-left">
           <div class="taiwan-left-title">最新台湾新闻</div>
           <ul class="taiwan-left-center">
             <li class="taiwan-lcent-item" v-for="(item,index) of taiwan_news" :key="index">
               <router-link tag="a" target="_blank" :to="{name:'content'}">
                 <el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="taiwan-leftcenter-img">
                     <div class="taiwan-leftcenter-imgbox"><img :src="item.src" alt=""></div>
                 </el-col>
                 <el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
                   <div class="taiwan-leftcenter-title">
                     <span class="taiwan-leftcenter-titleb taiwan-title">{{item.title}}</span>
                     <span class="taiwan-leftcenter-time ">{{item.time}}</span>
                     <p>{{item.content}}</p>
                     <span class="taiwan-leftcenter-writer">作者：星岛环球网</span>
                   </div>
                 </el-col>
               </router-link>
               </li>
           </ul>
        </el-col>
        <!-- 最新台湾热点 -->
    <el-col :span="9"  :xs="24" :sm="24" :md="9" :lg="9" class="taiwan-right">
        <div class="taiwan-newshot">
          <b-tabs
            active-nav-item-class="font-weight-bold text-uppercase text-danger"
            active-tab-class="font-weight-bold text-success"
            content-class="mt-3"
          >
            <b-tab title="最新台湾热点" active >
              <ul class="taiwan-newshot-list">
                <li class="taiwan-newshot-item taiwan-newshot-height" v-for="(item,index) of taiwan_hotnews" :key="index" >
                  <router-link tag="a" target="_blank" :to="{name:'content'}">
                   <p>
                     <span :class="index<3 ? 'taiwan-newshot-number-qian3':'taiwan-newshot-number'">{{index+=1}}</span>
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
     <div class="taiwan-special">
          <div class="taiwan-special-title"><span>特别推荐</span></div>
          <ul class="taiwan-special-list">
            <li v-for="(item,index) in taiwan_special" :key="index"  class="taiwan-special-item">
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
      taiwan_img: [
        { src: require("../images/taiwan/taiwan01.jpg") ,title:"吴敦义列不分区第一名？洪秀柱：希望他到艰困选区选"},
        { src: require("../images/taiwan/taiwan02.jpg") ,title:"彭文正再爆蔡论文猛料!网叹:大家亲手投出的诈骗读稿机"},
		{ src: require("../images/taiwan/taiwan03.jpg") ,title:"韩国瑜访台中21宫庙首站万和宫挤爆 韩粉高呼“冻蒜”"}
      ],
			carousel_right:[
				{title:"国台办：国庆期间几场重要活动都有台湾同胞参与",content:"国台办发言人马晓光就两岸政党交流、两岸军事互信和两岸文化往来等热点问题回答记者提问。有没有台湾人士参演或观..."},
				{title:"高雄市议会今开议　韩国瑜率官员拜码头",content:"中国国民党2020参选人、高雄市长韩国瑜今天上午出席高雄市议会第三届第二次定期大会开幕，按照往例拜会议长许昆源..."},
				{title:"父亲过世李明哲能否回台湾奔丧？国台办回应",content:"第三个问题，李明哲父亲过世，其妻希望李明哲能回台奔丧，请问发言人对此有何评论？我注意到，也受到了台湾媒体和..."},
			],
      taiwan_news: [
        { src: require("../images/taiwan/taiwan04.jpg") ,title:"郭阵营：郭柯在区域“立委”提名已达默契",time:"2019-09-25 17:29",content:"中评社台北9月25日电（记者 洪德谕）在鸿海创办人郭台铭放弃连署参选2020后，外界高度关注郭与台北市长柯文哲合作关系。"},
        { src: require("../images/taiwan/taiwan05.jpg") ,title:"杨海明：台湾乡道桥梁可承受M1A2战车",time:"2019-09-25 15:47",content:"中评社台北9月25日电（记者 黄筱筠））陆军明年度将编列新台币405亿预算购买108辆M1A2T战车，台湾民众党主席、台北市长柯文哲日前质疑认为M1A2重达60余吨，台湾桥梁承受不了。"},
        { src: require("../images/taiwan/taiwan06.jpg") ,title:"国台办:台当局和’台独'势力祸台乱港之心昭然若揭",time:"2019-09-25 17:00",content:"新华社北京9月25日电（记者石龙洪、李寒芳、刘欢）针对民进党插手介入香港事务，国台办发言人马晓光25日在例行新闻发布会上应询指出"},
        { src: require("../images/taiwan/taiwan07.jpg") ,title:"韩国瑜举办施政亮点说明会　绿议员好奇旁听",time:"2019-09-25 16:14",content:"中评社高雄9月25日电（记者　蒋继平）中国国民党2020参选人、高雄市长韩国瑜下午在高雄市议会举办施政亮点说明会，更要安排三个地点进行实地考察"},					   
        { src: require("../images/taiwan/taiwan08.jpg") ,title:"马英九：改善‘外交’找美日澳没用　要九二共识",time:"2019-09-25 15:01",content:"评社台北9月25日电（记者　倪鸿祥）马英九今天上午到东吴大学演讲时批评蔡英文最喜欢讲她是最会捍卫“主权”，所以被称‘辣台妹’"},					   
        { src: require("../images/taiwan/taiwan09.jpg") ,title:"上周连“断交”两国　马英九点出三原因大陆惩罚",time:"2019-09-25 14:43",content:"中评社台北9月25日电（记者　倪鸿祥）马英九今天上午在东吴大学演讲时指出，台湾5天内连断所罗门与基里巴斯两个南太平洋“邦交”国，是因为蔡英文拒绝“九二共识”，"},					   
        { src: require("../images/taiwan/taiwan10.jpg") ,title:"中评镜头：韩国瑜拜会民进党团开心吃水果",time:"2019-09-25 14:12",content:"韩国瑜则笑说，“以茶代酒，多拜托，多拜托”，十分客气。（中评社　蒋继平摄）"},					   
        { src: require("../images/taiwan/taiwan11.jpg") ,title:"郭信良接蔡后援总会长　台南英系新系拼场",time:"2019-09-25 13:40",content:"中评社台北9月25日电／去年底脱离民进党，以无党籍身分获国民党支持当选台南市议会议长的郭信良，24日宣布接下蔡英文台南市后援总会总会长一职"},					   
        { src: require("../images/taiwan/taiwan12.jpg") ,title:"两岸不同调泛蓝开杠　韩办低调：韩主张务实",time:"2019-09-25 13:33",content:"中评社台北9月25日电（记者　张嘉文）针对新党、中国国民党为两岸路线开杠，是否影响国民党2020参选人韩国瑜选情？"},					   
        { src: require("../images/taiwan/taiwan13.jpg") ,title:"蔡英文上台后又一败家决策“战机自造”成笑料",time:"2019-09-25 10:47",content:"日前，耗资686亿新台币研发的新式高级教练机终于曝光，台当局领导人蔡英文出席揭幕仪式，并为其命名“勇鹰号”。"},					   
        { src: require("../images/taiwan/taiwan14.jpg") ,title:"中评关注：蔡英文催化两岸仇恨成大选主轴？",time:"2019-09-25 10:10",content:"中评社高雄9月25日电（记者　高易伸）距离2020大选只剩下109天！蔡英文昨日南下高雄与基层乡亲搏感情，言谈间不断激化两岸关系，除单方面称对岸改变现状并挑起“辣台派”团结话题"},					   
        { src: require("../images/taiwan/taiwan15.jpg") ,title:"徐鸿进：王金平不接受老二哲学　选下去难看",time:"2019-09-25 08:06",content:"中评社桃园9月25日电（记者　黄文杰）中国国民党籍、前“国大代表”徐鸿进接受中评社访问表示，前“立法院长”王金平不愿接受“老二哲学”"},
        { src: require("../images/taiwan/taiwan16.jpg") ,title:"中评关注：民进党裂解小绿　最后看赖清德",time:"2019-09-25 08:01",content:"中评社台北9月25日电（记者　洪德谕）民进党初选过后陷入分裂危机，随着陈水扁间接表态支持蔡英文，且拥有2020大选门票的时代力量23日宣布不自提候选人，让泛绿分裂危机逐步瓦解"},
        { src: require("../images/taiwan/taiwan17.jpg") ,title:"黄敬平：王金平若向橘借门票　斩立决勿犹豫",time:"2019-09-25 07:59",content:"中评社桃园9月25日电（记者　黄文杰）鸿海创办人郭台铭将推荐自己人马给柯文哲的台湾民众党参选“立委”，联合竞选，是否影响中国国民党2020参选人韩国瑜选情？"},									   
      ],	
			taiwan_hotnews:[
				{title:"2020蔡英文或许会连任，但民进党的好日子快到头了"},
				{title:"大陆发展列车不等人，少数人不能决定台湾命运"},
				{title:"汪毅夫：“空袭福建”的记录和记忆"},
				{title:"两岸专家齐聚浙江共话乡村振兴 推动浙台农业合作"},
				{title:"台湾网红“芒果干”：炒热“台独”选情，冰冻台湾行情"},
				{title:"看着都累，为什么台湾一年到头总在忙选举？"},
				{title:"台湾各界痛批民进党当局强推“去中国化”教科书"},
				{title:"褚静涛：回顾台湾“光复”初期的中华文化建设"},
				{title:"李宗远：用抗战史加强两岸血肉联系"},
				{title:"郑剑：台湾再次面临何去何从大问题"},				  
	   ],
			taiwan_special:[
				{title:"郭信良变脸返绿营　谢龙介感叹人情薄如纸"},
				{title:"韩国瑜幕僚:已初步征询朱立伦、张善政当副手意愿"},
				{title:"徐鸿进：王金平不接受老二哲学　选下去难看"},
				{title:"韩两岸论述　赵建民：“九二共识”不能丢"},
				{title:"中评关注：民进党裂解小绿　最后看赖清德"},
				{title:"中王领军大联盟？李柏坊：第三势力未成熟"},
				{title:"黄敬平：王金平若向橘借门票　斩立决勿犹豫"},
				{title:"中评关注：“郭柯王”结盟会变“郭柯宋”？"},
				{title:"蔡英文称翻箱倒柜才找到论文 网友:把论文当垃圾?"},
				{title:"新党民调：27.8%台民众认为未来两岸可能发生战争"},
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
  .taiwan-header{
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
  .taiwan{
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

  /* 最新台湾新闻 */
  .taiwan-left-title{

    padding: 20px 0px 10px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: left;
    color: orangered;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }
  .taiwan-news{
     height: auto;
  }
  .taiwan-lcent-item{
    padding-top: 10px;
    margin-left:10px ;
    height: 12.5rem;
  }
   @media only screen and (max-width:990px) {
      .taiwan-lcent-item {
         max-height: 200px;
      }
    }
   @media only screen and (max-width:767px) {
      .taiwan-lcent-item {
         height: 125px;
      }
    }
  .taiwan-lcent-item:hover{
     box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
  }
  .taiwan-left,.taiwan-right{
    padding-right: 10px;
    padding-left: 10px;
    background-color: white;
    margin-top: 10px;
  }
  .taiwan-left-center{
    margin-top: 10px;
    padding: 0px;
    margin: 0px;
  }
  .taiwan-leftcenter-imgbox{
	height: 200px;
	}
 @media only screen and (max-width:990px) {
      .taiwan-leftcenter-imgbox{
       height: 100px;
      }
   }
  .taiwan-leftcenter-img{
    padding-left: 20px;
    padding-right: 20px;
    overflow:hidden;
    max-height: 180px;
  }
   .
 @media only screen and (max-width:990px) {
    .taiwan-leftcenter-img{
        padding-left: 5px;
        padding-right: 0px;
    }
   }
    .taiwan-leftcenter-img img{
      width: 100%;
      height: 100%;
    }
    .taiwan-leftcenter-img img:hover{
      transform: scale(1.1);
      transition: all 0.5s linear;
    }
    .taiwan-leftcenter-title{
      margin-bottom: 10px;
      padding: 10px;
      height: 180px;
    }
    .taiwan-leftcenter-writer{
      float: right;
      color: #999;
      font-size: 14px;
    }
   .taiwan-leftcenter-time{
     color: #999;
     float: left;
     height: 1.25rem;
     font-size: 12px;
   }
 @media only screen and (max-width:990px) {
     .taiwan-leftcenter-title {
        height: 100px;
     },
     .taiwan-leftcenter-time{
       /* height: 10px; */
     }
      .taiwan-leftcenter-writer{
       display: none;
      },
      .taiwan-leftcenter-img{
        /* padding-left: 20px; */
        padding-right: 0px;
      }
   }
  @media only screen and (min-width:990px) {
     .taiwan-title{
       font-size: 1.25rem;
     }
    }
    .taiwan-leftcenter-titleb{
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
      .taiwan-leftcenter-title p{
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

    /* 最新台湾热点 */
    .text-danger{
      color: orangered !important;
    }
    .taiwan-right{
      padding-top: 10px;

    }
   .taiwan-newshot-list{
    text-align: left;
    padding-left: 10px;
    /* padding-bottom: 20px; */
    position: relative;
    height: auto;
    color: #000000;

    }
    .taiwan-newshot-item {
     padding: 10px 5px;
    border-bottom: 1px solid #FFCC99;
    }
    .taiwan-newshot-item:last-child{
      border: none;
    }
    .taiwan-newshot-item span{
      margin-right: 10px;
      line-height: 1.5625rem;
      width: 1.5625rem;
      height: 1.5625rem;
      text-align: center;
      display: inline-block;
      border-radius: 50%
    }

    .taiwan-newshot-number{
      background-color: #ddd;

    }
    .taiwan-newshot-number-qian3{
      background-color: orangered;
      color: white;
    }

  .taiwan-newshot-item p{
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
  .taiwan-special{
   background-color: white;
   text-align: left;
   padding-top: 50px;
   height: auto;
  }
  .taiwan-special-title{
    padding: 10px 0px 10px 20px;
    border-bottom: 1px solid #ddd;
  }
  .taiwan-special-title span{
    padding: 10px 0px 10px 20px;
    font-size: 1rem;
    color: orangered;
    font-weight: bold;
  }
  .taiwan-special-list{
    padding: 0px;
  }
  .taiwan-special-item{
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
