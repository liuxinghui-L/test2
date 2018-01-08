<template>
	<div>
	<searchbar></searchbar>
	<ul>
		<router-link tag="li" to="" v-for="data in datalist" :key="data.id">
  			<h3>{{data.cinameName}}<span class="price">{{data.minPrice/100}}元起</span></h3>
  			<p>{{data.address}}</p>
		</router-link>
	</ul>

	</div>
</template>

<script>
import axios from "axios"
import router from '../router'
import searchbar from '@/components/common/searchbar'

export default {

  name: 'ticket',

  data () {
    return {
    	datalist:[],
      // Price:''
    }
  },
  components:{
    searchbar
  },
  mounted(){

  	// https://ticket-m.mtime.cn/api/proxy/ticket/OnlineLocationCinema/OnlineCinemasByCity.api?locationId=729&_=1515327203052
  
  	axios.get('/api/proxy/ticket/OnlineLocationCinema/OnlineCinemasByCity.api?locationId=729&_=1515327203052').then(res=>{
  		// console.log(res.data)
  		this.datalist = res.data

  	})  	
  }
}
</script>

<style lang="scss" scoped>
  li{
    background:#fff;
    height:2rem;
    border-bottom:1px solid #ccc;
    line-height:1rem;
    padding:.2rem;
  }
  .price{
    float:right;
    color:#f60;
  }

</style>