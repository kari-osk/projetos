import React from 'react'


const Hero = () => {
  return (
    <div className='grid sm:grid-flow-col py-14 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 my-8'>
      <section className='flex flex-row gap-[18px] pb-14'>
        <span className='w-9 h-9 rounded-full bg-orange mt-2' />
        <h2 className='text-5xl uppercase mr-4'>Hello</h2>
      </section>
      <section>
        <p>Acredito que a tecnologia e o design caminham juntos, pois uma aplicação web, um software não são somente formados por códigos. Mas sim por um mundo interdisciplinar que envolveu escutar o usuário, observar, testar o produto, atender as necessidades e acessibilidades.
        </p>
        <p>
          Sou designer em transição de carreiras para desenvolvimento web, com conhecimento em JavaScript, React com Context Api e Redux, MySQL, MongoDb, Testing e metodologias ágeis Scrum.
        </p>
      </section>

    </div>
  )
}

export default Hero
