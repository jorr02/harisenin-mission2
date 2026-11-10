import { useState } from 'react'
import Button from './Button.jsx'

const empty = {
  title: '',
  description: '',
  instructor: '',
  role: '',
  company: '',
  category: '',
  price: '',
  rating: 5,
}

const inputClass =
  'w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-btn'

function Field({ label, id, children }) {
  return (
    <div className="text-left">
      <label htmlFor={id} className="mb-1.5 block text-xs text-gray-600 sm:text-sm">
        {label} <span className="text-red-500">*</span>
      </label>
      {children}
    </div>
  )
}

// Form untuk tambah & edit kelas. State form lokal di sini,
// data hasil submit dikirim ke parent (Home) lewat props onSubmit.
export default function CourseForm({ initial, categories, onSubmit, onCancel }) {
  const [form, setForm] = useState(() => ({ ...empty, category: categories[0], ...initial }))

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      ...form,
      title: form.title.trim(),
      description: form.description.trim(),
      instructor: form.instructor.trim(),
      price: Number(form.price),
      rating: Number(form.rating),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field label="Judul Kelas" id="title">
        <input id="title" required value={form.title} onChange={set('title')} className={inputClass} />
      </Field>
      <Field label="Deskripsi" id="description">
        <textarea id="description" required rows={3} value={form.description} onChange={set('description')} className={inputClass} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Kategori" id="category">
          <select id="category" value={form.category} onChange={set('category')} className={`${inputClass} bg-white`}>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="Harga (Rp)" id="price">
          <input id="price" type="number" min="0" step="1000" required value={form.price} onChange={set('price')} className={inputClass} />
        </Field>
      </div>
      <Field label="Nama Instruktur" id="instructor">
        <input id="instructor" required value={form.instructor} onChange={set('instructor')} className={inputClass} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Jabatan" id="role">
          <input id="role" required value={form.role} onChange={set('role')} className={inputClass} />
        </Field>
        <Field label="Perusahaan" id="company">
          <input id="company" required value={form.company} onChange={set('company')} className={inputClass} />
        </Field>
      </div>
      <Field label="Rating (1–5)" id="rating">
        <input id="rating" type="number" min="1" max="5" step="0.5" required value={form.rating} onChange={set('rating')} className={inputClass} />
      </Field>
      <div className="flex gap-2 pt-2">
        <Button type="button" variant="soft" onClick={onCancel}>Batal</Button>
        <Button type="submit">{initial ? 'Simpan Perubahan' : 'Tambah Kelas'}</Button>
      </div>
    </form>
  )
}
