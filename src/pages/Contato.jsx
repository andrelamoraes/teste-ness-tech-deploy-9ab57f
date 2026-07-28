import { useState } from 'react'
import {
  business,
  whatsappLink,
  directionsLink,
} from '../config/business.js'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'

const steps = [
  {
    number: '01',
    title: 'Escolha o serviço',
    text: 'Toque no que você quer fazer. Pode escolher pelo que mais combina com o seu momento.',
  },
  {
    number: '02',
    title: 'Abra a conversa',
    text: 'O botão leva direto pro nosso WhatsApp com a mensagem já pronta pra enviar.',
  },
  {
    number: '03',
    title: 'A gente confirma',
    text: 'Combinamos o melhor dia e horário pra você. Simples assim.',
  },
]

export default function Contato() {
  const [selected, setSelected] = useState(null)
  const selectedService = business.services.find((s) => s.id === selected)
  const link = whatsappLink(selectedService?.name)
  const activeSocial = business.social.filter((s) => s.href)

  return (
    <div className="page">
      <section className="section contact-hero">
        <p className="overline">Agende pelo WhatsApp</p>
        <h1 className="contact-hero__title">
          Bora marcar o seu <em>horário</em>?
        </h1>
        <p className="contact-hero__lede">
          Escolha o serviço abaixo e a gente já abre a conversa com tudo preenchido.
          Sem formulário chato, sem espera.
        </p>
      </section>

      <section className="section booking">
        <div className="booking__panel">
          <h2 className="booking__label">1. Qual serviço você quer?</h2>
          <div className="chips" role="group" aria-label="Escolha o serviço">
            {business.services.map((s) => (
              <button
                type="button"
                key={s.id}
                className={`chip ${selected === s.id ? 'is-active' : ''}`}
                aria-pressed={selected === s.id}
                onClick={() => setSelected(selected === s.id ? null : s.id)}
              >
                {s.name}
              </button>
            ))}
          </div>

          <p className="booking__chosen">
            {selectedService ? (
              <>Você escolheu: <strong>{selectedService.name}</strong></>
            ) : (
              <>Nenhum serviço selecionado — dá pra mandar mensagem assim mesmo.</>
            )}
          </p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--pill btn--solid btn--block"
          >
            <WhatsAppIcon size={20} />
            {selectedService
              ? `Agendar ${selectedService.name}`
              : 'Abrir conversa no WhatsApp'}
          </a>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="booking__number"
          >
            {business.whatsappDisplay}
          </a>
        </div>

        <div className="steps">
          <p className="overline">Como funciona</p>
          <ul className="steps__list">
            {steps.map((step) => (
              <li className="step" key={step.number}>
                <span className="step__num">{step.number}</span>
                <div>
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__text">{step.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section contact-cards">
        <div className="cinfo">
          <h3 className="cinfo__label">Endereço</h3>
          <p className="cinfo__value">
            {business.address.street}
            <br />
            {business.address.city} — {business.address.state}
          </p>
          <a
            href={directionsLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="cinfo__link"
          >
            Como chegar <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="cinfo">
          <h3 className="cinfo__label">Horários</h3>
          <ul className="cinfo__hours">
            {business.hours.map((h) => (
              <li key={h.days}>
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="cinfo">
          <h3 className="cinfo__label">Redes sociais</h3>
          {activeSocial.length > 0 ? (
            <ul className="cinfo__social">
              {activeSocial.map((s) => (
                <li key={s.id}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label} <span>{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="cinfo__value">
              Em breve por aqui. Por enquanto, fale com a gente direto no WhatsApp.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
