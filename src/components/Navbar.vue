<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-logo">Olahraga Kita</router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link" exact-active-class="active-link">Home</router-link>
        <router-link to="/booking" class="nav-link" exact-active-class="active-link">Booking</router-link>
        <router-link to="/login" class="nav-link" exact-active-class="active-link">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap');

.navbar {
  background-color: #1e3a8a;
  padding: 1rem 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  font-family: 'Fredoka', sans-serif;
}

.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #cbd5e1;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ffffff;
}

.active-link {
  color: #facc15;
  font-weight: 700;
}
</style>
