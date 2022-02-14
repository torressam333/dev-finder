<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 3px 8px rgb(0, 0, 0, 0.6);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
}

.card:hover {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}
</style>
