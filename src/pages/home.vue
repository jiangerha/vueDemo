<template>
	<div id="home">
		<swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
		    <swiper-slide v-for="banner in banners" class="swiper-item">
		    	<img :src="banner"/>
		    </swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		 </swiper>
		 <list :listData="operationList"></list>
	</div>
  
</template>

<script>
	import list from '@/components/list'
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
	        		icon:'menu',
	        		title:'预约挂号'
	        	},{
	        		icon:'menu',
	        		title:'在线药房'
	        	},{
	        		icon:'menu',
	        		title:'慈善援助'
	        	},{
	        		icon:'menu',
	        		title:'找专家'
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
	    	list
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
}
  
  
</style>
<!-- <template>
	<div id="home">
		<swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
		    <swiper-slide v-for="item in banners">
		    	<img :src="item"/>
		    </swiper-slide>
		    <<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script type="text/javascript">
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	const bannerImgs = ['http://img5.imgtn.bdimg.com/it/u=2919318337,953979730&fm=27&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=2689590675,3322691748&fm=27&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=780597502,862981777&fm=27&gp=0.jpg']
	export default {
		name:'home',
		data() {
	      return {
	      	banners:bannerImgs,
	      	swiperOption: {
	          pagination: {
	            el: '.swiper-pagination'
	          }
	        }
	      };
	    },
	    mounted(){
	    	setInterval(() => {
		        console.log('simulate async data')
		        if (this.bannersbannersbanners.length < 10) {
		          this.bannersbanners.push(this.banners.length + 1)
		        }
		      }, 3000)
	    },
	    methods: {
	      
	    },
	    components:{
	    	swiper,
	    	swiperSlide
	    }
	}	
</script>

<style lang="scss" scoped>

</style> -->