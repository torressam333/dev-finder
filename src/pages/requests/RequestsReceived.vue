<template>
  <section>
    <base-card>
      <header><h2>Received Requests</h2></header>
      <ul v-if="hasRequests">
        <request-item
          v-for="request in receivedRequests"
          :key="request.id"
          :email="request.email"
          :message="request.message"
        ></request-item>
      </ul>
      <h3 v-else>No Requests Received</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  name: 'requests-received',
  components: { RequestItem },
  computed: {
    receivedRequests() {
      //Grab req's using vuex getter (namespaced)
      return this.$store.getters['requests/requests'];
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
