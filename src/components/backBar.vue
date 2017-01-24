<template>
  <div class="backBar">
    <md-toolbar>
      <md-button class="md-icon-button" @click="backHandle()">
        <md-icon>arrow_back</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">default</h2>

      <!--<md-button class="md-icon-button">-->
      <!--<md-icon>favorite</md-icon>-->
      <!--</md-button>-->
    </md-toolbar>
  </div>
</template>
<script>
  export default {
    name: 'backBar',
    methods: {
      backHandle () {
        this.$router.back()
      }
    }
  }
</script>
<style scoped>
  .backBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }
</style>

