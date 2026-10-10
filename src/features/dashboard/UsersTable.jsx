
import { useMemo, useState } from 'react'
import {
  Search,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const initialUsers = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: 'Guest User',
  lastSeen: '1 second ago',
  phone: '',
  role: 'user',
  isAdmin: false,
}))

export default function UsersTable() {
  const [users, setUsers] = useState(initialUsers)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase()

    return users.filter((user) =>
      `${user.name} ${user.phone} ${user.role}`
        .toLowerCase()
        .includes(query)
    )
  }, [users, search])

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * pageSize
  const visibleUsers = filteredUsers.slice(start, start + pageSize)

  const toggleAdmin = (id) => {
    setUsers((current) =>
      current.map((user) =>
        user.id === id
          ? {
              ...user,
              isAdmin: !user.isAdmin,
              role: user.isAdmin ? 'user' : 'admin',
            }
          : user
      )
    )
  }

  return (
    <section className="w-full">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-xl font-medium text-slate-800">Users Table</h2>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2">
            <span className="sr-only">Search users</span>
            <input
              value={search}
              onChange={(event) => {
                setSearch(event.target.value)
                setPage(1)
              }}
              placeholder="Search here..."
              className="w-36 bg-transparent text-sm outline-none placeholder:text-slate-500 md:w-44"
            />
            <Search size={19} className="text-slate-500" />
          </label>

          <button
            type="button"
            aria-label="More user table options"
            className="text-slate-500 hover:text-slate-800"
          >
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] border-collapse text-left">
            <thead className="bg-slate-200/80 text-sm font-semibold uppercase text-slate-900">
              <tr>
                <th className="px-6 py-5">#</th>
                <th className="px-6 py-5">Avatar</th>
                <th className="px-6 py-5">Name</th>
                <th className="px-6 py-5">Last Seen</th>
                <th className="px-6 py-5">Phone</th>
                <th className="px-6 py-5">Role</th>
                <th className="px-6 py-5">Change to Admin</th>
              </tr>
            </thead>

            <tbody>
              {visibleUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50"
                >
                  <td className="px-6 py-4 text-slate-500">{user.id}</td>

                  <td className="px-6 py-3">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-xl text-indigo-400">
                      GU
                      <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
                    </div>
                  </td>

                  <td className="px-6 py-4 font-medium text-slate-900">
                    {user.name}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-slate-500">
                    {user.lastSeen}
                  </td>

                  <td className="px-6 py-4 text-slate-500">
                    {user.phone || '—'}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-2 text-sm ${
                        user.isAdmin
                          ? 'bg-violet-100 text-violet-700'
                          : 'bg-sky-100 text-sky-600'
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={user.isAdmin}
                      aria-label={`Toggle admin role for ${user.name} ${user.id}`}
                      onClick={() => toggleAdmin(user.id)}
                      className={`relative h-6 w-12 rounded-full border transition ${
                        user.isAdmin
                          ? 'border-indigo-600 bg-indigo-600'
                          : 'border-slate-300 bg-slate-100'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
                          user.isAdmin ? 'left-6' : 'left-1'
                        }`}
                      />
                    </button>
                  </td>
                </tr>
              ))}

              {visibleUsers.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 text-sm text-slate-500">
          <label className="flex items-center gap-2">
            Show
            <select
              value={pageSize}
              onChange={(event) => {
                setPageSize(Number(event.target.value))
                setPage(1)
              }}
              className="rounded-full border border-slate-300 bg-white px-3 py-2 outline-none"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
            entries
          </label>

          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setPage((p) => p - 1)}
              className="rounded-lg p-2 hover:bg-slate-100 disabled:opacity-40"
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1)
              .filter((number) =>
                number === 1 ||
                number === totalPages ||
                Math.abs(number - currentPage) <= 2
              )
              .map((number, index, pages) => (
                <span key={number} className="flex items-center gap-1">
                  {index > 0 && number - pages[index - 1] > 1 && (
                    <span className="px-1">…</span>
                  )}
                  <button
                    type="button"
                    onClick={() => setPage(number)}
                    className={`min-w-9 rounded-lg px-3 py-2 ${
                      currentPage === number
                        ? 'bg-indigo-600 text-white'
                        : 'hover:bg-slate-100'
                    }`}
                  >
                    {number}
                  </button>
                </span>
              ))}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="rounded-lg p-2 hover:bg-slate-100 disabled:opacity-40"
              aria-label="Next page"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <span>
            {filteredUsers.length
              ? `${start + 1}–${Math.min(start + pageSize, filteredUsers.length)}`
              : '0'}{' '}
            of {filteredUsers.length} entries
          </span>
        </div>
      </div>

      <p className="mt-2 text-xs text-slate-400">
        Demo users only. Role toggles do not update real admin permissions.
      </p>
    </section>
  )
}
