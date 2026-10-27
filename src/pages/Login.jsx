import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import AuthCard from '../components/AuthCard.jsx'
import InputField from '../components/InputField.jsx'
import Button from '../components/Button.jsx'
import Divider from '../components/Divider.jsx'
import GoogleButton from '../components/GoogleButton.jsx'

export default function Login() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-8">
        <AuthCard title="Masuk ke Akun" subtitle="Yuk, lanjutin belajarmu di videobelajar.">
          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField id="email" label="E-Mail" type="email" />
            <InputField id="password" label="Kata Sandi" type="password" />
            <div className="text-right">
              <a href="#" className="text-sm text-muted hover:text-brand">Lupa Password?</a>
            </div>
            <div className="space-y-2">
              <Button type="submit">Masuk</Button>
              <Link to="/register" className="block">
                <Button type="button" variant="soft">Daftar</Button>
              </Link>
            </div>
            <Divider />
            <GoogleButton>Masuk dengan Google</GoogleButton>
          </form>
        </AuthCard>
      </main>
    </div>
  )
}
