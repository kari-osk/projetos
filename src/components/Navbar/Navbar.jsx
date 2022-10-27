import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row mt-8 justify-between '>
      <h1 className='text-lg font-serif'>Karina Osuka</h1>
      <div className='flex gap-6'>
        <Link className='border py-2 px-4 text-dark no-underline' to='/projeto hover:bg-dark hover:text-light'>Projetos</Link>
        <Link className='border py-2 px-4 bg-orange text-dark no-underline' to='/about'>Contato</Link>
      </div>
    </div>
  )
}

export default Navbar
