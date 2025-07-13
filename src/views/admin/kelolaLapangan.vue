<template>
  <div class="admin-lapangan">
    <h2 class="title">⚙️ Kelola Lapangan</h2>

    <div class="summary">
      Total Lapangan : <strong>{{ totalLapangan }}</strong>
    </div>

    <div class="form-group">
      <input v-model="newLapangan.nama" placeholder="Nama Lapangan" class="input">
      <input v-model="newLapangan.lokasi" placeholder="Lokasi" class="input">
      <input v-model.number="newLapangan.harga" placeholder="Harga" class="input">
      <button @click="tambahLapangan" class="btn-primary">Tambah</button>
    </div>

    <input v-model="keyword" placeholder="🔍 Cari lapangan..." class="search-box">

    <div v-for="lap in filteredList" :key="lap.id" class="card">
      <label>Nama : </label>
      <input v-model="lap.nama" class="input-sm">
      <label>Lokasi : </label>
      <input v-model="lap.lokasi" class="input-sm">
      <label>Harga : </label>
      <input v-model.number="lap.harga" class="input-sm">
      <div class="actions">
        <button @click="updateLapangan(lap)" class="btn-success">Simpan</button>
        <button @click="hapusLapangan(lap.id)" class="btn-danger">Hapus</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useLapanganStore } from '@/stores/lapangan'

const store = useLapanganStore()
const newLapangan = ref({ nama: '', lokasi: '', harga: 0 })
const keyword = ref('')

onMounted(() => {
  store.fetchAll()
})

const totalLapangan = computed(() => store.list.length)
const filteredList = computed(() => {
  return store.list.filter(l =>
    l.nama.toLowerCase().includes(keyword.value.toLowerCase()) ||
    l.lokasi.toLowerCase().includes(keyword.value.toLowerCase())
  )
})

function tambahLapangan() {
  if (!newLapangan.value.nama || !newLapangan.value.lokasi || newLapangan.value.harga <= 0) {
    alert('Semua data harus diisi dengan benar!')
    return
  }
  store.addLapangan({ ...newLapangan.value })
  newLapangan.value = { nama: '', lokasi: '', harga: 0 }
}

function updateLapangan(lap) {
  if (!lap.nama || !lap.lokasi || lap.harga <= 0) {
    alert('Input tidak valid!')
    return
  }
  store.updateLapangan(lap.id, {
    nama: lap.nama,
    lokasi: lap.lokasi,
    harga: lap.harga
  })
}

function hapusLapangan(id) {
  if (confirm('Yakin ingin menghapus lapangan ini?')) {
    store.deleteLapangan(id)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap');

.admin-lapangan {
  padding: 2rem;
  font-family: 'Fredoka', sans-serif;
}
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}
.summary {
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #334155;
}
.search-box {
  margin-bottom: 1rem;
  padding: 0.6rem 1rem;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  font-size: 0.95rem;
}
.form-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
}
.input-sm {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  margin-bottom: 0.4rem;
  width: 100%;
  font-size: 0.95rem;
}
.card {
  background: #f9fafb;
  border: 1px solid #e2e8f0;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.actions {
  margin-top: 0.5rem;
}
.btn-primary {
  background: #3b82f6;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}
.btn-success {
  background: #10b981;
  color: white;
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 6px;
  margin-right: 0.5rem;
  cursor: pointer;
}
.btn-danger {
  background: #ef4444;
  color: white;
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
