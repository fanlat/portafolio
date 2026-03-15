import React from 'react'
import { Works } from './Works'
import { Link } from 'react-router-dom'

export const Proyects = () => {
  return (
    <>
    <section className='flex justify-center mt-24'>
        <header className='w-full sm:w-8/12 mb-10 text-center'>
            <h2 className='text-needle-text text-4xl sm:text-6xl font-bold uppercase'>Proyectos</h2>
            <p className='text-needle-text text-lg sm:text-2xl font-light'>Estos son algunos de los proyectos en los que he trabajado.</p>
        </header>
    </section>
    <section className='grid sm:auto-rows-[192px] sm:grid-cols-3 grid-cols-1 w-full sm:w-9/12 gap-5 sm:mx-auto'>
        <Works limit={6} home={true}/>
    </section>
    <section>
        <Link to='/proyectos' title="Proyectos" className='text-needle-text text-center mt-5 bg-needle-green w-fit mx-auto px-8 py-1 rounded-md shadow-md shadow-black/10 flex'>
          <strong>Ver más</strong>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_11_62)">
            <path d="M8.56002 4.18994C7.4681 4.64193 6.47588 5.30454 5.64001 6.13994" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.69 9.06006C3.23656 10.1504 3.0021 11.3192 3 12.5001" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.69 15.9399C4.14199 17.0319 4.8046 18.0241 5.64 18.8599" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.56 20.8101C9.6503 21.2635 10.8192 21.498 12 21.5001" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.44 20.8101C16.5319 20.3581 17.5241 19.6955 18.36 18.8601" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.31 15.94C20.7634 14.8497 20.9979 13.6808 21 12.5" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.31 9.05989C19.858 7.96797 19.1954 6.97576 18.36 6.13989" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.44 4.19C14.3497 3.73656 13.1808 3.5021 12 3.5" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 12.5H15" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 9.5V15.5" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_11_62">
            <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
            </defs>
          </svg>
        </Link>
    </section>
    </>
  )
}
