import Button from './Button.jsx'

export default function Hero({ title, description, cta }) {
  return (
    <section className="mt-6 flex min-h-[260px] flex-col items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 px-5 py-10 text-center text-white">
      <h1 className="max-w-3xl font-heading text-2xl font-bold sm:text-3xl lg:text-4xl">{title}</h1>
      <p className="mt-3 max-w-3xl text-sm text-gray-200 sm:text-base">{description}</p>
      <Button className="mt-6 !w-auto">{cta}</Button>
    </section>
  )
}
