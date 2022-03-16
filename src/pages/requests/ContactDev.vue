<template>
  <form action="">
    <div>
      <label for="email">Email</label>
      <input type="text" id="email" />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea name="message" id="message" rows="7"></textarea>
    </div>
    <div class="actions">
      <base-button></base-button>
    </div>
  </form>
</template>

<script>
import BaseButton from '../../components/base-components/BaseButton.vue';
export default {
  components: {
    BaseButton,
  },
};
</script>

<style scoped></style>
