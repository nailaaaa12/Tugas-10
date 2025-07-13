import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    login(userData) {
      this.user = {
        name: userData.username,
        role: 'admin'
      }
    },
    logout() {
      this.user = null
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    isAdmin: (state) => state.user?.role === 'admin'
  }
})
