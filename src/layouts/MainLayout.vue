<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="64"
      class="all-Section"
    >
      <q-list>
        <q-item-label
          class="all-avatar-haeder"
          clickable
          target="_blank"
        >
          <q-img class="fixed-top avatar">
            <div class="bottom bg-transparent">
              <q-avatar size="32px" class="q-mb-sm">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </div>
          </q-img>
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'quasar.dev',
    icon: 'las la-home',
    link: '/Home'
  },
  {
    title: 'Calendar',
    caption: 'github.com/quasarframework',
    icon: 'las la-calendar',
    link: '/Calendar'
  },
  {
    title: 'Chats',
    caption: 'chat.quasar.dev',
    icon: 'las la-comments',
    link: '/Charts'
  },
  {
    title: 'Clubs',
    caption: 'forum.quasar.dev',
    icon: 'las la-users',
    link: '/Clubs'
  },
  {
    title: 'Calls',
    caption: '@quasarframework',
    icon: 'las la-phone',
    link: '/Calls'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style lang="scss">
  .all-menu{
    width: 64px;
  }
  .all-avatar-haeder{
    padding-bottom: 64px;
    background-color: #FFFFFF;
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.06);
    height: 50px;
  }
  .all-Section{
    background-color:#EEEEF0;
  }
  .avatar{
    height: 50px;
  }
</style>
