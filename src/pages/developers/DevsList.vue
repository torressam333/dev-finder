<template>
  <section>Filter Comp Goes Here</section>
  <section>
    DevsList Comp Goes here
    <div class="controls">
      <button>Refresh List</button>
      <router-link to="/register">Developer Registration</router-link>
    </div>
    <ul v-if="hasDevelopers">
      <developer-details
        v-for="dev in filteredDevelopers"
        :key="dev.id"
        :dev-details="dev"
      ></developer-details>
    </ul>
    <h4 v-else>No Developers Found</h4>
  </section>
</template>

<script>
import DeveloperDetails from '../../components/developers/DeveloperDetails.vue';
export default {
  components: {
    DeveloperDetails,
  },
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

<style scoped>
section {
  margin: 0.5rem;
  padding: 0 0.5rem;
}
</style>
