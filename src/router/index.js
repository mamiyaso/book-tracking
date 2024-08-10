import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddBook from '../views/AddBook.vue'
import BookDetails from '../views/BookDetails.vue'

const router = createRouter({
  history: createWebHistory('/book-tracking/'),
  routes: [
    { 
      path: '/',
      name: 'home',
      component: Home 
    },
    { 
      path: '/add',
      name: 'add',
      component: AddBook 
    },
    { 
      path: '/book/:id',
      name: 'bookDetails',
      component: BookDetails,
      props: true 
    }
  ]
})

export default router