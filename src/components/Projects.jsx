import React from 'react'
import { project } from '../data'



const Card = (project) => {
  return (
    <div className='grid sm:grid-flow-col lg:grid-cols-2'>
      <img className='' src={project.data.image} alt={project.data.title} />
      <div className='p-10'>
        <h3>{project.data.title}</h3>
        <p>{project.data.description}</p>
      </div>
    </div>
  )
}

const Projects = () => {

  return (
    <div id='projects' className='py-8'>
      <h2 className='py-4'>Projetos</h2>
      <div className='flex sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-6 py-6'>
        {/* <div className='grid grid-cols-1'> */}
        <div>
          {project.map((project) => (
            <div key={project.id}>
              <Card data={project} />
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default Projects
