<template>
	<div class="box">

		<div>用户名:<input type="text" v-model="username" class="input1" placeholder="请输入手机号"></div>
		<div>密码:<input type="password" v-model="password" class="input2" placeholder="6-20位字母,数字,下划线组成"></div>
    <p><input type="checkbox" checked class="input3">我已阅读并同意<router-link to="" tag="a">《Mtime时光网服务条款》</router-link></p>
		<button @click="register">注册</button>
		<div v-show="isshow">{{message}}</div>
		<!-- <div @click="login">登录页面</div> -->
     <router-link to="/register" tag="a" class="a2">跳转至登录页面</router-link>
	</div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {

  name: 'register',

  data () {
    return {
    	username:'',
    	password:'',
    	isshow:true,
    	message:""
    }
  },
  methods:{
  	register(){

      var reg1 = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
      var input1 = document.querySelector('.input1').value;


      var reg2 =/^\w{6,20}$/;
      var input2 = document.querySelector('.input2').value; 
      if(!reg1.test(input1) == true || !reg2.test(input2) == true){
        // console.log('ssssi')
          this.message="用户名或密码错误"
      }else{
       axios.post('/apiA/register',{username:this.username,password:this.password}).then(res=>{
        if(res.data.result){
          router.push('/login')
        }else{
          this.isshow=true;
          this.message=res.data.message
        }
      })
      }
    }

  	// login(){
  	// 	router.push('/login')
  	// }
  }
}
</script>

<style lang="scss" scoped>
  .box{
    background:#fff;
    text-align:center;
    .input1,.input2{
      width:6rem;
      border:0;
      height:1rem;
      line-height:1rem;
      padding-left:.3rem;
      border-bottom:1px solid #ccc;
    }
    p{
      padding:.2rem .2rem;
    }
    a{text-decoration:none;}
    .a2{
      float:left;
      padding-left:.2rem;
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
  }
</style>