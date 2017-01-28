<template>
  <div class="main-content">
    <h1>1000</h1>
  </div>
</template>

<script>
  import topBar from '../components/topBar.vue'
  export default {
    name: 'main',
    mounted () {
      setTimeout(() => {
        this.$router.replace({
          name: 'list'
        });
        this.show = false
      }, 1000)
    }
  }
</script>

<style lang="scss">

</style>
