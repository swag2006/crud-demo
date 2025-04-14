<!-- ~/components/BookForm.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="book.title" placeholder="Title" required />
    <input v-model="book.author" placeholder="Author" required />
    <button type="submit">Add Book</button>
  </form>
</template>

<script setup lang="ts">
import { reactive, defineEmits } from 'vue';
import type { NewBook } from '~/services/bookService';

const emit = defineEmits<{ (e: 'add-book', newBook: NewBook): void }>();

const book = reactive<NewBook>({
  title: '',
  author: ''
});

function handleSubmit() {
  // Emit the new book data to the parent component
  emit('add-book', { title: book.title, author: book.author });
  // Reset the form fields
  book.title = '';
  book.author = '';
}
</script>

<style scoped>
/* Component-specific styles can be added here */
</style>