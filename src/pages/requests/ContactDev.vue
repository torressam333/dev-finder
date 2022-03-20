<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea
        name="message"
        id="message"
        rows="7"
        v-model.trim="message"
      ></textarea>
    </div>
    <p class="errors" v-if="!validForm">
      Please provide a valid email address, and non empty message.
    </p>
    <div class="actions">
      <base-button>Contact</base-button>
    </div>
  </form>
</template>

<script>
import BaseButton from '../../components/base-components/BaseButton.vue';
export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      email: null,
      message: null,
      validForm: true,
    };
  },
  methods: {
    submitForm() {
      this.validForm = true;

      this.validateFields();

      if (!this.validForm) {
        this.validForm = false;
        return;
      }

      const formData = {
        devId: this.$route.params.id,
        email: this.email,
        message: this.message,
      };

      //this.$emit('save-contact-data', formData);
      this.$store.dispatch('requests/contactDev', formData);

      //Navigate away from this page once form is submitted
      //Use replace so that user cannot navigate back
      this.$router.replace('/developers');
    },
    validateFields() {
      if (!this.email || !this.email.includes('@') || this.message === '') {
        this.validForm = false;
      }
    },
  },
};
</script>

<style scoped>
form {
  border: 1px solid #ccc;
  border-radius: 12px;
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input,
textarea {
  border: 1px solid #ccc;
  display: block;
  font: inherit;
  padding: 0.15rem;
  width: 100%;
}

input:focus,
textarea:focus {
  background-color: rgb(212, 212, 212);
  border-color: #00658d;
  outline: none;
}

.errors {
  font-weight: bold;
  color: rgb(173, 17, 17);
}

.actions {
  text-align: center;
}
</style>
