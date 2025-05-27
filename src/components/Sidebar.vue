<template>
  <nav class="sidebar">
    <h2 class="logo">⚽ BookingLapangan</h2>
    <ul class="menu">
      <li><router-link to="/">🏠 Beranda</router-link></li>
      <li><router-link to="/cari-lapangan">🔍 Cari Lapangan</router-link></li>
      <li><router-link to="/pilih-lapangan">📋 Pilih Lapangan</router-link></li>
      <li><router-link to="/pilih-tanggal-jam">🕒 Tanggal & Jam</router-link></li>
      <li><router-link to="/booking">📆 Booking</router-link></li>
      <li><router-link to="/konfirmasi-bayar">💳 Konfirmasi</router-link></li>
      <li><router-link to="/history-booking">📚 History</router-link></li>
      <li><router-link to="/riwayat">🧾 Riwayat</router-link></li>
      <li><router-link to="/akun-saya">👤 Akun Saya</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.sidebar {
  width: 240px;
  height: 100vh;
  background: linear-gradient(to bottom, #2c3e50, #34495e);
  color: #fff;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}
.logo {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 30px;
  color: #ecf0f1;
}
.menu {
  list-style: none;
  padding: 0;
}
.menu li {
  margin: 12px 0;
}
.menu a {
  text-decoration: none;
  color: #ecf0f1;
  display: block;
  padding: 10px 15px;
  border-radius: 8px;
  transition: 0.3s;
}
.menu a:hover {
  background-color: #1abc9c;
  color: white;
}
.router-link-exact-active {
  background-color: #1abc9c;
  color: white;
  font-weight: bold;
}
</style>