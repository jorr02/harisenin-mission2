export default function Divider({ text = 'atau' }) {
  return (
    <div className="flex items-center gap-3 text-sm text-muted">
      <span className="h-px flex-1 bg-gray-200" />
      {text}
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  )
}
