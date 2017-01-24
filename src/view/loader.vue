<template>
  <div class="main-content">
    <!--<h1>1000</h1>-->
    <div class="phone-viewport complete-example">
      <md-whiteframe md-tag="md-toolbar" md-elevation="2" md-theme="light-blue" class="md-large">
        <div class="md-toolbar-container">
          <md-button class="md-icon-button" @click="$refs.sidenav.toggle()">
            <md-icon>menu</md-icon>
          </md-button>

          <span style="flex: 1"></span>

          <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>view_module</md-icon>
          </md-button>
        </div>

        <div class="md-toolbar-container">
          <h2 class="md-title">My Files</h2>

          <md-button class="md-fab md-mini">
            <md-icon>add</md-icon>
          </md-button>
        </div>
      </md-whiteframe>

      <md-list class="md-double-line">
        <md-subheader class="md-inset">Folders</md-subheader>

        <md-list-item>
          <md-avatar class="md-avatar-icon">
            <md-icon>folder</md-icon>
          </md-avatar>

          <div class="md-list-text-container">
            <span>Photos</span>
            <p>Jan 9, 2014</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>info</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <md-avatar class="md-avatar-icon">
            <md-icon>folder</md-icon>
          </md-avatar>

          <div class="md-list-text-container">
            <span>Recipes</span>
            <p>Jan 17, 2014</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>info</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <md-avatar class="md-avatar-icon">
            <md-icon>folder</md-icon>
          </md-avatar>

          <div class="md-list-text-container">
            <span>Work</span>
            <p>Jan 28, 2014</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>info</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>

        <md-subheader class="md-inset">Files</md-subheader>

        <md-list-item>
          <md-avatar md-theme="blue" class="md-avatar-icon md-primary">
            <md-icon>insert_drive_file</md-icon>
          </md-avatar>

          <div class="md-list-text-container">
            <span>Vacation Itinerary</span>
            <p>Jan 20, 2014</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>info</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <md-avatar md-theme="orange" class="md-avatar-icon md-primary">
            <md-icon>collections</md-icon>
          </md-avatar>

          <div class="md-list-text-container">
            <span>Kitchen Remodel</span>
            <p>Jan 10, 2014</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>info</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <md-avatar md-theme="green" class="md-avatar-icon md-primary">
            <md-icon>view_list</md-icon>
          </md-avatar>

          <div class="md-list-text-container">
            <span>Grocery Shop</span>
            <p>Jan 10, 2014</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>info</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <md-avatar md-theme="orange" class="md-avatar-icon md-primary">
            <md-icon>collections</md-icon>
          </md-avatar>

          <div class="md-list-text-container">
            <span>Weekend Pictures</span>
            <p>Jan 10, 2014</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>info</md-icon>
          </md-button>
        </md-list-item>
      </md-list>

      <md-sidenav md-theme="blue" class="md-left" ref="sidenav">
        <md-toolbar class="md-account-header">
          <md-list class="md-transparent">
            <md-list-item class="md-avatar-list">
              <md-avatar class="md-large">
                <img src="https://placeimg.com/64/64/people/8" alt="People">
              </md-avatar>

              <span style="flex: 1"></span>

              <md-avatar>
                <img src="https://placeimg.com/40/40/people/3" alt="People">
              </md-avatar>

              <md-avatar>
                <img src="https://placeimg.com/40/40/people/4" alt="People">
              </md-avatar>
            </md-list-item>

            <md-list-item>
              <div class="md-list-text-container">
                <span>John Doe</span>
                <span>johndoe@email.com</span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>arrow_drop_down</md-icon>
              </md-button>
            </md-list-item>
          </md-list>
        </md-toolbar>

        <md-list>
          <md-list-item @click="$refs.sidenav.toggle()" class="md-primary">
            <md-icon>insert_drive_file</md-icon> <span>My files</span>
          </md-list-item>

          <md-list-item @click="$refs.sidenav.toggle()">
            <md-icon>people</md-icon> <span>Shared with me</span>
          </md-list-item>

          <md-list-item @click="$refs.sidenav.toggle()">
            <md-icon>access_time</md-icon> <span>Recent</span>
          </md-list-item>

          <md-list-item @click="$refs.sidenav.toggle()">
            <md-icon>start</md-icon> <span>Starred</span>
          </md-list-item>

          <md-list-item @click="$refs.sidenav.toggle()">
            <md-icon>delete</md-icon> <span>Trash</span>
          </md-list-item>
        </md-list>
      </md-sidenav>
    </div>
  </div>
</template>

<script>
  import topBar from '../components/topBar.vue'
  export default {
    name: 'main'
//    mounted () {
//      setTimeout(() => {
//        this.$router.replace({
//          name: 'list'
//        });
//        this.show = false
//      }, 1000)
//    }
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
//        list.fetchTopics();
//      }
//    }
  }
</script>

<style lang="scss">
  .complete-example {
    height: 540px;
    display: flex;
    flex-flow: column;
    position: relative;
    overflow: hidden;
    z-index: 1;

  .md-fab {
    margin: 0;
    position: absolute;
    bottom: -20px;
    left: 16px;
  }

  .md-title {
    color: #fff;
  }

  .md-list {
    overflow: auto;
  }

  .md-list-action .md-icon {
    color: rgba(#000, .26);
  }

  .md-avatar-icon .md-icon {
    color: #fff !important;
  }

  .md-sidenav .md-list-text-container > :nth-child(2) {
    color: rgba(#fff, .54);
  }

  .md-account-header {
  .md-list-item:hover .md-button:hover {
    background-color: inherit;
  }

  .md-avatar-list .md-list-item-container:hover {
    background: none !important;
  }
  }
  }
</style>
