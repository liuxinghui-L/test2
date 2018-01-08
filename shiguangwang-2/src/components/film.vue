<template>
	<div>
		<searchbar></searchbar>
		<ul>
			<router-link tag="li" to="/film/hot" class="hot" activeClass="active">正在热映</router-link>
			<router-link tag="li" to="/film/coming" class="coming" activeClass="active">即将上映</router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
import searchbar from '@/components/common/searchbar'
export default {

  name: 'film',

  data () {
    return {

    }
  },
  components:{
  	searchbar
  }
}
</script>

<style lang="scss" scoped>
ul{
	display:flex;
	text-align:center;
	li{
		flex:1;
		height:.8rem;
		line-height:.8rem;
	}
	.active{
		background:#1c2635;
		color:#fff;
	}
}
</style>