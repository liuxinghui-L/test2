<template>
  <div id="app">
  <!--  <div>app</div> -->
 	<navbar></navbar> 	
   <router-view></router-view>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar'

export default {
  name: 'app',
  data(){
  	return{

  	}
  },
  components:{
  	navbar
  }
}
</script>

<style lang="scss">
body,h1,h2,h3,h4,h5,h6,p,img,a,ul,ol,li,dl,dt,dd,input,figure,figcaption{padding:0;margin:0}
ul,ol{list-style:none;}
header,footer,main,nav,aside,section,article,figure,figcaption{display:block;}
img{display:block;border:0}

input{outline:none;}

body{font-size:12px;color:#3e3e3e;font-family:"微软雅黑";background:#f6f6f6}

*{box-sizing:border-box;}
html,body{height:100%;}



</style>
