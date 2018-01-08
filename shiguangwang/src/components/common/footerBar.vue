<template>
	<footer>
		<ul class="up">
			<router-link to="/home" tag="li">首页</router-link>
			<router-link to="/ticket" tag="li">购票</router-link>
			<router-link to="/mall" tag="li">商城</router-link>
			<router-link to="/new/news" tag="li">发现</router-link>
			<router-link to="/login" tag="li">我的</router-link>
		</ul>
		<ul class="center">
			<router-link to="" tag="li">PC版</router-link>
			<router-link to="" tag="li">客户端下载</router-link>
			<router-link to="" tag="li">意见反馈</router-link>
			<router-link to="" tag="li">帮助中心</router-link>
		</ul>
		<div class="bottom">
			<p><span>北京动艺时光网络科技有限公司</span></p>
			<p>
				<span>Copyright </span>
				<span class="copytime">2006-2018</span>
				<span> Mtime.com Inc. All rights reserved.</span>
			</p>
		</div>
	</footer>

</template>

<script>
export default {

  name: 'footerBar',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
footer{
	text-align:center;
	ul{
		display:flex;
		
		li{
			flex:1;
			bockground:#f00;
		}
	}
	.up{
		background:#fff;
		height:.8rem;
		line-height:.8rem;
		font-size:14px;
		color:#4c9dd6;
	}
	.center{
		height:.5rem;
		line-height:.5rem;
	}
	.bottom{
		color:#bbb;
	}
}
</style>