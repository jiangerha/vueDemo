<template>
  <div class="list-header">
    <span class="title">{{title}}</span>
    <a class="more" href="javascript:;">更多&gt;</a>
  </div>
</template>
<script>
  export default {
    props:{
      title:{
        required:true,
        type:String
      }
    },
    data (){
      return{

      }
    }
  }
</script>
<style lang="scss" scoped>
  .list-header{
    height: 3rem;
    font-size: 1.6rem;
    background: #fff;
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
    padding: 0 1.5rem;
    .title{
      display: inline-block;
      line-height:1.6rem;
      border-left: 2px solid #5dadf7;
      float: left;
      margin:7px 0;
      padding-left:.5rem;
    }
    .more{
      display: inline-block;
      font-size: 1.2rem;
      line-height: 1.2rem;
      color: #999;
      margin: .9rem 0;
      float: right;
    }
  }
</style>