<template>
  <li>
    <h3>{{ devFullName }}</h3>
    <h4>${{ devRate }} per hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">
      <router-link :to="devContactLink">Conact Dev</router-link>
      <router-link :to="devDetailsLink">View Details</router-link>
    </div>
  </li>
</template>

<script>
export default {
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
  border: 1px solid #424242;
  border-radius: 10px;
  padding: 1rem;
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
</style>
