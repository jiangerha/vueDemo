<template>
  <ul class="advisory-list">
    <li>
      <div>
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3274364543,2140105331&fm=27&gp=0.jpg"/>
        <div class="item-text">
          <p class="orange_text">快问快答</p>
          <p class="descrip">快速问诊 及时响应</p>
        </div>
      </div>
      <div>
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3274364543,2140105331&fm=27&gp=0.jpg"/>
        <div  class="item-text">
          <p class="yellow_text">用药咨询</p>
          <p class="descrip">慈善赠药 讯息汇总</p>
        </div>
      </div>
    </li>
    <li>
        <div>
          <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3274364543,2140105331&fm=27&gp=0.jpg"/>
          <div  class="item-text">
            <p class="blue_text">找专家</p>
            <p class="descrip">三甲名医 在线服务</p>
          </div>
        </div>
    </li>
  </ul>
</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>
<style lang="scss" scoped>
  .advisory-list{
    height: 20rem;
    margin-bottom:1rem;
    li{
      width:50%;
      height: 100%;
      float: left;
      background:#fff;
      font-size:1.4rem;
      color:#999;
      &:first-child{
        border-right: 1px solid #ececec;
        >div{
          height: 10rem;
          &:first-child{
            height: 9.9rem;
            border-bottom: 1px solid #ececec;
          }
          img{
            width: 6rem;
            margin: 1.4rem 0;
          }
          img,div{
            float: left;
          }
          .item-text{
            margin: 3rem .5rem;
          }
        }
      }
      .descrip{
        font-size: 1.2rem;
      }
      .orange_text{
        color: orange;
      }
      .yellow_text{
        color: yellow;
      }
      .blue_text{
        color: blue;
      }
    }
  }
</style>