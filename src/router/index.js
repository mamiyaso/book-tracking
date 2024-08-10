import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from '../views/Home.vue'
import AddBook from '../views/AddBook.vue'
import BookDetails from '../views/BookDetails.vue'

const router = createRouter({
  history: createWebHashHistory (),
  routes: [
    { 
      path: '/book-tracking/home',
      name: 'home',
      component: Home 
    },
    { 
      path: '/book-tracking/add',
      name: 'add',
      component: AddBook 
    },
    { 
      path: '/book-tracking/book/:id',
      name: 'bookDetails',
      component: BookDetails,
      props: true 
    }
  ]
})

export default router