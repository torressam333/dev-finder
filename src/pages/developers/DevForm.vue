<template>
  <form action="">
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastname">LastName</label>
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
export default {
  name: 'dev-form',
  data() {
    return {
      areas: [],
      description: '',
      firstName: '',
      hourlyRate: null,
      lastName: '',
    };
  },
};
</script>
