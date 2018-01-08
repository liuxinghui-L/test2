import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Homecomponent from '@/components/home'
import Filmcomponent from '@/components/film'
import Ticketcomponent from '@/components/ticket'
import Newcomponent from '@/components/new'
import Mallcomponent from '@/components/mall'
import Logincomponent from '@/components/login'
import Registercomponent from '@/components/register'
import Hotcomponent from '@/components/hot'
import Comingcomponent from '@/components/coming'
import Detailcomponent from '@/components/detail'


import Newscomponent from '@/components/news'
import Trailercomponent from '@/components/trailer'
import Toplistcomponent from '@/components/toplist'
import Reviewcomponent from '@/components/review'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      component: Homecomponent
      
    },
    {
      path:'/detail/:id',
      component: Detailcomponent
    },
    {
      path:'/film',
      component:Filmcomponent,
      children:[
        {
          path:'hot',
          component:Hotcomponent
        },
        {
          path:'coming',
          component:Comingcomponent
        }
      ]
    },
    {
    	path:'/ticket',
    	component:Ticketcomponent
    },
    {
    	path:'/mall',
    	component:Mallcomponent
    },
    {
    	path:'/new',
    	component:Newcomponent,
        	children:[
              {
                path:'news',
                component:Newscomponent

              },
        	    {
        	path:'trailer',
        	component:Trailercomponent
        },
        {
        	path:'toplist',
        	component:Toplistcomponent
        },
        {
        	path:'review',
        	component:Reviewcomponent
        },
        {
          path:'/new',
          redirect:'/new/news'
        }
        	]
        
    },

    {
    	path:'*',
    	redirect:"/home"
    },
    {
    	path:'/login',
    	component:Logincomponent
    },
    {
    	path:'/register',
    	component:Registercomponent
    }
  ]
})

export default router;
