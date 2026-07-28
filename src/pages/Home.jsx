import { Link } from 'react-router-dom'
import {
  business,
  whatsappLink,
  directionsLink,
  mapEmbedUrl,
} from '../config/business.js'
import Marquee from '../components/Marquee.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'

const reasons = [
  {
    number: '01',
    title: 'Atendimento sem pressa',
    text: 'Cada horário é reservado só para você. A gente escuta o que você quer antes de qualquer tesoura ou pincel.',
  },
  {
    number: '02',
    title: 'Cuidado com a saúde do fio',
    text: 'Produtos de qualidade e técnica na medida certa para transformar sem agredir o seu cabelo.',
  },
  {
    number: '03',
    title: 'Resultado que combina com você',
    text: 'Nada de fórmula pronta. O visual sai daqui do seu jeito, fácil de manter no dia a dia.',
  },
]

export default function Home() {
  return (
    <div className="page">
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="overline">{business.segment} · {business.city}, {business.state}</p>
            <h1 className="hero__title">
              O cuidado que revela a <em>sua melhor</em> versão.
            </h1>
            <p className="hero__lede">
              No {business.name}, beleza é conversa antes de ser técnica. A gente
              cuida do seu cabelo, das suas unhas e do seu tempo — para você sair
              daqui se sentindo inteira.
            </p>
            <div className="hero__actions">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--pill btn--solid"
              >
                <WhatsAppIcon size={18} />
                Agendar pelo WhatsApp
              </a>
              <Link to="/contato" className="btn btn--pill btn--ghost">
                Ver serviços
              </Link>
            </div>

            <dl className="hero__metrics">
              <div className="metric">
                <dt className="metric__num">{business.services.length}</dt>
                <dd className="metric__label">serviços no cardápio</dd>
              </div>
              <div className="metric">
                <dt className="metric__num">1&nbsp;a&nbsp;1</dt>
                <dd className="metric__label">atendimento personalizado</dd>
              </div>
              <div className="metric">
                <dt className="metric__num">rápido</dt>
                <dd className="metric__label">agendamento pelo WhatsApp</dd>
              </div>
            </dl>
          </div>

          <div className="hero__figure">
            <div className="hero__ring" aria-hidden="true" />
            <div className="hero__portrait" role="img" aria-label="Arte decorativa do salão">
              <span className="hero__portrait-mono" aria-hidden="true">TN</span>
            </div>
            <div className="hero__badge">
              <span className="hero__badge-name">{business.name}</span>
              <span className="hero__badge-city">{business.city} · {business.state}</span>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={business.services.map((s) => s.name)} />

      {/* ---------- SERVIÇOS ---------- */}
      <section className="section services">
        <div className="section__head">
          <p className="overline">Nossos serviços</p>
          <h2 className="section__title">
            Tudo o que a gente faz <em>por você</em>
          </h2>
        </div>

        <ul className="svc-list">
          {business.services.map((s) => (
            <li className="svc" key={s.id}>
              <span className="svc__num">{s.number}</span>
              <div className="svc__body">
                <h3 className="svc__name">{s.name}</h3>
                <p className="svc__desc">{s.description}</p>
              </div>
              <a
                href={whatsappLink(s.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="svc__link"
                aria-label={`Agendar ${s.name}`}
              >
                Agendar
                <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- FAIXA ESCURA / POR QUE NOS ESCOLHER ---------- */}
      <section className="section band">
        <div className="band__inner">
          <div className="section__head section__head--light">
            <p className="overline">Por que nos escolher</p>
            <h2 className="section__title">
              Três motivos para sentar na <em>nossa cadeira</em>
            </h2>
          </div>
          <div className="reasons">
            {reasons.map((r) => (
              <div className="reason" key={r.number}>
                <span className="reason__num">{r.number}</span>
                <h3 className="reason__title">{r.title}</h3>
                <p className="reason__text">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LOCALIZAÇÃO ---------- */}
      <section className="section location">
        <div className="location__grid">
          <div className="location__info">
            <p className="overline">Onde a gente fica</p>
            <h2 className="section__title">
              Passa aqui pra <em>tomar um café</em> e cuidar de você
            </h2>

            <div className="location__block">
              <h3 className="location__label">Endereço</h3>
              <p className="location__value">
                {business.address.street}
                <br />
                {business.address.city} — {business.address.state}
              </p>
            </div>

            <div className="location__block">
              <h3 className="location__label">Horários</h3>
              <ul className="location__hours">
                {business.hours.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={directionsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--pill btn--solid"
            >
              Como chegar
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="location__map">
            <iframe
              title={`Mapa de ${business.name} — ${business.address.full}`}
              src={mapEmbedUrl()}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  )
}
