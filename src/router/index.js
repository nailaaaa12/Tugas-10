import { createRouter, createWebHistory } from 'vue-router'

import Beranda from '../views/Beranda.vue'
import AkunSaya from '../views/AkunSaya.vue'
import Booking from '../views/Booking.vue'
import CariLapangan from '../views/CariLapangan.vue'
import HistoryBooking from '../views/HistoryBooking.vue'
import KonfirmasiDanBayar from '../views/KonfirmasiDanBayar.vue'
import PilihLapangan from '../views/PilihLapangan.vue'
import PilihTanggaldanJam from '../views/PilihTanggaldanJam.vue'
import Riwayat from '../views/Riwayat.vue'

const routes = [
  { path: '/', component: Beranda },
  { path: '/akun-saya', component: AkunSaya },
  { path: '/booking', component: Booking },
  { path: '/cari-lapangan', component: CariLapangan },
  { path: '/history-booking', component: HistoryBooking },
  { path: '/konfirmasi-bayar', component: KonfirmasiDanBayar },
  { path: '/pilih-lapangan', component: PilihLapangan },
  { path: '/pilih-tanggal-jam', component: PilihTanggaldanJam },
  { path: '/riwayat', component: Riwayat },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router