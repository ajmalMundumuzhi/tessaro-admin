
import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import Dashboard from './features/dashboard/Dashboard'
import './App.css'

const menuPages = [
  ['Banners', 'banners'],
  ['Product', 'products'],
  ['HSN Codes', 'hsn-codes'],
  ['Order', 'orders'],
  ['Pages', 'pages'],
  ['Brand', 'brands'],
  ['Coupon Codes', 'coupons'],
  ['Reviews', 'reviews'],
  ['Home Brands', 'home-brands'],
  ['Shipping Charges', 'shipping-charges'],
  ['Delivery Partners', 'delivery-partners'],
]

function Placeholder({ title }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-xl font-semibold text-slate-800">{title}</h1>
      <p className="mt-2 text-sm text-slate-500">
        This module will be implemented in its development stage.
      </p>
    </section>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        {menuPages.map(([title, path]) => (
          <Route
            key={path}
            path={path}
            element={<Placeholder title={title} />}
          />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
