import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import AuthCard from '../components/AuthCard.jsx'
import InputField from '../components/InputField.jsx'
import PhoneField from '../components/PhoneField.jsx'
import Button from '../components/Button.jsx'
import Divider from '../components/Divider.jsx'
import GoogleButton from '../components/GoogleButton.jsx'

export default function Register() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    if (form.get('password') !== form.get('confirm')) {
      alert('Konfirmasi kata sandi tidak sama')
      return
    }
    navigate('/login')
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-8">
        <AuthCard title="Pendaftaran Akun" subtitle="Yuk, daftarkan akunmu sekarang juga!">
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField id="name" name="name" label="Nama Lengkap" />
            <InputField id="email" name="email" label="E-Mail" type="email" />
            <PhoneField id="phone" label="No. Hp" />
            <InputField id="password" name="password" label="Kata Sandi" type="password" />
            <InputField id="confirm" name="confirm" label="Konfirmasi Kata Sandi" type="password" />
            <div className="space-y-2 pt-2">
              <Button type="submit">Daftar</Button>
              <Link to="/login" className="block">
                <Button type="button" variant="soft">Masuk</Button>
              </Link>
            </div>
            <Divider />
            <GoogleButton>Daftar dengan Google</GoogleButton>
          </form>
        </AuthCard>
      </main>
    </div>
  )
}
