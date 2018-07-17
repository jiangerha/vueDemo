<template>
  <div class="info-details-box">
    <div v-if="detailData.summary" >
        <header-bar :title="title"></header-bar>
        <div class="details-content" v-text="detailData.summary"></div>
    </div>
    <md-progress-spinner v-else :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>
<script>
  export default {
    name:'infoDetails',
    data(){
      return{
        detailData:{}
      }
    },
    created(){
      this._fetchData()
    },
    methods:{
      _fetchData(){
        this.$ajax.get('/api/movie/subject/' + this.$route.query.id).then(res =>{
          this.detailData = res.data;
        }).catch(err =>{
          console.log(err)
        })
      }
    },
    computed:{
      title(){
        return this.detailData.title
      }
    }
  }
</script>
<style lang="scss" scoped>
  .info-details-box{
    .details-content{
      padding: 1rem 1.5rem;
      text-align:left;
    }
    .md-progress-spinner{
      margin-top: 10rem;
    }
  }
  
</style>
