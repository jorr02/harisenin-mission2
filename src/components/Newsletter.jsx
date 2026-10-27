import Button from './Button.jsx'

export default function Newsletter() {
  return (
    <section
      className="mt-10 flex flex-col items-center justify-center rounded-xl bg-cover bg-center px-5 py-12 text-center text-white"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.4)), url('/images/news-letter.jpg')" }}
    >
      <p className="text-sm tracking-widest">NEWSLETTER</p>
      <h2 className="mt-1 font-heading text-2xl font-bold sm:text-3xl">Mau Belajar Lebih Banyak?</h2>
      <p className="mt-2 max-w-xl text-sm sm:text-base">
        Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
      </p>
      <form
        className="mt-5 flex w-full max-w-xl flex-col gap-2 rounded-xl bg-white p-2 sm:flex-row"
        onSubmit={(e) => e.preventDefault()}
      >
        <input type="email" placeholder="Masukan Emailmu" className="min-w-0 flex-1 px-3 py-2 text-sm text-ink outline-none" />
        <Button variant="accent" className="sm:!w-auto">Subscribe</Button>
      </form>
    </section>
  )
}
