<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
}
</style>
