export default function GoogleButton({ children }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
    >
      <img src="/images/google-icon.png" alt="" className="h-[18px] w-[18px]" />
      {children}
    </button>
  )
}
