<template>
  <div class="admin-booking">
    <h2 class="title">📥 Permintaan Booking</h2>
    <div v-if="suksesPesan" class="notif-sukses">
      {{ suksesPesan }}
    </div>
    <div class="controls">
      <select v-model="filterStatus" class="select">
        <option value="semua">Semua Status</option>
        <option value="menunggu">Menunggu</option>
        <option value="disetujui">Disetujui</option>
      </select>
      <select v-model="sortBy" class="select">
        <option value="tanggal">Urutkan: Tanggal</option>
        <option value="nama">Urutkan: Nama</option>
      </select>
    </div>
    <div v-if="filteredBookings.length === 0" class="empty">Belum ada permintaan booking.</div>
    <div v-for="item in filteredBookings" :key="item.id" class="card">
      <div class="info">
        <p><strong>Nama : </strong> {{ item.nama }}</p>
        <p><strong>Hari : </strong> {{ item.hari }} | <strong>Tanggal : </strong> {{ item.tanggal }} | <strong>Jam : </strong> {{ item.jam }}</p>
        <p><strong>Lapangan : </strong> {{ getLapanganNama(item.lapanganId) }}</p>
        <p><strong>Status : </strong>
          <span :class="item.status === 'disetujui' ? 'status-approved' : 'status-pending'">
            {{ item.status }}
          </span>
        </p>
      </div>
      <div class="actions">
        <template v-if="item.status === 'menunggu'">
          <button @click="setujuiBooking(item.id)" class="btn-approve">Setujui</button>
          <button @click="tolakBooking(item.id)" class="btn-reject">Tolak</button>
        </template>
        <template v-else>
          <button class="btn-finish" disabled>Selesai</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useLapanganStore } from '@/stores/lapangan'

const store = useLapanganStore()
const bookings = ref([])
const filterStatus = ref('semua')
const sortBy = ref('tanggal')
const suksesPesan = ref('')

onMounted(() => {
  store.fetchAll()
  fetchBookings()
})

async function fetchBookings() {
  const res = await axios.get('https://3a6f8d52-f3ae-4e7d-9509-d4fc444746bf-00-17jtiij150rpg.sisko.replit.dev/booking')
  bookings.value = res.data
}

const filteredBookings = computed(() => {
  let data = [...bookings.value]
  if (filterStatus.value !== 'semua') {
    data = data.filter(b => b.status === filterStatus.value)
  }
  if (sortBy.value === 'tanggal') {
    data.sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal))
  } else if (sortBy.value === 'nama') {
    data.sort((a, b) => a.nama.localeCompare(b.nama))
  }
  return data
})

function getLapanganNama(id) {
  const lap = store.list.find(l => l.id === id)
  return lap ? lap.nama : 'Tidak ditemukan'
}

function setujuiBooking(id) {
  axios.patch(`https://3a6f8d52-f3ae-4e7d-9509-d4fc444746bf-00-17jtiij150rpg.sisko.replit.dev/booking/${id}`, { status: 'disetujui' })
    .then(() => {
      suksesPesan.value = '✅ Booking telah disetujui!'
      fetchBookings()
      setTimeout(() => suksesPesan.value = '', 3000)
    })
}

function tolakBooking(id) {
  axios.delete(`https://3a6f8d52-f3ae-4e7d-9509-d4fc444746bf-00-17jtiij150rpg.sisko.replit.dev/booking/${id}`)
    .then(() => {
      suksesPesan.value = '🚫 Booking ditolak dan telah dihapus.'
      fetchBookings()
      setTimeout(() => suksesPesan.value = '', 3000)
    })
}
</script>

<style scoped>
.admin-booking {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Fredoka', sans-serif;
}

.title {
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e3a8a;
  border-left: 5px solid #3b82f6;
  padding-left: 12px;
}

.notif-sukses {
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #10b981;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  margin-bottom: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.select {
  padding: 0.6rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  background: #fff;
}

.card {
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.info {
  flex: 1 1 65%;
  margin-bottom: 0.5rem;
}

.actions {
  flex: 1 1 30%;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.btn-approve {
  background: #10b981;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
}

.btn-reject {
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
}

.btn-finish {
  background: #9ca3af;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: not-allowed;
}

.status-approved {
  color: #10b981;
  font-weight: bold;
}

.status-pending {
  color: #f59e0b;
  font-weight: bold;
}

.empty {
  font-style: italic;
  color: #64748b;
  padding: 1rem;
}
</style>
