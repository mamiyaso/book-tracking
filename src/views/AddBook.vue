<template>
    <div class="add-book">
      <h2>Yeni Kitap Ekle</h2>
      <BookForm @add-book="addBook" />
    </div>
  </template>
  
  <script>
  import BookForm from '@/components/BookForm.vue'
  
  export default {
    name: 'AddBook',
    components: {
      BookForm
    },
    methods: {
      addBook(book) {
        const newBook = { ...book, id: Date.now() };
        let books = JSON.parse(localStorage.getItem('books') || '[]');
        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));
        this.$router.push('/');
      }
    }
  }
  </script>