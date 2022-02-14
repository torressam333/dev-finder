<template>
  <section>Filter Comp Goes Here</section>
  <section>
    <base-card>
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
      <h3 v-else>No Developers Found</h3>
    </base-card>
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

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
