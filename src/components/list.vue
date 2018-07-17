<template>
	<div class="md-layout md-gutter">
		<router-link v-for="(item,i) in listData" class="md-layout-item item-box" tag="div" :to="item.url" :key="i">
				<img :src="item.icon"/>
	    	<p class="item-title">{{item.title}}</p>
		</router-link>
	 </div>
</template>
<script>
	export default {
		props:{
			listData:{
				required:true,
				type:Array
			}
		},
		data(){
			return{

			}
		}
	}
</script>
<style lang="scss" scoped>
	.md-layout{
		border-bottom: 1px solid #ececec;
		border-top: 1px solid #ececec;
		background: #fff;
		.md-layout-item{
			padding:1rem 0;
			img{
				width: 55%;
				margin-bottom: .5rem;
			}
			.item-title{
				font-size: 1.4rem;
				letter-spacing: 0.05rem;
				color: #444;
			}
		}
	}
</style>