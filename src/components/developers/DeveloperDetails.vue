<template>
  <li>
    <h3>{{ devFullName }}</h3>
    <h4>${{ devRate }} per hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">
      <router-link to="/developers/dev1/contact">Conact Dev</router-link>
      <router-link to="/developers/dev1">View Details</router-link>
    </div>
  </li>
</template>

<style scoped></style>
