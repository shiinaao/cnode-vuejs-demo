<template>
  <div class="list-wrap">
    <topBar :className="fetchTitleStr(params.tab)"></topBar>
    <div class="list-wrap2">
      <md-list>
        <md-list-item v-for="topic in topics">
          <router-link :to="{name:'topic',params:{tid:topic.id}}" tag="span">
            <div>
              <md-layout>
                <md-avatar>
                  <img :src="topic.author.avatar_url">
                </md-avatar>
                <div class="md-list-text-container text-center">
              <span>
                  <span>Author:{{topic.author.loginname}}</span>
              </span>
                  <span>
                  <span><b>Reply:{{topic.reply_count}}</b>/Visit:{{topic.visit_count}}</span>
              </span>
                </div>
              </md-layout>
              <md-layout>
                <p class="md-list-text-container">{{topic.title}}</p>
              </md-layout>
              <!--</router-link>-->
            </div>
          </router-link>
          <md-divider class="md-inset"></md-divider>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>
<script>
  import $ from 'n-zepto'
  import topBar from '../components/topBar.vue'
//  const baseURL = 'https://cnodejs.org/api/v1'
  import { baseURL } from '../utils'
  export default {
    name: 'listPage',
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
      // 如果从详情返回并且之前存有对应的查询条件和参数
      // 则直接渲染之前的数据
      if (window.window.sessionStorage.params && window.window.sessionStorage.tab === this.params.tab) {
        this.topics = JSON.parse(window.window.sessionStorage.topics);
        this.params = JSON.parse(window.window.sessionStorage.params);
        this.$nextTick(() => $(window).scrollTop(window.window.sessionStorage.scrollTop));
      } else {
        this.fetchTopics();
      }
//      this.fetchTopics();
      $(window).on('scroll', () => {
        this.fetchScrollData()
      })
    },
    methods: {
      fetchTitleStr (tab) {
        switch (tab) {
          case `all`: return '全部'
          case 'good': return '精华'
          case 'ask': return '问答'
          case 'job': return '招聘'
          case 'share': return '分享'
        }
      },
      fetchTopics () {
        $.get(baseURL + '/topics', this.params, (response, status) => {
          this.topics = this.topics.concat(response.data);
          this.params.page += 1;
          this.SCROLL_LOCK = true
        })
      },
      fetchScrollData () {
        if (this.SCROLL_LOCK) {
          let totalheight = $(window).height() + $(window).scrollTop()
          if ($(document).height() <= totalheight + 200) {
//            console.log(totalheight, $(document).height());
            this.SCROLL_LOCK = false;
            this.fetchTopics()
          }
        }
      },
      toTopic (tid) {
        this.$router.push({
          name: 'topicPage',
          params: {
            tid: tid
          }
        })
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.query && to.query.tab) {
          this.params.tab = to.query.tab;
          this.params.page = 1;
          this.topics = []
        }
        this.fetchTopics()
      }
    },
    beforeRouteLeave(to, from, next) {
      // 如果跳转到详情页面，则记录关键数据
      // 方便从详情页面返回到该页面的时候继续加载之前位置的数据
      if (to.name === 'topic') {
        // 当前滚动条位置
        window.window.sessionStorage.scrollTop = $(window).scrollTop();
        // 当前页面主题数据
        window.window.sessionStorage.topics = JSON.stringify(this.topics);
        // 查询参数
        window.window.sessionStorage.params = JSON.stringify(this.params);
        // 当前tab
        window.window.sessionStorage.tab = from.query.tab || 'all';
      }
      $(window).off('scroll');
      next();
    },
    beforeRouteEnter(to, from, next) {
      if (from.name !== 'topic') {
        // 页面切换移除之前记录的数据集
        if (window.window.sessionStorage.tab) {
          window.window.sessionStorage.removeItem('topics');
          window.window.sessionStorage.removeItem('searchKey');
          window.window.sessionStorage.removeItem('tab');
        }
      }
      next();
    }
  }
</script>

<style>
  .text-center {
   margin: auto;
  }
  .list-wrap2 {
    padding-top: 66px;
  }
  /*我是有点崩溃, 不懂啊*/
  /*.list-wrap {*/
    /*height: 650px;*/
    /*display: flex;*/
    /*flex-flow: column;*/
    /*position: relative;*/
    /*overflow: hidden;*/
    /*z-index: 1;*/
  /*}*/
  /*.md-list {*/
    /*overflow: auto;*/
  /*}*/
</style>
