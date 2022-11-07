import React from 'react'
import { LinkedinFilled, GithubFilled } from '@ant-design/icons';


const Contact = () => {
  return (
    <div id='contact' className='bg-dark text-light'>
      <footer className='container text-center md:text-left pt-[26px]'>
        <h2>Contato</h2>
        <span className='flex flex-row gap-4 justify-center'>
          <a className='text-light text-2xl' href='www.linkedin.com/in/karinaosuka' target="_blank" rel="noreferrer" ><LinkedinFilled /></a>
          <a className='text-light text-2xl' href='https://github.com/kari-osk' target="_blank" rel="noreferrer" >
            <GithubFilled />
          </a>
        </span>
        <p className='text-xs text-center md:text-right py-4'>Karina Osuka - {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default Contact
