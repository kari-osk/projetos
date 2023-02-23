import ghibli from './assets/ghibli.png'
import news from './assets/news.png'
import styledComponents from './assets/styled_components.png'
import operadorTernario from './assets/operador_ternario.png'
import arrowFunction from './assets/arrow_function.png'
import components from './assets/components.png'
import font from './assets/font.png'
import praticar from './assets/praticar.png'
import regex from './assets/regex.png'
import innitech from './assets/innitech.png'

export const post = [

  {
    id: 1,
    title: 'Styled component',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6970032767422091264/',
    image: styledComponents
  },
  {
    id: 2,
    title: 'Operador ternário',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6944625366216896512/',
    image: operadorTernario
  },
  {
    id: 3,
    title: 'Arrow fuction',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6950800255453933569/',
    image: arrowFunction
  },
  {
    id: 4,
    title: 'Componentes',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6961322534172545024/',
    image: components
  },
  {
    id: 5,
    title: 'Fontes',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6985245282825342976/',
    image: font
  },
  {
    id: 6,
    title: 'Praticar',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6948262253011812352/',
    image: praticar
  },
  {
    id: 7,
    title: 'Regex',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7018950227554373632/',
    image: regex
  },
]

export const project = [
  {
    id:1,
    title: 'Inni Tech',
    github: 'https://github.com/kari-osk/innitech',
    page: 'https://kari-osk.github.io/innitech/',
    image: innitech,
    description: "Projeto criado com React JS, explorando os estilos animações do Tailwind CSS. Formulário desenvolvido com Formik e Yup."
  },
  {
    id: 2,
    title: 'Ghibli',
    github: 'https://github.com/kari-osk/ghibli',
    page: 'https://kari-osk.github.io/ghibli/',
    image: ghibli,
    description: 'Projeto criado com React com context API, consumindo api do mundo mágico dos filmes da Ghibli. A página é responsiva para desktop e aparelhos portáteis. Acesse abaixo o código no github e a página.'
  },
  {
    id: 3,
    title: 'Landing page',
    github: 'https://github.com/kari-osk/frontendmentor-news-homepage',
    page: 'https://kari-osk.github.io/frontendmentor-news-homepage/',
    image: news,
    description: 'Desafio do FrontendMentor, a landing page foi desenvolvida com React e o estilo com TailwindCSS.'
  },
]
