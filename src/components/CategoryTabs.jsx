export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="mt-4 flex gap-5 overflow-x-auto border-b border-gray-200 pb-2">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`whitespace-nowrap pb-1 text-sm font-medium ${
            active === c ? 'border-b-2 border-tab text-tab' : 'text-muted'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  )
}
