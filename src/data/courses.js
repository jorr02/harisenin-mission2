export const tones = [
  'from-sky-400 to-indigo-600',
  'from-amber-300 to-orange-500',
  'from-emerald-300 to-teal-600',
  'from-pink-300 to-rose-500',
  'from-violet-300 to-purple-600',
  'from-lime-300 to-green-600',
]

export const categories = ['Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis']

export const categoryList = ['Semua Kelas', ...categories]

const seed = [
  ['Big 4 Auditor Financial Analyst', 'Bisnis'],
  ['Strategi Digital Marketing untuk UMKM', 'Pemasaran'],
  ['UI/UX Design dari Nol', 'Desain'],
  ['Public Speaking Percaya Diri', 'Pengembangan Diri'],
  ['Manajemen Keuangan Bisnis', 'Bisnis'],
  ['Social Media Ads Mastery', 'Pemasaran'],
  ['Desain Grafis dengan Figma', 'Desain'],
  ['Produktivitas & Manajemen Waktu', 'Pengembangan Diri'],
  ['Business Model Canvas', 'Bisnis'],
]

const instructors = ['Jenna Ortega', 'Raka Pratama', 'Sinta Dewi']

// Data awal (array of object) yang dipakai sebagai initial state di Home.
export const initialCourses = seed.map(([title, category], i) => ({
  id: i + 1,
  title,
  description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.',
  instructor: instructors[i % instructors.length],
  role: 'Senior Accountant',
  company: 'Gojek',
  rating: 3.5,
  reviews: 86,
  price: 300000,
  category,
  tone: tones[i % tones.length],
  image: `/images/cards/img-${i + 1}.jpg`,
}))

export const formatPrice = (price) =>
  price >= 1000 ? `Rp ${Math.round(price / 1000)}K` : `Rp ${price}`
