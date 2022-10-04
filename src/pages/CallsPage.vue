<template>
  <q-page class="all-Wrapper">
    <div class="all-Content-Border">
      <p>Main drawer</p>
    </div>
    <div class="all-Content-Main">
      <p>Calls</p>
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
    grid-template-columns: 1fr 3fr;
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
