<template>
  <div class="topBar">
    <md-toolbar>
      <div class="md-toolbar-container">
        <md-button class="md-icon-button" @click="$refs.LeftSidenav.toggle()">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title" style="flex: 1;">{{ title }}</h2>

        <md-button class="md-icon-button">
          <md-icon>search</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>view_module</md-icon>
        </md-button>
      </div>
    </md-toolbar>

    <md-sidenav class="md-left" ref="LeftSidenav">
      <!--<md-toolbar class="md-account-header">-->
        <!--<md-list class="md-transparent">-->
          <!--<md-list-item class="md-avatar-list">-->
            <!--<md-avatar class="md-large">-->
              <!--<img src="https://placeimg.com/64/64/people/8" alt="People">-->
            <!--</md-avatar>-->

            <!--<span style="flex: 1"></span>-->

            <!--<md-avatar>-->
              <!--<img src="https://placeimg.com/40/40/people/3" alt="People">-->
            <!--</md-avatar>-->

            <!--<md-avatar>-->
              <!--<img src="https://placeimg.com/40/40/people/4" alt="People">-->
            <!--</md-avatar>-->
          <!--</md-list-item>-->

          <!--<md-list-item>-->
            <!--<div class="md-list-text-container">-->
              <!--<span>John Doe</span>-->
              <!--<span>johndoe@email.com</span>-->
            <!--</div>-->

            <!--<md-button class="md-icon-button md-list-action">-->
              <!--<md-icon>arrow_drop_down</md-icon>-->
            <!--</md-button>-->
          <!--</md-list-item>-->
        <!--</md-list>-->
      <!--</md-toolbar>-->

      <md-list>
        <md-list-item @click="$refs.LeftSidenav.toggle()" class="">
          <md-icon>insert_drive_file</md-icon>
          <router-link
            :to="{ name:'list', query: {tab:'all'} }"
            tag="span"
          >全部</router-link>
        </md-list-item>

        <md-list-item @click="$refs.LeftSidenav.toggle()">
          <md-icon>grade</md-icon>
          <router-link
            :to="{ name:'list', query: {tab:'good'} }"
            tag="span">精华</router-link>
        </md-list-item>

        <md-list-item @click="$refs.LeftSidenav.toggle()">
          <md-icon>share</md-icon>
          <router-link
            :to="{ name:'list', query: {tab:'share'} }"
            tag="span">分享</router-link>
        </md-list-item>

        <md-list-item @click="$refs.LeftSidenav.toggle()">
          <md-icon>help</md-icon>
          <router-link
            :to="{ name:'list', query: {tab:'ask'} }"
            tag="span">问答</router-link>
        </md-list-item>

        <md-list-item @click="$refs.LeftSidenav.toggle()">
          <md-icon>local_cafe</md-icon>
          <router-link
            :to="{ name:'list', query: {tab:'job'} }"
            tag="span">招聘</router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
  export default {
    name: 'topBar',
    props: [
      'title'
    ]
  }
</script>

<style>
 .topBar {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 2;
 }
 .sideBar {
   position: fixed;
   /*top: 0;*/
   /*left: 0;*/
   height: 100%;
 }
  /*.md-sidenav-content {*/
    /*width: 250px;*/
  /*}*/
</style>
