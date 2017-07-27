import AdminLayout from '../components/admin/layout/Layout'
import AdminHome from '../components/admin/pages/Home'
// Use approach below instead above to implement lazy loading route components
// const AdminHome = function (resolve) {
//   require(['../components/admin/pages/Home.vue'], resolve)
// }
import AdminSettings from '../components/admin/pages/Settings'

import PublicLayout from '../components/public/layout/Layout'
import PublicIndex from '../components/public/pages/Index'
import Features from '../components/public/pages/Features'
import Error404 from '../components/public/pages/Error404'

const routes = [
  {
    path: '/',
    component: PublicLayout,
    meta: {
      localized: true
    },
    children: [
      {
        name: 'public-index',
        path: '',
        component: PublicIndex
      },
      {
        name: 'features',
        path: '/features',
        component: Features
      },
      {
        name: 'error404',
        path: '/error404',
        component: Error404
      }
    ]
  },
  { // administrative zone
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        name: 'admin-home',
        path: '/home',
        component: AdminHome
      },
      {
        name: 'admin-settings',
        path: '/settings',
        component: AdminSettings
      }
    ]
  }
]

export default routes
