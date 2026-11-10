import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import CategoryTabs from '../components/CategoryTabs.jsx'
import CourseCard from '../components/CourseCard.jsx'
import CourseForm from '../components/CourseForm.jsx'
import Modal from '../components/Modal.jsx'
import Button from '../components/Button.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Footer from '../components/Footer.jsx'
import { categories, categoryList, initialCourses, tones } from '../data/courses.js'

export default function Home() {
  // State utama di parent component, diteruskan ke child lewat props.
  const [courses, setCourses] = useState(initialCourses) // array of object
  const [active, setActive] = useState(categoryList[0]) // tab kategori aktif
  const [formMode, setFormMode] = useState(null) // null | 'add' | 'edit'
  const [editing, setEditing] = useState(null) // kelas yang sedang diedit
  const [deleting, setDeleting] = useState(null) // kelas yang akan dihapus
  const [notice, setNotice] = useState('') // pesan notifikasi singkat

  useEffect(() => {
    if (!notice) return
    const t = setTimeout(() => setNotice(''), 2500)
    return () => clearTimeout(t)
  }, [notice])

  // GET: ambil data dari array object (difilter sesuai kategori aktif)
  const visible = active === categoryList[0] ? courses : courses.filter((c) => c.category === active)

  // ADD: tambah object baru ke array
  const addCourse = (data) => {
    const id = courses.length ? Math.max(...courses.map((c) => c.id)) + 1 : 1
    const newCourse = { ...data, id, reviews: 0, tone: tones[id % tones.length], image: '' }
    setCourses([newCourse, ...courses])
    setNotice(`Kelas "${data.title}" berhasil ditambahkan.`)
  }

  // UPDATE: ganti object dengan id yang sama
  const updateCourse = (data) => {
    setCourses(courses.map((c) => (c.id === editing.id ? { ...c, ...data } : c)))
    setNotice(`Kelas "${data.title}" berhasil diperbarui.`)
  }

  // DELETE: buang object dari array berdasarkan id
  const deleteCourse = () => {
    setCourses(courses.filter((c) => c.id !== deleting.id))
    setNotice(`Kelas "${deleting.title}" berhasil dihapus.`)
    setDeleting(null)
  }

  const openAdd = () => {
    setEditing(null)
    setFormMode('add')
  }

  const openEdit = (course) => {
    setEditing(course)
    setFormMode('edit')
  }

  const closeForm = () => {
    setFormMode(null)
    setEditing(null)
  }

  const handleSubmit = (data) => {
    if (formMode === 'edit') updateCourse(data)
    else addCourse(data)
    closeForm()
  }

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
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-2xl font-semibold">Koleksi Video Pembelajaran Unggulan</h2>
              <p className="text-muted">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami</p>
            </div>
            <Button className="sm:!w-auto" onClick={openAdd}>+ Tambah Kelas</Button>
          </div>
          <CategoryTabs categories={categoryList} active={active} onChange={setActive} />
          <p className="mt-3 text-xs text-muted">
            Menampilkan {visible.length} dari {courses.length} kelas
          </p>
          {visible.length ? (
            <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((c) => (
                <CourseCard key={c.id} course={c} onEdit={openEdit} onDelete={setDeleting} />
              ))}
            </div>
          ) : (
            <div className="mt-3 rounded-lg border border-dashed border-gray-300 bg-white px-5 py-10 text-center">
              <p className="font-heading font-semibold">Belum ada kelas di kategori ini</p>
              <p className="mt-1 text-sm text-muted">Tambahkan kelas baru untuk mulai mengisi koleksi.</p>
              <Button className="mt-4 !w-auto" onClick={openAdd}>+ Tambah Kelas</Button>
            </div>
          )}
        </section>
        <Newsletter />
      </main>
      <Footer />

      {formMode && (
        <Modal title={formMode === 'edit' ? 'Edit Kelas' : 'Tambah Kelas Baru'} onClose={closeForm}>
          <CourseForm
            key={editing?.id ?? 'new'}
            initial={editing}
            categories={categories}
            onSubmit={handleSubmit}
            onCancel={closeForm}
          />
        </Modal>
      )}

      {deleting && (
        <Modal title="Hapus Kelas?" onClose={() => setDeleting(null)}>
          <p className="text-sm text-muted">
            Kelas <span className="font-semibold text-ink">"{deleting.title}"</span> akan dihapus dari koleksi.
          </p>
          <div className="mt-6 flex gap-2">
            <Button variant="soft" onClick={() => setDeleting(null)}>Batal</Button>
            <button
              type="button"
              onClick={deleteCourse}
              className="w-full rounded-md bg-red-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-red-600"
            >
              Hapus
            </button>
          </div>
        </Modal>
      )}

      {notice && (
        <div role="status" className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-md bg-ink px-4 py-2.5 text-sm text-white shadow-lg">
          {notice}
        </div>
      )}
    </div>
  )
}
