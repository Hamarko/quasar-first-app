<template>
  <q-page class="all-Wrapper">
    <div class="all-Content-Border">
      <p>Main drawer</p>
    </div>
    <div class="column justify-between">
      <div class="q-pa-md row justify-center">
        <div style="width: 100%; max-width: 800px">
          <q-chat-message
            v-for = "message in listMessage"
            :name = "message.name"
            :avatar = "message.avatar"
            :text="message.text"
            :sent="message.sent"
            :key="message.id"
          />
        </div>
      </div>
      <q-input rounded outlined @keyup.enter="addMessage" v-model="text" label="Send message">
        <q-btn round dense flat icon="las la-paper-plane" @click="addMessage" />
      </q-input>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useChatStore } from 'stores/example-store'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const store = useChatStore()
    const { listMessage } = storeToRefs(store)
    const text = ref('')
    const addMessage = () => {
      store.addMessag(text.value)
      text.value = ''
    }
    return { listMessage, text, addMessage }
  }
})
</script>

<style lang="scss">
  .all-Wrapper{
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  .all-Content-Border{
    display: flex;
    background: #F5F5F7;
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.06);
  }
</style>
