<template>
  <div class="booking-page">
    <h2 class="booking-title">📅 Formulir Booking Lapangan</h2>
    <form @submit.prevent="submitBooking" class="booking-form">
      <input v-model="form.nama" type="text" placeholder="Nama Anda" required class="form-input" />
      <select v-model="form.lapanganId" required class="form-input">
        <option disabled value="">Pilih Lapangan</option>
        <option v-for="lap in lapanganStore.list" :key="lap.id" :value="lap.id">
          {{ lap.nama }} - {{ lap.lokasi }}
        </option>
      </select>
      <input v-model="form.hari" type="text" placeholder="Hari (misal: Senin)" required class="form-input" />
      <input v-model="form.tanggal" type="date" required class="form-input" />
      <input v-model="form.jam" type="time" required class="form-input" />
      <button type="submit" class="submit-btn">Kirim Booking</button>
    </form>
    <div v-if="showSuccess" class="modal-success">
      <div class="modal-content">
        <h3>✅ Booking Berhasil!</h3>
        <p>Silakan tunggu konfirmasi dari admin.</p>
        <button @click="showSuccess = false">Tutup</button>
      </div>
    </div>
    <div class="booking-history">
      <h3 class="history-title">📖 Riwayat Booking</h3>
      <div v-if="bookings.length === 0" class="empty">Belum ada booking yang tercatat.</div>
      <div v-for="item in bookings" :key="item.id" class="booking-card">
        <p><strong>Nama : </strong> {{ item.nama }}</p>
        <p><strong>Hari : </strong> {{ item.hari }} | <strong>Tanggal : </strong> {{ item.tanggal }} | <strong>Jam : </strong> {{ item.jam }}</p>
        <p><strong>Lapangan : </strong> {{ getLapanganNama(item.lapanganId) }}</p>
        <p><strong>Status : </strong> 
          <span :class="item.status === 'disetujui' ? 'status-approved' : 'status-pending'">
            {{ item.status }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useLapanganStore } from '@/stores/lapangan'

const lapanganStore = useLapanganStore()
const form = ref({ nama: '', lapanganId: '', hari: '', tanggal: '', jam: '' })
const bookings = ref([])
const showSuccess = ref(false)

onMounted(() => {
  lapanganStore.fetchAll()
  fetchBookings()
})

function fetchBookings() {
  axios.get('https://3a6f8d52-f3ae-4e7d-9509-d4fc444746bf-00-17jtiij150rpg.sisko.replit.dev/booking')
    .then(res => {
      bookings.value = res.data
    })
}

function submitBooking() {
  if (!form.value.nama || !form.value.lapanganId || !form.value.tanggal || !form.value.jam || !form.value.hari) {
    alert('Semua isian harus lengkap!')
    return
  }
  axios.post('https://3a6f8d52-f3ae-4e7d-9509-d4fc444746bf-00-17jtiij150rpg.sisko.replit.dev/booking', {
    ...form.value,
    status: 'menunggu'
  }).then(() => {
    showSuccess.value = true
    form.value = { nama: '', lapanganId: '', hari: '', tanggal: '', jam: '' }
    fetchBookings()
  })
}

function getLapanganNama(id) {
  const lap = lapanganStore.list.find(l => l.id === id)
  return lap ? lap.nama : 'Tidak ditemukan'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap');

.booking-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Fredoka', sans-serif;
}
.booking-title, .history-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.25rem;
  color: #1e3a8a;
}
.booking-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #f1f5f9;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.04);
}
.form-input {
  padding: 0.8rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
}
.submit-btn {
  background: #3b82f6;
  color: white;
  padding: 0.75rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.submit-btn:hover {
  background: #2563eb;
}
.booking-history {
  margin-top: 2rem;
}
.booking-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.03);
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
  color: #64748b;
  font-style: italic;
}

.modal-success {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  font-family: 'Fredoka', sans-serif;
}

.modal-content h3 {
  color: #10b981;
  margin-bottom: 0.5rem;
}

.modal-content button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
