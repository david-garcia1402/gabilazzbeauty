import brasileiroMarrom from '../assets/services/brasileiro-marrom.webp'
import efeitoCisne from '../assets/services/efeito-cisne.webp'
import efeitoFoxEyes from '../assets/services/efeito-fox-eyes.webp'
import kimKardashian from '../assets/services/kim-kardashian.webp'
import sirenaCisne from '../assets/services/sirena-cisne.webp'
import volumeAura from '../assets/services/volume-aura.webp'
import volumeBrasileiro from '../assets/services/volume-brasileiro.webp'
import volumeEgipcio from '../assets/services/volume-egipcio-5d.webp'
import volumeFlora from '../assets/services/volume-flora.webp'

export const business = {
  name: 'Gabrieli Lazzarotto',
  role: 'Lash Designer | Maquiadora',
  handle: '@gabilazzbeauty',
  instagram: 'https://www.instagram.com/gabilazzbeauty/',
  phoneDisplay: '(47) 99769-4779',
  phoneE164: '5547997694779',
  address: {
    street: 'R. Jorge Frederico Augusto Karsten, 433 - Sl 04',
    district: 'Rau',
    city: 'Jaraguá do Sul - SC',
    zip: '89254-373',
  },
  mission: 'Minha missão é realçar a beleza que existe em você!',
  rating: { value: '5,0', count: 5 },
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      'Gabrieli Lazzarotto Lash Designer, R. Jorge Frederico Augusto Karsten, 433 - Sl 04 - Rau, Jaraguá do Sul - SC, 89254-373',
    ),
  googleMapsEmbed:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('R. Jorge Frederico Augusto Karsten, 433 - Rau, Jaraguá do Sul - SC, 89254-373') +
    '&output=embed&z=16',
} as const

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${business.phoneE164}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const defaultWhatsappMessage =
  'Olá, Gabrieli! Vi seu site e gostaria de agendar um horário para extensão de cílios. 💗'

export type Service = {
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  price: number
  maintenance: { early: number; late: number }
  tags: string[]
  featured?: boolean
}

export const services: Service[] = [
  {
    slug: 'volume-brasileiro',
    name: 'Volume Brasileiro',
    tagline: 'O queridinho',
    description:
      'Uma opção popular para quem busca cílios mais cheios, enquanto mantém um aspecto natural e confortável.',
    image: volumeBrasileiro,
    price: 160,
    maintenance: { early: 95, late: 100 },
    tags: ['Volume', 'Natural'],
    featured: true,
  },
  {
    slug: 'volume-egipcio-5d',
    name: 'Volume Egípcio 5D',
    tagline: 'O mais ousado',
    description:
      'Esse é o modelo mais ousado! Ele traz volume e um acabamento mais cheio. Ideal para quem quer os cílios bem volumosos.',
    image: volumeEgipcio,
    price: 170,
    maintenance: { early: 95, late: 100 },
    tags: ['Volume', 'Marcante'],
  },
  {
    slug: 'efeito-fox-eyes',
    name: 'Efeito Fox Eyes',
    tagline: 'Olhar alongado',
    description:
      'Esse efeito proporciona alongamento no canto externo, criando um olhar elegante e alongado.',
    image: efeitoFoxEyes,
    price: 170,
    maintenance: { early: 95, late: 100 },
    tags: ['Efeito', 'Alongado'],
    featured: true,
  },
  {
    slug: 'brasileiro-marrom',
    name: 'Brasileiro Marrom',
    tagline: 'Suave e delicado',
    description:
      'Proporciona um olhar marcante e natural. Com fios marrom, é ideal para realçar o olhar de forma mais suave e delicada.',
    image: brasileiroMarrom,
    price: 160,
    maintenance: { early: 95, late: 100 },
    tags: ['Fios marrom', 'Natural'],
  },
  {
    slug: 'efeito-cisne',
    name: 'Efeito Cisne',
    tagline: 'Elegância no canto externo',
    description:
      'Esse efeito proporciona alongamento delicado no canto externo, criando um olhar elegante e alongado.',
    image: efeitoCisne,
    price: 170,
    maintenance: { early: 95, late: 100 },
    tags: ['Efeito', 'Elegante'],
  },
  {
    slug: 'kim-kardashian',
    name: 'Kim Kardashian',
    tagline: 'Volume com leveza',
    description:
      'Fica super volumoso, mas com um formato que mantém a leveza. Perfeito para quem quer algo que se destaque sem ser exagerado demais.',
    image: kimKardashian,
    price: 170,
    maintenance: { early: 95, late: 100 },
    tags: ['Volume', 'Destaque'],
  },
  {
    slug: 'volume-aura',
    name: 'Volume Aura',
    tagline: 'Natural com destaque',
    description:
      'Um modelo mais natural, dando um maior destaque porém com um volume suave, sem exageros.',
    image: volumeAura,
    price: 160,
    maintenance: { early: 95, late: 100 },
    tags: ['Natural', 'Suave'],
  },
  {
    slug: 'volume-flora',
    name: 'Volume Flora',
    tagline: 'Charme diferente',
    description:
      'Utiliza o fio 4D na cor marrom, com alguns spikes (fios maiores), trazendo naturalidade e um charme diferente.',
    image: volumeFlora,
    price: 160,
    maintenance: { early: 95, late: 100 },
    tags: ['Fios marrom', 'Spikes'],
  },
  {
    slug: 'sirena-cisne',
    name: 'Sirena Cisne',
    tagline: 'Efeito alongado',
    description:
      'Preenchimento somente do canto externo ao meio dos olhos, trazendo um efeito alongado e leve.',
    image: sirenaCisne,
    price: 140,
    maintenance: { early: 85, late: 95 },
    tags: ['Efeito', 'Leve'],
  },
]

