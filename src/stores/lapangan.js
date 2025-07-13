import { defineStore } from 'pinia'
import axios from 'axios'

export const useLapanganStore = defineStore('lapangan', {
  state: () => ({
    list: [],
  }),

  actions: {
    async fetchAll() {
      const res = await axios.get('https://3a6f8d52-f3ae-4e7d-9509-d4fc444746bf-00-17jtiij150rpg.sisko.replit.dev/lapangan')
      this.list = res.data
    },

    addLapangan(data) {
      this.list.push(data)
    },

    deleteLapangan(id) {
      this.list = this.list.filter(l => l.id !== id)
    },
  },
})
