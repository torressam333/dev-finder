<template>
  <div class="loading"></div>
</template>

<style scoped>
.loading {
  animation: loader 2s ease infinite;
  display: flex;
  justify-content: center;
}

.loading::after {
  border: 9px solid #dddddd;
  border-radius: 50%;
  border-top-color: #00658d;
  content: '';
  height: 50px;
  width: 50px;
}

@keyframes loader {
  to {
    transform: rotate(2turn);
  }
}
</style>
