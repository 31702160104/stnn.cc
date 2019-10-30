<template>
  <div class="football">
	<div class="football-title">足球</div>
    <div class="football-body">
          <el-row class="football-carousel-body">
            <el-col :span="15" :xs="24" :sm="24" :md="15" :lg="15" class="football-carousel-left">
               <div class="football-carousel">
                <el-carousel class="football-carousel-height" :height="screenWidth<768 ? '200px':'400px'">
                  <el-carousel-item v-for="(item,index) of football_img" :key="index">
					<router-link tag="a" target="_blank" :to="{name:'content'}">
						 <img :src="item.src" class="football-carousel-lunbotu" alt="轮播图">
						 <div class="football-carousel-title">{{item.title}}</div>							
					</router-link>					 
                  </el-carousel-item>
                </el-carousel>
              </div>
            </el-col>
            <el-col :span="9" :xs="24" :sm="24" :md="9" :lg="9"  class="football-carousel-right">
              <ul class="football-carousel-rlist">
                <li class="football-carousel-ritem" v-for="(item,index) in football_imgright" :key="index">
                  <router-link tag="a" target="_blank" :to="{name:'content'}">
                     <h4>{{item.title}}</h4>
                     <p>{{item.content}}</p>
                  </router-link>
                </li>
              </ul>
            </el-col>
          </el-row>
          <!-- 卡片 -->
          <el-row>
            <el-col :span="15" :xs="24" :sm="24" :md="15" :lg="15">
              <el-tabs v-model="activeName1" type="card" class="football-card">
                <el-tab-pane label="英超">
                  <div class="football-card-title">英超</div>
                    <el-row class="football-engc">
                      <ul class="football-engc-list">
                      	<li class="football-engc-item"  v-for="(item,index) of football_yin" :key="index">
                            <router-link tag="a" target="_blank" :to="{name:'content'}">
								<el-col :span="7" :xs="7" :sm="7" :md="7" :lg="7">
									<div class="football-engc-img"><img :src="item.src" alt=""></div>
								</el-col>
								<el-col :span="17" :xs="17" :sm="17" :md="17" :lg="17" class="football-engc-center">
									<div class="football-engc-title">{{item.title}}</div>
									<div class="football-engc-time">{{item.time}}<span class="football-engc-writer">星岛环球网</span></div>
								</el-col>
                            </router-link>
                        </li>
                      </ul>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="意甲">
                  <div class="football-card-title">意甲</div>
                    <el-row class="football-engc">
                      <ul class="football-engc-list">
                      	<li class="football-engc-item"  v-for="(item,index) of football_yi" :key="index">
                            <router-link tag="a" target="_blank" :to="{name:'content'}">
								<el-col :span="7" :xs="7" :sm="7" :md="7" :lg="7">
								  <div class="football-engc-img"><img :src="item.src" alt=""></div>
								</el-col>
								<el-col :span="17" :xs="17" :sm="17" :md="17" :lg="17" class="football-engc-center">
								  <div class="football-engc-title">{{item.title}}</div>
								  <div class="football-engc-time">{{item.time}}<span class="football-engc-writer">星岛环球网</span></div>
								</el-col>
                            </router-link>
                        </li>
                      </ul>
                    </el-row>
                </el-tab-pane>				
                <el-tab-pane label="西甲">
                  <div class="football-card-title">西甲</div>
                    <el-row class="football-engc">
                      <ul class="football-engc-list">
                      	<li class="football-engc-item"  v-for="(item,index) of football_xi" :key="index">
                            <router-link tag="a" target="_blank" :to="{name:'content'}">
								<el-col :span="7" :xs="7" :sm="7" :md="7" :lg="7">
									<div class="football-engc-img"><img :src="item.src" alt=""></div>
								</el-col>
								<el-col :span="17" :xs="17" :sm="17" :md="17" :lg="17" class="football-engc-center">
									<div class="football-engc-title">{{item.title}}</div>
									<div class="football-engc-time">{{item.time}}<span class="football-engc-writer">星岛环球网</span></div>
								</el-col>
                            </router-link>
                        </li>
                      </ul>
                    </el-row>
                </el-tab-pane>		
                <el-tab-pane label="国内一览">
                  <div class="football-card-title">国内一览</div>
                    <el-row class="football-engc">
                      <ul class="football-engc-list">
                      	<li class="football-engc-item"  v-for="(item,index) of football_guo" :key="index">
                            <router-link tag="a" target="_blank" :to="{name:'content'}">
								<el-col :span="7" :xs="7" :sm="7" :md="7" :lg="7">
									<div class="football-engc-img"><img :src="item.src" alt=""></div>
								</el-col>
								<el-col :span="17" :xs="17" :sm="17" :md="17" :lg="17" class="football-engc-center">
									<div class="football-engc-title">{{item.title}}</div>
									<div class="football-engc-time">{{item.time}}<span class="football-engc-writer">星岛环球网</span></div>
								</el-col>
                            </router-link>
                        </li>
                      </ul>
                    </el-row>
                </el-tab-pane>						
                <el-tab-pane label="绿茵激情">
                  <div class="football-card-title">绿茵激情</div>
                    <el-row class="football-engc">
                      <ul class="football-engc-list">
                      	<li class="football-engc-item"  v-for="(item,index) of football_lv" :key="index">
                            <router-link tag="a" target="_blank" :to="{name:'content'}">
								<el-col :span="7" :xs="7" :sm="7" :md="7" :lg="7">
								  <div class="football-engc-img"><img :src="item.src" alt=""></div>
								</el-col>
								<el-col :span="17" :xs="17" :sm="17" :md="17" :lg="17" class="football-engc-center">
								  <div class="football-engc-title">{{item.title}}</div>
								  <div class="football-engc-time">{{item.time}}<span class="football-engc-writer">星岛环球网</span></div>
								</el-col>
                            </router-link>
                        </li>
                      </ul>
                    </el-row>
                </el-tab-pane>						
              </el-tabs>
            </el-col>

            <el-col :span="9" :xs="24" :sm="24" :md="9" :lg="9">
            <!-- 懂球帝 -->
              <div class="football-right-anders">
                <div class="football-anders-header">懂球帝</div>
                  <el-row class="football-anders">
                    <ul class="football-anders-list">
                      <li class="football-anders-item"  v-for="(item,index) of football_dong" :key="index">
                          <router-link tag="a" target="_blank" :to="{name:'content'}">
							  <el-col :span="7" :xs="7" :sm="7" :md="7" :lg="7">
								<div class="football-anders-img"><img :src="item.src" alt=""></div>
							  </el-col>
							  <el-col :span="17" :xs="17" :sm="17" :md="17" :lg="17" class="football-anders-center">
								<div class="football-anders-title">{{item.title}}</div>
								<div class="football-anders-writer">星岛环球网</div>
							  </el-col>
                          </router-link>
                      </li>
                    </ul>
                  </el-row>
              </div>
            <!-- 热点专题 -->
              <div class="football-right-hot">
                <div class="football-hotnews-header">热点专题</div>
                  <el-row class="football-hotnews">
                    <ul class="football-hotnews-list">
                      <li class="football-hotnews-item"  v-for="(item,index) of football_hot" :key="index">
							<router-link tag="a" target="_blank" :to="{name:'content'}">
								<el-col :span="7" :xs="7" :sm="7" :md="7" :lg="7">
									<div class="football-hotnews-img"><img :src="item.src" alt=""></div>
								</el-col>
								<el-col :span="17" :xs="17" :sm="17" :md="17" :lg="17" class="football-hotnews-center">
									<div class="football-hotnews-title">{{item.title}}</div>
									<div class="football-hotnews-writer">星岛环球网</div>
								</el-col>
							</router-link>
                      </li>
                    </ul>
                  </el-row>
              </div>

            </el-col>
          </el-row>
    </div>
  </div>
