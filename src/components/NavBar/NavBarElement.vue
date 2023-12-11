<script setup>

import { defineProps, ref, computed } from 'vue'
import { RouterLink } from 'vue-router';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const iconClass = computed(() => {
  const iconMap = {
    Settings: 'bi bi-gear',
    Home: 'bi bi-house',
    Rules: 'bi bi-book',
    Restart: 'bi bi-arrow-clockwise'
  };
  return iconMap[props.name];
});

const isRouterLink = computed(() => props.name !== 'Settings');
</script>

<template>
  <li class="nav-item">
    <template v-if="isRouterLink">
      <RouterLink class="nav-link" active-class="active" :to="{ name: name }">
        <i :class="iconClass"></i>
        <span class="navBarFont">{{ name }}</span>
      </RouterLink>
    </template>
    <template v-else>
      <div class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i :class="iconClass"></i>
        <span class="navBarFont">{{ name }}</span>
      </div>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item">
            <i class="navBarIcon bi bi-download"></i>
            <span class="navBarFont">Save</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item">
            <i class="navBarIcon bi bi-upload"></i>
            <span class="navBarFont">Load</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item">
            <i class="navBarIcon bi bi-arrow-counterclockwise"></i>
            <span class="navBarFont">Undo</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item">
            <i class="navBarIcon bi bi-arrow-clockwise"></i>
            <span class="navBarFont">Redo</span>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li>
          <a class="dropdown-item">
            <i class="navBarIcon bi bi-box-arrow-left"></i>
            <span class="navBarFont">Exit Game</span>
          </a>
        </li>
      </ul>
    </template>
  </li>
</template>

<style scoped>
.dropdown-menu {
  --bs-dropdown-bg: #C1E5FCEF !important;
  --bs-dropdown-border-color: none !important;
  --bs-dropdown-link-color: #0d59be !important;
  --bs-dropdown-link-hover-color: #ffffff !important;
  --bs-dropdown-link-hover-bg: rgba(245, 249, 255, 0.27) !important;
  min-width: 0;
}

.navBarFont {
  font-size: 1.72rem;
  margin-left: 0.4rem;
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