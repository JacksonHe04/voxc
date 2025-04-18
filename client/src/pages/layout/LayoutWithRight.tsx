import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside>
        <h2>管理后台</h2>
      </aside>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  )
}