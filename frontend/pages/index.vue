<!-- ~/pages/index.vue -->
<template>
  <div class="container">
    <Books />
  </div>
</template>

<script setup lang="ts">
  // No manual import required as Nuxt auto-imports the Books component from the "components" directory.
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}
</style>