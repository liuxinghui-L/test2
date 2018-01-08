<template>
	<div id="box">
		
		<!-- <ul>
			<li v-for="data in datalist"> -->
				<!-- <span>
					 <img v-if="data.images.length==0" :src="data.image">
					 <img v-else v-for="list in data.images" :src="list.url1" class="list">
				</span> -->

				<!-- <div class="box1" v-if="data.images.length==0">
					<dl>			
					<dt><img :src="data.image"></dt>
					<dd><h2>{{data.title}}</h2></dd>
					</dl>					
				</div>

				<div class="box2" v-else v-for="list in data.images">
					
					<h2>{{data.title}}</h2>
					<span><img :src="list.url1"></span>
					
		
				</div> -->
				<!-- <h2>{{data.title}}</h2>
				<div class="box1" v-if="data.images.length==0">
					<dl>			
					<dt><img :src="data.image" style="width:100px;height:100px"></dt>
					<dd></dd>
					</dl>					
				</div>

				<div class="box2" v-else v-for="list in data.images">
					
					
					<span style="position:rel">
						<img :src="list.url1" style="">
					</span>
					
		
				</div> -->
				
		<!-- 	</li>
		</ul> -->
		<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0" infinite-scroll-immediate-check="false"
>
			<li v-for='data in datalist' class="box">
				<div v-if="data.images.length==0" class="one">
					<dl>
						<dt><img :src="data.image"></dt>
						<dd><h2>{{data.title}}</h2></dd>
					</dl>
				</div>
				<div v-else class="thr">
					<h2>{{data.title}}</h2>
					<ul>
						<li>
							<img v-for="l in data.images":src="l.url1">
						</li>
					</ul>
				</div>
			</li>
			<div>{{message}}</div>
		</ul>
	</div>


</template>

<script>
import axios from 'axios'
import { Indicator } from 'mint-ui';

export default {

  name: 'news',

  data () {
    return {
    	datalist:[], 
    	loading:false ,
    	current:1,
    	page:10, 	
    	message:"数据加载中……"	
    }
  },
 
  mounted(){

  	// 单张图片  http://img5.mtime.cn/mg/2017/07/19/103505.79149520.jpg
    // 一堆东西  http://m.mtime.cn/Service/callback.mi/News/NewsList.api?t=20181413281493615&pageIndex=1
    Indicator.open('奋力加载中...');
  	axios.get('/Service/callback.mi/News/NewsList.api?t=20181413281493615&pageIndex=1').then(res=>{
  		console.log(res)
  		this.datalist=res.data.newsList
  		Indicator.close();
  	})
  },


   methods:{
  	loadMore(){
  		this.current++;
  		if(this.current<=this.page){
  			axios.get(`/Service/callback.mi/News/NewsList.api?t=20181413281493615&pageIndex=${this.current}`).then(res=>{
  				console.log(res.data.newsList)
  				this.datalist=[...this.datalist,...res.data.newsList]
  			})
  		}else{
  			this.loading=true;
  			this.message="全部加载完成"
  		}
  	
  	}
  }

 


}
</script>

<style lang="css" scoped>

 .box {
	height: 3rem;
	
	border-bottom: 1px solid #ccc;
	margin-left: .3rem

}

 .box .one{
 	
 }

 .box .one dl{
 	height: 2rem;
 	padding-top: .5rem;
 	display: flex
 }

.box .one dl dt{
	height: 2rem;
	flex:1;
	overflow: hidden;
}
.box .one dl dt img{
	height: 2rem;
	width: 100%
}
.box .one dl dd{
	flex:2;
	margin-left: .2rem
}

.box .thr{

}

.box .thr h2{
	margin-top: .1rem
}
.box .thr ul{
	height: 2rem;
	margin-top: .1rem
}
.box .thr ul li{
	display: flex;
	box-sizing: border-box;
	height: 2rem;
	
}
.box .thr ul li img{
	flex:1;
	margin-right: .02rem;
	height: 100%;
	overflow: hidden;

}





/*li{
	
	padding: 10px;
	border-bottom: 1px solid #ccc;
	display: flex;
}
img{
	height: 90px;
	width: 90px;
	
}
.list{
	width: 33.33%;
	flex: 1;
	padding: 1px;

}*/
/*<!-- #box{
	padding-left: .3rem
}
li{
	height: 2.5rem;
	border-bottom: 1px solid #ccc
}*/


/* li{
	display:flex;
}
.box1{
	width:100%;
	dl{
		background:#f00;
		display:flex;
		dt{
			width:2rem;
			height:2rem;
			background:#ff0;
			
			img{
				height:100%;
			}
		}
		dd{
			background:#0ff;
			padding-left:.2rem;
		}
	}	
	
}
.box2{
	flex:1;
	display:inline-block;
	h2{
		width:100%;
		overflow:hidden;
	}

	span{
	display:block;	
	height:2rem;
	width:100%;
	overflow:hidden;
		img{
			width:100%;
		}
	}
	
} */

/*.box1{
	width:100%;
	dl{
		background:#f00;
		dt{
			width:2rem;
			height:2rem;
			background:#ff0;
			
			img{
				width:100%;
			}
		}
		dd{
			background:#0ff;
			padding-left:.2rem;
		}
	}	
	
}
.box2{
	width:2.5rem;
	height:2.5rem;
	display:inline-block;
	h2{
		width:100%;
		
	}
	span{
	display:block;	
	height:2rem;
	width:100%;
	overflow:hidden;
		img{
			width:100%;	
		}
	}
	
} -->*/

</style>