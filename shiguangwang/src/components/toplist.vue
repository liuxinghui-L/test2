<template>
	<div>
		<!-- <div>
			<img src="data.imageUrl">
			<span>{{data.title}}</span>
		</div> -->
		<!-- <ul>
			<li v-for='data in datalist'>
				<img :src="data.imageUrl">
			    <span>{{data.title}}</span>
			</li>
		</ul> -->


		<div id="box1">
			<dl>
				<dt><img src="../assets/2.png"></dt>
				<dd class="ccc">时光Top100</dd>			
			</dl>
			<dl>
				<dt><img src="../assets/3.png"></dt>
				<dd class="xxx">华语Top100</dd>
			</dl>
			<dl>
				<dt><img src="../assets/4.png"></dt>
				<dd class="zzz">全球票房榜</dd>
			</dl>
		</div>
	</div>
</template>

<script>

import axios from 'axios'
export default {

  name: 'toplist',

  data () {
    return {
    	datalist:[]
    }
  },

  mounted(){
  		//图片 https://m.mtime.cn/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20181510441112509
  	axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20181510441112509').then(res=>{
  			
  			this.datalist = res.data.topList
  			console.log(res.data.topList)

  	})

  }
}
</script>

<style lang="css" scoped>

#box1{
	 
	height: 4rem;
	overflow: hidden;
	display: flex
}
#box1 dl{
	box-sizing:border-box;
	height: 3rem;
	
	margin-top: .4rem;
	padding-left: .4rem ;
	padding-top: .5rem;
	flex:1;

}

#box1 dt{
	
}

#box1 img{
	height: 1.3rem;
	margin:auto;
}

#box1 dd{
	margin-top: .3rem;
	font-size: 14px;
	text-align: center;
	
}

#box1 .ccc{
	color: #1498c9
}
#box1 .xxx{
	color: #3bc7c2
}
#box1 .zzz{
	color: #ffc12d
}
</style>