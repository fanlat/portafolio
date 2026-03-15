import React from 'react';
import { Link } from 'react-router-dom';

export const Work = ({id,title, tecnologia, descripcion,url, colspan, towering, home}) => {
  return (
    <article id={`work-${id}`} className={`work mb-5 overflow-hidden rounded-3xl relative border border-needle-text ${ home && towering ? colspan ? "col-span-2 row-span-2":"col-span-2 row-span-2 sm:col-span-1 sm:row-span-1" : home && !towering && colspan ? "col-span-2 row-span-2 sm:col-span-1 sm:row-span-1": !home && !towering && colspan ? "col-span-2 row-span-2":"col-span-2 row-span-2 sm:col-span-1 sm:row-span-1"}`}>
        <img src={`/images/${id}.webp`} alt={title} className='h-auto w-full rounded-3xl' />
        <div className={`info absolute backdrop-blur-xl bg-opacity-30 rounded-r-3xl bottom-0 top-0 right-0 flex z-20 flex-col h-full justify-between bg-summer-green-800 ${ home && towering ? colspan ? "p-6 sm:w-1/2 w-2/3":"p-3 w-2/3" : home && !towering && colspan ? "p-3 w-2/3": !home && !towering && colspan ? "p-6 sm:w-1/2 w-2/3":"p-3 w-2/3"}`}>
            <header>
                <h3 className={`text-white text-md font-bold ${ home && towering ? colspan ? "sm:text-2xl":"sm:text-sm" : home && !towering && colspan ? "": !home && !towering && colspan ? "sm:text-2xl":"sm:text-sm"}`}>{title}</h3>
                <strong className={`text-white text-xs hidden  mb-3 sm:block ${ home && towering ? colspan ? "sm:text-lg":"sm:text-sm" : home && !towering && colspan ? "": !home && !towering && colspan ? "sm:text-lg":"sm:text-sm"}`}>{tecnologia}</strong>
                <p className={`text-white text-xs hidden sm:block  ${ home && towering ? colspan ? "sm:text-2xl":"sm:text-sm" : home && !towering && colspan ? "": !home && !towering && colspan ? "sm:text-2xl":"sm:text-sm"}`}>{descripcion}</p>
            </header>
            {url && 
                <Link to={url} rel="noreferrer" title={title} target='_blank' className='text-needle-text text-sm transition-colors duration-500 bg-needle-green shadow-xl block px-8 py-1 rounded-md w-fit text-center'>Visitar proyecto</Link>
            }
        </div>
    </article>
  )
}
