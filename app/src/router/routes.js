
const routes = [
  // HOME
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: "home", component: () => import('pages/IndexPage.vue') }
    ]
  },

  // ABOUT
  {
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: "aboutPage", component: () => import('pages/AboutPage.vue') }
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

  // FEDIVERSE DASHBOARD
  {
    path: '/fediverse',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: "fediverseDashboard", component: () => import('pages/FediverseDashboardPage.vue') }
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
