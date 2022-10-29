import React from 'react'
import { LinkedinFilled, GithubFilled } from '@ant-design/icons';


const Contact = () => {
  return (
    <div className='bg-dark text-light'>
      <footer className='container text-center md:text-left '>
        <h2>Contato</h2>
        <span className='flex flex-row gap-4 text-center'>
          <a href='www.linkedin.com/in/karinaosuka' target="_blank" rel="noreferrer" ><LinkedinFilled /></a>
          <a href='https://github.com/kari-osk' target="_blank" rel="noreferrer" >
            <GithubFilled />
          </a>
        </span>
        <p className='text-xs text-center md:text-right py-4'>Karina Osuka - 2022</p>
      </footer>
    </div>
  )
}

export default Contact
