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
