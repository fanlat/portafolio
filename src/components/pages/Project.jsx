import React from 'react';
import { Works } from './home/Works';
import { Helmet } from 'react-helmet';

export const Project = () => {
  return (
    <main id="proyect" className='flex flex-col justify-center pt-24 pb-10 bg-whitepx-5 px-4 sm:px-0'>
         <Helmet>
          <title>Gustavo Pozo - Proyectos</title>
          <meta name="description" content="Diseñador y programador multimedia con 9 años de experiencia. Apasionado por el desarrollo Front. Te invito a revisar mi portafolio y ver los proyectos a los que me he dedicado."></meta>
          <meta name="keywords" content="frontEnd, Front, End, Portafolio, Web, desarrollo, Proyectos"></meta>
          <meta property="og:site_name" content="Portafolio Gustavo Pozo"></meta>
          <meta property="og:description" content="Diseñador y programador multimedia con 9 años de experiencia. Apasionado por el desarrollo Front. Te invito a revisar mi portafolio y ver los proyectos a los que me he dedicado."></meta>
          <meta property="og:title" content="Gustavo Pozo - Proyectos"></meta>
          <meta property="og:type" content="site"></meta>
          <meta property="og:url" content="https://fanlat-portfolio.netlify.app/proyectos"></meta>
        </Helmet>
        <header className='mb-20'>
            <h2 className='text-summer-green-800 text-4xl sm:text-6xl font-bold uppercase text-center'>Proyectos</h2>
        </header>
        <section className='grid sm:auto-rows-[192px] sm:grid-cols-3 grid-cols-1 sm:w-9/12 gap-5 sm:mx-auto'>
            <Works/>
        </section>
    </main>
  )
}
