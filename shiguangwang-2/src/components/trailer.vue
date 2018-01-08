<template>
	<div id="box">

		
		<ul>
			<li v-for='data in datalist'>
				<dl>
					<dt><img :src="data.coverImg"></dt>
					<dd>
						<h2>{{data.movieName}}</h2>
				        <p>{{data.summary}}</p>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>

<script>

import axios from 'axios'
export default {

  name: 'trailer',

  data () {
    return {
    	datalist:[]
    }
  },

  mounted(){
  	// https://m.mtime.cn/Service/callback.mi/PageSubArea/TrailerList.api?t=20181415464430274
  	axios.get('/Service/callback.mi/PageSubArea/TrailerList.api?t=20181415464430274').then(res=>{
  			console.log(res.data)
  			this.datalist=res.data.trailers

  	})

  }
}
</script>

<style lang="css" scoped>

#box{
	margin-left: .3rem;
	margin-right: .3rem
}

li{
	height: 2.5rem;
	border-bottom: 1px solid #ccc;
	display: flex
}


dl{
	margin-top: .25rem;
	width: 100%;
	height: 2.1rem;
	flex:1;
	
}

dt{
	float: left;
	width: 45%;
	height: 2.1rem;
	overflow: hidden;
	flex:1;
}

img{
	width: 100%;
	height: 100%
}

dd{
	
	height: 2.1rem;
	position: relative;
	overflow: hidden;
	flex:1;
}


h2{
	margin-left: .2rem
}

p{
	margin-left: .2rem;
	color:#ccc;	
	position: absolute;
	bottom: 0;
	left: 0
}

/*#box1{
	height:3rem;
	background:#f00;
	dl{
		background:#0ff;
		height:3rem;
		padding-top:.5rem;
		display:flex;

		dt{
			flex:1;
			padding-left:.4rem;
			img{
				height:1.3rem
			}
		}
		dd{
			flex:1;
			
		}

	}
}*/

</style>


