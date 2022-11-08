import React from 'react'
import { project } from '../data'
import { GithubFilled, LaptopOutlined } from '@ant-design/icons';



const Card = (project) => {
  return (
    <div className='grid sm:grid-flow-col md:grid-col lg:grid-cols-2 xl:grid-cols-2 border mb-8 p-3'>
      <img className='' src={project.data.image} alt={project.data.title} />
      <div className='p-10'>
        <h3>{project.data.title}</h3>
        <p>{project.data.description}</p>
        <div className='flex gap-2'>
          <a className='text-dark no-underline' href={project.data.github} target="_blank" rel="noopener noreferrer"><GithubFilled /></a>
          <a className='text-dark no-underline' href={project.data.page} target="_blank" rel="noopener noreferrer"><LaptopOutlined /></a>
        </div>

      </div>
    </div>
  )
}

const Projects = () => {

  return (
    <main id='projects' className='py-8'>
      <h2 className='py-4'>Projetos</h2>
      <div className='flex sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-6 py-6'>
        <div>
          {project.map((project) => (
            <div key={project.id}>
              <Card data={project} />
            </div>
          ))}
        </div>
      </div>
    </main >
  )
}

export default Projects
