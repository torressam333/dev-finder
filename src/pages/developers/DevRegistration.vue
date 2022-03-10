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
  computed: {
    isDev() {
      return this.$store.getters['developers/isDev'];
    },
  },
  methods: {
    saveData(formData) {
      //Namespace/action name, formdata to persist
      this.$store.dispatch('developers/registerDev', formData);

      //Use replace instead of push to prevent user from going back to submitted
      //form page
      this.$router.replace('/developers');
    },
  },
};
</script>
