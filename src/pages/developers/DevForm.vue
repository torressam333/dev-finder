<template>
  <form action="">
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" />
    </div>
    <div class="form-control">
      <label for="lastname">LastName</label>
      <input type="text" id="lastname" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea type="text" id="description" rows="5"></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" />
        <label for="frontend">Frontend Developer</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" />
        <label for="backend">Backend Developer</label>
      </div>
      <div>
        <input type="checkbox" id="machineLearning" value="machineLearning" />
        <label for="machineLearning">Machine Learning Engineer</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>
