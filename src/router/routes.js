
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/Home', component: () => import('pages/HomePage.vue') },
      { path: '/Calendar', component: () => import('pages/CalendarPage.vue') },
      { path: '/Charts', component: () => import('pages/ChartsPage.vue') },
      { path: '/Clubs', component: () => import('pages/ClubsPage.vue') },
      { path: '/Calls', component: () => import('pages/CallsPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
