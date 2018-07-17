<template>
	<div id="home">
		<swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
		    <swiper-slide v-for="(banner,i) in banners" class="swiper-item" :key="i">
		    	<img :src="banner" :alt="['banner' + i]"/>
		    </swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		 </swiper>
		 <list :listData="operationList" class="operate-list"></list>
		 <list :listData="personlOperateList" class="personal-operate-list"></list>
		 <advisory></advisory>
		 <info-list></info-list>
	</div>
  
</template>

<script>
	import list from '@/components/list'
	import advisory from '@/components/advisory'
	import infoList from '@/components/infoList'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
	    data() {
	      return {
	      	banners:['http://img5.imgtn.bdimg.com/it/u=2919318337,953979730&fm=27&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=2689590675,3322691748&fm=27&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=780597502,862981777&fm=27&gp=0.jpg'],
	        swiperOption: {
	          direction: 'horizontal',
	          autoplay: {
                disableOnInteraction: false,
              },
	          speed:1000,
	          pagination: {
	            el: '.swiper-pagination',
	            clickable: true
	          }
	        },
	        operationList:[
	        	{
	        		icon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=884897413,2023273662&fm=27&gp=0.jpg',
							title:'预约挂号',
							url:'/registered'
	        	},{
	        		icon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=884897413,2023273662&fm=27&gp=0.jpg',
							title:'在线药房',
							url:'/pharmacy'
	        	},{
	        		icon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=884897413,2023273662&fm=27&gp=0.jpg',
							title:'慈善援助',
							url:'/assistance'
	        	},{
	        		icon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=884897413,2023273662&fm=27&gp=0.jpg',
							title:'找专家',
							url:'/experts'
	        	}
					],
					personlOperateList:[
						{
	        		icon:'http://img2.imgtn.bdimg.com/it/u=3406018163,1106537101&fm=15&gp=0.jpg',
							title:'用药提醒',
							url:''
	        	},{
	        		icon:'http://img2.imgtn.bdimg.com/it/u=3406018163,1106537101&fm=15&gp=0.jpg',
							title:'健康档案',
							url:''
	        	},{
	        		icon:'http://img2.imgtn.bdimg.com/it/u=3406018163,1106537101&fm=15&gp=0.jpg',
							title:'健康自测',
							url:''
	        	}
					]
	      }
	    },
	    mounted(){
	    	
	    },
	    computed:{
	    	swiper(){
	    		return this.$refs.mySwiper.swiper
	    	}
	    },
	    components:{
	    	swiper,
	    	swiperSlide,
				list,
				advisory,
				infoList
	    }
	  }
</script>

<style lang="scss">
#home{
	width: 100%;
	overflow-x: hidden;
	.swiper-box {
	    width: 100%;
	    height: 200px;
	    margin: 0 auto;
	    overflow-x: hidden;
	    .swiper-wrapper{
	    	height: 100%;
	    	.swiper-item {
			    text-align: center;
			    font-size: 38px;
			    font-weight: 700;
					background-color: #eee;
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-pack: center;
					-ms-flex-pack: center;
					justify-content: center;
					-webkit-box-align: center;
					-ms-flex-align: center;
					align-items: center;
				}
	    }
		}
		.operate-list{
			margin-bottom: .8rem;
		}
		.personal-operate-list{
			margin-bottom: 1rem;
			.md-layout-item{
				border-right: 1px solid #f7f7f7;
				&:last-child{
					border: none;
				}
				img{
					width: 3rem;
				}
			}
		}
}
</style>