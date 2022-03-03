<template>
  <form @submit.prevent="formSubmitted">
    <div class="form-control">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        type="text"
        id="description"
        rows="5"
        v-model.trim="description"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="hourlyRate" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
        <label for="frontend">Frontend Developer</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas" />
        <label for="backend">Backend Developer</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="machineLearning"
          value="machineLearning"
          v-model="areas"
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
  components: { BaseButton },
  data() {
    return {
      areas: [],
      description: '',
      firstName: '',
      hourlyRate: null,
      lastName: '',
    };
  },
  methods: {
    formSubmitted() {
      const formData = {
        areas: this.areas,
        desc: this.description,
        first: this.firstName,
        last: this.lastName,
        rate: this.hourlyRate,
      };

      console.log(formData);
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
