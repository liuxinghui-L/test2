<template>
	<div id="coming">
		<div class="concern">
			<h2>最受关注</h2>
			<ul>
				<li v-for="(data,index) in datalist" @click="handleClick(data.id)" :key="data.id">
					<p>{{data.rMonth}}月{{data.rDay}}日</p>
					<dl>
					
					<dt><img :src="data.image"></dt>
					<dd>
						<h3>{{data.title}}</h3>
						<p><span class="num">{{data.wantedCount}}</span>人想看-动作/冒险/喜剧</p>
						<p>导演:{{data.director}}</p>
						<p>演员:{{data.actor1}},{{data.actor2}}</p>
						
						<router-link to="" class="qian" v-if="data.isTicket == true" tag="span">超前预售</router-link>
						<router-link to="" class="yu" v-if="data.isVideo == true"  tag="span">预告片</router-link>

					</dd>
				 </dl>
				</li>
			</ul>
		</div>
		<div class="banner1">
			<img :src="bannerlist">
			<!-- <img v-for="list in bannerlist" v-if="list.typeName == '即将上映banner'" :src="list.url"> -->

		</div>

		<div class="bottom">
			<h2>即将上映</h2>
			<p class="p1">{{rMonth}}月</p>
			<ul class="ulTwo">
				<li v-for="(i,index) in looplist" class="liTwo">
					<p class="p2">{{i.rDay}}日</p>
					<dl @click=handleClick(i.id)>
					
					<dt><img :src="i.image"></dt>
					<dd>
						<h3>{{i.title}}</h3>
						<p><span class="num">{{i.wantedCount}}</span>人想看-动作/冒险/喜剧</p>
						<p>导演:{{i.director}}</p>
						<!-- <p>演员:{{i.actor1}},{{i.actor2}}</p> -->
						
						<router-link to="" class="qian" v-if="i.isTicket == true" tag="span">超前预售</router-link>
						<router-link to="" class="yu" v-if="i.isVideo == true"  tag="span">预告片</router-link>

					</dd>
				 </dl>
				</li>
			</ul>
		</div>
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
    	datalist:[],
    	bannerlist:[],
    	looplist:[],
    	rMonth:''
    }
  },
  methods:{
  	handleClick(index){
  		router.push(`/detail/${index}`)
  	}

  },

  mounted(){
  	Indicator.open();
  	// https://m.mtime.cn/Service/callback.mi/Movie/MovieComingNew.api?locationId=292&t=2018151445251810
  	axios.get('/Service/callback.mi/Movie/MovieComingNew.api?locationId=292&t=2018151445251810').then(res=>{
  		
  		// console.log(res.data.attention);
  		this.datalist = res.data.attention
  		this.looplist = res.data.moviecomings
  		// console.log(res.data.moviecomings)
  		this.rMonth = this.looplist[1].rMonth
  	})

  	// https://m.mtime.cn/Service/callback.mi/Advertisement/MobileAdvertisementInfo.api?locationId=292&t=20181520285993825
  	// https://m.mtime.cn/Service/callback.mi/Advertisement/MobileAdvertisementInfo.api?locationId=292&t=2018168481963151
  	axios.get('/Service/callback.mi/Advertisement/MobileAdvertisementInfo.api?locationId=292&t=2018168481963151').then(res=>{  		
  		// console.log(res.data.advList[2].url.length-4)
  		// this.bannerlist = res.data.advList
  		// this.bannerlist = res.data.advList[1].url.slice(0,res.data.advList[1].url.length-4)+'jpg'
  		// console.log(this.bannerlist) 

  		// 重新整理
  		this.bannerlist = res.data.advList;
  		console.log(this.bannerlist)
  		for(var i=0; i<this.bannerlist.length; i++){
  			// console.log(this.bannerlist[i])
  			var list = this.bannerlist[i]
  			// console.log(list.typeName)
  			// console.log(list.url)
  			if(list.typeName == '即将上映banner'){
  				// console.log(list.typeName)
  				this.bannerlist = list.url.slice(0,list.url.length-4)+'jpg'
  				// console.log(this.bannerlist)
  			}
  		}

  	})
  	Promise.all([axios.get('/Service/callback.mi/Movie/MovieComingNew.api?locationId=292&t=2018151445251810'),axios.get('/Service/callback.mi/Advertisement/MobileAdvertisementInfo.api?locationId=292&t=2018168481963151')]).then(res =>{
  		Indicator.close();
  	})

  }
}
</script>

<style lang="scss" scoped>
img{width:2rem;}

#coming{
	
	.concern{
		background:#fff;
		border-bottom:1px solid #ccc;
		padding:.2rem;
		h2{
			height:1rem;
			line-height:1rem;
		}
		ul{
			height:4rem;
			overflow:hidden;
			li{
				width:100%;

				dl{
					display:flex;
					padding-bottom:2rem;
					dt{
						flex:1;
					}
					dd{
						flex:2;
						line-height:1.5;
						p{
							.num{
								color:#ff8600; 
							}
						}
						.qian,.yu{
							margin-top:.2rem;
							width:1.7rem;
							height:.6rem;
							line-height:.6rem;
							text-align:center;
							border-radius:.3rem;
							
							display:inline-block;
						}
						.qian{
							background:#ff8600;
							color:#fff;
						}
						.yu{
							border:1px solid #6ca119;
							color:#6ca119;
						}
					}
				}

			}
		}
	}
	.banner1{
		width:100%;
		
		img{
			width:100%;
		}
	}
	.bottom{
		background:#fff;
		margin-top:.3rem;
		padding:.2rem;

		h2{
			height:.7rem;
			line-height:.7rem;
		}
		.p1{
			line-height:2;
			border-bottom:1px solid #ccc;
			
		}
		.ulTwo{
			
			.liTwo{
				display:flex;
				width:100%;
				border-bottom:1px solid #ccc;
				padding-top:.1rem;
				.p2{
					flex:1;
				}
				dl{
					flex:9;
					display:flex;
					padding-bottom:1rem;
					dt{
						flex:1;
					}
					dd{
						flex:2;
						line-height:1.5;
						p{
							.num{
								color:#ff8600; 
							}
						}
						.qian,.yu{
							margin-top:.2rem;
							width:1.7rem;
							height:.6rem;
							line-height:.6rem;
							text-align:center;
							border-radius:.3rem;
							
							display:inline-block;
						}
						.qian{
							background:#ff8600;
							color:#fff;
						}
						.yu{
							border:1px solid #6ca119;
							color:#6ca119;
						}
					}
				}

			}
		}

	}
}
</style>