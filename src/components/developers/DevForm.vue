<template>
  <form @submit.prevent="formSubmitted">
    <div class="form-control">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" v-model.trim="firstName.value" />
    </div>
    <div class="form-control">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" v-model.trim="lastName.value" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        type="text"
        id="description"
        rows="5"
        v-model.trim="description.value"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="hourlyRate.value" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.value"
        />
        <label for="frontend">Frontend Developer</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.value"
        />
        <label for="backend">Backend Developer</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="machineLearning"
          value="machineLearning"
          v-model="areas.value"
        />
        <label for="machineLearning">Machine Learning Engineer</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
import BaseButton from '../base-components/BaseButton.vue';
export default {
  name: 'dev-form',
  emits: ['save-data'],
  components: { BaseButton },
  data() {
    return {
      areas: {
        value: [],
        isValid: true,
      },
      description: {
        value: '',
        isValid: true,
      },
      firstName: {
        value: '',
        isValid: true,
      },
      formIsValid: true,
      hourlyRate: {
        value: null,
        isValid: true,
      },
      lastName: {
        value: '',
        isValid: true,
      },
    };
  },
  methods: {
    formSubmitted() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        areas: this.areas.value,
        desc: this.description.value,
        first: this.firstName.value,
        last: this.lastName.value,
        rate: this.hourlyRate.value,
      };

      this.$emit('save-data', formData);
    },
    validateForm() {
      this.formIsValid = true;

      //Check each fields value, if any one fails then the
      //entire form is invalid
      if (!this.firstName.value) {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }

      if (!this.lastName.value) {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }

      if (!this.description.value) {
        this.description.isValid = false;
        this.formIsValid = false;
      }

      if (!this.hourlyRate.value || this.hourlyRate.val < 0) {
        this.hourlyRate.isValid = false;
        this.formIsValid = false;
      }

      if (!this.areas.value.length) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  display: inline;
  font-weight: normal;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  border-radius: 5px;
  border: 1px solid #ccc;
  display: block;
  font: inherit;
  width: 100%;
}

input:focus,
textarea:focus {
  background-color: #e2eff5;
  border-color: #00658d;
  outline: none;
}

input[type='checkbox'] {
  border: none;
  display: inline;
  width: auto;
}

input[type='checkbox']:focus {
  outline: #00658d solid 1px;
}

h3 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.invalid label {
  color: rgb(223, 35, 35);
}

.invalid input,
.invalid textarea {
  border: 1px solid rgb(223, 35, 35);
}
</style>
