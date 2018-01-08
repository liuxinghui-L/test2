<template>
	<!-- <nav>navbar</nav> -->
	<!-- <img src=""> -->

	<nav>
		
		<ul class="app-ul">
			<router-link to="/home" tag="li" class="logo">
				<img src="https://static1.mtime.cn/html5/20180103102928/images/2014/logo_mtime.png">
			</router-link>
	   		<router-link to="/home" tag="li" activeClass="active">首页</router-link>
	   		<router-link to="/ticket" tag="li" activeClass="active">购票</router-link>
	   		<!-- <router-link to="/mall" tag="li" activeClass="active">商城</router-link> -->
	   		<router-link to="/new" tag="li" activeClass="active">发现</router-link>
	   		<router-link to="/login" tag="i" activeClass="active" class="iconfont">&#xe61e;</router-link>
  		</ul>
	</nav>
</template>

<script>
export default {

  name: 'navbar',

  data () {
    return {

    }
  }
}
</script>

<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
.app-ul{
		width:100%;
		height:1rem;
		background:#1c2635;
		text-align:center;
		line-height:1rem;
		font-size:16px;
		color:#bbb;
		li{
			display:inline-block;
			padding:0 .2rem;
		}
		.active{
			font-weight:600;
			border-bottom:1px solid #fff;
			color:#fff;
		}
	}
	.logo{
		width:1.5rem;
		img{
			width:100%;
		}
	}

</style>
