import React from 'react';
import { Link } from 'react-router-dom';

export const Work = ({id,title, tecnologia, descripcion,url, colspan, towering, home}) => {
  return (
    <article id={`work-${id}`} className={`work mb-5 rounded-3xl overflow-hidden relative border-summer-green-600 border-4 ${ home && towering ? colspan ? "col-span-2 row-span-2":"col-span-2 row-span-2 sm:col-span-1 sm:row-span-1" : home && !towering && colspan ? "col-span-2 row-span-2 sm:col-span-1 sm:row-span-1": !home && !towering && colspan ? "col-span-2 row-span-2":"col-span-2 row-span-2 sm:col-span-1 sm:row-span-1"}`}>
        <img src={`/images/${id}.webp`} alt={title} className='h-full w-full' />
        <div className={`info absolute backdrop-blur-xl bg-opacity-30 bottom-0 top-0 right-0 flex z-20 flex-col h-full justify-between bg-summer-green-800 ${ home && towering ? colspan ? "p-6 sm:w-1/2 w-2/3":"p-3 w-2/3" : home && !towering && colspan ? "p-3 w-2/3": !home && !towering && colspan ? "p-6 sm:w-1/2 w-2/3":"p-3 w-2/3"}`}>
            <header>
                <h3 className={`text-white text-md font-bold ${ home && towering ? colspan ? "sm:text-2xl":"sm:text-sm" : home && !towering && colspan ? "": !home && !towering && colspan ? "sm:text-2xl":"sm:text-sm"}`}>{title}</h3>
                <strong className={`text-white text-xs hidden  mb-3 sm:block ${ home && towering ? colspan ? "sm:text-lg":"sm:text-sm" : home && !towering && colspan ? "": !home && !towering && colspan ? "sm:text-lg":"sm:text-sm"}`}>{tecnologia}</strong>
                <p className={`text-white text-xs hidden sm:block  ${ home && towering ? colspan ? "sm:text-2xl":"sm:text-sm" : home && !towering && colspan ? "": !home && !towering && colspan ? "sm:text-2xl":"sm:text-sm"}`}>{descripcion}</p>
            </header>
            {url && 
                <Link to={url} rel="noreferrer" title={title} target='_blank' className='text-white text-sm transition-colors duration-500 bg-gradient-to-r from-summer-green-600 to-summer-green-800 border-2 border-solid shadow-xl block px-8 py-1 rounded-2xl w-fit text-center'>Visitar proyecto</Link>
            }
        </div>
    </article>
  )
}
