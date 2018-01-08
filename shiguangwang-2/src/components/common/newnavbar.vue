<template>
	<nav>
		<ul>
			<router-link to="/new/news" tag="li" activeClass="active">新闻</router-link>
			<router-link to="/new/trailer" tag="li" activeClass="active">预告片</router-link>
			<router-link to="/new/toplist" tag="li" activeClass="active">排行榜</router-link>
			<router-link to="/new/review" tag="li" activeClass="active">影评</router-link>
		</ul>
	</nav>
</template>

<script>
export default {

  name: 'newnavbar',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
ul{
	height:1rem;
	width:100%;
	
	text-align:center;
	line-height:1rem;
	font-size:16px;
	li{
		display:inline-block;
		padding-left:.5rem;
		padding-right:.5rem;
		
	}
	.active{
			color:#00f;
			font-weight:bold
		}
}
</style>