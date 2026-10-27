import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import CategoryTabs from '../components/CategoryTabs.jsx'
import CourseCard from '../components/CourseCard.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Footer from '../components/Footer.jsx'
import { categoryList, courses } from '../data/courses.js'

export default function Home() {
  const [active, setActive] = useState(categoryList[0])
  const visible = active === categoryList[0] ? courses : courses.filter((c) => c.category === active)

  return (
    <div>
      <Navbar showMenu />
      <main className="mx-auto max-w-[1000px] px-4 sm:px-6">
        <Hero
          title="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
          description="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
          cta="Temukan Video Course untuk Dipelajari!"
        />
        <section className="mt-8">
          <h2 className="font-heading text-2xl font-semibold">Koleksi Video Pembelajaran Unggulan</h2>
          <p className="text-muted">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami</p>
          <CategoryTabs categories={categoryList} active={active} onChange={setActive} />
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((c) => (
              <CourseCard key={c.id} {...c} />
            ))}
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
