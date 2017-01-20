<template>
  <div class="main-content">
    <h1>1000</h1>
    <!--<topBar></topBar>-->
    <!--<list></list>-->
  </div>
</template>

<script>
  import topBar from '../components/topBar.vue'
  export default {
    name: 'main',
    mounted () {
      setTimeout(() => {
        this.$router.push({
          name: 'list'
        });
        this.show = false
      }, 1000)
    }
//    components: {
//      topBar, list
//    },
//    mounted () {
//      if (this.$route.query && this.$route.query.tab) {
//        this.tab = this.$route.query.tab;
//        sessionStorage.setItem('current_tab'. this.$route.query.tab)
//      } else {
//        this.tab = 'all';
//        sessionStorage.setItem('current_tab', 'all')
//      }
//    },
//    watch: {
//      $route: (to, from) => {
//        if (to.query && to.query.tab) {
//          list.params.tab = to.query.tab;
//          sessionStorage.setItem('current_tab', to.query.tab)
//        }
//        list.getTopics();
//      }
//    }
  }
</script>

<style>
 /*.main-content {*/
   /*position: relative;*/
   /*width: 100%;*/
 /*}*/
</style>
