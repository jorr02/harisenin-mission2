export default function Rating({ value, reviews }) {
  const filled = Math.round(value)
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm tracking-tight" aria-label={`Rating ${value}`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={n <= filled ? 'text-accent' : 'text-gray-300'}>★</span>
        ))}
      </span>
      <span className="text-xs text-muted underline">{value}({reviews})</span>
    </div>
  )
}
