<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'base-button',
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    mode: {
      //control styling from outside use
      type: String,
      required: false,
      default: null,
    },
    to: {
      type: String,
      required: false,
      default: '/', //Send em home if we are using a link
    },
  },
};
</script>

<style scoped>
button,
a {
  background-color: #00658d;
  border: 1px solid #00658d;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  padding: 0.55rem 1.2rem;
  margin-right: 0.5rem;
  text-decoration: none;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #00658d;
  border-color: #00658d;
  color: white;
}

.flat {
  background-color: transparent;
  border: none;
  color: #00658d;
}

.outline {
  background-color: transparent;
  border-color: #02506e;
  color: #02506e;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #00658d;
  color: white;
}
</style>
