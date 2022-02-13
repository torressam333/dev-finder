<template>
  <section>Filter Comp Goes Here</section>
  <section>
    DevsList Comp Goes here
    <div class="controls">
      <button>Refresh List</button>
      <router-link to="/register">Developer Registration</router-link>
    </div>
    <ul v-if="hasDevelopers">
      <li v-for="dev in filteredDevelopers" :key="dev.id">
        {{ dev.firstName }} {{ dev.lastName }}
      </li>
    </ul>
    <h4 v-else>No Developers Found</h4>
  </section>
</template>

<script>
export default {
  computed: {
    filteredDevelopers() {
      return this.$store.getters['developers/getAllDevelopers'];
    },
    hasDevelopers() {
      return this.$store.getters['developers/hasDevelopers'];
    },
  },
};
</script>
