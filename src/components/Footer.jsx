const columns = [
  { title: 'Kategori', items: ['Digital & Teknologi', 'Pemasaran', 'Manajemen Bisnis', 'Pengembangan Diri', 'Desain'] },
  { title: 'Perusahaan', items: ['Tentang Kami', 'FAQ', 'Kebijakan Privasi', 'Ketentuan Layanan', 'Bantuan'] },
  { title: 'Komunitas', items: ['Tips Sukses', 'Blog'] },
]
const socials = ['linkedin', 'facebook', 'instagram', 'twitter']

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <img src="/images/logo.png" alt="Video Belajar" className="h-9" />
            <p className="mt-3 font-semibold">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
            <p className="mt-2 text-sm">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p className="text-sm text-muted">+62-877-7123-1234</p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-2 font-semibold">{col.title}</h3>
                <ul className="space-y-1 text-sm text-muted">
                  {col.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="my-5 h-px bg-gray-300" />
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm">@2023 Gerobak Sayur All Rights Reserved.</p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <span key={s} className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-400">
                <img src={`/images/${s}-icon.png`} alt={s} className="h-3.5 w-3.5" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
