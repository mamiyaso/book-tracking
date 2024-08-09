<template>
    <div class="book-form">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="title" class="form-label">Kitap Adı</label>
          <input v-model="book.title" type="text" class="form-control" id="title" required>
        </div>
        <div class="mb-3">
          <label for="author" class="form-label">Yazar</label>
          <div class="input-group">
            <input
              v-model="authorInput"
              type="text"
              class="form-control"
              id="author"
              required
              @input="searchAuthors"
              @focus="showAuthorSuggestions = true"
              @blur="hideAuthorSuggestions"
            >
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Seç</button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li v-for="author in authors" :key="author">
                <a class="dropdown-item" href="#" @click.prevent="selectAuthor(author)">{{ author }}</a>
              </li>
            </ul>
          </div>
          <ul v-if="showAuthorSuggestions && filteredAuthors.length" class="list-group mt-2">
            <li
              v-for="author in filteredAuthors"
              :key="author"
              class="list-group-item list-group-item-action"
              @mousedown.prevent="selectAuthor(author)"
            >
              {{ author }}
            </li>
          </ul>
        </div>
        <div class="mb-3">
          <label for="status" class="form-label">Durum</label>
          <select v-model="book.status" class="form-select" id="status" required>
            <option value="Okunacak">Okunacak</option>
            <option value="Okunuyor">Okunuyor</option>
            <option value="Okundu">Okundu</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Kitap Ekle</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookForm',
    data() {
      return {
        book: {
          title: '',
          author: '',
          status: 'Okunacak'
        },
        authorInput: '',
        authors: [],
        showAuthorSuggestions: false,
        filteredAuthors: []
      }
    },
    methods: {
      submitForm() {
        this.book.author = this.authorInput;
        this.$emit('add-book', { ...this.book });
        this.book = { title: '', author: '', status: 'Okunacak' };
        this.authorInput = '';
        this.updateAuthors(this.book.author);
      },
      searchAuthors() {
        if (this.authorInput) {
          this.filteredAuthors = this.authors.filter(author =>
            author.toLowerCase().includes(this.authorInput.toLowerCase())
          );
        } else {
          this.filteredAuthors = [];
        }
      },
      selectAuthor(author) {
        this.authorInput = author;
        this.showAuthorSuggestions = false;
      },
      hideAuthorSuggestions() {
        setTimeout(() => {
          this.showAuthorSuggestions = false;
        }, 200);
      },
      updateAuthors(newAuthor) {
        if (newAuthor && !this.authors.includes(newAuthor)) {
          this.authors.push(newAuthor);
          this.authors.sort();
          localStorage.setItem('authors', JSON.stringify(this.authors));
        }
      },
      loadAuthors() {
        const savedAuthors = localStorage.getItem('authors');
        if (savedAuthors) {
          this.authors = JSON.parse(savedAuthors);
        }
      }
    },
    created() {
      this.loadAuthors();
    }
  }
  </script>
  
  <style scoped>
  .list-group {
    position: absolute;
    z-index: 1000;
    width: 100%;
  }
  </style>