<script setup>
defineProps({
  gameState: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nav class="custom-navbar navbar navbar-expand navbar-dark">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <i class="bi bi-gear"></i>
            <span class="navBarFont">Settings</span>
          </a>
          <!-- TO DO: save, reload, undo, redo, etc -->
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <!-- disable -->
            <li>
              <a class="dropdown-item" href="#">
                <i class="navBarIcon bi bi-download"></i>
                <span class="navBarFont">Save</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="navBarIcon bi bi-upload"></i>
                <span class="navBarFont">Load</span>
              </a>
            </li>
            <!-- disable -->
            <li>
              <a class="dropdown-item" href="#">
                <i class="navBarIcon bi bi-arrow-counterclockwise"></i>
                <span class="navBarFont">Undo</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="navBarIcon bi bi-arrow-clockwise"></i>
                <span class="navBarFont">Redo</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="navBarIcon bi bi-box-arrow-left"></i>
                <span class="navBarFont">Exit Game</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">
            <i class="bi bi-house"></i>
            <span class="navBarFont">Home</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">
            <i class="bi bi-book"> </i>
            <span class="navBarFont">Rules & History</span>
          </a>
        </li>
        <button type="button" class="chat-button btn hoverable" id="chatButton">
          <i class="bi bi-chat-dots"></i>
          <span class="navBarFont">Chat</span>
        </button>
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