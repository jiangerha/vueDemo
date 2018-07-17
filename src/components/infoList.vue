<template>
  <div class="info-list-box">
    <list-header :title="title"></list-header>
    <ul v-if="infoList.length > 0" class="info-list">
      <router-link v-for="(item,i) in infoList" :key="i" tag="li" :to="{path:'/infoDetails',query:{id:item.id},params:{title:item.title}}">
        <div class="item-text">
          <p class="title" v-text="item.title"></p>
          <p class="descrip" v-text="item.alt"></p>
        </div>
        <div class="item-img">
          <img v-if="item.images" :src="item.images.small" @error="removeItem(i)"/>
        </div>
      </router-link>
    </ul>
    <md-progress-spinner v-else :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>
<script>
  export default {
    data () {
      return{
        title:'资讯',
        infoList:[]
      }
    },
    created(){
      this._fetchData()
    },
    methods:{
      _fetchData(){
        this.$ajax.get('/api/movie/in_theaters').then(res => {
          this.infoList = res.data.subjects;
        }).catch(err => {
          console.log(err)
        })
      },
      removeItem(i){
        this.$delete(this.infoList,i)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .info-list-box{
    .info-list{
      li{
        padding: 1rem 1.5rem;
        height: 10rem;
        box-sizing:border-box;
        border-bottom:1px solid #ececec;
        background:#fff;
        .item-text,.item-img{
          display: inline-block;
          height: 100%;
          overflow: hidden;
        }
        .item-text{
          width: 60%;
          float: left;
          position: relative;
          p{
            text-align:left;
            width:90%;
          }
          .title{
            font-size: 1.4rem;
            color: #333;
          }
          .descrip{
            position: absolute;
            bottom: 0;
            font-size: 1.2rem;
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .item-img{
          width: 30%;
          float: right;
          img{
          }
        }
      }
    }
  }
</style>