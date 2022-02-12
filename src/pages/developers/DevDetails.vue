<template>
  Developer Details Page
  <!-- This nested router view is needed since this component
        has child routes    
     -->
  <router-view></router-view>
  <router-link to="/developers/1/contact">Contact Dev</router-link>
</template>
