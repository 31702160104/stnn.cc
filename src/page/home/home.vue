<template>
  <div class="home">
<!-- 轮播图 -->
    <div class="carousel">
		<el-carousel  class="el-carousel" :height="screenWidth<990 ? '300px':'600px'">
			<el-carousel-item v-for="(item,index) in home_img" :key="index">
				<router-link tag="a" target="_blank" :to="{name:'content'}">
					 <img :src="item.src" class="lunbotu" alt="轮播图">
					 <div class="carousel-title">{{item.title}}</div>						
				</router-link>
			</el-carousel-item>
		</el-carousel>	
    </div>
      <!-- 热点新闻 -->
      <div class="hotnews">
          <!-- 热点新闻标题 -->
         <el-row type="flex">
            <el-col :span="1"></el-col>
            <el-col :span="22">
               <div class="hotnews-title">
                  <div class="hotnews-title-name">热点新闻</div>
                  <div class="hotnews-more"><el-button type="text" @click="hotnews">更多<i class="el-icon-arrow-right"></i></el-button></div>
               </div>
               <!-- 热点新闻内容左侧 -->
              <el-col :span="10" :xs="24" :sm="24" :md="10" :lg="10" class="hotnews-left hotleft">
                <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24">
                  <div class="hotnews-left-t">
                    <router-link tag="a" target="_blank" :to="{name:'content'}">
                        <div class="hotnews-left-imgbox"><img src="../../images/home/home1.jpg" alt=""></div>
                      <p>香港各界中秋探访团与驻香港部队官兵共迎佳节</p>
                    </router-link>
                  </div>
                </el-col>
                <el-col :span="12" :xs="12" :sm="12" :md="12" :lg="12">
                  <div class="hotnews-left-b b-left">
                    <router-link tag="a" target="_blank" :to="{name:'content'}">
                     <div class="hotnews-left-imgbox"> <img src="../../images/home/home2.jpg" alt=""></div>
                      <p>暴徒深夜强闯港铁太子站 疯狂打砸大肆破坏</p>
                    </router-link>
                  </div>
                </el-col>
                <el-col :span="12" :xs="12" :sm="12" :md="12" :lg="12">
                  <div class="hotnews-left-b b-right">
                    <router-link tag="a" target="_blank" :to="{name:'content'}">
                      <div class="hotnews-left-imgbox"><img src="../../images/home/home3.jpg" alt=""></div>
                      <p>中国企业参加第88届伊兹密尔国际博览会</p>
                    </router-link>
                  </div>
                </el-col>
               </el-col>
                <!-- 热点新闻内容右侧 -->
              <el-col :span="14" :xs="24" :sm="24" :md="14" :lg="14">
                  <ul class="hotnews-right right-left"> 
                    <li><router-link tag="a" target="_blank" :to="{name:'content'}">港媒：乱港分子黄之锋在香港机场再被拘捕</router-link></li>
                    <li><router-link tag="a" target="_blank" :to="{name:'content'}">港铁出公开信谴责暴力 指面临40年来最严峻挑战</router-link></li>
                    <li><router-link tag="a" target="_blank" :to="{name:'content'}">曾钰成：指责香港警队“滥用暴力”并不公道</router-link></li>
                    <li><router-link tag="a" target="_blank" :to="{name:'content'}">右眼受伤黑衣女发律师信 反对向警方交出医疗报告</router-link></li>
                    <li><router-link tag="a" target="_blank" :to="{name:'content'}">吴敦义：选“总统” 党内还在努力弥合分裂</router-link></li>
                    <li><router-link tag="a" target="_blank" :to="{name:'content'}">韩国瑜今新北造势 孙大千:参加人数将有4大重要意义</router-link></li>
                    <li><router-link tag="a" target="_blank" :to="{name:'content'}">这3件事压垮了民进党?网友:希望民进党永远消失</router-link></li>
                    <li><router-link tag="a" target="_blank" :to="{name:'content'}">县委一口气问责17名领导干部的背后</router-link></li>
                    <li><router-link tag="a" target="_blank" :to="{name:'content'}">海关总署：中国前8个月贸易顺差1.77万亿 扩大46%</router-link></li>
                    <li><router-link tag="a" target="_blank" :to="{name:'content'}">美联社：特朗普本周有关中国经济的言论失实</router-link></li>
                    <li><router-link tag="a" target="_blank" :to="{name:'content'}">白宫经济顾问称希望中美磋商取得“近期”成果</router-link></li>
                    <li><router-link tag="a" target="_blank" :to="{name:'content'}">中环游行|示威者用激光笔射向警员 警方一度举黑旗</router-link></li>
                    <li><router-link tag="a" target="_blank" :to="{name:'content'}">蓝委林为洲献策：韩必要时可闭关研究政策</router-link></li>
                  </ul>
               </el-col>
            </el-col>
            <el-col :span="1"></el-col>
          </el-row>
      </div>
      <!-- 新闻滚动条 -->
      <el-row class="newsroll" type="flex">
        <el-col :span="1"></el-col>
        <el-col :span="22">
          <el-row>
			  <div class="newsroll-center">
				  <div class="newsroll-name"><svg t="1568962165684" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3449" width="32" height="32"><path d="M738.642 222.672c-7.502-9.692-20.004-10.057-27.847-0.812-7.87 9.273-8.156 24.637-0.659 34.331 49.239 63.572 77.472 156.832 77.472 255.845 0 99.045-28.238 192.301-77.495 255.89-7.502 9.695-7.212 25.037 0.65 34.329 3.809 4.462 8.715 6.7 13.597 6.7 5.193 0 10.372-2.519 14.251-7.507 56.165-72.532 88.384-177.991 88.384-289.414 0-111.378-32.221-216.849-88.366-289.363zM672.633 296.933c-7.771-9.337-20.234-9.17-27.852 0.429-7.596 9.601-7.447 24.966 0.348 34.329 36.26 43.618 57.068 109.38 57.068 180.368 0 71.009-20.814 136.737-57.068 180.353-7.787 9.371-7.946 24.73-0.348 34.329 3.865 4.884 8.982 7.329 14.098 7.329 4.957 0 9.923-2.302 13.757-6.9 43.812-52.716 68.956-131.117 68.956-215.109-0.001-84.007-25.136-162.39-68.956-215.122zM605.536 370.788c-8.427-8.494-20.831-6.844-27.721 3.481-6.865 10.384-5.597 25.674 2.827 34.162 22.62 22.711 36.123 61.462 36.123 103.626 0 41.587-13.215 80.015-35.333 102.798-8.346 8.601-9.445 23.91-2.482 34.211 3.903 5.723 9.503 8.693 15.139 8.693 4.441 0 8.922-1.851 12.613-5.639 30.969-31.909 49.454-84.279 49.454-140.059-0.001-56.627-18.927-109.409-50.627-141.275zM482.832 199.070c-6.653-4.061-14.676-3.228-20.619 2.268l-161.572 148.902h-84.211c-10.889 0-19.698 10.842-19.698 24.273v275.124c0 13.425 8.81 24.278 19.698 24.278h84.211l161.572 148.902c3.463 3.179 7.616 4.822 11.79 4.822 3.003 0 6.039-0.854 8.828-2.565 6.653-4.111 10.866-12.521 10.866-21.713v-582.576c-0.001-9.204-4.212-17.593-10.866-21.713zM454.294 754.909l-135.316-124.717c-3.409-3.125-7.539-4.835-11.793-4.835h-71.073v-226.58h71.073c4.255 0 8.387-1.711 11.793-4.85l135.316-124.697v485.677z" fill="#d81e06" p-id="3450"></path></svg>快讯</div>
				 <marquee id="affiche" class="newsroll-center-a" align="left" direction="left"  hspace="1" vspace="1" loop="-1" scrollamount="2" scrolldelay="1" onMouseOut="this.start()" onMouseOver="this.stop()">
				   <router-link tag="a" target="_blank" :to="{name:'content'}">准备开跑 京雄城际铁路(北京段)即将开通运营</router-link>
				   <router-link tag="a" target="_blank" :to="{name:'content'}">见亮不见灯路灯会扭头 北京夜景照明升级</router-link>
				   <router-link tag="a" target="_blank" :to="{name:'content'}">中铝集团安全环保督察组组长周新林被查</router-link>
				   <router-link tag="a" target="_blank" :to="{name:'content'}">中国驻美大使崔天凯警告：香港乱下去对谁都没好处</router-link>
				   <router-link tag="a" target="_blank" :to="{name:'content'}">传蓝大老向郭要钱　洪秀柱：希望讲清楚一点</router-link> 
				   <router-link tag="a" target="_blank" :to="{name:'content'}">韩国瑜呛蔡政府　八部会要八仙过海来高雄？</router-link>
				   <router-link tag="a" target="_blank" :to="{name:'content'}">洪秀柱征战台南　马家军罗智强操盘要创奇迹　</router-link>　　        
				   <router-link tag="a" target="_blank" :to="{name:'content'}">唯一已逝世的国家勋章获得者 他的名字曾绝密28年</router-link>
				 </marquee>
			  </div>
          </el-row>
          <el-row>
            <div class="newsroll-img">
              <el-col :span="18" :xs="18" :sm="18" :md="18" :lg="18" ><router-link tag="a" target="_blank" :to="{name:'content'}"><img src="../../images/home/home20.jpg" alt=""></router-link></el-col>
              <el-col :span="6" :xs="6" :sm="6" :md="6" :lg="6"><router-link tag="a" target="_blank" :to="{name:'content'}"><img src="../../images/home/home21.jpg" alt=""></router-link></el-col>
            </div>
          </el-row>
        </el-col>
        <el-col :span="1"></el-col>
      </el-row>  
  <!-- 环球新闻 -->
    <div class="news">
        <el-row type="flex">
          <el-col :span="1"></el-col>
          <el-col :span="22">
            <!-- 港澳新闻 -->
            <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12" class="news-left">
                <div class="hotnews-title">
                  <div class="hotnews-title-name">港澳新闻<span class="hotnews-more more-left"><el-button type="text" @click="hkmacao">更多<i class="el-icon-arrow-right"></i></el-button></span></div>
                </div>
            <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" class="news-left">
                <div class="news-left-top">
                  <router-link tag="a" target="_blank" :to="{name:'content'}">
                    <img src="../../images/home/home4.jpg" alt="">
                    <div class="news-lefttop-title">暴徒乱港 | 疯狂暴徒 连毁七站</div>
                  </router-link>
                </div>
                <div class="news-left-center">
                  <router-link tag="a" target="_blank" :to="{name:'content'}">
					<div class="news-left-centerbox">
					  <el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="news-leftcenter-img">
						  <img src="../../images/home/home5.jpg" alt="">
					  </el-col>
					  <el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
						   <div class="news-leftcenter-title">
							<span>何超琼伍淑清赴联合国演说：讲出真相 挺警执法</span>
							<p>《大公报》报道，香港各界妇女联合协进会主席、全国妇联执委何超琼与香港各界妇女联合协进会监察顾问、美心集团创办人伍沾德的长女伍淑清，</p>
						  </div>
					   </el-col>					  						 
					</div>
                  </router-link>
                  <router-link tag="a" target="_blank" :to="{name:'content'}">
					 <div class="news-left-centerbox">
					   <el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="news-leftcenter-img">
							<img src="../../images/home/home6.jpg" alt="">
						</el-col>
						<el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
						  <div class="news-leftcenter-title">
							<span>又放了？乱港分子黄之锋获准继续保释</span>
							<p>海外网9月9日电 乱港组织“香港众志”秘书长黄之锋8日在香港国际机场再度被捕，9日上午在东区裁判法院提堂。</p>
						  </div>
						</el-col>					  						 
					 </div>
                  </router-link>
                  <router-link tag="a" target="_blank" :to="{name:'content'}">
					  <div class="news-left-centerbox">
						<el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="news-leftcenter-img">
							<img src="../../images/home/home7.jpg" alt="">
						</el-col>
						<el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
						  <div class="news-leftcenter-title">
							<span>香港“爆眼女”拒绝提供医疗报告 真相究竟是什么</span>
							<p>中新网9月9日电 综合香港媒体报道，8月11日尖沙咀暴力示威期间，一名女子右眼受伤。</p>
						  </div>
						</el-col>					  						 
					  </div>
                  </router-link>
                </div>
              </el-col>
            </el-col>
             <!-- 台湾新闻 -->
            <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12" class="news-right">
				<div class="hotnews-title">
					<div class="hotnews-title-name">台湾新闻<span class="hotnews-more more-left"><el-button type="text" @click="taiwan">更多<i class="el-icon-arrow-right"></i></el-button></span></div>
				</div>
				<el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" class="news-left">
					<div class="news-left-top">
						<router-link tag="a" target="_blank" :to="{name:'content'}">
							<img src="../../images/home/home8.jpg" alt="">
							<div class="news-lefttop-title">韩粉嘘马英九下台　马家军抱不平脸书遭灌爆</div>
						</router-link>
					</div>
					<div class="news-left-center">
						<router-link tag="a" target="_blank" :to="{name:'content'}">
							<div class="news-left-centerbox">
								<el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="news-leftcenter-img">
									<img src="../../images/home/home9.jpg" alt="">
								</el-col>
								<el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
								  <div class="news-leftcenter-title">
									<span>韩国瑜发感谢文　点名未出席的侯友宜朱立伦</span>
									<p>中评社台北9月9日电／中国国民党2020参选人韩国瑜昨回防故乡新北市，在新北市三重区的幸福水漾公园举办“2020新北出发”万人大造势。</p>
								  </div>
								</el-col>					  						 
							</div>
						</router-link>  
						<router-link tag="a" target="_blank" :to="{name:'content'}">
							<div class="news-left-centerbox">
								<el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="news-leftcenter-img">
									<img src="../../images/home/home10.jpg" alt="">
								</el-col>
								<el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
								  <div class="news-leftcenter-title">
									<span>韩新北造势　警方干扰驱离空拍机</span>
									<p>中评社台北9月9日电（记者　倪鸿祥）中国国民党2020参选人、高雄市长国瑜8日在新北市三重幸福水漾公园举办造势晚会，主办单位宣布突破35万人参加，</p>
								  </div>
								</el-col>					  						 
							</div>
						</router-link>
						<router-link tag="a" target="_blank" :to="{name:'content'}">
							<div class="news-left-centerbox">
								<el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="news-leftcenter-img">
									<img src="../../images/home/home11.jpg" alt="">
								</el-col>
								<el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
								  <div class="news-leftcenter-title">
									<span>韩造势踩坏草皮　侯友宜：没复原就求偿</span>
									<p>中评社台北9月9日电／中国国民党2020参选人、高雄市长韩国瑜昨晚在新北市幸福水漾公园举行初选后的首场大型造势，人潮汹涌，主办单位宣布多达35万人。</p>
								  </div>
								</el-col>					  						 
							</div>
						</router-link>
                    </div>
				</el-col>
            </el-col>  
            <!-- 大陆新闻 -->
			<el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12" class="news-left">
				<div class="hotnews-title">
					<div class="hotnews-title-name">大陆新闻<span class="hotnews-more more-left"><el-button type="text" @click="continent">更多<i class="el-icon-arrow-right"></i></el-button></span></div>
				</div>
				<el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" class="news-left">
					<div class="news-left-top">
						<router-link tag="a" target="_blank" :to="{name:'content'}">
						  <img src="../../images/home/home12.png" alt="">
						  <div class="news-lefttop-title">农业农村部农田建设管理司司长卢贵敏被查</div>
						</router-link>
					  </div>
					<div class="news-left-center">
						<router-link tag="a" target="_blank" :to="{name:'content'}">
							<div class="news-left-centerbox">
								<el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="news-leftcenter-img">
									 <div class="news-leftcenter-img"><img src="../../images/home/home13.jpg" alt=""></div>
								</el-col>
							  <el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
								<div class="news-leftcenter-title">
									<span>国家烟草专卖局原副局长赵洪顺被提起公诉</span>
									<p>国家烟草专卖局原党组成员、副局长赵洪顺涉嫌受贿一案，由国家监察委员会调查终结，经最高人民检察院指定，</p>
								</div>
							  </el-col>						 						 
							</div>
						</router-link>  
						<router-link tag="a" target="_blank" :to="{name:'content'}">
							<div class="news-left-centerbox">
								<el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8">
									<div class="news-leftcenter-img"><img src="../../images/home/home14.jpg" alt=""></div>
								</el-col>
							<el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
								<div class="news-leftcenter-title">
									<span>人民日报：预计生猪生产将逐步恢复 价格将回落</span>
									<p>当前，我国物价运行保持总体平稳态势，其中一些食品价格出现了一定幅度的上涨。中秋、国庆双节将至，这些“身边物价”能否稳得住？老百姓的“菜篮子”能否拎得轻松？</p>
								</div>
							</el-col>							
							</div>
						</router-link>
						<router-link tag="a" target="_blank" :to="{name:'content'}">
							<div class="news-left-centerbox">
								<el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="news-leftcenter-img">
									<img src="../../images/home/home15.png" alt="">
								</el-col>
								<el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
									<div class="news-leftcenter-title">
										<span>中国市场缘何有巨大吸引力？国际舆论给出答案</span>
										<p>进军中国市场的美国零售巨头“开市客”迎来销售额与股价的“开门红”， MSCI、标普道琼斯和富时罗素等国际指数巨头纷纷提升中国股票在自家指数中的影响力</p>
									</div>
								</el-col>							
							</div>
						</router-link>
					</div>
				</el-col>
			</el-col>  
            <!-- 国际新闻 -->
			<el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12" class="news-right">
                <div class="hotnews-title">
                    <div class="hotnews-title-name">国际新闻<span class="hotnews-more more-left"><el-button type="text" @click="international">更多<i class="el-icon-arrow-right"></i></el-button></span></div>
                </div>
                <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" class="news-left">
                    <div class="news-left-top">
						<router-link tag="a" target="_blank" :to="{name:'content'}">
							<img src="../../images/home/home16.png" alt="">
							<div class="news-lefttop-title">疑似舱门爆炸 波音新机型777X暂停测试</div>
						</router-link>
                    </div>
                    <div class="news-left-center">
                        <router-link tag="a" target="_blank" :to="{name:'content'}">
						    <div  class="news-left-centerbox">
								 <el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="news-leftcenter-img">
									<img src="../../images/home/home17.jpg" alt="">
								 </el-col>
							<el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
								<div class="news-leftcenter-title">
									<span>金正恩与教师合影 大赞：你们是爱国者革命家(图)金正恩与教师合影 大赞：你们是爱国者革命家(图)</</span>
									<p>报道称，金正恩到场后，教师们敬献鲜花。他向热烈欢呼的与会者亲切挥手，还称赞教师是培养祖国辉煌未来的“共产主义者、真正的爱国者和职业革命家”。</p>
								</div>
							 </el-col>							   
						   </div>
                        </router-link>
                       <router-link tag="a" target="_blank" :to="{name:'content'}">
							<div class="news-left-centerbox">
								 <el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="news-leftcenter-img">
									<img src="../../images/home/home18.jpg" alt="">
								 </el-col>
							<el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
							    <div class="news-leftcenter-title">
									<span>无端怀疑两名华裔 美国机场躁郁症员工按警报引发混乱</span>
									<p>近日，美国新泽西州纽瓦克机场航站楼发生了一起“紧急事件”，一名机场女员工怀疑2名华裔男子乘客“形迹可疑”，在问了一系列无厘头问题后竟按响警报大喊“撤离”，</p>
							    </div>
							 </el-col>
						</div>
                       </router-link>						
						<router-link tag="a" target="_blank" :to="{name:'content'}">
							<div class="news-left-centerbox">
								<el-col :span="8" :xs="10" :sm="10" :md="8" :lg="8" class="news-leftcenter-img">
									<img src="../../images/home/home19.jpg" alt="">
								</el-col>
								<el-col :span="16" :xs="14" :sm="14" :md="16" :lg="16">
									<div class="news-leftcenter-title">
										<span>韩造势踩坏草皮　侯友宜：没复原就求偿</span>
										<p>中评社台北9月9日电／中国国民党2020参选人、高雄市长韩国瑜昨晚在新北市幸福水漾公园举行初选后的首场大型造势，人潮汹涌，主办单位宣布多达35万人。</p>
									</div>
								</el-col>
							</div>
						</router-link>
                    </div>
                </el-col>
            </el-col>
			</el-col>
			<el-col :span="1"></el-col>
		</el-row>
    </div>
  <!-- 时事推荐 -->
    <el-row type="flex" >
        <el-col :span="1"></el-col>
        <el-col :span="22" class="timenews">
			<el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" class="timenews-left">
				<div class="hotnews-title">
					<div class="hotnews-title-name">时事推荐<span class="hotnews-more more-left"><el-button type="text"  @click="timepush">更多<i class="el-icon-arrow-right"></i></el-button></span></div>
				</div>
             <ul class="timenews-left-center">
				<li class="timenews-lcent-item" v-for="(item,index) of home_timenews" :key="index">
					<router-link tag="a" target="_blank" :to="{name:'content'}">
					    <el-col :span="5" :xs="10" :sm="10" :md="5" :lg="5" class="timenews-leftcenter-img">
							<img :src="item.src" alt="">
					    </el-col>
						<el-col :span="19" :xs="14" :sm="14" :md="19" :lg="19">
							<div class="timenews-leftcenter-title">
								<span class="timenews-leftcenter-titleb timenews-title">{{item.title}}</span>
								<span class="timenews-leftcenter-time ">{{item.time}}</span>
								<span class="timenews-title-content">{{item.content}}</span>
								<span class="timenews-leftcenter-writer">星岛环球网</span>
							</div>
						</el-col>
					</router-link>
               </li>
             </ul>
          </el-col>
        </el-col>
        <el-col :span="1"></el-col>
      </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
		home_img: [
		    { src: require("../../images/home/home32.jpg") ,title:"联播+丨中国制度何以强起来？习近平这些话指明方向"},
		    { src: require("../../images/home/home33.jpg") ,title:"带你探访“高颜值”大兴机场背后的“硬核”工程奥秘"},
		  	{ src: require("../../images/home/home34.jpg") ,title:"第74届联合国大会一般性辩论开幕 91名国家元首将发言"}
		],
		home_timenews: [
			{ src: require("../../images/home/home22.jpg") ,title:"传言成真：日本确认北部一重要岛屿消失！",time:"2019年09月24日 16:42:50",content:"海外网9月24日电 此前，一直被传消失的北海道“Esanbe鼻北小岛”最近终于有了下落。日本海上保安厅24日表示，该岛已经消失，只确认到了浅滩。但即便如此，日本领海仍能基本维持现状。"},
			{ src: require("../../images/home/home23.jpg") ,title:"英法院裁定首相要求议会休会违法 约翰逊：强烈不满",time:"2019年09月25日 07:26:09",content:"在英国最高法院裁定该国首相约翰逊（Boris Johnson）暂停议会的决定为非法之后，英国下议院议长命令国会议员于明天（25日）早晨返回下议院恢复工作，同时反对党领袖呼吁约翰逊辞职。"},
			{ src: require("../../images/home/home24.jpg") ,title:"全球芯片大战！10家“中国芯”将成为大赢家！",time:"2019-09-23 16:41:28",content:"早前华为高层接受《环球邮报》采访时表示：外界最关心芯片。我不关心芯片，因为我们自己的芯片实际上比美国更先进。关于核心尖端芯片，他还称：我们没有问题，我们可以完全供应自己，保持产品的高端。"},
			{ src: require("../../images/home/home25.jpg") ,title:"男子公交上浑身抽搐口吐白沫 一车好心人救了他",time:"2019年09月20日 20:42:13",content:"9月19日晚，鸳鸯至南坪枢纽站的620路公交车上，一位乘客突发疾病，浑身抽搐口吐白沫。车上的乘客发现后，将情况告知给驾驶员，车辆靠边停下后，大家立即为男子实施救助、联系120和家人，帮助男子转危为安。"},
			{ src: require("../../images/home/home26.jpg") ,title:"70年 经济社会跨越式发展（权威发布）",time:"2019-09-25 10:11:29",content:"近年来，世界经济复苏乏力，外部不确定性因素也在增加。在这一背景下，如何促进形成强大的国内市场？宁吉喆认为，下一步要在扩大有效投资、促进消费提质扩容等方面下功夫。"},
			{ src: require("../../images/home/home27.jpg") ,title:"印度突然释放这一消息后，外资大批进场",time:"2019年09月25日 00:10:01",content:"台媒称，印度总理莫迪近日意外祭出200亿美元（1美元约合7.1元人民币）减税措施，令全球投资人大受鼓舞，不是加码印度股市，就是抱股不放。"},
			{ src: require("../../images/home/home28.jpg") ,title:"70年后再出发 而今迈步从头越",time:"2019-09-24 15:56:15",content:"秋日的北京天高云淡。在北京展览馆，如时光隧道般的长廊向世界呈现了新中国的伟大历程。在庆祝中华人民共和国成立70周年之际，习近平总书记来到这里参观“伟大历程 辉煌成就——庆祝中华人民共和国成立70周年大型成就展”。"},
			{ src: require("../../images/home/home29.jpg") ,title:"豁免关税！特朗普政府为何对苹果开了绿灯？",time:"2019年09月25日 00:10:01",content:"外媒称，美国苹果公司23日称，将在得克萨斯州奥斯汀的苹果工厂生产新的Mac Pro。之前美国政府批准部分豁免苹果零部件的关税。"},
			{ src: require("../../images/home/home30.jpg") ,title:"香港导演杜琪峰退出金马奖评审团 国台办回应",time:"2019年09月25日 11:18:24",content:"海外网9月25日电 9月25日上午，国务院台湾事务办公室举行例行新闻发布会。国台办发言人马晓光就两岸政党交流、两岸军事互信和两岸文化往来等热点问题回答记者提问。"},
			{ src: require("../../images/home/home31.jpg") ,title:"如何评价70年来的两岸关系？国台办这样回应",time:"2019年09月25日 11:17:34",content:"9月25日上午，国务院台湾事务办公室举行例行新闻发布会。国台办发言人马晓光就两岸政党交流、两岸军事互信和两岸文化往来等热点问题回答记者提问。"},
      ],
        screenWidth: document.body.clientWidth
      }
    },
	  mounted () {//钩子函数就是指再所有函数执行前，先执行其内函数
		const that = this
		window.onresize = () => {
			return (() => {
				window.screenWidth = document.body.clientWidth
				that.screenWidth = window.screenWidth
			})()
		}

	  },
	watch:{//watch来响应数据的变化
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
	},
    methods: {

      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      content(){
        this.$router.push({path:'/content'});
      },
      continent(){
        this.$router.push({path:'/continent'});
      },
      hkmacao(){
        this.$router.push({path:'/hkmacao'});
      },
      taiwan(){
        this.$router.push({path:'/taiwan'});
      },
      international(){
        this.$router.push({path:'/international'});
      },
      timepush(){
        this.$router.push({path:'/timepush'});
      },
      hotnews(){
        this.$router.push({path:'/hotnews'});
      },
    }

  }
