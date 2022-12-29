import ghibli from './assets/ghibli.png'
import news from './assets/news.png'

export const post = [

  {
    id: 1,
    title: 'Styled component',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6970032767422091264/',
    image: 'https://media.licdn.com/dms/image/C4D22AQFYEC_U4_IMBQ/feedshare-shrink_800/0/1661785306320?e=1675296000&v=beta&t=TR7YTMQTHLn5rWgR4R9gijm6YHdbeuZ6ElrEmZ5izFw'
  },
  {
    id: 2,
    title: 'Operador ternário',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6944625366216896512/',
    image: 'https://media.licdn.com/dms/image/C4D22AQHYQzqao2WQyA/feedshare-shrink_800/0/1655727711105?e=1675296000&v=beta&t=XHn7BaRgQXtYq3IL35saZ5f9WDWe8DGC7tdir4qB9kc'
  },
  {
    id: 3,
    title: 'Arrow fuction',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6950800255453933569/',
    image: 'https://media.licdn.com/dms/image/C4D22AQGYxcCDtydPJQ/feedshare-shrink_800/0/1657199918611?e=1675296000&v=beta&t=rgqeOqgrAvpi1-S1R1n8PvwVxKeBnmLWoBfxiazHh9s'
  },
  {
    id: 4,
    title: 'Componentes',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6961322534172545024/',
    image: 'https://media.licdn.com/dms/image/C4D22AQHWdpPDaqwAxw/feedshare-shrink_1280/0/1659708624574?e=1675296000&v=beta&t=n_OkGGQ-mkESo8CzoZBFGHdU-B7xdMcxpj5rENeX29Q'
  },
  {
    id: 5,
    title: 'Fontes',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6985245282825342976/',
    image: 'https://media.licdn.com/dms/image/C4D22AQFqtfGmniyrUw/feedshare-shrink_800/0/1665412252929?e=1675296000&v=beta&t=Je9oTIIJmYAV6wVkucQ2eXD70AoUgjvaHhLQekBOjs4'
  },
  {
    id: 6,
    title: 'Praticar',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6948262253011812352/',
    image: 'https://media.licdn.com/dms/image/C4D22AQEXsL4HiYvQxg/feedshare-shrink_800/0/1656594812251?e=1675296000&v=beta&t=aWtkp46wDFllclxe6EphHdCRv2RGOItlHLGcDU7c2mE'
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