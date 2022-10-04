import { defineStore } from 'pinia'

export const useChatStore = defineStore('example-store', {
  state: () => ({
    counter: 0,
    listMessage: [
      {
        name: 'me',
        avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
        text: ['hey, how are you?', 'hey, how are you?'],
        sent: true,
        id: 1
      },
      {
        name: 'Jane',
        avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
        text: ['doing fine, how r you?'],
        sent: false,
        id: 2
      }
    ]
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    addMessag (message) {
      if (this.listMessage[this.listMessage.length - 1].name !== 'me') {
        this.listMessage.push({
          name: 'me',
          avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
          text: [],
          sent: true
        })
      }
      this.listMessage[this.listMessage.length - 1].text.push(message)
    }
  }
})
