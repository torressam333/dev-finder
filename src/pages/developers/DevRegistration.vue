<template>
  <section>
    <base-card>
      <h2>Developer Registration</h2>
      <dev-form @save-data="saveData" />
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
  methods: {
    saveData(formData) {
      
      this.$store.dispath();
    },
  },
};
</script>
