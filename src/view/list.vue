<template>
  <div class="list-wrap">
    <topBar :title="getTitleStr(params.tab)"></topBar>
    <md-list>
      <md-list-item v-for="topic in topics">
        <div>
          <md-layout>
              <md-avatar>
                <img :src="topic.author.avatar_url">
              </md-avatar>
            <div class="md-list-text-container text-center">
              <span>
                <span>{{topic.author.loginname}}</span>
                <span style="text-align: right;"><b>{{topic.reply_count}}</b>/{{topic.visit_count}}</span>
              </span>
              <span>
                <span>Post: {{topic.create_at}}</span>
              </span>
            </div>
            <!--<small class="md-list-text-container text-center">-->
              <!--Reply:-->
            <!--</small>-->
          </md-layout>
          <md-layout>
            <p class="md-list-text-container">{{topic.title}}</p>
          </md-layout>
        </div>
        <md-divider class="md-inset"></md-divider>
      </md-list-item>
    </md-list>
  </div>
</template>
<script>
  import $ from 'n-zepto'
  import topBar from '../components/topBar.vue'
  import { baseUrl } from '../allApi'
  export default {
    name: 'list',
    data () {
      return {
        topics: [],
        SCROLL_LOCK: false,
        params: {
          page: 1,
          limit: 20,
          tab: 'all'
        }
      }
    },
    computed: {

    },
    components: {
      topBar
    },
    mounted () {
      if (this.$route.query && this.$route.query.tab) {
        this.params.tab = this.$route.query.tab;
      } else {
        this.params.tab = 'all';
      }
      this.getTopics();
      $(window).on('scroll', () => {
        this.getScrollData()
      })
    },
    methods: {
      getTitleStr (tab) {
        switch (tab) {
          case `all`: return '全部'
          case 'good': return '精华'
          case 'ask': return '问答'
          case 'job': return '招聘'
          case 'share': return '分享'
        }
      },
      getTopics () {
        $.get(baseUrl + '/topics', this.params, (response, status) => {
          this.topics = this.topics.concat(response.data);
          this.params.page += 1;
          this.SCROLL_LOCK = true
        })
      },
      getScrollData () {
        if (this.SCROLL_LOCK) {
          let totalheight = $(window).height() + $(window).scrollTop()
          if ($(document).height() <= totalheight + 200) {
//            console.log(totalheight, $(document).height());
            this.SCROLL_LOCK = false;
            this.getTopics()
          }
        }
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.query && to.query.tab) {
          this.params.tab = to.query.tab;
          this.params.page = 1;
          this.topics = []
        }
        this.getTopics()
      }
    }
  }
</script>

<style>
  .text-center {
   margin:auto;
  }
  .list-wrap {
    padding-top: 66px;
    overflow: auto;
  }
</style>
