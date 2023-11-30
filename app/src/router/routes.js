
const routes = [
  // HOME
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: "home", component: () => import('pages/IndexPage.vue') }
    ]
  },

  // POLICY PAGE
  {
    path: '/legal/:policy',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: "policyPage", component: () => import('pages/PolicyPage.vue') }
    ]
  },

  // CATCHALL
  // Always leave this as last one
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
