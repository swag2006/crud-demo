<!-- ~/components/Books.vue -->
<template>
  <div>
    <h1>Book List</h1>
    <BookList :books="books" @delete-book="deleteBook" />

    <h2>Add New Book</h2>
    <BookForm @add-book="addBook" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getBooks, createBook, removeBook } from '~/services/bookService';
import type { Book, NewBook } from '~/services/bookService';

// Nuxt auto-imports components from the "components" directory, so we can use <BookList> and <BookForm> directly.

const books = ref<Book[]>([]);

async function fetchBooks() {
  try {
    books.value = await getBooks();
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

async function addBook(newBook: NewBook) {
  try {
    const createdBook = await createBook(newBook);
    books.value.push(createdBook);
  } catch (error) {
    console.error('Error adding book:', error);
  }
}

async function deleteBook(id: number) {
  try {
    await removeBook(id);
    books.value = books.value.filter(book => book.id !== id);
  } catch (error) {
    console.error('Error deleting book:', error);
  }
}

onMounted(fetchBooks);
</script>

<style scoped>
/* Optional component-specific styles */
</style>