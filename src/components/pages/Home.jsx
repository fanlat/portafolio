import React from 'react'
import { Principal } from './home/Principal'
import { Proyects } from './home/Proyects'
import { Experience } from './home/Experience'
import { Helmet } from 'react-helmet'
import { Certifications } from './home/Certifications'
import { Knowledge } from './home/Knowledge'

export const Home = () => {
  return (
    <main id="home" className='flex flex-col bg-needle-vanilla justify-center pt-10 sm:pt-24 sm:pb-10 px-5 sm:px-0'>
      <Helmet>
        <title>Gustavo Pozo - Portafolio</title>
        <meta name="description" content="Diseñador y programador multimedia con 9 años de experiencia. Apasionado por el desarrollo Front. Te invito a revisar mi portafolio y ver los proyectos a los que me he dedicado."></meta>
        <meta name="keywords" content="frontEnd, Front, End, Portafolio, Web, desarrollo"></meta>
        <meta property="og:site_name" content="Portafolio Gustavo Pozo"></meta>
        <meta property="og:description" content="Diseñador y programador multimedia con 9 años de experiencia. Apasionado por el desarrollo Front. Te invito a revisar mi portafolio y ver los proyectos a los que me he dedicado."></meta>
        <meta property="og:title" content="Gustavo Pozo - Portafolio"></meta>
        <meta property="og:type" content="site"></meta>
        <meta property="og:url" content="https://fanlat-portfolio.netlify.app/"></meta>
      </Helmet>
      <Principal/>
      <Certifications/>
      <Knowledge/>
      <Proyects/>
      <Experience/>
    </main>
  )
}

