import React from 'react'
import SingleCard from '../SingleCard/SingleCard'
import { post } from '../../data'

const Projects = () => {

  return (
    <div className='flex sm:flex-col md:flex-row gap-6'>
      {post.map((post) => (
        <div key={post.id}>
          <SingleCard data={post} />
        </div>
      ))}
    </div>
  )
}

export default Projects
