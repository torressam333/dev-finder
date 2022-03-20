<template>
  <section>
    <base-card>
      <header><h2>Received Requests</h2></header>
      <ul v-if="hasRequests"></ul>
      <h3 v-else>No Requests Received</h3>
    </base-card>
  </section>
</template>

<script>
export default {
  name: 'requests-received',
  computed: {
    receivedRequests() {
      //Grab req's using vuex getter (namespaced)
      return this.$store.getter['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
