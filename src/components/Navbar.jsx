import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { business, whatsappLink } from '../config/business.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Fecha o menu ao trocar de rota.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Trava o scroll do body quando o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__brand" aria-label={`${business.name}, página inicial`}>
          <span className="nav__mark" aria-hidden="true">TN</span>
          <span className="nav__brandtext">
            <span className="nav__name">{business.name}</span>
            <span className="nav__seg">{business.segment} · {business.city}</span>
          </span>
        </Link>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          <NavLink to="/" end className="nav__link">Início</NavLink>
          <NavLink to="/sobre" className="nav__link">Sobre</NavLink>
          <NavLink to="/contato" className="nav__link">Contato</NavLink>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--pill nav__cta"
          >
            <WhatsAppIcon size={18} />
            Agendar
          </a>
        </nav>

        <button
          type="button"
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {open && <button className="nav__scrim" aria-hidden="true" tabIndex={-1} onClick={() => setOpen(false)} />}
    </header>
  )
}
