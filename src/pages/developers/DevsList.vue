<template>
  <section>
    <dev-filter @change-filter="setFilters" />
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadAllDevs"
          >Refresh List</base-button
        >
        <base-button link to="/register"> Developer Registration</base-button>
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
import DevFilter from '../../components/developers/DevFilter.vue';
import DeveloperItem from '../../components/developers/DeveloperItem.vue';
export default {
  components: {
    BaseButton,
    DevFilter,
    DeveloperItem,
  },
  data() {
    return {
      activeFilters: {
        backend: true,
        frontend: true,
        machineLearning: true,
      },
    };
  },
  computed: {
    filteredDevelopers() {
      const allDevs = this.$store.getters['developers/getAllDevelopers'];

      return allDevs.filter((dev) => {
        for (const area in this.activeFilters) {
          if (this.activeFilters[area] && dev.areas.includes(area)) return true;
        }
        return false;
      });
    },
    hasDevelopers() {
      return this.$store.getters['developers/hasDevelopers'];
    },
    isDev() {
      return this.$store.getters['developers/isDev'];
    },
  },
  methods: {
    loadAllDevs() {
      this.$store.dispatch('developers/loadDevelopers');
    },
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
  created() {
    this.loadAllDevs();
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
