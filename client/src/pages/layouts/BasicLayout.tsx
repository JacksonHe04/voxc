import { Outlet } from 'react-router-dom'

export default function BasicLayout() {
  return (
    <div className="basic-layout">
      <header>
        <nav>
          {/* 导航内容 */}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        {/* 页脚内容 */}
      </footer>
    </div>
  )
}