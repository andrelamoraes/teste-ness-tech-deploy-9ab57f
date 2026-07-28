import { Link } from 'react-router-dom'
import { business, whatsappLink, directionsLink } from '../config/business.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  const activeSocial = business.social.filter((s) => s.href)

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <span className="footer__mark" aria-hidden="true">TN</span>
          <p className="footer__desc">{business.shortDescription}</p>
          {activeSocial.length > 0 && (
            <ul className="footer__social">
              {activeSocial.map((s) => (
                <li key={s.id}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Navegação</h3>
          <ul className="footer__nav">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Atendimento</h3>
          <a
            className="footer__addr"
            href={directionsLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            {business.address.street}
            <br />
            {business.address.city} — {business.address.state}
          </a>
          <ul className="footer__hours">
            {business.hours.map((h) => (
              <li key={h.days}>
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__wa"
          >
            <WhatsAppIcon size={18} />
            {business.whatsappDisplay}
          </a>
        </div>
      </div>

      <div className="footer__bar">
        <span>© {year} {business.name}</span>
        <span>{business.city} · {business.state}</span>
      </div>
    </footer>
  )
}
