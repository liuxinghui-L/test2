<template>
	<div v-if="filminfo">
		<div class="top">
				<dl>
					<dt><img :src="filminfo.image"></dt>
					<dd>
						<h2>{{filminfo.titleCn}}</h2>
						<p>{{filminfo.titleEn}}</p>
						<p>
							<span>{{filminfo.runTime}}</span>
							<span class="num" v-if="filminfo.rating <= 0" style="background:none;"></span>
							<span class="num" v-else>{{filminfo.rating}}</span>
						</p>
						<p><span>{{filminfo.type[0]}}</span>/<span>{{filminfo.type[1]}}</span></p>
						<p>{{filminfo.release.date}}{{filminfo.release.location}}上映</p>
						<div><span class="look">我想看</span><span class="code">我要评分</span></div>
					</dd>
				</dl>
				<h3>{{filminfo.commonSpecial}}</h3>
				<router-link to="" tag="h2" class="cha">查影讯/购票</router-link>
		</div>
		<p class="article">
			{{filminfo.content}}
		</p>
		<!-- <div class="zhoubian">
			<h3>电影周边</h3>

		</div> -->
		<div class="duanping">
			<h3>网友短评</h3>
			<ul>
				<!-- <li v-if="datalist == []"></li> -->
				<li v-for="data in datalist">
					<dl>
						<dt><img :src="data.caimg"></dt>
						<dd>
							<p class="p1">{{data.ca}}
								<span class="fen" v-if="data.cr<0" style="background:none"></span>
								<span class="fen" v-else>评分: {{data.cr}}</span>
							</p>
								<p>{{data.ce}}</p>
						</dd>
					</dl>
				</li>
				
			</ul>
		</div>
		<footerBar></footerBar>
	</div>
</template>

<script>
import axios from 'axios'
import router from "../router";
import { Indicator } from 'mint-ui';


import footerBar from '@/components/common/footerBar'

export default {

  name: 'detail',

  data () {
    return {
    	filminfo:null,
    	datalist:[]
    }
  },
  components:{
  	footerBar,
  },
  mounted(){
  	Indicator.open();
  	// https://m.mtime.cn/Service/callback.mi/movie/Detail.api?movieId=227232&locationId=292&t=2018169274719080
  	axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.$route.params.id}&locationId=292&t=2018169274719080`).then(res => {
  		// console.log(res.data)
  		this.filminfo = res.data
  		
  	})
  // https://m.mtime.cn/Service/callback.mi/Showtime/MovieComments.api?movieId=211981&pageIndex=1&t=20181613331366348
  	axios.get(`/Service/callback.mi/Showtime/MovieComments.api?movieId=${this.$route.params.id}&pageIndex=1&t=20181613331366348`).then(res =>{
  		// console.log(res.data.cts)
  		this.datalist = res.data.cts

  	})
  	// https://m.mtime.cn/Service/callback.mi/movie/Detail.api?movieId=253932&locationId=292&t=20181614332351425
  	// https://m.mtime.cn/Service/callback.mi/movie/Detail.api?movieId=253932&locationId=292&t=2018161442451951


  	Promise.all([axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.$route.params.id}&locationId=292&t=2018169274719080`),axios.get(`/Service/callback.mi/Showtime/MovieComments.api?movieId=${this.$route.params.id}&pageIndex=1&t=20181613331366348`)]).then(res =>{
  		Indicator.close();
  	})
  }
}
</script>

<style lang="scss" scoped>
img{
	width:2rem;
}
.top{
	height:4.5rem;
	background:#fff;
	dl{
		padding:.1rem;
		display:flex;
		dt{
			flex:1;

		}
		dd{
			line-height:0.4rem;
			flex:3;
			padding-left:.2rem;
			.num{
				display:inline-block;
				height:.4rem;
				line-height:.4rem;
				padding:0 .02rem;
				margin-left:.2rem;
				background:#659d0e;
				color:#fff;
				}
				.look,.code{
					display:inline-block;
					width:1.8rem;
					text-align:center;
					height:.5rem;
					line-height:.5rem;
					border-radius:.5rem;
					
				}
				.look{
					margin-right:.2rem;
					border:1px solid #3e3e3e;
					color:#3e3e3e;
				}
				.code{
					border:1px solid #659d0e;
					color:#659d0e;
				}
			}
	}
	h3{
		color:#ff8600;
		text-align:center;
	}
	.cha{
		background:#ff8600;
		width:7rem;
		height:.8rem;
		line-height:.8rem;
		
		text-align:center;
		color:#fff;
		border-radius:.8rem;
		margin:.1rem auto;

	}

}
.article{
	background:#fff;
	margin-top:.2rem;
	font-size:15px;
}
.zhoubian{
	background:#fff;
	margin-top:.2rem;
}
.duanping{
	background:#fff;
	margin-top:.2rem;
	li{
		height:3rem;
		padding:.2rem;
		dl{
			display:flex;
			dt{
				flex:1;
				width:.2rem;
				height:.2rem;

				img{
					width:100%;
					border-radius:100%;
				}			
			}
			dd{
				flex:8;
				padding-left:.3rem;
				.p1{
					console:#fff;
					.fen{
						display:inline-block;
						padding:0 .2rem;
						height:.3rem;
						line-height:.3rem;
						text-align:center;
						background:#659d0e;
						float:right;
						color:#fff;
					}
				}
			}
		}
	}
}
</style>