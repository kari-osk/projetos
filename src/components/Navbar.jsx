import React, { useState } from 'react'
import { X, List } from "phosphor-react";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  //scroll to id
  const ScrollToComponent = id => {
    document.getElementById(id).scrollIntoView()
  }

  return (
    <div className='flex flex-row justify-between items-center'>

      <h1><a className='text-lg font-logo no-underline text-dark ' href="/">Karina Osuka</a></h1>

      <nav>
        <section className="MOBILE-MENU flex lg:hidden xl:hidden ">
          <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
            <List className='w-8 h-8 text-dark hover:text-orange' />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div className="absolute top-6 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
              <X className='w-8 h-8 text-dark hover:text-orange' />
            </div>

            <ul className="flex flex-col text-left placeholder:justify-between min-h-[250px]">
              <li className='my-4'>
                <Link className='no-underline text-dark hover:underline p-1' onClick={() => ScrollToComponent('home')} href="/">Home</Link>
              </li>
              <li className='my-4'>
                <Link className='no-underline text-dark hover:underline p-1' onClick={() => ScrollToComponent('post')}>Postagens</Link>
              </li>
              <li className='my-4'>
                <Link className='no-underline text-dark hover:underline p-1' onClick={() => ScrollToComponent('projects')} >Projetos</Link>
              </li>
              <li className='my-4'>
                <Link className='no-underline text-dark hover:underline p-1' onClick={() => ScrollToComponent('contact')}>Contato</Link>
              </li>
            </ul>

          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex xl:flex ">

          <li>
            <Link className="my-4 no-underline text-dark  hover:underline" onClick={() => ScrollToComponent('post')}>Postagens</Link>
          </li>
          <li>
            <Link className="my-4 no-underline text-dark p-1 hover:underline" onClick={() => ScrollToComponent('projects')}>Projetos</Link>
          </li>
          <li>
            <Link className="my-4 no-underline text-dark p-1 hover:underline" onClick={() => ScrollToComponent('contact')} >Contato</Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        right: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div >
  );
}

export default Navbar
