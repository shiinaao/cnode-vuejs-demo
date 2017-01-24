<template>
  <div class="top-bar">
    <div class="tool-bar">
      <md-toolbar>
        <div class="md-toolbar-container">
          <md-button class="md-icon-button" @click="$refs.LeftSidenav.toggle()">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1;">{{ className }}</h2>

          <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>view_module</md-icon>
          </md-button>
        </div>
      </md-toolbar>
    </div>
    <div class="side-div">
      <md-sidenav class="md-left" ref="LeftSidenav">
        <md-list>
          <md-list-item @click="$refs.LeftSidenav.toggle()">
            <md-icon>insert_drive_file</md-icon>
            <router-link
              :to="{ name:'list', query: {tab:'all'} }"
              tag="span"
              replace>全部</router-link>
          </md-list-item>

          <md-list-item @click="$refs.LeftSidenav.toggle()">
            <md-icon>grade</md-icon>
            <router-link
              :to="{ name:'list', query: {tab:'good'} }"
              tag="span"
              replace>精华</router-link>
          </md-list-item>

          <md-list-item @click="$refs.LeftSidenav.toggle()">
            <md-icon>share</md-icon>
            <router-link
              :to="{ name:'list', query: {tab:'share'} }"
              tag="span"
              replace>分享</router-link>
          </md-list-item>

          <md-list-item @click="$refs.LeftSidenav.toggle()">
            <md-icon>help</md-icon>
            <router-link
              :to="{ name:'list', query: {tab:'ask'} }"
              tag="span"
              replace>问答</router-link>
          </md-list-item>

          <md-list-item @click="$refs.LeftSidenav.toggle()">
            <md-icon>local_cafe</md-icon>
            <router-link
              :to="{ name:'list', query: {tab:'job'} }"
              tag="span"
              replace>招聘</router-link>
          </md-list-item>
        </md-list>
      </md-sidenav>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'topBar',
    props: [
      'className'
    ]
  }
</script>

<style>
  .tool-bar {
    position: fixed;
    top: 0;
    width: 100%;
  }
  .top-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /*height: 100%;*/
    z-index: 1;
  }
  .side-div {
    position: fixed;
    top: 66px;
    left: 0;
    height: 100%;
    /*width: 100%;*/
    /*z-index: 1;*/
  }

</style>
