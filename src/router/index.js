import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Booking from '../views/BookingView.vue'
import Login from '../views/LoginView.vue'
import NotFound from '../views/NotFound.vue'

import AdminLayout from '../layouts/AdminLayout.vue'
import PermintaanBooking from '../views/admin/PermintaanBooking.vue'
import KelolaLapangan from '../views/admin/kelolaLapangan.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/booking', name: 'Booking', component: Booking },
  { path: '/login', name: 'Login', component: Login },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: 'permintaan', name: 'PermintaanBooking', component: PermintaanBooking },
      { path: 'lapangan', name: 'KelolaLapangan', component: KelolaLapangan },
      { path: '', redirect: '/admin/permintaan' }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
