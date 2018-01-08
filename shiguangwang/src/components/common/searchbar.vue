<template>
	<nav>
		<span>地址<i class="iconfont">&#xe647;</i></span>
		<div>
			<i class="iconfont">&#xe629;</i>
			<input type="text" name="search" placeholder="影片/影院/影人,任你搜">
		</div>
	</nav>
</template>

<script>
export default {

  name: 'searchbar',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	nav{
		width:100%;
		height:1rem;
		line-height:1rem;
		border-bottom:1px solid #ccc;
		background:#f6f6f6;
		span{
			flex:.2rem;
			margin-left:.2rem;
		}
		div{
			height:.6rem;
			line-height:.6rem;
			margin-top:.2rem;
			float:right;
			width:70%;
			margin-right:.8rem;
			border:1px solid #ccc;
			border-radius:.2rem .2rem .2rem .2rem;
			background:#fff;
			input{
				border:0;
			}

		}
	}

</style>