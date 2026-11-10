import { useState } from 'react'
import Rating from './Rating.jsx'
import { formatPrice } from '../data/courses.js'

export default function CourseCard({ course, onEdit, onDelete }) {
  const { title, description, instructor, role, company, rating, reviews, price, tone, image, category } = course
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <article className="group flex flex-col rounded-lg border border-gray-200 bg-white p-3">
      <div className="relative">
        {imgFailed || !image ? (
          <div className={`flex h-36 w-full items-end rounded-md bg-gradient-to-br p-3 ${tone}`}>
            <span className="line-clamp-2 font-heading text-sm font-semibold text-white/90">{title}</span>
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            onError={() => setImgFailed(true)}
            className="h-36 w-full rounded-md object-cover"
          />
        )}
        <span className="absolute left-2 top-2 rounded bg-white/90 px-2 py-0.5 text-[11px] font-medium text-ink">
          {category}
        </span>
      </div>
      <h3 className="mt-3 font-heading text-[15px] font-semibold leading-tight">{title}</h3>
      <p className="mt-1 line-clamp-2 text-xs text-muted">{description}</p>
      <div className="mt-3 flex items-center gap-2">
        <img src="/images/profile-pic.png" alt={instructor} className="h-8 w-8 rounded object-cover" />
        <div>
          <p className="text-xs font-bold">{instructor}</p>
          <p className="text-[11px] text-muted">
            {role} di <span className="font-black text-ink">{company}</span>
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <Rating value={rating} reviews={reviews} />
        <span className="font-heading text-xl font-semibold text-brand">{formatPrice(price)}</span>
      </div>
      <div className="mt-3 flex gap-2 border-t border-gray-100 pt-3">
        <button
          type="button"
          onClick={() => onEdit(course)}
          className="flex-1 rounded-md bg-btn-soft px-3 py-1.5 text-xs font-bold text-btn transition hover:brightness-95"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(course)}
          className="flex-1 rounded-md bg-red-50 px-3 py-1.5 text-xs font-bold text-red-500 transition hover:bg-red-100"
        >
          Hapus
        </button>
      </div>
    </article>
  )
}
