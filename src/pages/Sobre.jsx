import { Link } from 'react-router-dom'
import { business, whatsappLink } from '../config/business.js'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'

const values = [
  {
    title: 'Escuta de verdade',
    text: 'Antes de tudo, a gente pergunta. O seu “sim” é o que guia cada escolha.',
  },
  {
    title: 'Capricho no detalhe',
    text: 'O acabamento importa. É ele que faz você sair daqui se sentindo pronta.',
  },
  {
    title: 'Ambiente acolhedor',
    text: 'Um espaço tranquilo, onde o seu horário é seu — sem correria, sem fila.',
  },
  {
    title: 'Beleza que dura',
    text: 'Cuidamos para que o resultado se mantenha bonito muito além da cadeira.',
  },
]

export default function Sobre() {
  return (
    <div className="page">
      <section className="section about-hero">
        <p className="overline">Sobre o {business.name}</p>
        <h1 className="about-hero__title">
          Um salão feito de <em>gente que gosta</em> de gente
        </h1>
        <p className="about-hero__lede">
          A gente começou com uma ideia simples: transformar um horário de beleza
          em um momento bom de verdade. Nada de esteira, nada de pressa — só o
          cuidado que você merece, do jeito que a sua rotina em {business.city} pede.
        </p>
      </section>

      <section className="section about-story">
        <div className="about-story__grid">
          <div className="about-story__text">
            <p>
              Cada pessoa que senta na nossa cadeira chega com uma história — um
              casamento chegando, uma vontade de mudar, um dia difícil que pede um
              cuidado. O nosso trabalho é entender isso antes de pegar a tesoura ou
              o pincel.
            </p>
            <p>
              Por isso a gente investe tempo na conversa. Descobrir o que combina
              com o seu rosto, com a sua rotina e com o que você consegue manter em
              casa é o que faz o resultado durar. Beleza boa é aquela que continua
              bonita quando você acorda no dia seguinte.
            </p>
            <p>
              Ao longo do tempo, viramos ponto de encontro de quem gosta de se
              cuidar sem frescura. E é essa mistura de técnica e afeto que a gente
              quer que você sinta assim que entra.
            </p>
          </div>

          <aside className="values">
            {values.map((v) => (
              <div className="value" key={v.title}>
                <h3 className="value__title">{v.title}</h3>
                <p className="value__text">{v.text}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="section quote">
        <blockquote className="quote__text">
          “Beleza não é sobre virar outra pessoa. É sobre se reconhecer no espelho
          e <em>gostar do que vê</em>.”
        </blockquote>
        <p className="quote__sign">— Equipe {business.name}</p>
      </section>

      <section className="section about-cta">
        <div className="about-cta__inner">
          <h2 className="section__title section__title--center">
            Vamos cuidar de <em>você</em>?
          </h2>
          <p className="about-cta__text">
            Conta pra gente o que você tem em mente. O agendamento é rapidinho, pelo
            WhatsApp.
          </p>
          <div className="about-cta__actions">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--pill btn--solid"
            >
              <WhatsAppIcon size={18} />
              Agendar agora
            </a>
            <Link to="/contato" className="btn btn--pill btn--ghost">
              Ver serviços
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
