<template>
	<div id="layout" :style="{height:fullHeight,widh:fullWidth}">
		<md-content>
			<scroll class="scroll-box">
					<router-view/>
			</scroll>
		</md-content>
		<footer class="footer-bar">
			<md-bottom-bar md-sync-route>
					<md-bottom-bar-item to="/home" md-label="首页" md-icon="home"></md-bottom-bar-item>
					<md-bottom-bar-item to="/message" md-label="消息" md-icon="message"></md-bottom-bar-item>
					<md-bottom-bar-item to="/user" md-label="我的" md-icon="person"></md-bottom-bar-item>
			</md-bottom-bar>
		</footer>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'layout',
		data() {
	      return {
	      	fullWidth:document.documentElement.clientWidth,
	      	fullHeight:document.documentElement.clientHeight,
	      };
	    },
	    mounted(){
	    },
	    methods: {
	      
	    }
	}	
</script>
<style lang="scss" scoped>
#layout{
	.md-content{
	    position: absolute;
	    width:100%;
	    height: 100%;
	    padding-bottom: 57px;
			background:#f7f7f7;
			.scroll-box{
				height: 100%;
			}
	}
	.footer-bar{
	    position: absolute;
	    width: 100%;
	    bottom: 0;
	    border-top: 1px solid #eee;
	    .md-bottom-bar{
	      background: #f7f7f7;
	      .md-bottom-bar-item{
	        color:#ccc;
	      }
	      .md-active{
	        color: #448AFF;
	      }
	    }
	  }
}
</style>