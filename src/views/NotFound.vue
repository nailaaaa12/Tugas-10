<template>
  <div class="notfound">
    <h1>🚫 404</h1>
    <p>Oops! Halaman yang kamu cari tidak ditemukan.</p>
    <router-link to="/" class="btn-back">🔙 Kembali ke Beranda</router-link>
  </div>
</template>

<script setup>

</script>

<style scoped>
.notfound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  padding: 2rem;
  color: #334155;
}

.notfound h1 {
  font-size: 5rem;
  margin-bottom: 1rem;
  color: #3b82f6;
  font-weight: 800;
}

.notfound p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn-back {
  background: #3b82f6;
  color: white;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s ease;
}

.btn-back:hover {
  background: #2563eb;
}
</style>
