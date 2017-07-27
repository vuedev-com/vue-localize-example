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

export default {
  '/': {
    component: PublicLayout,
    titleKey: false,
    localized: true,
    subRoutes: {
      '/': {
        name: 'public-index',
        titleKey: 'public.index.title',
        component: PublicIndex
      },
      '/features': {
        name: 'features',
        titleKey: 'f.title',
        component: Features
      },
      '/error404': {
        name: 'error404',
        titleKey: 'public.err404.title',
        component: Error404
      }
    }
  },
  '/admin': { // administrative zone
    component: AdminLayout,
    subRoutes: {
      '/home': {
        name: 'admin-home',
        titleKey: 'admin.home.title',
        component: AdminHome
      },
      '/settings': {
        name: 'admin-settings',
        titleKey: 'admin.settings.title',
        component: AdminSettings
      }
    }
  }
}
