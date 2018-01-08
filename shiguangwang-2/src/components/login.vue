<template>
	<div class="box">
		<div class="input1"><i class="iconfont">&#xe61e;</i><input type="text" v-model="username" placeholder="手机号码"></div>
		<div class="input2"><i class="iconfont">&#xe714;</i><input type="password" v-model="password" placeholder="密码"></div>
		<button @click="login">登录</button>

		<!-- <button @click="register">注册</button> -->
		<div v-show="isshow">{{message}}</div>

      <div class="register">
         <router-link to="/register" tag="a">免费注册</router-link>
         <router-link to="" tag="a">找回密码</router-link>
     </div>
     <div class="san">
      <p>第三方登录</p>
       <i class="iconfont font1">&#xe61d;</i>
       <i class="iconfont font2">&#xe654;</i>
     </div>
	</div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {

  name: 'login',

  data () {
    return {
    	username:'',
    	password:'',
    	isshow:false,
    	message:''
    }
  },
  methods:{
  	login(){
  		axios.post('/apiA/login',{username:this.username,password:this.password}).then(res=>{
  			if(res.data.result){
  				router.push('/home')
  			}else{
  				this.isshow=true;
  				this.message=res.data.message
  			}

  		})
  	},
  	register(){
  		router.push('/register')
  	}
  }
}
</script>

<style lang="scss" scoped>
.box{
  text-align:center;
   .input1,.input2{
    background:#fff;
    padding-left:.5rem;
    .iconfont{
      font-size:20px;
    }
    input{
    width:6rem;
    border:0;
    height:1rem;
    line-height:1rem;
    padding-left:.3rem;
    border-bottom:1px solid #ccc;
     }
   }
  button{
    width:7rem;
    height:1.1rem;
    line-height:1.1rem;
    background:#1e7dd7;
    border:0;
    color:#fff;
    margin-top:.2rem;
  }
  a{text-decoration:none;}
  .register{
    a:nth-of-type(1){
      padding-left:.2rem;
      float:left;
    }
    a:nth-of-type(2){
      padding-right:.2rem;
      float:right;
    }
  }
  .san{
    width:100%;
    height:1.5rem;
    margin-top:.6rem;
    line-height:3;
    .font1,.font2{
      display:inline-block;
      width:1rem;
      height:1rem;
      line-height:1rem;
      background:#e82c00;
      border-radius:100%;
      font-size:.5rem;
      color:#fff;
    }
    .font2{
      background:#54c2ff;
    }

  }
 
}
</style>