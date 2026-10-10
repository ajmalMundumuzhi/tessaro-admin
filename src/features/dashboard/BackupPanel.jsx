
import { Database, Download } from 'lucide-react'

export default function BackupPanel() {
  return (
    <section className="relative mx-auto w-full max-w-[760px] overflow-hidden rounded-[26px] bg-gradient-to-br from-[#111a2e] to-[#1e293b] px-6 py-10 text-center text-white shadow-2xl md:px-12 md:py-12">
      <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/[0.04]" />

      <Database
        size={58}
        strokeWidth={2.5}
        className="relative mx-auto mb-5 text-sky-400"
        fill="currentColor"
      />

      <h2 className="relative text-2xl font-bold md:text-3xl">
        Download Website Backup
      </h2>

      <p className="relative mx-auto mt-4 max-w-[640px] text-sm leading-7 text-blue-100 md:text-lg">
        You can download your complete website backup including all products,
        categories, orders, customers, and settings for future use and security.
      </p>

      <button
        type="button"
        onClick={() =>
          window.alert(
            'Website backup export will be connected to the backend later.'
          )
        }
        className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 font-semibold text-white shadow-xl shadow-cyan-500/20 transition hover:brightness-110"
      >
        <Download size={20} />
        Download Backup
      </button>
    </section>
  )
}
