import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ showMenu = false }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-[1000px] items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/home">
          <img src="/images/logo.png" alt="Video Belajar" className="h-8 sm:h-10" />
        </Link>
        {showMenu && (
          <>
            <nav className="hidden items-center gap-6 md:flex">
              <span className="text-sm font-medium text-muted">Kategori</span>
              <img src="/images/profile-pic.png" alt="Profil" className="h-10 w-10 rounded-lg object-cover" />
            </nav>
            <button
              className="rounded border border-gray-300 px-3 py-1 text-sm md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              ☰
            </button>
          </>
        )}
      </div>
      {showMenu && open && (
        <div className="flex items-center gap-3 border-t border-gray-100 px-4 py-3 md:hidden">
          <img src="/images/profile-pic.png" alt="Profil" className="h-9 w-9 rounded-lg object-cover" />
          <span className="text-sm font-medium text-muted">Kategori</span>
        </div>
      )}
    </header>
  )
}
