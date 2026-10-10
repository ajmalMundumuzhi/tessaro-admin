
import { useState } from 'react'
import { Menu, Search, Sun, Palette, Bell } from 'lucide-react'

export default function Header({ onToggleSidebar }) {
  const [search, setSearch] = useState('')

  return (
    <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-slate-200 bg-white px-5 md:px-8">
      <button
        type="button"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
        className="rounded-lg p-2 text-indigo-600 hover:bg-slate-50"
      >
        <Menu size={27} />
      </button>

      <div className="ml-auto flex items-center gap-4 md:gap-7">
        <label className="flex w-40 items-center gap-2 rounded-full bg-slate-100 px-3 py-2 md:w-72">
          <Search size={18} className="shrink-0 text-slate-400" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search here..."
            aria-label="Search"
            className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </label>

        <button
          type="button"
          aria-label="Light theme"
          className="text-amber-400 transition hover:scale-110"
        >
          <Sun size={23} />
        </button>

        <button
          type="button"
          aria-label="Appearance settings"
          className="text-blue-500 transition hover:scale-110"
        >
          <Palette size={23} />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative text-slate-500"
        >
          <Bell size={23} />
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-fuchsia-500" />
        </button>
      </div>
    </header>
  )
}
