<template>
  <the-header></the-header>
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/Layouts/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Poppins', sans-serif;
}

body {
  margin: 0;
}
</style>