</script>

<style scoped="scoped">
  a{
    color: #000000;
  }
  a:hover{
    color: orangered;
  }
  .home {
    max-width: 1400px;
    margin: 0 auto;
    margin-bottom:50px;
  }
  /*轮播图 */
  .carousel {
	max-height:600px;
    padding-left: 10px;
    padding-right: 10px;
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
  /* 热点新闻 */
  .hotnews-title{
    width: 100%;
    height: 70px;
    line-height:30px;
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    position: relative;
    border-bottom:3px solid salmon;
    background: white;
   }
   .el-button--text{
    color: orangered;
   }
   /* 更多 */
  .hotnews-more{
    display: inline-block;
    float: right;
    padding-top: 20px;
  }
  .more-left{
    position: absolute;
    right: 0px;
    top: 0px;
  }
/* 热点新闻标题 */
  .hotnews-title-name{
    display: inline-block;
    margin-top: 25px;
    font-size: 20px;
    float: left;
    color: orangered;
  }
  .hotnews-left{
    background: white;
    height: 36.875rem;
    padding-left:20px;
    padding-right:0px;
  }
  @media only screen and (max-width:990px) {
    .hotleft{
      padding-left:10px;
      padding-right:10px;
    }
  }
  .hotnews-left-t{
    font-size: 18px;
    margin-top: 15px
  }
     /* 图片放大 */
  .hotnews-left-t img{
    width: 100%;
    height:18.75rem;
    border-radius: 5px;
  }
  .hotnews-left-t img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .hotnews-left-imgbox{
    overflow: hidden;
  }
/* 热点新闻大图片 */
  .hotnews-left-t p{
    height:1.3rem;
    line-height:1.3rem;
    margin-top: 5px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
   /* 热点新闻下面 */
  .hotnews-left-b {
    font-size: 18px;
	line-height: 1.5rem;
    height: 10.625rem;
    width:100%;
  }
  .hotnews-left-b img{
    width: 100%;
    height: 10.625rem;
    border-radius: 5px;
  }
  .hotnews-left-b p{
    margin-top: 5px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
   /* 放大图片 */
  .hotnews-left-b img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .b-left{
    padding-right: 5px;
  }
  .b-right{
    padding-left: 10px;
  }
    /* 内容右侧 */
  .hotnews-right{
    padding-left: 50px;
    padding-top: 10px;
    margin: 0px;
    height:36.875rem;
    overflow:hidden;
    text-align: left;
    background: white;
	
  }
  @media only screen and (max-width:990px) {
    .right-left {
	  padding-left: 10px;
	  padding-right: 10px;
	  
    }
   }
   .hotnews-right li{
    padding: 10px 5px 10px 5px;
	height:3rem;
 }
 /* 新闻滚动条 */
  .newsroll{
    position: relative;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 20px;
    height:140px;
    width: 100%;
    max-width: 1400px;
  }
  .newsroll-name{
    position: absolute;
    left: 10px;
    text-align: left;
    color: orangered;
    font-weight: bold;
  }
  .newsroll-center{
    position: absolute;
    padding-left: 5rem;
    padding-right: 3.125rem;
    height: 50px;
    line-height: 50px;
    background-color: #ddd;
  }
  .newsroll-center-a a{
	padding-right: 30px;
  }
/* 新闻滚动条图片 */
  .newsroll-img{
    position: absolute;
    top: 60px;
    height: auto;
    width: 100%;
    background-color: black;
  }
  .newsroll-img img{
    width: 100%;
    height:100px;
  }
  @media only screen and (max-width:990px) {
    .newsroll-img img{
      height: 70px;
    },
	.newsroll{
	  margin-bottom: 0px;
	}
  }
 /* 环球新闻 */
  .news-left,.news-right{
    padding-right: 10px;
    padding-left: 10px;
    background: white;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .news-left-top{
    width: 100%;
    max-height:300px;
    overflow:hidden;
    position: relative;
  }
  .news-left-top img{
    width: 100%;
    height:100%;
  }
  .news-left-top img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
  .news-lefttop-title{
    color: white;
    width: 100%;
    height: 2.5rem;
    line-height: 2.1875rem;
    position: absolute;
    bottom: 0px;
    margin: 0 atuo;
    background: url(../../images/home/home-titileback.png);
  }
  .news-left-center{
    margin-top: 10px;
  }
  .news-left-centerbox{
	height:10rem;
	width: 100%;
  }
   @media only screen and (max-width:990px) {
   .news-left-centerbox{
    height: 7.5rem;
   }
  } 
 .news-leftcenter-img{
   height:150px;
   margin-bottom: 10px;
   overflow:hidden;
 }
  @media only screen and (max-width:990px) {
    .news-leftcenter-img{
      height: 110px;
    }
  }
  .news-leftcenter-img img{
    width: 100%;
    height:100%;
  }
  .news-leftcenter-img img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }

  .news-leftcenter-title{
	height: 9.375rem;
    padding: 5px 5px 0px 5px;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:2; /*想要显示的行数*/
    -webkit-box-orient: vertical;	
  }
  @media only screen and (max-width:990px) {
    .news-leftcenter-title{
      height: 110px;
    }
  } 
  .news-leftcenter-title span{
    height:3.5rem;
	line-height: 1.7rem;
    width: 100%;
    text-align: left;
    font-size: 1.125rem;
    font-weight: bold;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:2; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
  .news-leftcenter-title p{
    height: 3rem;
	line-height: 1.5rem;
    width: 100%;
    font-size: 0.875rem;
    text-align: left;
	text-indent: 2em;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:2; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
  @media only screen and (max-width:990px) {
    .news-leftcenter-title span{
	  height:3rem;
	  line-height:1.5rem;
	  font-size: 0.9375rem;
	  overflow: hidden;/*自动隐藏文字*/
	  text-overflow: ellipsis;/*文字隐藏后添加省略号*/
	  display: -webkit-box;
	  -webkit-line-clamp:2; /*想要显示的行数*/
	  -webkit-box-orient: vertical;	  
    }
  }
  /* 时事推荐 */
  .timenews{
    padding-left: 0px;
  }

  .timenews-left-center{
    margin-top: 10px;
    padding: 0px;
   }
  .timenews-lcent-item{
    height: 13.75rem;
    padding-left: 10px;
    padding-top: 10px;
    margin-bottom: 10px;
  }
  @media only screen and (max-width:990px) {
    .timenews-lcent-item{
      height: 120px;
    }
  }
  .timenews-lcent-item:hover{
    box-shadow: 0 0 25px 2px rgba(0, 0, 0, .2);
  }
  .timenews-left,.timenews-right{
    height: 100%;
    padding-right: 10px;
    padding-left: 10px;
    background: white;
    margin-top: 10px;
    margin-bottom: 20px;
  }

/* 时事图片 */
  .timenews-leftcenter-img{
    margin-bottom: 10px;
    max-height: 200px;
    overflow:hidden;
    height: 100%;
  }
  .timenews-leftcenter-img img{
    width: 100%;
    height: 100%;
  }

  .timenews-leftcenter-img img:hover{
    transform: scale(1.1);
    transition: all 0.5s linear;
  }
/* 时事内容 */
  .timenews-leftcenter-title{
	font-size: 1rem;
    padding: 10px;
    height: 6.25rem;
  }
  /* 作者 */
  .timenews-leftcenter-writer{
    float: right;
    color: #999;
    font-size: 0.875rem;
  }
  /* 时间 */
  .timenews-leftcenter-time{
    color: #999;
    float: left;
    height:1.5rem;
    line-height: 1.5rem;
    font-size: 0.8125rem;
  }
  @media only screen and (max-width:990px) {
    .timenews-leftcenter-title {
       height: 100px;
       padding: 0px;
       overflow: hidden;
       padding-left: 5px;
    }
  }
  @media only screen and (max-width:990px) {
    .timenews-leftcenter-writer{
      display: none;
    }
  }
/* 标题 */
  .timenews-leftcenter-titleb{
    height: 2rem;
    line-height:1.6rem;
    width: 100%;
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:1; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
  @media only screen and (max-width:990px) {
    .timenews-leftcenter-titleb{
      height: 1.5rem;
      font-size:0.9375rem;
    }
  }
  /* 内容 */
  .timenews-title-content{
    height:3rem;
    color: #111;
    width: 100%;
    font-size: 1rem;
    text-align: left;
	text-indent: 2em;
    overflow: hidden;/*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp:3; /*想要显示的行数*/
    -webkit-box-orient: vertical;
  }
  @media only screen and (min-width:990px) {
    .timenews-leftcenter-title p{
      font-size: 1.2rem;
      height:100px;
      line-height:35px;
    }
  }
</style>
