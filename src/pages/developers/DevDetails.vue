<template>
  <section>
    <base-card>
      <!-- Slot data -->
      <h2>{{ devFullName }}</h2>
      <h3>${{ devRate }} per hour</h3>
    </base-card>
  </section>
  <section>
    <header>
      <h2>Want to connect? Reach out now!</h2>
      <base-button link :to="contactDevLink">Contact</base-button>
    </header>
    <!-- router link required for child form (contact form) to be rendered -->
    <router-view></router-view>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :specialty="area"
        :title="area"
      ></base-badge>
      <p>{{ devDescription }}</p>
    </base-card>
  </section>
</template>
