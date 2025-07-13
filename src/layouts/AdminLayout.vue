<template>
  <div class="admin-wrapper">
    <header class="admin-header">
      <h1>Dashborad Admin</h1>
      <nav class="admin-nav">
        <router-link to="/admin/permintaan" class="nav-link">📥 Permintaan Booking</router-link>
        <router-link to="/admin/lapangan" class="nav-link">⚙️ Kelola Lapangan</router-link>
        <router-link to="/" class="nav-link">🏠 Kembali ke Home</router-link>
      </nav>
    </header>
    <main class="admin-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap');
.admin-wrapper {
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: 'Fredoka', sans-serif;
}

.admin-header {
  background: #1d4ed8;
  color: white;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.admin-header h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.admin-nav {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.nav-link {
  background: #2563eb;
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.nav-link:hover {
  background: #1e40af;
}

.admin-content {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}
</style>