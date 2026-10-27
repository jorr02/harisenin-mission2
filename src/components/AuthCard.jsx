export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="w-full max-w-[480px] rounded-md border border-gray-100 bg-white p-5 text-center sm:p-7">
      <h1 className="font-heading text-2xl font-semibold text-ink sm:text-[26px]">{title}</h1>
      <p className="mb-6 mt-2 text-xs sm:text-sm text-muted">{subtitle}</p>
      {children}
    </div>
  )
}
