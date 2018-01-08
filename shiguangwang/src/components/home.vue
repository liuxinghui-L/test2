<template>
	<div id="home">
		<searchbar></searchbar>
		<section class="sectionTop">
			<router-link tag="div" to="/film/hot" class="hot">正在热映<i>&gt;</i></router-link>
			<ul>
				<li v-for="(data,indx) in datalist">
					<img :src="data.img" @click="handleClick(data.id)">
					<p>{{data.tCn}}</p>
				</li>
			</ul>

			<router-link tag="div" to="/film/coming" class="coming">即将上映<i>&gt;</i></router-link>
		</section>

		<section class="sectionBottom">
			<h2 class="day">今日热点</h2>
			<dl  v-for="data in datalist2">
				<dt><img :src="data.img"></dt>
				<dd>
					<h2>{{data.title}}</h2>
					<p>{{data.desc}}</p>
					<!-- <p>{{data.publishTime}}</p> -->
				</dd>
			</dl>
		</section>
		<footerBar></footerBar>

	</div>
	
</template>

<script>
import axios from "axios"
import router from '../router'
import searchbar from '@/components/common/searchbar'
import footerBar from '@/components/common/footerBar'
import {Indicator} from 'mint-ui';

export default {

  name: 'home',

  data () {
    return {
    	datalist:[],
    	datalist2:[]
    }
  },
  components:{

    searchbar,
    footerBar,
  },
   methods:{
  	handleClick(index){
  		router.push(`/detail/${index}`)
  	}

  },
  mounted(){
  	Indicator.open();
  	//地址 https://ticket-m.mtime.cn/api/proxy/ticket/Showtime/HotCitiesByCinema.api?_=1515051096590
  	// https://m.mtime.cn/Service/callback.mi/Showtime/LocationMovies.api?locationId=292&t=20181320181534039
  	
  	axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=292&t=20181320181534039').then(res=>{ 		
  		// console.log(res.data)
  		this.datalist = res.data.ms
  	}),
  	// https://m.mtime.cn/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2018141092732065
  	axios.get('/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2018141092732065').then(res=>{
  		console.log(res.data)
  		this.datalist2 = res.data.hotPoints
  	})
  	Promise.all([axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=292&t=20181320181534039'),axios.get('/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2018141092732065')]).then(res =>{
  		Indicator.close();
  	})

  }
}
</script>

<style lang="scss" scoped>
#home{


	.sectionTop{
		background:#fff;
		.hot,.coming{
			height:.8rem;
			line-height:.8rem;
			margin:0 .3rem;
			font-size:14px;
			i{
				float:right;

			}

		}
		.coming{
				border-top:1px solid #ccc;
			}
		ul{
			display:flex;
			flex-wrap:wrap;
			height:8rem;
			overflow:hidden;
			li{
				flex:1.8rem;
				height:3.8rem;
				padding:.2rem .1rem;
				margin-top:.2rem;
				img{
					height:2.7rem;		
				}
				p{
					padding:.1rem;
				}
			}
		}

	}
	.sectionBottom{
		background:#fff;
		margin-top:.3rem;
		padding:0 .3rem;
		.day{
			padding-left:.2rem;
			padding-top:.1rem;
		}
		dl{
			display:flex;
			padding:.3rem;
			border-bottom:1px solid #ccc;
			dt{
				flex:1;
				img{
					width:100%;
				}
			}
			dd{
				flex:1;
				padding-left:.2rem;
				
				p{
					line-height:1.7;
				}
			}
		}
	}
}
</style>