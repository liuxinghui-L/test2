<template>
	<div id="hot">
		<dl v-for="(data,index) in datalist" @click="handleClick(data.id)" :key="data.id">
			<dt><img :src="data.img"></dt>
			<dd>
				<h3>{{data.tCn}}
					<!-- 评分ok -->
					<span v-if="data.r < 0"></span>
					<span class="code" v-else>{{data.r}}</span>
				</h3>

				<!-- 简介说明 -->
				<div class="cen">
				<p class="up">{{data.commonSpecial}}</p>

				
					<!-- 3D 效果 -->
					<span v-if="data.is3D == true" v-for="list in data.versions" class="center">{{list.version}}</span>
					<span v-else></span>
			
					</div>
				<div class="bottom">
					<span class="one"><span>{{data.cC}}</span>家影院上映<span>{{data.NearestShowtimeCount}}</span>场</span>
					<router-link to="" tag="p" class="two">购票</router-link>
				</div>
					
			</dd>
		</dl>
		<!-- <div>{{message}}</div> -->
	</div>
</template>

<script>
import axios from 'axios';
import router from '../router';
import { Indicator } from 'mint-ui';

export default {

  name: 'hot',

  data () {
    return {
    	
    	isShow:true,
    	datalist:[],
    	current:1,
    	page:10,
    	message:'数据加载中......'
    }
  },
  methods:{
  	handleClick(index){
  		router.push(`/detail/${index}`)
  	}
  	// loadMore(){
  	// 	this.current++;
  	// 	if(this.current <= this.page){
  	// 	axios.get(`/Service/callback.mi/Showtime/LocationMovies.api?locationId=292&t=2018159311532252&page=${this.current}`).then(res=>{
  	// 	// console.log(res.data);
  	// 	console.log(res.data.ms);
  	// 	this.datalist = [...this.datalist,...res.data.ms]
  	// 		})
  	// 	}else{
  	// 		this.loading = true;
  	// 		this.message ="全部加载完成"
  	// 	}
  	// }
  },

  mounted(){
  	Indicator.open();
  	// https://m.mtime.cn/Service/callback.mi/Showtime/LocationMovies.api?locationId=292&t=2018159311532252
  	
  	axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=292&t=2018159311532252&page=1').then(res=>{
  		// console.log(res.data);
  		console.log(res.data.ms);
  		this.datalist = res.data.ms
  		Indicator.close();
  	})
  }
}
</script>

<style lang="scss" scoped>

#hot{
	
	dl{
		display:flex;
		height:3.5rem;
		padding:.2rem;
		background:#fff;
		border-bottom:1px solid #ccc;

		dt{
			flex:1;
			height:3.2rem;
			
			img{
				width:100%;
				height:100%;
				padding:.2rem;
				}
		}
		dd{
			flex:2;
			h3{
			font-size:14px;
			height:.5rem;
			line-height:.5rem;
			.code{
				margin-left:.02rem;
				font-weight:200;
				color:#fff;
				background:#659d0e;
				padding:0 .12rem;
				}
			}
			.cen{
				height:1.5rem;
				.up{
					color:#659d0e;
				}

				.center{
					display:inline-block;
					height:.5rem;
					line-height:.5rem;
					border:1px solid #ccc;
					padding:.05rem;
					margin:.05rem;
					color:#659d0e;				
				}
			}
			.bottom{
				height:.5rem;
			
				margin-top:.4rem;
			
				.one{
					line-height:.8rem;
					color:#ccc;

				}
				.two{
					display:inline-block;
					vertical-align:bottom;
					width:1.5rem;
					height:.7rem;
					text-align:center;
					line-height:.7rem;
					border-radius:.3rem .3rem;
					background:#ff8600;
					color:#fff;
					float:right;
					margin-right:.2rem;

				}
			}
		}
	}
}
</style>