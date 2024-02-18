import React from 'react';
import { Trabajos } from '../../../data/trabajos';
import { Work } from './Work';

export const Works = ({limit, towering=false}) => {
  return (
    <> 
        {
            towering ?
            Trabajos.filter(work=> work.towering === true).slice(0,limit).map(trabajo => (
                <Work 
                    key={trabajo.id} 
                    id={trabajo.id}
                    title={trabajo.title}
                    tecnologia={trabajo.tecnologia}
                    descripcion={trabajo.descripcion}
                    url={trabajo.url}
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
                />
            ))
        }
    </>
    
  )
}
