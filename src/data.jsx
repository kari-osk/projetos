import ghibli from './assets/ghibli.png'
import news from './assets/news.png'

export const post = [

  {
    id: 1,
    title: 'Styled component',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6970032767422091264/',
    image: 'https://media-exp1.licdn.com/dms/image/C4D22AQFYEC_U4_IMBQ/feedshare-shrink_1280/0/1661785306319?e=1670457600&v=beta&t=BqwC3xBwxSj4d_A0JUgFjqAn2Ar5L3bpCFiVBfQwTFw'
  },
  {
    id: 2,
    title: 'Operador ternário',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6944625366216896512/',
    image: 'https://media-exp1.licdn.com/dms/image/C4D22AQHYQzqao2WQyA/feedshare-shrink_800/0/1655727711105?e=1668643200&v=beta&t=cJ_-uUssVFLJMiCpDTvdOcIKe0tKCAdR4cYAkAfGKt8'
  },
  {
    id: 3,
    title: 'Arrow fuction',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6950800255453933569/',
    image: 'https://media-exp1.licdn.com/dms/image/C4D22AQGYxcCDtydPJQ/feedshare-shrink_800/0/1657199918611?e=1668643200&v=beta&t=7tj805kIOxqVjzolfXh9FNO7FBvom2VrMPRFcROKAgk'
  },
  {
    id: 4,
    title: 'Componentes',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6961322534172545024/',
    image: 'https://media-exp1.licdn.com/dms/image/C4D22AQHWdpPDaqwAxw/feedshare-shrink_800/0/1659708624574?e=1668643200&v=beta&t=mtdBexfY0iZXw2EUq7ME7S_2xU26ozvAlqhYo5kItwM'
  },
  {
    id: 5,
    title: 'Fontes',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6985245282825342976/',
    image: 'https://media-exp1.licdn.com/dms/image/C4D22AQFqtfGmniyrUw/feedshare-shrink_1280/0/1665412252929?e=1668643200&v=beta&t=YKXE819PEFWgDHmRfH_BC1YZIRQgVTrE-5vnnpyycgY'
  },
  {
    id: 6,
    title: 'Praticar',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6948262253011812352/',
    image: 'https://media-exp1.licdn.com/dms/image/C4D22AQEXsL4HiYvQxg/feedshare-shrink_800/0/1656594812251?e=1670457600&v=beta&t=yhWcdxMxmsllLz4mdNHXHhU1_tTKddKr35DhC-hycw8'
  },
]

export const project = [
  {
    id: 1,
    title: 'Ghibli',
    github: 'https://github.com/kari-osk/ghibli',
    page: 'https://kari-osk.github.io/ghibli/',
    image: ghibli,
    description: 'Projeto criado com React com context API, consumindo api do mundo mágico dos filmes da Ghibli. A página é responsiva para desktop e aparelhos portáteis. Acesse abaixo o código no github e a página.'
  },
  {
    id: 2,
    title: 'Landing page',
    github: 'https://github.com/kari-osk/frontendmentor-news-homepage',
    page: 'https://kari-osk.github.io/frontendmentor-news-homepage/',
    image: news,
    description: 'Desafio do FrontendMentor, a landing page foi desenvolvida com React e o estilo com TailwindCSS.'
  },
]