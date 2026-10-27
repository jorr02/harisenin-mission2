import { useState } from 'react'
import Rating from './Rating.jsx'

export default function CourseCard({ title, description, instructor, role, company, rating, reviews, price, tone, image }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <article className="flex flex-col rounded-lg border border-gray-200 bg-white p-3">
      {imgFailed ? (
        <div className={`h-36 w-full rounded-md bg-gradient-to-br ${tone}`} />
      ) : (
        <img
          src={image}
          alt={title}
          onError={() => setImgFailed(true)}
          className="h-36 w-full rounded-md object-cover"
        />
      )}
      <h3 className="mt-3 font-heading text-[15px] font-semibold leading-tight">{title}</h3>
      <p className="mt-1 text-xs text-muted">{description}</p>
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
        <span className="font-heading text-xl font-semibold text-brand">{price}</span>
      </div>
    </article>
  )
}
