const tones = [
  'from-sky-400 to-indigo-600',
  'from-amber-300 to-orange-500',
  'from-emerald-300 to-teal-600',
  'from-pink-300 to-rose-500',
  'from-violet-300 to-purple-600',
  'from-lime-300 to-green-600',
]
const categories = ['Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis']

export const categoryList = ['Semua Kelas', ...categories]

export const courses = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: 'Big 4 Auditor Financial Analyst',
  description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...',
  instructor: 'Jenna Ortega',
  role: 'Senior Accountant',
  company: 'Gojek',
  rating: 3.5,
  reviews: 86,
  price: 'Rp 300K',
  category: categories[i % categories.length],
  tone: tones[i % tones.length],
  image: `/images/cards/img-${i + 1}.jpg`,
}))
