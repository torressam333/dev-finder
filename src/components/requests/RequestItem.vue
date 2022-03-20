<template>
  <li>
    <div>
      <a :href="emailLink">{{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>
export default {
  name: 'request-item',
  props: {
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  computed: {
    emailLink() {
      //open default email client
      return `mailto:${this.email}`;
    },
  },
};
</script>

<style scoped>
li {
  border: 1px solid #eee;
  margin: 1rem 0;
  padding: 1rem;
}

a {
  color: #00658d;
  font-weight: bold;
  text-decoration: none;
}

a:hover,
a:active {
  color: #5eb7da;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
