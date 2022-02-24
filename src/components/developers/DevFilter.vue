<template>
  <base-card>
    <h2>Find Developer</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="machine-learning" checked />
      <label for="machine-learning">Machine Learning</label>
    </span>
  </base-card>
</template>

<script>
import BaseCard from '../base-components/BaseCard.vue';

export default {
  components: { BaseCard },
};
</script>
