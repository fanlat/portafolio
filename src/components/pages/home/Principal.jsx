import React from 'react';
import { Yo } from '../../Yo';

export const Principal = () => {
  return (
    <section className='text-summer-green-800 h-[calc(100vh-300px)] sm:h-[calc(100vh-400px)] w-full flex justify-center items-center text-center text-xl sm:text-2xl leading-relaxed'>
        <div className='w-full sm:w-8/12'> 
            <Yo/>
            <p>Diseñador y programador multimedia con <strong className='text-summer-green-800 sm:text-3xl text-2xl'>9</strong> años de experiencia.</p>
            <p>Apasionado por el desarrollo <strong className='text-summer-green-800 sm:text-3xl text-2xl'>Front</strong>.</p>
            <p>Te invito a revisar mi <strong className='text-summer-green-800 sm:text-3xl text-2xl'>portafolio</strong> y ver los <strong className='text-summer-green-800 sm:text-3xl text-2xl'>proyectos</strong> a los que me he dedicado.</p>
            <p className='mt-11'>
              <strong className='text-5xl leading-loose text-summer-green-800'>
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce icon icon-tabler icon-tabler-arrow-big-down-lines-filled w-9 mx-auto" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><title>Icono Flecha</title><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 8l-.117 .007a1 1 0 0 0 -.883 .993v1.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-1.999a1 1 0 0 0 -1 -1h-6z" strokeWidth="0" fill="currentColor" /><path d="M15 2a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z" strokeWidth="0" fill="currentColor" /><path d="M15 5a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z" strokeWidth="0" fill="currentColor" /></svg>
              </strong>
            </p>
        </div>
      </section>
  )
}
