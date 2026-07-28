// Marquee horizontal com palavras separadas por um ornamento.
// `items` é uma lista de strings.
export default function Marquee({ items, ornament = '✦' }) {
  // Duplicamos a sequência para o loop ficar contínuo.
  const sequence = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {sequence.map((word, i) => (
          <span className="marquee__item" key={i}>
            {word}
            <span className="marquee__orn">{ornament}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
