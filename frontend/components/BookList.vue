<!-- ~/components/BookList.vue -->
<template>
  <ul>
    <li v-for="book in books" :key="book.id">
      {{ book.title }} by {{ book.author }}
      <button @click="$emit('delete-book', book.id)">Delete</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { Book } from '~/services/bookService';

const props = defineProps<{
  books: Book[];
}>();

const emit = defineEmits<{ (e: 'delete-book', id: number): void }>();
</script>

<style scoped>
/* Component-specific styles can be added here */
</style>