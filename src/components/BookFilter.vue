<template>
    <div class="book-filter">
      <select @change="$emit('filter-change', $event.target.value)">
        <option value="all">Tümü</option>
        <option value="Okunacak">Okunacak</option>
        <option value="Okunuyor">Okunuyor</option>
        <option value="Okundu">Okundu</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookFilter'
  }
  </script>