</template>

<script>
export default {
	data() {
	  return {	  
		//轮播图 
	  football_img: [
		{ src: require("../images/football/football01.jpg") ,title:"曼联任命拉什福德为头号点球手！博格巴不能再抢",football_imgright:[{name:"11"},{},{}]},
		{ src: require("../images/football/football02.jpg") ,title:"曼城奖杯全球巡回行正式亮相京城"},
		{ src: require("../images/football/football03.jpg") ,title:"孔帕尼告别赛：曼城传奇2-2英超全明星"},
	  ],	
	  // 轮播图右侧文字
	  football_imgright:[
		{title:"国足新一期25人名单：艾克森领衔 国安5将入选",content:"为备战2022年卡塔尔世界杯亚洲区预选赛预赛阶段（40强赛）的比赛，中国足协今日在官网公布了最新一期国足25人名单"},
		{title:"突然，梅西对队医说了一句令人担心的话",content:"在昨天巴萨与潜艇之战中，梅西上半场一度因伤离场接受治疗。在接受按摩时，梅西对队医表示“我现在可不能再受伤了”。"},
		{title:"英超4强仅曼城1队赢球！瓜帅感慨：欧冠太难了",content:"今日凌晨，2019-20赛季的欧冠首轮小组赛全部结束，曼城在客场3-0轻取顿涅茨克矿工，非常轻松的收获了3分。"},
	  ],
	  //英超
	  football_yin:[
		{ src: require("../images/football/football04.jpg") ,title:"白发穆里尼奥哭诉:我想念足球 我渴望回来执教",time:"2019-08-19 10:58"},
		{ src: require("../images/football/football05.jpg") ,title:"英格兰球星阿什利-科尔退役 盼未来成足球教练",time:"2019-08-19 09:12"},		  
		{ src: require("../images/football/football06.jpg") ,title:"利物浦门将低级失误让人“心惊”不输前任",time:"2019-08-19 09:04"},		  
		{ src: require("../images/football/football07.jpg") ,title:"利物浦0价救世主！4次世界级表演+扑点，加盟9天就夺冠！",time:"2019-08-15 13:53"},	  
		{ src: require("../images/football/football08.jpg") ,title:"萨拉空难惊人进展:飞机坠毁前 他已一氧化碳中毒",time:"2019-08-15 09:48"},		
		{ src: require("../images/football/football09.jpg") ,title:"桑切斯与17岁新星发生冲突!或被索圣下放预备队",time:"2019-08-14 10:45"},
		{ src: require("../images/football/football10.jpg") ,title:"FIFA宣布曼城处罚结果：罚31.5万镑 无转会禁令",time:"2019-08-14 10:43"},		  
		{ src: require("../images/football/football11.jpg") ,title:"兰帕德回击穆帅:不用理会那些专家 我只能这么用人",time:"2019-08-12 10:50"},		  
		{ src: require("../images/football/football12.jpg") ,title:"切尔西后防天团一溃千里！哪来的勇气卖路易斯？",time:"2019-08-12 10:38"},	  
		{ src: require("../images/football/football13.jpg") ,title:"体坛观察丨金元足球急速降温 英超回归'理性'",time:"2019-08-09 09:45"},						
	  ],
	  // 意甲
	  football_yi:[
		{ src: require("../images/football/football22.jpg") ,title:"意甲：国米1：0拉齐奥 联赛五连胜领跑积分榜",time:"2019-09-26 13:47"},
		{ src: require("../images/football/football23.jpg") ,title:"巴尔扎利重返尤文图斯",time:"2019-09-26 09:13"},		  
		{ src: require("../images/football/football24.jpg") ,title:"尤文主席：队医建议C罗不上 我们从未无视球迷",time:"2019-08-01 10:04"},		  
		{ src: require("../images/football/football25.jpg") ,title:"国际冠军杯C罗无愧“人气王”",time:"2019-07-25 14:23"},	  
		{ src: require("../images/football/football26.jpg") ,title:"来了！尤文宣布德里赫特抵达都灵 签约在即",time:"2019-07-17 09:55"},		
		{ src: require("../images/football/football27.jpg") ,title:"意国家法院也驳回尤文申诉!2006年意甲冠军仍是国米",time:"2019-07-12 10:44"},
		{ src: require("../images/football/football28.jpg") ,title:"尤文官方宣布签下法国中场 700万欧年薪签约4年",time:"2019-07-02 09:36"},		  
		{ src: require("../images/football/football29.jpg") ,title:"德里赫特加盟尤文倒计时！他没等到巴萨匹配的电话",time:"2019-06-27 10:06"},		  
		{ src: require("../images/football/football30.jpg") ,title:"意大利前传奇球星托蒂辞去罗马管理层职务",time:"2019-06-19 09:28"},	  
		{ src: require("../images/football/football31.jpg") ,title:"葡媒：布冯可能加盟波尔图 替代卡西利亚斯",time:"2019-06-12 09:52"},						
	  ],	  
	  // 西甲
	  football_xi:[
		{ src: require("../images/football/football32.jpg") ,title:"巴萨官方公布梅西受伤情况！恐无缘欧冠战国米",time:"2019-09-26 10:00"},
		{ src: require("../images/football/football33.jpg") ,title:"西甲-罗德里戈打进处子球！皇马2-0三连胜登顶",time:"2019-09-26 09:05"},		  
		{ src: require("../images/football/football34.jpg") ,title:"齐达内有点烦:输一场就说我下课 赢一场又要我留任",time:"2019-09-25 14:00"},		  
		{ src: require("../images/football/football35.jpg") ,title:"曝梅西主动拒绝赛前晒奖杯！想让队友集中精力比赛",time:"2019-09-25 08:41"},	  
		{ src: require("../images/football/football36.jpg") ,title:"超越C罗 梅西第六次荣膺国际足联年度最佳运动员",time:"2019-09-24 09:22"},		
		{ src: require("../images/football/football37.jpg") ,title:"西甲-本泽马头球破门 皇马1-0塞维利亚追平榜首",time:"2019-09-23 09:20"},
		{ src: require("../images/football/football38.jpg") ,title:"没看错！格子转会后续：巴萨将遭罚300欧",time:"2019-09-17 14:24"},		  
		{ src: require("../images/football/football39.jpg") ,title:"武磊未登场费雷拉建功 西班牙人2-1取赛季首胜",time:"2019-09-16 10:13"},		  
		{ src: require("../images/football/football40.jpg") ,title:"梅西伤愈赛季首次合练 对手慌了：别急着复出！",time:"2019-08-22 09:56"},	  
		{ src: require("../images/football/football41.jpg") ,title:"巴萨或将重罚登贝莱！知情人：狐朋狗友毁了他",time:"2019-08-22 09:48"},						
	  ],	  
	  // 国内一览
	  football_guo:[
		{ src: require("../images/football/football42.jpg") ,title:"国足公布新一期集训大名单 老将吉翔、曾诚回归",time:"2019-09-26 13:41"},
		{ src: require("../images/football/football43.jpg") ,title:"恒大外援布朗宁完成归化手续 '蒋光太'努力为国作战",time:"2019-09-25 09:39"},		  
		{ src: require("../images/football/football44.jpg") ,title:"未领合同先上岗 郝伟带国奥备战",time:"2019-09-25 08:19"},		  
		{ src: require("../images/football/football45.jpg") ,title:"多事之秋 中国足球“捷径”不好走",time:"2019-09-24 09:23"},	  
		{ src: require("../images/football/football46.jpg") ,title:"中超：李圣龙绝杀 上港2:1建业拿到关键3分",time:"2019-09-23 09:22"},		
		{ src: require("../images/football/football47.jpg") ,title:"侯永永单骑闪光 国安零封天海 与恒大只差1分",time:"2019-09-23 09:10"},
		{ src: require("../images/football/football48.jpg") ,title:"武磊欧战屡失良机 欲找回状态需解决两大难题",time:"2019-09-20 10:49"},		  
		{ src: require("../images/football/football49.jpg") ,title:"国奥临阵换帅 郝伟如何翻盘？",time:"2019-09-20 08:58"},		  
		{ src: require("../images/football/football50.jpg") ,title:"恒大淘汰亚冠争冠最强敌 苦战再苦也值得！",time:"2019-09-19 09:24"},	  
		{ src: require("../images/football/football51.jpg") ,title:"武磊周记:球迷间的地域隔阂已打破 孩子们长大了",time:"2019-09-12 09:18"},						
	  ],	  
	  // 绿茵激情
	  football_lv:[
		{ src: require("../images/football/football52.jpg") ,title:"国奥集结 新帅郝伟走马上任",time:"2019-09-25 09:36"},
		{ src: require("../images/football/football23.jpg") ,title:"是否紧张了! 英格兰的俄罗斯世界杯之旅",time:"2018-03-15 16:22"},		  
		{ src: require("../images/football/football54.jpg") ,title:"欧冠决出八强 西甲强势而英超又不行了",time:"2018-03-15 16:19"},		  
		{ src: require("../images/football/football55.jpg") ,title:"欧冠开哨前被吐槽缺少悬念",time:"2019-09-17 09:05"},	  
		{ src: require("../images/football/football56.jpg") ,title:"巴黎三巨头'组团'无缘战皇马！马塞洛颈部受伤缺阵",time:"2019-09-17 10:53"},		
		{ src: require("../images/football/football57.jpg") ,title:"意外惊喜？欧冠死亡之组头名是：布拉格斯拉维亚",time:"2019-09-18 14:20"},
		{ src: require("../images/football/football58.jpg") ,title:"欧冠：巴黎3-0横扫皇马 贝尔本泽马进球都被吹",time:"2019-09-19 10:15"},		  
		{ src: require("../images/football/football59.jpg") ,title:"韦世豪巴坎布建功迎赛季首胜 攻守端新援均有亮眼表现 ",time:"2019-03-14 09:34"},		  
		{ src: require("../images/football/football60.jpg") ,title:"德勤足球财富榜出炉：为什么英超俱乐部最赚钱？",time:"2019-03-14 09:30"},	  
		{ src: require("../images/football/football61.jpg") ,title:"欧联-贝里沙梅开二度 多特主场1-2负萨尔茨堡",time:"2019-03-09 10:04"},						
	  ],	  
	  
	  // 懂球帝
	  football_dong:[
		{ src: require("../images/football/football14.jpg") ,title:"不够分？曼城向英超索要更多奖牌被拒"},
		{ src: require("../images/football/football15.jpg") ,title:"卢卡库疯狂炮轰曼联:早就不想要我 还把我当傻子"},
		{ src: require("../images/football/football16.jpg") ,title:"巴尔扎利重返尤文图斯"},
		{ src: require("../images/football/football17.jpg") ,title:"尤文巨头发声:我们很尊重梅西 但C罗配得上得奖"},							  
	  ],
	  // 热点专题
	  football_hot:[
		  { src: require("../images/football/football18.jpg") ,title:"C罗:可能踢到41岁 如今'无名之辈'都能卖1亿欧?"},
		  { src: require("../images/football/football19.jpg") ,title:"尤文主帅感染肺炎 将接受特殊治疗！60根烟/天"},
		  { src: require("../images/football/football20.jpg") ,title:"争冠3队5轮只差3分！中超悬念又来了？"},
		  { src: require("../images/football/football21.jpg") ,title:"FIFA最新排名：国足名次上升三位 比利时第一"},							  
	  ],	  
	 abPosition: 'left',
     activeName1:0,
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
  .football{
    margin: 0 auto;
    padding-bottom: 30px;
    height: auto;
    width: 100%;
    max-width: 1400px;
    margin-bottom: 10px;
  }
  .football-title{
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
  /* 标签左侧 */
  .football-label{
	padding:10px;
   }
  .el-tabs__item{
    height: 500px !important;
  }
  .football-body{
    background-color: white;
  }
  @media only screen and (max-width:990px) {
    .el-tabs__item{
	 z-index:99999px;
      padding:0 100px !important;
    }
}
  @media only screen and (min-width:990px) {
    .el-tabs__item{
      height:100px;
    }
}

  /* 轮播图 */
  .football-carousel-body{
    position: relative;
    height: auto;
    min-height: 350px;
    padding: 10px;
  }
   .football-carousel{
    width: 100%;
    height: auto;
  }
  .football-carousel-title{
    position: absolute;
    height: 3.125rem;
    line-height: 2rem;
    bottom: 30px;
    left: 0px;
    right: 0px;
    color: white;
    font-size: 1.25rem;
  }
/* 轮播图左侧 */
  .football-carousel-left{
    height: auto;
  }
  .football-carousel-lunbotu{
   width: 100%;
   height:100%;
  }
  .football-carousel-height{
   overflow: hidden;
  }
  .el-carousel__container{
   height: 100%;
   height: 300px !important;
  }

 /* 轮播图右侧 */
  .football-carousel-right{
    text-align: left;
    height:auto;
    /* background-color: red; */
   }
   .football-carousel-rlist{
     padding: 10px;
   }
   .football-carousel-ritem{
    height: 130px;
    /* line-height: 50px; */
   }
   .football-carousel-ritem h4{
     height: 50px;
     line-height: 30px;
	 
   }
  .football-carousel-ritem p{
    height:60px;
    line-height:33px;
    text-indent: 2em;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
   }


/* 卡片 */
  .football-card{
    width: 100%;
    height: auto;
  }
  .football-card-title{
   text-align: left;
   padding-left: 20px;
   font-size: 1.125rem;
   color: orangered;
   font-weight: bold;
  }
  .football-engc-list{
    padding: 0px;
    height: auto;
  }
  .football-engc-item{
    padding: 10px;
    height: 11.25rem;
  }
  @media only screen and (max-width:990px) {
    .football-engc-item{
      height:120px;
    }
}
  .football-engc-center{
    padding-left: 10px;
  }
  .football-engc-img{
    margin-left:5px;
    height:160px;
    width: 100%;
	overflow: hidden;
  }
  @media only screen and (max-width:990px) {
    .football-engc-img{
		height:90px;
		width: 100px;
    }
  } 
  .football-engc-img img{
    height: 100%;
    width: 100%;
  }
  .football-engc-img img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .football-engc-title{
	margin-top: 10px;
	font-size: 1.125rem;
	font-weight: bold;
    text-align: left;
    height:100px;
    line-height: 1.5625rem;
   }
  @media only screen and (max-width:990px) {
    .football-engc-title{
      height: 50px;
    }
 }
  .football-engc-time{
	font-size: 0.9375rem;
	color: #999;
    height: 30px;
    text-align: left;
   }
  .football-engc-writer{
	font-size: 0.9375rem;
	color: #999;
    padding-right: 20px;
    float: right;
   }
  .football-engc-item:hover{
    box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
  }
 /* 懂球帝 */
  .football-right-anders{
    padding-right:10px;
    padding-left:10px;
  }
 @media only screen and (max-width:990px) {
    .football-right-anders{
      padding: 0px;
    }
}
  .football-anders-header{
	text-align: left;
	margin-left: 20px;
	padding-left: 10px;
	font-size: 1.125rem;
	color: orangered;
	font-weight: bold;
	width:90%;
	border-bottom: 2px solid orangered;
  }
  .football-anders-list{
	margin-top: 10px;
    padding: 0px;
    height: auto;
  }
  .football-anders-item{
    padding: 10px;
    height: 8.75rem;
  }
  .football-anders-center{
    padding-left: 10px;
  }
  .football-anders-img{
    margin-left:10px;
    height:120px;
    width: 100%;
	overflow: hidden;
  }
  @media only screen and (max-width:990px) {
    .football-anders-img{
		height:90px;
		width: 100px;
    }
  }  
  @media only screen and (max-width:990px) {
    .football-anders-item{
	  padding: 0px;
      height:110px;
    }
  }
  .football-anders-img img{
    height: 100%;
    width: 100%;
  }
  .football-anders-img img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .football-anders-title{
	 margin-left:10px;
     text-align: left;
     height:3.3rem;
     line-height: 1.5625rem;
	 overflow:hidden;
	 text-overflow:ellipsis;
	 display:-webkit-box;
	 -webkit-box-orient:vertical;
	 -webkit-line-clamp:2;
   }
  @media only screen and (max-width:990px) {
    .football-anders-title{
      height: 50px;
    }
  }
  .football-anders-time{
    height: 30px;
    text-align: left;
   }
  .football-anders-writer{
	font-size: 0.9375rem;
	color: #999;
    padding-right: 20px;
    float: right;
   }
  .football-anders-item:hover{
    box-shadow: 0 0 1px 2px rgba(225, 69, 0, .1);
  }
 /* 热点专题 */
  .football-right-hot{
    margin:30px 0px 20px 0px ;
    padding-right:10px;
    padding-left:10px;
  }
 @media only screen and (max-width:990px) {
    .football-right-hot{
      padding: 0px;
    }
}
  .football-hotnews-header{
    text-align: left;
    margin-left: 20px;
    padding-left: 10px;
    font-size: 1.125rem;
    color: orangered;
    font-weight: bold;
    width:90%;
    border-bottom: 2px solid orangered;
  }
  .football-hotnews-list{
	margin-top: 10px;
    padding: 0px;
    height: auto;
  }
  .football-hotnews-item{
    padding: 10px;
    height: 8.75rem;
  }
  @media only screen and (max-width:990px) {
    .football-hotnews-item{
       height:110px;
     }
  }   
  .football-hotnews-center{
    padding-left: 10px;
  }
  .football-hotnews-img{
    margin-left:10px;
    height:120px;
    width: 100%;
	overflow: hidden;
  }
   @media only screen and (max-width:990px) {
     .football-hotnews-img{
       height: 90px;
     }
  } 
  .football-hotnews-img img{
    height: 100%;
    width: 100%;
  }
  .football-hotnews-img img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .football-hotnews-title{
    text-align: left;
	padding-left: 10px;
    height:3.2rem;
    line-height: 1.5625rem;
	overflow:hidden;
	text-overflow:ellipsis;
	display:-webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
   }
  @media only screen and (max-width:990px) {
    .football-hotnews-title{
      height: 50px;
    }
 }
  .football-hotnews-time{
    height: 30px;
    text-align: left;
   }
  .football-hotnews-writer{
	font-size: 0.9375rem;
	color: #999;	  
    padding-right: 20px;
    float: right;
  }

  .football-hotnews-item:hover{
    box-shadow: 0 0 1px 2px rgba(225, 69, 0, .1);
  }

</style>
