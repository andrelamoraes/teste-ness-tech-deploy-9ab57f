// =============================================================================
//  CONFIGURAÇÃO CENTRAL DO NEGÓCIO
//  Todos os dados exibidos no site vêm deste arquivo. Para atualizar o site,
//  edite apenas aqui. Campos marcados com  ⚠ PLACEHOLDER  não foram informados
//  e usam um valor provisório — troque pelo dado real antes de publicar.
// =============================================================================

export const business = {
  name: 'Teste Ness Tech Deploy',
  segment: 'Salão de Beleza',
  city: 'Santos',
  state: 'SP',
  slogan: 'O cuidado que revela a sua melhor versão.',

  // Descrição curta usada no rodapé e em meta tags.
  shortDescription:
    'Salão de beleza em Santos dedicado a realçar o que há de mais bonito em você, com um atendimento próximo e sem pressa.',

  // ⚠ PLACEHOLDER — número de WhatsApp não informado.
  // whatsappDigits: apenas dígitos, com DDI (55) + DDD + número, para o link wa.me.
  // whatsappDisplay: como o número aparece na tela.
  whatsappDigits: '5513999999999', // ⚠ PLACEHOLDER — trocar pelo número real
  whatsappDisplay: '(13) 99999-9999', // ⚠ PLACEHOLDER — trocar pelo número real

  address: {
    street: 'Rua Teste, 100',
    city: 'Santos',
    state: 'SP',
    // String completa usada no mapa e no botão "Como chegar".
    full: 'Rua Teste, 100 - Santos, SP',
  },

  // ⚠ PLACEHOLDER — horário de funcionamento não informado.
  // Horário comercial plausível para um salão. Trocar pelo real.
  hours: [
    { days: 'Terça a Sexta', time: '09h às 19h' }, // ⚠ PLACEHOLDER
    { days: 'Sábado', time: '09h às 17h' }, // ⚠ PLACEHOLDER
    { days: 'Domingo e Segunda', time: 'Fechado' }, // ⚠ PLACEHOLDER
  ],

  // ⚠ PLACEHOLDER — redes sociais não informadas.
  // Deixe href como '' para ocultar o item, ou preencha com a URL real.
  social: [
    { id: 'instagram', label: 'Instagram', handle: '@testenesstech', href: '' }, // ⚠ PLACEHOLDER
    { id: 'facebook', label: 'Facebook', handle: 'Teste Ness Tech Deploy', href: '' }, // ⚠ PLACEHOLDER
  ],

  // ⚠ PLACEHOLDER — serviços não informados. Lista típica de um salão de beleza.
  services: [
    {
      id: 'corte',
      number: '01',
      name: 'Cortes & Finalização',
      description:
        'Um corte pensado para o seu rosto, o seu cabelo e a sua rotina — com finalização que dura além da cadeira.',
    },
    {
      id: 'coloracao',
      number: '02',
      name: 'Coloração & Mechas',
      description:
        'Cor sob medida, do tom natural às mechas iluminadas, respeitando a saúde do fio em cada etapa.',
    },
    {
      id: 'tratamentos',
      number: '03',
      name: 'Tratamentos Capilares',
      description:
        'Hidratação, reconstrução e nutrição para devolver força e brilho a cabelos cansados.',
    },
    {
      id: 'escova',
      number: '04',
      name: 'Escova & Penteados',
      description:
        'Do dia a dia ao evento mais especial, um acabamento impecável para você se sentir pronta.',
    },
    {
      id: 'manicure',
      number: '05',
      name: 'Manicure & Pedicure',
      description:
        'Mãos e pés bem cuidados, com esmaltação caprichada e aquele tempo só para você.',
    },
    {
      id: 'sobrancelha',
      number: '06',
      name: 'Design de Sobrancelhas',
      description:
        'O desenho certo para valorizar o seu olhar, feito com técnica e muito cuidado.',
    },
  ],
}

// -----------------------------------------------------------------------------
//  Monta o link do WhatsApp (wa.me) com uma mensagem pré-preenchida.
//  Se um serviço for informado, ele entra na mensagem.
// -----------------------------------------------------------------------------
export function whatsappLink(service) {
  const base = `Olá! Vim pelo site de ${business.name} e gostaria de agendar`
  const message = service ? `${base}: ${service}.` : `${base} um horário.`
  return `https://wa.me/${business.whatsappDigits}?text=${encodeURIComponent(message)}`
}

// -----------------------------------------------------------------------------
//  Link do Google Maps para direções, montado a partir do endereço.
// -----------------------------------------------------------------------------
export function directionsLink() {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    business.address.full,
  )}`
}

// -----------------------------------------------------------------------------
//  URL do iframe do Google Maps (mapa embutido) a partir do endereço.
// -----------------------------------------------------------------------------
export function mapEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(
    business.address.full,
  )}&output=embed`
}
