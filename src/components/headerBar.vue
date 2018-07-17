<template>
    <md-toolbar class="header-bar">
      <md-button class="md-icon-button" @click="$router.back(-1);">
        <md-icon>navigate_before</md-icon>
      </md-button>
      <h3 class="md-title" style="flex: 1">{{title}}</h3>
    </md-toolbar>
</template>
<script>
  export default {
    props:{
      title:{
        required:true,
        type:String
      }
    },
    data(){
      return{

      }
    }
  }
</script>
<style lang="scss" scoped>
  .header-bar{
    box-shadow: unset;
    border-bottom: 1px solid #ececec;
    .md-icon-button{
      position: absolute;
    }
    .md-icon{
      font-size: 4rem!important;
      color:#666;
    }
    .md-title{
      margin: 0!important;
      font-size: 1.6rem;
      font-weight: normal;
    }
  }
</style>