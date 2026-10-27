const codes = ['+62', '+1', '+65']

export default function PhoneField({ label, id }) {
  return (
    <div className="text-left">
      <label htmlFor={id} className="mb-1.5 block text-xs text-gray-600 sm:text-sm">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="flex gap-3">
        <div className="flex items-center overflow-hidden rounded-md border border-gray-200">
          <span className="flex h-full items-center bg-gray-50 px-2">
            <img src="https://flagcdn.com/w40/id.png" alt="Bendera Indonesia" className="h-3.5 w-5 object-cover" />
          </span>
          <select className="bg-transparent px-2 py-2.5 text-sm outline-none" defaultValue="+62">
            {codes.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <input
          id={id}
          type="tel"
          required
          className="min-w-0 flex-1 rounded-md border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-btn"
        />
      </div>
    </div>
  )
}
