<template>
  <section class="home-container">
    <div class="home-box">
      <h1 class="home-title">
        Selamat Datang di <span class="highlight">OlahragaKita</span>
      </h1>
      <p class="home-subtitle">Pesan lapangan favoritmu dengan mudah dan cepat, hanya dengan beberapa klik!</p>
      <router-link to="/booking" class="home-button">
        🎾 Mulai Booking Sekarang
      </router-link>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap');

.home-container {
  font-family: 'Fredoka', sans-serif;
  background: linear-gradient(145deg, #c0e0ff, #e2f0ff);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-box {
  text-align: center;
  background-color: white;
  padding: 2rem 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 600px;
}

.home-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1rem;
}

.highlight {
  color: #3b82f6;
}

.home-subtitle {
  font-size: 1.1rem;
  color: #374151;
  margin-bottom: 2rem;
}

.home-button {
  display: inline-block;
  background-color: #3b82f6;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.home-button:hover {
  background-color: #2563eb;
  transform: scale(1.05);
}
</style>
