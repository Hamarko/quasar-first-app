<template>
  <q-item
    clickable
    :to="link"
    class="all-wrapper"
    v-ripple
  >
    <q-item-section
      v-if="icon"
      avatar
      class="all-Icon"
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-p class="all-Icon">{{ title }}</q-item-p>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss">
  .all-wrapper{
    display: flex;
    justify-content: center;
    width: 64px;
    flex-direction: column;
    padding:0px
  }
  .all-Icon{
    color: rgba(0, 0, 0, 0.54);
    padding: 0px;
    align-items: center;
    text-align: center;
  }
</style>
