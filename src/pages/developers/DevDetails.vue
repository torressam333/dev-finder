<template>
  <section>
    <base-card>
      <!-- Slot data -->
      <h2>{{ devFullName }}</h2>
      <h3>${{ devRate }} per hour</h3>
    </base-card>
  </section>
  <section>
    <header>
      <h2>Want to connect? Reach out now!</h2>
      <base-button link :to="devContactLink">Contact</base-button>
    </header>
    <!-- router link required for child form (contact form) to be rendered -->
    <router-view></router-view>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in devAreas"
        :key="area"
        :specialty="area"
        :title="area"
      ></base-badge>
      <p>{{ devDescription }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedDev: null,
    };
  },
  computed: {
    devAreas() {
      return this.selectedDev.areas;
    },
    devContactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    devDescription() {
      return this.selectedDev.description;
    },
    devDetailsLink() {
      return `${this.$route.path}/${this.id}`;
    },
    devFullName() {
      return `${this.selectedDev.firstName} ${this.selectedDev.lastName}`;
    },
    devRate() {
      return `${this.selectedDev.hourlyRate}`;
    },
  },
  created() {
    //Find dev by id from vuex stroe when this component is created
    this.selectedDev = this.$store
      .getters('developers/getAllDevelopers')
      .find((dev) => dev.id === this.id);
    //this.selectedDev = this.$store.getters.getDeveloperById(this.id);
  },
};
</script>
