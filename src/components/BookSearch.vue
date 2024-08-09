<template>
    <div class="book-search">
      <input 
        v-model="searchTerm" 
        @input="$emit('search', searchTerm)"
        placeholder="Kitap veya yazar ara..."
      >
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookSearch',
    data() {
      return {
        searchTerm: ''
      }
    }
  }
  </script>