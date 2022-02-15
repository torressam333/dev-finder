<template>
  <span class="badge" :class="specialty">{{ titleUpper }}</span>
</template>

<script>
export default {
  props: {
    specialty: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
  },
  computed: {
    titleUpper() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #eee;
  border-radius: 30px;
  color: #333;
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
  margin-right: 0.5rem;
}

.frontend {
  background-color: rgb(5, 160, 231);
  color: white;
}

.backend {
  background-color: rgb(0, 187, 156);
  color: white;
}

.machine-learning {
  background-color: rgb(0, 163, 54);
  color: white;
}
</style>
