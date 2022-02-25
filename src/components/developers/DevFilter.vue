<template>
  <base-card>
    <h2>Find Developer</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        id="machine-learning"
        checked
        @change="setFilter"
      />
      <label for="machine-learning">Machine Learning</label>
    </span>
  </base-card>
</template>

<script>
import BaseCard from '../base-components/BaseCard.vue';

export default {
  components: { BaseCard },
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        backend: true,
        frontend: true,
        machineLearning: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputID = event.target.id;
      const isChecked = event.target.checked; //Bool
      const updatedFilters = {
        ...this.filters,
        //Set isChecked to true for checked boxes by their id
        [inputID]: isChecked,
      };

      this.filters = updatedFilters;

      //Any parent component that uses this component will need this info.
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
