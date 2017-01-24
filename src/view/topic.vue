<template>
  <div class="topic-page">
    <backBar></backBar>
    <div class="topic-wrap">
      <md-card md-with-hover>
        <md-card-header>
          <div class="md-title">{{ title }}</div>
        </md-card-header>
        <md-card-content>
          <div v-html="content"></div>
        </md-card-content>
      </md-card>

      <md-list>
        <md-list-item v-for="reply in replies">
          <div>
            <md-layout>
              <md-avatar>
                <img :src="reply.author.avatar_url">
              </md-avatar>
              <div class="md-list-text-container text-center">
              <span>
                  <span>Author:{{reply.author.loginname}}</span>
              </span>
                <span>
                  <span>Create at: {{reply.create_at}}</span>
              </span>
              </div>
            </md-layout>
            <md-layout>
              <div class="md-list-text-container" v-html="reply.content"></div>
            </md-layout>
          </div>
          <md-divider class="md-inset"></md-divider>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>
<script>
  import backBar from '../components/backBar.vue'
  import * as utils from '../utils'
  export default {
    name: 'topicPage',
    components: {
      backBar
    },
    data () {
      return {
        tid: '',
        title: '',
        content: '',
        replies: []
      }
    },
    mounted () {
      if (this.$route.params && this.$route.params.tid) {
        this.tid = this.$route.params.tid;
      }
      $.get(utils.baseURL + '/topic/' + this.tid, (response, status) => {
        this.title = response.data.title;
        this.content = response.data.content;
        this.replies = response.data.replies
//        console.log(response.data.replies)
      })
//      this.fetchTopics();
//      $(window).on('scroll', () => {
//        this.fetchScrollData()
//      })
    },
    filters: {
      timeBeforNow (tiem) {
        return utils.timeBeforeNow(tiem)
      }
    },
    method: {

    }
  }
</script>
<style>
  .topic-wrap {
    padding-top: 66px;
  }
</style>
