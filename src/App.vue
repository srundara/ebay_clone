<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopNav from './views/nav/TopNav.vue'
</script>

<template>
  <div class="">
    <top-nav/>
    <RouterView />
  </div>
</template>
