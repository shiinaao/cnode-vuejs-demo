import main from './view/loader.vue'
import list from './view/list.vue'

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
  }
]
