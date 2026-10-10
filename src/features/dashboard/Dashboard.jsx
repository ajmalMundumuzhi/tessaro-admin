
import {
  UserRound,
  Eye,
  ThumbsUp,
  Bug,
  Download,
  Search,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import StatCard from './StatCard'

import BackupPanel from './BackupPanel'
import UsersTable from './UsersTable'

const sales = [
  828, 633.2, 357.97, 439, 817.17, 16284.83,
  2356.65, 2049, 349, 0, 0, 0,
]

const orders = [
  {
    invoice: '#ORD1789126601',
    date: '11 Sep 2026',
    name: 'Midhun M.S',
    address: 'Cristhubhavan vellimon',
    status: 'Payment_pending',
    payment: 'Unpaid',
    total: '₹649',
  },
  {
    invoice: '#ORD1788897581',
    date: '09 Sep 2026',
    name: 'ANTONYRAJ',
    address: 'A3 FINANCIAL SERVICES, PALAKKAD',
    status: 'Pending',
    payment: 'Paid',
    total: '₹349',
  },
  {
    invoice: '#ORD1788250227',
    date: '01 Sep 2026',
    name: 'rthhsh hsgh',
    address: 'gad ta 516',
    status: 'Payment_pending',
    payment: 'Unpaid',
    total: '₹509',
  },
  {
    invoice: '#ORD1788071517',
    date: '30 Aug 2026',
    name: 'anil thoma',
    address: 'koyickal house moozhoor',
    status: 'Pending',
    payment: 'Paid',
    total: '₹500',
  },
  {
    invoice: '#ORD1787559488',
    date: '24 Aug 2026',
    name: 'Abin Roy',
    address: 'Madathil house',
    status: 'Payment_pending',
    payment: 'Unpaid',
    total: '₹666.47',
  },
]

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

const money = (value) =>
  `₹${value.toLocaleString('en-IN', {
    maximumFractionDigits: 2,
  })}`

export default function Dashboard() {
  const maxSales = Math.max(...sales, 1)

  return (
    <div className="space-y-5">
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-4">
        <StatCard
          title="Total Orders"
          value="142"
          icon={UserRound}
          accent="orange"
        />
        <StatCard
          title="Monthly Orders"
          value="0"
          icon={Eye}
          accent="blue"
        />
        <StatCard
          title="Total Income"
          value="₹0"
          icon={ThumbsUp}
          accent="green"
        />
        <StatCard
          title="Total Users"
          value="743"
          icon={Bug}
          accent="red"
        />
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-800">
            Monthly Paid Sales
          </h2>
          <button
            type="button"
            aria-label="Download sales chart"
            className="text-slate-500 hover:text-indigo-600"
          >
            <Download size={19} />
          </button>
        </div>

        <div className="mt-8 flex h-[300px] gap-3 md:h-[390px]">
          <div className="flex flex-col justify-between pb-7 text-right text-xs text-slate-400">
            {[20000, 16000, 12000, 8000, 4000, 0].map((value) => (
              <span key={value}>{money(value)}</span>
            ))}
          </div>

          <div className="relative flex min-w-0 flex-1 items-end justify-around border-b border-slate-200 pb-0">
            {[0, 4000, 8000, 12000, 16000, 20000].map((value) => (
              <div
                key={value}
                className="pointer-events-none absolute left-0 right-0 border-t border-dashed border-slate-200"
                style={{ bottom: `${(value / 20000) * 100}%` }}
              />
            ))}

            {sales.map((value, index) => (
              <div
                key={months[index]}
                className="z-10 flex h-full min-w-0 flex-1 flex-col items-center justify-end px-0.5"
              >
                <span className="mb-2 hidden whitespace-nowrap text-[10px] text-slate-600 sm:block md:text-xs">
                  {money(value)}
                </span>
                <div
                  className="w-full max-w-[70px] rounded-t-xl bg-gradient-to-t from-blue-300 to-blue-500 opacity-85"
                  style={{
                    height: `${Math.max((value / maxSales) * 72, 0.5)}%`,
                  }}
                  title={`${months[index]}: ${money(value)}`}
                />
                <span className="mt-3 pb-2 text-[10px] text-slate-500 sm:text-xs">
                  {months[index]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between gap-4 px-5 py-5">
          <h2 className="text-lg font-semibold text-slate-800">Orders</h2>
          <label className="flex w-44 items-center gap-2 border-b border-slate-200 pb-2">
            <input
              placeholder="Search here..."
              className="w-full bg-transparent text-sm outline-none"
              aria-label="Search orders"
            />
            <Search size={18} className="text-slate-500" />
          </label>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] border-collapse text-left text-sm">
            <thead className="bg-slate-200/80 text-xs font-semibold uppercase tracking-wide text-slate-800">
              <tr>
                {[
                  '#',
                  'Invoice',
                  'Date',
                  'Name',
                  'Address',
                  'Status',
                  'Payment Status',
                  'Total',
                ].map((heading) => (
                  <th key={heading} className="px-5 py-4">{heading}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order.invoice}
                  className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50"
                >
                  <td className="px-5 py-5 text-slate-500">{index + 1}</td>
                  <td className="whitespace-nowrap px-5 py-5 font-medium text-indigo-600">
                    {order.invoice}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 text-slate-500">
                    {order.date}
                  </td>
                  <td className="px-5 py-5 font-medium text-slate-800">
                    {order.name}
                  </td>
                  <td className="max-w-48 px-5 py-5 text-slate-500">
                    {order.address}
                  </td>
                  <td className="px-5 py-5">
                    <span
                      className={`whitespace-nowrap rounded-md px-2.5 py-2 text-xs ${
                        order.status === 'Pending'
                          ? 'bg-orange-50 text-orange-600'
                          : 'bg-red-50 text-red-500'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className={`whitespace-nowrap px-5 py-5 font-medium ${
                    order.payment === 'Paid'
                      ? 'text-emerald-600'
                      : 'text-orange-500'
                  }`}>
                    {order.payment}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 text-slate-500">
                    {order.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-sm text-slate-500">
          <span>Showing 1–5 of 142 entries (demo data)</span>
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Previous page" className="rounded-lg border p-2 hover:bg-slate-50">
              <ChevronLeft size={17} />
            </button>
            <button type="button" className="rounded-lg bg-indigo-600 px-3 py-2 text-white">
              1
            </button>
            <button type="button" className="rounded-lg border px-3 py-2 hover:bg-slate-50">
              2
            </button>
            <button type="button" aria-label="Next page" className="rounded-lg border p-2 hover:bg-slate-50">
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </section>
      <section className="pt-8">
        <BackupPanel />
      </section>

      <section className="pt-8">
        <UsersTable />
      </section>
    </div>
    
  )
}
