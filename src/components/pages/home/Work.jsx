import React from 'react';
import { Link } from 'react-router-dom';

export const Work = ({id,title, tecnologia, descripcion,url}) => {
  return (
    <article id={`work-${id}`} className='work mb-5 rounded-3xl overflow-hidden relative before:contents before:absolute before:opacity-0 hover:before:opacity-90 before:bg-summer-green-800 before:top-0 before:left-0 before:w-full before:h-full before:z-10 hover:before:block hover:shadow-sm border-summer-green-600 border-4'>
        <img src={`/images/${id}.webp`} alt={title} className='h-full w-full' />
        <div className='info hover:opacity-100 absolute bottom-0 opacity-0 top-0 left-0 p-6 hidden z-20 flex-col w-full h-full justify-between'>
            <header>
                <h3 className='text-white text-md sm:text-2xl font-bold'>{title}</h3>
                <strong className='text-white text-xs sm:text-sm mb-3 block'>{tecnologia}</strong>
                <p className='text-white text-xs  sm:text-sm'>{descripcion}</p>
            </header>
            {url && 
                <Link to={url} rel="noreferrer" title={title} target='_blank' className='text-white text-sm transition-colors duration-500 bg-gradient-to-r from-summer-green-600 to-summer-green-800 border-2 border-solid shadow-xl block px-8 py-1 rounded-2xl w-fit'>Visitar proyecto</Link>
            }
        </div>
    </article>
  )
}
