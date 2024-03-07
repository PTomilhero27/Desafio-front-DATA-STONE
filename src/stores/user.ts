import type { User } from './models/user'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null as User | null
  }),
  getters: {
    isAuthenticated: (state) => !!state.userData?.id
  },
  actions: {
    setUser(data: User) {
      this.userData = data
    },
    clearUser() {
      this.userData = null
    }
  }
})
