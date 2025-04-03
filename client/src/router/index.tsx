import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import BasicLayout from '@/pages/layouts/BasicLayout'
import AdminLayout from '@/pages/layouts/AdminLayout'
import Home from '@/pages/home'
import About from '@/pages/about'
import Dashboard from '@/pages/admin/dashboard'
import UserManagement from '@/pages/admin/users'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <BasicLayout />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/about',
            element: <About />,
          },
        ]
      },
      // 可以添加其他不使用 BasicLayout 的路由
      {
        path: '/admin',
        element: <AdminLayout />,
        children: [
          {
            path: '/admin/dashboard',
            element: <Dashboard />
          },
          {
            path: '/admin/users',
            element: <UserManagement />
          }
        ]
      }
    ],
  },
])

export default router