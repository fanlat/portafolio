import React from 'react';
import { Link } from 'react-router-dom';

export const Experience = () => {
  return (
    <section className='w-full flex justify-center flex-col items-center text-2xl mt-24 mb-10 leading-relaxed'>
        <header className="mb-5">
            <h2 className='text-needle-text text-4xl sm:text-6xl font-bold uppercase text-center'>Experiencia</h2>
            <Link to="/documents/curriculum_Gustavo_Pozo.pdf" title='Descargar Curriculum' rel='noreferrer' target="_blank" className='flex gap-5 text-needle-text text-center mt-5 bg-needle-green w-fit mx-auto px-8 py-1 rounded-md border-2'>
                Descargar CV
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_11_92)">
                    <path d="M4 17.5V19.5C4 20.0304 4.21071 20.5391 4.58579 20.9142C4.96086 21.2893 5.46957 21.5 6 21.5H18C18.5304 21.5 19.0391 21.2893 19.4142 20.9142C19.7893 20.5391 20 20.0304 20 19.5V17.5" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 11.5L12 16.5L17 11.5" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 4.5V16.5" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_11_92">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                    </defs>
                </svg>
            </Link>
          </header>
        <ol className="relative border-s border-needle-text border-l-2 w-full sm:w-5/12 block">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-needle-green rounded-full mt-4 -start-[9px] border-2 border-needle-text "></div>
                <time className="mb-1 text-sm font-normal leading-none text-needle-text">Desde 08/2018 a la actualidad</time>
                <h3 className="text-lg font-semibold text-needle-text">Digital Marketing</h3>
                <p className="mb-4 text-base text-needle-text font-thin"><strong className='font-bold'>Labores realizadas:</strong> Desarrollo Front End en React y Twig, Maquetación Web, Diseño UX/UI, Creación y envió de Mailing, armado de Banner para AdWords, edición de videos. Otras contribuciones a la empresa: implementación de sistema de almacenamiento en la nube. Sistema de gestión de tareas colaborativas. Actualización en lenguajes Front End. Externalización de sistemas de video para los sitios web.</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-needle-green rounded-full mt-4 -start-[9px] border-2 border-needle-text "></div>
                <time className="mb-1 text-sm font-normal leading-none text-needle-text">Desde 03/2018 hasta 08/2018</time>
                <h3 className="text-lg font-semibold text-needle-text">Perfectpool</h3>
                <p className="mb-4 text-base text-needle-text font-thin"><strong className='font-bold'>Labores realizadas:</strong> Desarrollos Full Stack, Desarrollo Back End, Wordpress, Maquetación Web, Diseño UX/UI, creación y gestión de Mailing, armado de banner para AdWords, administración E-Comerce con Woocomerce, edición de videos, Graficas Publicitarias, Creación de Manuales y fichas técnicas.</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-needle-green rounded-full mt-4 -start-[9px] border-2 border-needle-text "></div>
                <time className="mb-1 text-sm font-normal leading-none text-needle-text">Desde 11/2017 hasta 01/2018</time>
                <h3 className="text-lg font-semibold text-needle-text">Freelance</h3>
                <p className="mb-4 text-base text-needle-text font-thin"><strong className='font-bold'>Labores realizadas:</strong>Desarrollo Front End, Maquetación Web, Creación de Mailing. Para algunas de las agencias en las que ya había trabajado anteriormente </p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-needle-green rounded-full mt-4 -start-[9px] border-2 border-needle-text "></div>
                <time className="mb-1 text-sm font-normal leading-none text-needle-text">Desde 04/2017 hasta 08/2017</time>
                <h3 className="text-lg font-semibold text-needle-text">Espacio Vital</h3>
                <p className="mb-4 text-base text-needle-text font-thin"><strong className='font-bold'>Labores realizadas:</strong> Desarrollos Full Stack, creación e implementación de administradores Web, creación de bases de datos, maquetación e implementación WEB, administración y actualización de sitios WEB, implementación de Animaciones WEB. En la que destaca la memoria y reporte anual para Sodimac</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-needle-green rounded-full mt-4 -start-[9px] border-2 border-needle-text "></div>
                <time className="mb-1 text-sm font-normal leading-none text-needle-text">Desde 12/2015 hasta 03/2017</time>
                <h3 className="text-lg font-semibold text-needle-text">IMAGEMAKER</h3>
                <p className="mb-4 text-base text-needle-text font-thin"><strong className='font-bold'>Labores realizadas:</strong> Desarrollo Front End, para Seguros Falabella, ademas de la mantención de las campañas, test A/B, maquetación de Mailing y diseños UX/UI</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-needle-green rounded-full mt-4 -start-[9px] border-2 border-needle-text "></div>
                <time className="mb-1 text-sm font-normal leading-none text-needle-text">Desde 02/2015 hasta 11/2015</time>
                <h3 className="text-lg font-semibold text-needle-text">Vieja Escuela</h3>
                <p className="mb-4 text-base text-needle-text font-thin"><strong className='font-bold'>Labores realizadas:</strong> Desarrollos Full Stack, Diseño UX/UI, creación e implementación de administradores Web, maquetación e implementación WEB, administración y actualización de sitios WEB, implementación de Animaciones WEB. De este periodo destaca la creación del sitio para la Expo Fotos, con un sistema de administración y participación de este concurso, con el cual se pudieron valorizar y puntuar las fotografías</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-needle-green rounded-full mt-4 -start-[9px] border-2 border-needle-text "></div>
                <time className="mb-1 text-sm font-normal leading-none text-needle-text">Desde 08/2014 hasta 11/2014</time>
                <h3 className="text-lg font-semibold text-needle-text">Espacio Vital</h3>
                <p className="mb-4 text-base text-needle-text font-thin"><strong className='font-bold'>Labores realizadas:</strong> Desarrollo Full Stack, diseño UX/UI, administración de sitios y creación de reportes y memorias web, en la que destaca la memoria y reporte para la constructora Paz, además de memoria y reporte para el Metro de Santiago.</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-needle-green rounded-full mt-4 -start-[9px] border-2 border-needle-text "></div>
                <time className="mb-1 text-sm font-normal leading-none text-needle-text">Desde 02/2014 hasta 05/2014</time>
                <h3 className="text-lg font-semibold text-needle-text">Espacio Vital</h3>
                <p className="mb-4 text-base text-needle-text font-thin"><strong className='font-bold'>Labores realizadas:</strong> Desarrollos Full Stack, diseño UX/UI, administración de sitios web, memorias y reportes anuales.</p>
            </li>
        </ol>
    </section>
  )
}
