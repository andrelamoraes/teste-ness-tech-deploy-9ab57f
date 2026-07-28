import { whatsappLink } from '../config/business.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

// Botão flutuante do WhatsApp, visível em todas as páginas.
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fab"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon size={26} />
      <span className="fab__label">Agendar</span>
    </a>
  )
}
