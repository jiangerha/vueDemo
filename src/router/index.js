import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/pages/layout'
import home from '@/pages/home'
import message from '@/pages/message'
import user from '@/pages/user'
import registered from '@/pages/registered'
import infoDetails from '@/pages/infoDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
		path: '/layout',
	    name: 'layout',
	    component: layout,
	    children: [
	    	{
		    	path: '/home',
			    name: 'home',
					component: home
		    },
	    	{
		    	path: '/message',
			    name: 'message',
			    component: message
		    },
		    {
		    	path: '/user',
			    name: 'user',
			    component: user
		    }
		]
		},
		{
			name:'registered',
			path:'/registered',
			component:registered
		},
		{
			name:'infoDetails',
			path:'/infoDetails',
			component:infoDetails
		}
  ]
})
