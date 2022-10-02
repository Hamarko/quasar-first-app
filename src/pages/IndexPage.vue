<template>
  <q-page class="all-Wrapper">
    <div class="all-Content-Border">
      <h1>Main drawer</h1>
    </div>
    <div class="all-Content-Main">
      <h1>Content</h1>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style lang="scss">
  .all-Wrapper{
    display: grid;
    grid-template-columns: 352px 1fr;
  }
  .all-Content-Border{
    display: flex;
    background: #F5F5F7;
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.06);
  }
  .all-Content-Main{
    display: flex;
    justify-content: center;
    max-width: 100%;
  }
</style>
