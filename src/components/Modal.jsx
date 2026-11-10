import { useEffect } from 'react'

export default function Modal({ title, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="max-h-[90vh] w-full max-w-[480px] overflow-y-auto rounded-md bg-white p-5 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <h2 className="font-heading text-xl font-semibold text-ink">{title}</h2>
          <button type="button" onClick={onClose} aria-label="Tutup" className="text-xl leading-none text-muted hover:text-ink">
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
