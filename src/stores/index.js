import { defineStore } from 'pinia'

export const useStore = defineStore('MainStore', {
  state: () => {
    return {
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
  actions: {
    changeName() {
      this.name = 'Dima'
    },
  },
  getters: {
    nameWithFamily: (state) => state.name + ' Mironenko',
  },
})
