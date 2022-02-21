<template>
  <section>Filter Comp Goes Here</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh List</base-button>
        <base-button link to="/register">Developer Registration</base-button>
      </div>
      <ul v-if="hasDevelopers">
        <developer-item
          v-for="dev in filteredDevelopers"
          :key="dev.id"
          :dev-details="dev"
        ></developer-item>
      </ul>
      <h3 v-else>No Developers Found</h3>
    </base-card>
  </section>
</template>

<script>
import BaseButton from '../../components/base-components/BaseButton.vue';
import DeveloperItem from '../../components/developers/DeveloperItem.vue';
export default {
  components: {
    BaseButton,
    DeveloperItem,
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
