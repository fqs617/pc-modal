import Demo from './src/demo.vue'
export default function (router) {
  router.push({
    path: '/hello',
    name: 'hello',
    component: Demo
  })
}
