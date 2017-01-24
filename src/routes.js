import main from './view/loader.vue'
import list from './view/list.vue'
import topic from './view/topic.vue'

export default [
  {
    path: '/',
    name: 'main',
    component: main
  },
  {
    path: '/list',
    name: 'list',
    component: list
  },
  {
    path: '/topic/:tid',
    name: 'topic',
    component: topic
  }
]
