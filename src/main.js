import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import AddBook from './views/AddBook.vue'
import BookDetails from './views/BookDetails.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/add', component: AddBook },
    { path: '/book/:id', component: BookDetails, props: true }
  ]
})

createApp(App).use(router).mount('#app')