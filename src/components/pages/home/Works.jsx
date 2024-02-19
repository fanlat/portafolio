import React from 'react';
import { Trabajos } from '../../../data/trabajos';
import { Work } from './Work';

export const Works = ({limit, home=false}) => {
  return (
    <> 
        {
            home ?
            Trabajos.filter(work=> work.home === true).slice(0,limit).map(trabajo => (
                <Work 
                    key={trabajo.id} 
                    id={trabajo.id}
                    title={trabajo.title}
                    tecnologia={trabajo.tecnologia}
                    descripcion={trabajo.descripcion}
                    url={trabajo.url}
                    colspan={trabajo.span}
                    towering={trabajo.towering}
                    home={trabajo.home}
                />
            ))
            :
            Trabajos.slice(0,limit).map(trabajo => (
                <Work 
                    key={trabajo.id} 
                    id={trabajo.id}
                    title={trabajo.title}
                    tecnologia={trabajo.tecnologia}
                    descripcion={trabajo.descripcion}
                    url={trabajo.url}
                    colspan={trabajo.span}
                />
            ))
        }
    </>
    
  )
}
