<template>
  <li>
    <h3>{{ devFullName }}</h3>
    <h4>${{ devRate }} per hour</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :specialty="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <router-view></router-view>
      <base-button link mode="outline" :to="devContactLink">
        Conact Dev
      </base-button>
      <base-button link :to="devDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
import BaseBadge from '../base-components/BaseBadge.vue';
import BaseButton from '../base-components/BaseButton.vue';
export default {
  components: { BaseBadge, BaseButton },
  props: {
    devDetails: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      areas: this.devDetails.areas,
      description: this.devDetails.description,
      firstName: this.devDetails.firstName,
      hourlyRate: this.devDetails.hourlyRate,
      id: this.devDetails.id,
      lastName: this.devDetails.lastName,
    };
  },
  computed: {
    devContactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    devDetailsLink() {
      return `${this.$route.path}/${this.id}`;
    },
    devFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    devRate() {
      return `${this.hourlyRate}`;
    },
  },
};
</script>

<style scoped>
li {
  border: 2px solid rgb(168, 164, 164);
  border-radius: 10px;
  margin: 2rem;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}
.actions {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 600px) {
  .actions {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .actions button {
    margin: 0.25rem 0;
  }
}
</style>
