<template>
  <div class="book-details">
    <div v-if="book" class="card shadow">
      <div class="card-body">
        <h2 class="card-title">{{ book.title }}</h2>
        <p class="card-text"><strong>Yazar:</strong> {{ book.author }}</p>
        <p class="card-text">
          <strong>Durum:</strong>
          <span class="badge" :class="{
            'bg-info': book.status === 'Okunacak',
            'bg-warning': book.status === 'Okunuyor',
            'bg-success': book.status === 'Okundu'
          }">{{ book.status }}</span>
        </p>
        <div class="mt-3">
          <button @click="editBook" class="btn btn-primary me-2">Düzenle</button>
          <button @click="deleteBook" class="btn btn-danger">Sil</button>
        </div>
      </div>
    </div>
    <div v-else class="alert alert-warning" role="alert">
      Kitap bulunamadı.
    </div>
    <BookEditModal 
      v-if="editing"
      :book="book"
      @save="saveEdit"
      @cancel="cancelEdit"
    />
  </div>
</template>

<script>
import BookEditModal from '@/components/BookEditModal.vue'

export default {
  name: 'BookDetails',
  components: {
    BookEditModal
  },
  data() {
    return {
      book: null,
      editing: false
    }
  },
  methods: {
    loadBook() {
      // Simüle edilmiş veri yükleme
      const id = this.$route.params.id;
      const books = JSON.parse(localStorage.getItem('books') || '[]');
      this.book = books.find(b => b.id === parseInt(id));
    },
    editBook() {
      this.editing = true;
    },
    saveEdit(updatedBook) {
      this.book = updatedBook;
      let books = JSON.parse(localStorage.getItem('books') || '[]');
      const index = books.findIndex(b => b.id === updatedBook.id);
      if (index !== -1) {
        books[index] = updatedBook;
        localStorage.setItem('books', JSON.stringify(books));
      }
      this.editing = false;
    },
    cancelEdit() {
      this.editing = false;
    },
    deleteBook() {
      if (confirm('Bu kitabı silmek istediğinizden emin misiniz?')) {
        let books = JSON.parse(localStorage.getItem('books') || '[]');
        books = books.filter(b => b.id !== this.book.id);
        localStorage.setItem('books', JSON.stringify(books));
        this.$router.push('/');
      }
    }
  },
  created() {
    this.loadBook();
  }
}
</script>