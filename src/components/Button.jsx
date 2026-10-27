const variants = {
  primary: 'bg-btn text-white hover:brightness-95',
  soft: 'bg-btn-soft text-btn hover:brightness-95',
  accent: 'bg-accent text-white hover:brightness-95',
}

export default function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button
      className={`w-full rounded-md px-6 py-2.5 text-sm font-bold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