export const reviews = [
  {
    author: 'Beatriz Carla',
    text: 'Além dela ser uma profissional incrível é muito simpática!',
  },
  {
    author: 'Maria Krause',
    text: 'Fiz com ela e já virei cliente fiel!',
  },
  {
    author: 'Letícia Karolyne',
    text: 'Muito atenciosa e caprichosa, trabalho impecável 💗',
  },
]

export const processSteps = [
  {
    title: 'Avaliação do olhar',
    text: 'Cada procedimento é personalizado. Avalio o formato dos seus olhos e indico a técnica que mais valoriza o seu olhar.',
  },
  {
    title: 'Escolha juntas',
    text: 'Definimos o modelo ideal em conjunto, priorizando sempre o seu gosto e o resultado que você deseja.',
  },
  {
    title: 'Aplicação indolor',
    text: 'O procedimento dura em média 1h, podendo chegar a 2h dependendo da quantidade de cílios. É um processo indolor.',
  },
  {
    title: 'Saúde ocular em 1º lugar',
    text: 'Produtos de qualidade, higiene rigorosa e cuidado em cada fio. Sua saúde ocular é nossa prioridade.',
  },
]

export const importantNotes = [
  'Evite vir com maquiagem, principalmente rímel.',
  'Se usa lentes de contato, retire antes do procedimento.',
  'Programe-se para não se atrasar: tolerância de 10 minutos para não prejudicar a próxima cliente.',
]

export const restrictions = [
  'Cirurgia recente nos olhos',
  'Tratamento de quimioterapia em andamento',
  'Conjuntivite, blefarite e terçol',
  'Grávidas sem autorização do obstetra',
]

export const policies = {
  maintenance:
    'A manutenção deve ser realizada de 15 a 23 dias. Após o prazo de 24 a 30 dias será cobrado o valor de R$100.',
  removal: [
    { label: 'Remoção de procedimentos de outros profissionais', price: 15 },
    { label: 'Remoção dos meus procedimentos', price: 10 },
  ],
}

export const paymentMethods = ['Dinheiro', 'Pix', 'Cartão de crédito', 'Cartão de débito']

export const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#procedimento', label: 'Procedimento' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#studio', label: 'Studio' },
  { href: '#faq', label: 'Dúvidas' },
]

export const formatBRL = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })
