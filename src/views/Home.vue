<template>
    <div class="home">
      <h1 class="mb-4">Kitap Listesi</h1>
      <div class="row mb-4">
        <div class="col-md-4">
          <BookSearch @search="setSearchTerm" />
        </div>
        <div class="col-md-4">
          <BookFilter @filter-change="setFilter" />
        </div>
        <div class="col-md-4">
          <select v-model="itemsPerPage" class="form-select" @change="updatePagination">
            <option :value="20">20 kitap/sayfa</option>
            <option :value="50">50 kitap/sayfa</option>
            <option :value="100">100 kitap/sayfa</option>
          </select>
        </div>
      </div>
      <BookList 
        :books="paginatedBooks" 
        @delete-book="deleteBook"
      />
      <nav aria-label="Page navigation" class="mt-4">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Önceki</a>
          </li>
          <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: page === currentPage }">
            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Sonraki</a>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import BookSearch from '@/components/BookSearch.vue'
  import BookFilter from '@/components/BookFilter.vue'
  import BookList from '@/components/BookList.vue'
  
  export default {
    name: 'Home',
    components: {
      BookSearch,
      BookFilter,
      BookList
    },
    data() {
      return {
        books: [],
        filter: 'all',
        searchTerm: '',
        itemsPerPage: 20,
        currentPage: 1
      }
    },
    computed: {
      filteredBooks() {
        let result = this.books;
        if (this.filter !== 'all') {
          result = result.filter(book => book.status === this.filter);
        }
        if (this.searchTerm) {
          const search = this.searchTerm.toLowerCase();
          result = result.filter(book => 
            book.title.toLowerCase().includes(search) || 
            book.author.toLowerCase().includes(search)
          );
        }
        return result;
      },
      totalPages() {
        return Math.ceil(this.filteredBooks.length / this.itemsPerPage);
      },
      paginatedBooks() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.filteredBooks.slice(start, end);
      }
    },
    methods: {
      setFilter(filter) {
        this.filter = filter;
        this.currentPage = 1;
      },
      setSearchTerm(term) {
        this.searchTerm = term;
        this.currentPage = 1;
      },
      deleteBook(id) {
        this.books = this.books.filter(book => book.id !== id);
        this.saveBooks();
      },
      loadBooks() {
        const savedBooks = localStorage.getItem('books');
        if (savedBooks) {
          this.books = JSON.parse(savedBooks);
        }
      },
      saveBooks() {
        localStorage.setItem('books', JSON.stringify(this.books));
      },
      changePage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
      },
      updatePagination() {
        this.currentPage = 1;
      }
    },
    created() {
      this.loadBooks();
    }
  }
  </script>