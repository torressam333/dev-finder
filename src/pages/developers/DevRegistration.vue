<template>
  <section>
    <base-card>
      <h2>Register as a Developer!</h2>
      <dev-form />
    </base-card>
  </section>
</template>

<script>
import BaseCard from '../../components/base-components/BaseCard.vue';
import DevForm from '../../components/developers/DevForm.vue';
export default {
  name: 'dev-registration',
  components: {
    BaseCard,
    DevForm,
  },
};
</script>
