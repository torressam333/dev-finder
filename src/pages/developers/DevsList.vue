<template>
  <section>Filter Comp Goes Here</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh List</base-button>
        <base-button link to="/register">Developer Registration</base-button>
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
import BaseButton from '../../components/base-components/BaseButton.vue';
import DeveloperDetails from '../../components/developers/DeveloperDetails.vue';
export default {
  components: {
    DeveloperDetails,
    BaseButton,
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
