<template>
  <div>
    <header-bar :title="headerTitle"></header-bar>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    mounted(){
      console.log(this.$route)
    },
    computed:{
      headerTitle(){
        return this.$route.name
      }
    },
    components:{
    }
  }
</script>
<style lang="scss" scoped>

</style>