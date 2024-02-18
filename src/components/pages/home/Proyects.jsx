import React from 'react'
import { Works } from './Works'
import { Link } from 'react-router-dom'

export const Proyects = () => {
  return (
    <>
    <section className='flex justify-center mt-24'>
        <header className='w-full sm:w-8/12 mb-10 text-center'>
            <h2 className='text-summer-green-800 text-4xl sm:text-6xl font-bold uppercase'>Proyectos</h2>
            <p className='text-summer-green-800 tex-lg sm:text-2xl font-light'>Estos son algunos de los proyectos en los que he trabajado.</p>
        </header>
    </section>
    <section className='grid grid-cols-1 sm:grid-cols-2 w-full sm:w-8/12 gap-5 sm:mx-auto'>
        <Works limit={4} towering={true}/>
    </section>
    <section>
        <Link to='/proyectos' title="Proyectos" className='text-white text-center block mt-5 bg-gradient-to-r from-summer-green-600 to-summer-green-800 w-fit mx-auto px-8 py-1 rounded-3xl border-2'>Ver más</Link>
    </section>
    </>
  )
}
