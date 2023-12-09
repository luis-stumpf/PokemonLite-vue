<script setup>
import NavBarElement from '@/components/Navbar/NavBarElement.vue';

</script>

<template>
  <nav class="custom-navbar navbar navbar-expand navbar-dark">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <NavBarElement name="Home" />
        <NavBarElement name="Rules" />
        <!--
          <NavBarElement name="Chat" />
        -->
        <NavBarElement name="Restart" />
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  background-color: rgba(193, 229, 252, 0.94);
  height: 5.5%
}

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

.navbar-toggler {
  padding: 0 !important;
}

</style>