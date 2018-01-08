<template>
	<div>
		<newnavbar></newnavbar>
		<router-view></router-view>
	</div>
</template>

<script>
import newnavbar from "@/components/common/newnavbar"
export default {

  name: 'new',

  data () {
    return {

    }
  },
  components:{
  	newnavbar
  }
}
</script>

<style lang="scss" scoped>

</style>