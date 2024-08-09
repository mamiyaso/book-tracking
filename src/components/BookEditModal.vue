<template>
    <div class="modal d-block" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Kitap Düzenle</h5>
            <button type="button" class="btn-close" @click="$emit('cancel')"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveEdit">
              <div class="mb-3">
                <label for="title" class="form-label">Kitap Adı</label>
                <input v-model="editedBook.title" type="text" class="form-control" id="title" required>
              </div>
              <div class="mb-3">
                <label for="author" class="form-label">Yazar</label>
                <input v-model="editedBook.author" type="text" class="form-control" id="author" required>
              </div>
              <div class="mb-3">
                <label for="status" class="form-label">Durum</label>
                <select v-model="editedBook.status" class="form-select" id="status" required>
                  <option value="Okunacak">Okunacak</option>
                  <option value="Okunuyor">Okunuyor</option>
                  <option value="Okundu">Okundu</option>
                </select>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="$emit('cancel')">İptal</button>
                <button type="submit" class="btn btn-primary">Kaydet</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookEditModal',
    props: ['book'],
    data() {
      return {
        editedBook: { ...this.book }
      }
    },
    methods: {
      saveEdit() {
        this.$emit('save', this.editedBook);
      }
    }
  }
  </script>
  
  <style scoped>
  .modal {
    background-color: rgba(0,0,0,0.5);
  }
  </style>