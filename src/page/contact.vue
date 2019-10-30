<template>
   <div class="contact">	
	 <div class="contact-title">
			 CONTACT联系我们
	 </div>	 
	 <el-row type="flex" >
		 <el-col :span="1"></el-col>
		 <el-col :span="22" >
			 <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24">
				 <div class="contact-content-center">
					<p>星岛环球网是以新闻为特色、以全球华人为服务对象的大型综合性新闻资讯门户网站。</p>
					　　
					<p>星岛环球网倡导“有思想的新闻、有价值的报道”，严守星岛新闻一贯的“中正持平”的立场和角度，立足“华人的角度”，力求客观、真实、深刻地报道新闻、还原事实真相。客观报道，深度分析，容纳、汇集不同的声音，是星岛环球网努力的方向和孜孜不倦的追求。</p>
					　　
					<p>星岛环球网充分利用全球资源，既提供重大时事新闻，使读者得以迅速了解和掌握世界的最新动态；也提供与读者有切身利益、息息相关的城市社区新闻，使读者得以了解自己身边发生的事情。为了强化新闻的深度和思想性，在新闻板块还安排了阵势强大的言论频道，汇集海内外各主要媒体的社论和评论，为读者提供更为丰富和广阔的视角，让不同的声音、不同的观点得以集中、丰富的展示。与此同时，星岛环球网每天还提供相当数量的新闻专题，对新闻热点进行深度分析，提供有思想、有价值的报道。</p>
					　　
					<p>文化，体现着人类的共性特征，也体现着不同文化间的个性差异。星岛环球网突出文化特质，充分反映中华文化的源远流长、博大精深，反映人类各不同文化间的共性和差异，反映主流文化和非主流文化的丰富多样性，为读者提供有文化品位、文化特色的资讯内容，展示我们所赖以生存的这个世界的五彩缤纷。这一点，让我们与众不同。</p>
					　　
					<p>这样的理想和理念，是我们前行的动力，也是我们高举的火炬。强大的资源优势和我们的精干团队是实现这一理想的有力保障。</p>
				 </div>				 
			 </el-col>
			 <el-col :span="8" :xs="24" :sm="24" :md="8" :lg="8">
				 <div class="contact-content-left">
					 <p>星耀网络技术（深圳）有限公司工商信息</p>
					 <p>深圳市福田区车公庙工业区206栋7层东707房</p>
					 <p>联系人：罗小姐</p>
					 <p>电话：0531-88806969/13370581312</p>
					 <p>传真：0531-88806969</p>
					 <p>邮箱：hm@stnn.cc</p>
				 </div>				 
			 </el-col>
			 <el-col :span="16" :xs="24" :sm="24" :md="16" :lg="16">
				 <div class="contact-content-right">
				  <baidu-map class="ditu" :center="{lng:114.033880, lat:22.5378}" :zoom="20"><!-- 地图中心位置，和比例 -->
					<bm-marker :position="markerPoint" :dragging="true" @click="infoWindowOpen">
					   <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">深圳市福田区车公庙工业区206栋7层东707房</bm-info-window><!-- 默认显示地址框 --> 
					</bm-marker>
				  </baidu-map>
				 </div>	 				 		 
			 </el-col>
		 </el-col>
		 <el-col :span="1"></el-col>
	 </el-row>



		
	</div>
</template>

<script>
export default {
  data () {
    return {
      show: true,
			markerPoint:{lng:114.033900, lat:22.537850}
    }
  },
  methods: {
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    }
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
  .contact{
    height: auto;
    margin: 0 auto;
    max-width: 1400px;
    margin-bottom: 50px;
	padding-bottom: 20px;
    background-color: white;
  }
  .contact-title{
    width: 100%;
    height: 60px;
    line-height: 60px;
    color:orangered;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    background-color: white;
    border-bottom:1px solid #FF6633;
  }
  
  .contact-content-center{
	height: auto;
	text-align: left;
	font-size: 1.3rem;
  }
  .contact-content-center p{
	height: auto;
	line-height: 40px;
	padding-bottom: 20px;
	text-indent: 2em;
	text-align: left;
  }
  .contact-content-left  {
	width: 100%;
	padding: 20px;
	height: auto;
	margin: 0 auto;
	text-align: left;
	font-size: 1.3rem;
	border: 1px solid #FF8C00;
	box-shadow: 10px 10px 10px 2px rgba(0, 0, 0, .5);
	/* background-color: red; */
  }
  .contact-content-left p {
	  
  }  
  
  .ditu{
	margin-left:10px;
    width:100%;
    height:400px;
    border:#ccc solid 1px;
  }
 @media only screen and (max-width:990px) {
      .ditu{
        margin-left:0px;
     }
   }
</style>