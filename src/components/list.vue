<template>
	<div class="md-layout md-gutter">
	    <div v-for="item in listData" class="md-layout-item">
	    	<md-icon>{{item.icon}}</md-icon>
	    	<span>{{item.title}}</span>
	    </div>
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
<style lang-="scss" scoped>
	.md-layout{
		border-bottom: 1px solid #ececec;
		.md-layout-item{
			height: 100px;
		}
	}
</style>