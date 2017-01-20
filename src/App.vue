<template>
  <div class="app-wrap">
    <router-view></router-view>
  </div>
</template>

<script>
  import 'vue-material/dist/vue-material.css'
  export default {
    name: 'app'
  }
</script>

<style>
  /*@import url('https://unpkg.com/vue-material@0.5.2/dist/vue-material.css');*/
  @import "assets/css/vue-material.css";
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic');
  @import url('https://cdn.bootcss.com/normalize/5.0.0/normalize.min.css');
  .app-wrap {
    position: relative;
    max-width: 750px;
    min-width: 320px;
    margin: 0 auto;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
  }
</style>
