<script setup>

import { defineProps } from 'vue'
import { RouterLink } from 'vue-router';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

</script>

<template>
  <li class="nav-item">
    <RouterLink class="nav-link" active-class="active" :to="{ name: name }">
      <i class="bi bi-house"></i>
      <span class="navBarFont">{{ name }}</span>
    </RouterLink>
  </li>
</template>

<style scoped>

.navBarFont {
  font-family: 'Pokemon Fire Red', sans-serif;
  font-size: 2rem;
  margin-left: 20px;
}

.nav-link {
  color: #0d59be !important;
}

.nav-link.active {
  color: #ffffff !important;
}

.nav-link:hover {
  color: #e7f7ff !important;
}

</style>