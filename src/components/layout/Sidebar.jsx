
import { NavLink } from 'react-router-dom'
import {
  Gauge,
  Images,
  Layers,
  FileText,
  ShoppingCart,
  File,
  Server,
  Tags,
  Star,
  Award,
  Truck,
  Menu,
} from 'lucide-react'

const navigation = [
  { label: 'Dashboard', path: '/', icon: Gauge },
  { label: 'Banners', path: '/banners', icon: Images },
  { label: 'Product', path: '/products', icon: Layers },
  { label: 'HSN Codes', path: '/hsn-codes', icon: FileText },
  { label: 'Order', path: '/orders', icon: ShoppingCart },
  { label: 'Pages', path: '/pages', icon: File },
  { label: 'Brand', path: '/brands', icon: Server },
  { label: 'Coupon Codes', path: '/coupons', icon: Tags },
  { label: 'Reviews', path: '/reviews', icon: Star },
  { label: 'Home Brands', path: '/home-brands', icon: Award },
  { label: 'Shipping Charges', path: '/shipping-charges', icon: Truck },
  { label: 'Delivery Partners', path: '/delivery-partners', icon: Menu },
]

export default function Sidebar({ collapsed, onNavigate }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex flex-col border-r border-slate-100 bg-white transition-all duration-300 ${
        collapsed ? 'w-[76px]' : 'w-[240px]'
      }`}
    >
      <div className="flex h-[72px] shrink-0 items-center justify-center border-b border-slate-100">
        {collapsed ? (
          <span className="text-2xl font-serif text-amber-800">T</span>
        ) : (
          <div className="text-center leading-tight">
            <span className="font-serif text-xl tracking-tight text-amber-800">
              TESAARO
            </span>
            <p className="text-[9px] tracking-[0.2em] text-slate-400">
              JEWELLERY
            </p>
          </div>
        )}
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto px-3 py-6">
        {navigation.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            title={collapsed ? label : undefined}
            onClick={onNavigate}
            className={({ isActive }) =>
              `group flex h-10 items-center rounded-xl transition-colors ${
                collapsed ? 'justify-center' : 'gap-4 px-3'
              } ${
                isActive
                  ? 'bg-[#eeebff] text-[#5145e5]'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
              }`
            }
          >
            <Icon size={22} strokeWidth={2.3} />
            {!collapsed && (
              <span className="text-sm font-medium">{label}</span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="flex h-[68px] shrink-0 items-center justify-center border-t border-slate-100">
        <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-lg font-medium text-indigo-500">
          TU
          <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
        </div>
      </div>
    </aside>
  )
}
