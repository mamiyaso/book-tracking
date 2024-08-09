<template>
    <div class="book-list">
      <div v-if="books.length === 0" class="alert alert-info">
        Henüz kitap eklenmemiş.
      </div>
      <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div v-for="book in books" :key="book.id" class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ book.title }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ book.author }}</h6>
              <p class="card-text">
                <span class="badge" :class="{
                  'bg-info': book.status === 'Okunacak',
                  'bg-warning': book.status === 'Okunuyor',
                  'bg-success': book.status === 'Okundu'
                }">{{ book.status }}</span>
              </p>
            </div>
            <div class="card-footer bg-transparent">
              <router-link :to="'/book/' + book.id" class="btn btn-primary btn-sm me-2">Detaylar</router-link>
              <button @click="$emit('delete-book', book.id)" class="btn btn-danger btn-sm">Sil</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookList',
    props: ['books']
  }
  </script>