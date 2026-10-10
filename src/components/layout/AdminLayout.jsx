
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <div className="min-h-screen bg-[#f6f8fb]">
      <Sidebar
        collapsed={collapsed}
        onNavigate={() => {
        }}
      />

      <div
        className={`min-h-screen transition-[margin] duration-300 ${
          collapsed ? 'ml-[76px]' : 'ml-[240px]'
        }`}
      >
        <Header onToggleSidebar={() => setCollapsed(!collapsed)} />

        <main className="p-4 md:p-7">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
