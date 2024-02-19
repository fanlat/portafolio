import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const menu = () => {
    const navbar = document.getElementById('navbar-default')
    if(navbar.classList.contains('hidden')){
      navbar.classList.remove('hidden')
    }else{
      navbar.classList.add('hidden')
    }
  }
  const closeMenu = () => {
    const navbar = document.getElementById('navbar-default')
    if(!navbar.classList.contains('hidden')){
      navbar.classList.add('hidden')
    }
  }

  return (
    <header className='header z-30 bg-summer-green-400'>
      <nav className='info mx-auto max-w-7xl flex items-end flex-col sm:flex-row justify-between px-2 sm:px-6 py-5 lg:px-8'>
        <div className='flex items-end justify-between w-full'>
          <div className='relative w-fit'>
            <NavLink to="/" className="flex items-end justify-between">
              <img src="/images/perfil@0,5x.webp" alt="Gustavo Pozo" className='profile' />
              <h1 className='name ml-3 text-summer-green-50'><strong className='m-0'>Gustavo Pozo</strong><br />Front End</h1>
            </NavLink>
          </div>
          <button className='block sm:hidden' type='button' onClick={menu} title='menú' name='menú'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2 w-10" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><title>menú</title><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
          </button>
        </div>
        <div id='navbar-default' className='hidden sm:flex items-end justify-between w-full text-center mt-5 sm:mt-0 sm:w-fit gap-20'>
          <ul className='flex flex-col sm:flex-row  gap-5 text-3xl'>
            <li>
              <NavLink onClick={closeMenu} title='home' to='/' className='text-summer-green-50 transition-colors duration-500 hover:text-summer-green-800'>Inicio</NavLink>
              </li>
            <li>
              <NavLink onClick={closeMenu} title='proyectos' to='/proyectos' className='text-summer-green-50 transition-colors duration-500 hover:text-summer-green-800'>Proyectos</NavLink>
              </li>
            <li>
              <NavLink onClick={closeMenu} title='contacto' to='/contacto' className='text-summer-green-50 transition-colors duration-500 hover:text-summer-green-800'>Contacto</NavLink> 
              </li>
          </ul>
          <div className='flex flex-col sm:flex-row justify-center mt-5 gap-4'> 
            <a href='https://www.linkedin.com/in/gustavo-pozo-n/' title='linkedin' target='_blank' rel='noreferrer' className='text-summer-green-50 mx-auto sm:mx-0 transition-colors duration-500 hover:text-blue-600'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin w-10" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><title>Icono Linkedin</title><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
            </a>
            <a href='https://wa.link/2ps0he' title='whatsapp' target='_blank' rel='noreferrer' className='text-summer-green-50 mx-auto sm:mx-0 transition-colors duration-500 hover:text-green-500'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp w-10" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><title>icono Whatsapp</title><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
            </a>
          </div>
        </div>
        
      </nav>
    </header>
  )
}
