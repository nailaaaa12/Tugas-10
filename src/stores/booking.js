import { defineStore } from 'pinia'
import axios from 'axios'

export const useBookingStore = defineStore('booking', {
  state: () => ({
    bookingList: []
  }),
  actions: {
    async fetchBookings() {
      const res = await axios.get('https://3a6f8d52-f3ae-4e7d-9509-d4fc444746bf-00-17jtiij150rpg.sisko.replit.dev/booking')
      this.bookingList = res.data
    },
    async addBooking(data) {
      const res = await axios.post('https://3a6f8d52-f3ae-4e7d-9509-d4fc444746bf-00-17jtiij150rpg.sisko.replit.dev/booking', data)
      this.bookingList.push(res.data)
    }
  }
})