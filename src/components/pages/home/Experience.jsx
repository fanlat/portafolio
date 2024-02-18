import React from 'react';
import { Link } from 'react-router-dom';

export const Experience = () => {
  return (
    <section className='w-full flex justify-center flex-col items-center text-2xl mt-24 leading-relaxed'>
        <header className="mb-5">
            <h2 className='text-summer-green-800 text-4xl sm:text-6xl font-bold uppercase text-center'>Experiencia</h2>
            <Link to="/documents/curriculum.pdf" title='Descargar Curriculum' rel='noreferrer' target="_blank" className='flex gap-5 text-white text-center mt-5 bg-gradient-to-r from-summer-green-600  to-summer-green-800 w-fit mx-auto px-8 py-1 rounded-3xl border-2'>
                Descargar Curriculum
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download w-10" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><title>Descargar Curriculum</title><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
            </Link>
          </header>
        <ol className="relative border-s border-summer-green-800 border-l-2 w-full sm:w-5/12 block">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-summer-green-200 rounded-full mt-4 -start-[9px] border-2 border-summer-green-800 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-summer-green-800">Desde 08/2018 a la actualidad</time>
                <h3 className="text-lg font-semibold text-summer-green-800">Digital Marketing</h3>
                <p className="mb-4 text-base text-summer-green-800 font-thin"><strong className='font-bold'>Labores realizadas:</strong> Desarrollo Front End en React y Twig, Maquetación Web, Diseño UX/UI, Creación y envió de Mailing, armado de Banner para AdWords, edición de videos. Otras contribuciones a la empresa: implementación de sistema de almacenamiento en la nube. Sistema de gestión de tareas colaborativas. Actualización en lenguajes Front End. Externalización de sistemas de video para los sitios web.</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-summer-green-200 rounded-full mt-4 -start-[9px] border-2 border-summer-green-800 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-summer-green-800">Desde 03/2018 hasta 08/2018</time>
                <h3 className="text-lg font-semibold text-summer-green-800">Perfectpool</h3>
                <p className="mb-4 text-base text-summer-green-800 font-thin"><strong className='font-bold'>Labores realizadas:</strong> Desarrollos Full Stack, Desarrollo Back End, Wordpress, Maquetación Web, Diseño UX/UI, creación y gestión de Mailing, armado de banner para AdWords, administración E-Comerce con Woocomerce, edición de videos, Graficas Publicitarias, Creación de Manuales y fichas técnicas.</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-summer-green-200 rounded-full mt-4 -start-[9px] border-2 border-summer-green-800 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-summer-green-800">Desde 11/2017 hasta 01/2018</time>
                <h3 className="text-lg font-semibold text-summer-green-800">Freelance</h3>
                <p className="mb-4 text-base text-summer-green-800 font-thin"><strong className='font-bold'>Labores realizadas:</strong>Desarrollo Front End, Maquetación Web, Creación de Mailing. Para algunas de las agencias en las que ya había trabajado anteriormente </p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-summer-green-200 rounded-full mt-4 -start-[9px] border-2 border-summer-green-800 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-summer-green-800">Desde 04/2017 hasta 08/2017</time>
                <h3 className="text-lg font-semibold text-summer-green-800">Espacio Vital</h3>
                <p className="mb-4 text-base text-summer-green-800 font-thin"><strong className='font-bold'>Labores realizadas:</strong> Desarrollos Full Stack, creación e implementación de administradores Web, creación de bases de datos, maquetación e implementación WEB, administración y actualización de sitios WEB, implementación de Animaciones WEB. En la que destaca la memoria y reporte anual para Sodimac</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-summer-green-200 rounded-full mt-4 -start-[9px] border-2 border-summer-green-800 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-summer-green-800">Desde 12/2015 hasta 03/2017</time>
                <h3 className="text-lg font-semibold text-summer-green-800">IMAGEMAKER</h3>
                <p className="mb-4 text-base text-summer-green-800 font-thin"><strong className='font-bold'>Labores realizadas:</strong> Desarrollo Front End, para Seguros Falabella, ademas de la mantención de las campañas, test A/B, maquetación de Mailing y diseños UX/UI</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-summer-green-200 rounded-full mt-4 -start-[9px] border-2 border-summer-green-800 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-summer-green-800">Desde 02/2015 hasta 11/2015</time>
                <h3 className="text-lg font-semibold text-summer-green-800">Vieja Escuela</h3>
                <p className="mb-4 text-base text-summer-green-800 font-thin"><strong className='font-bold'>Labores realizadas:</strong> Desarrollos Full Stack, Diseño UX/UI, creación e implementación de administradores Web, maquetación e implementación WEB, administración y actualización de sitios WEB, implementación de Animaciones WEB. De este periodo destaca la creación del sitio para la Expo Fotos, con un sistema de administración y participación de este concurso, con el cual se pudieron valorizar y puntuar las fotografías</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-summer-green-200 rounded-full mt-4 -start-[9px] border-2 border-summer-green-800 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-summer-green-800">Desde 08/2014 hasta 11/2014</time>
                <h3 className="text-lg font-semibold text-summer-green-800">Espacio Vital</h3>
                <p className="mb-4 text-base text-summer-green-800 font-thin"><strong className='font-bold'>Labores realizadas:</strong> Desarrollo Full Stack, diseño UX/UI, administración de sitios y creación de reportes y memorias web, en la que destaca la memoria y reporte para la constructora Paz, además de memoria y reporte para el Metro de Santiago.</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-4 h-4 bg-summer-green-200 rounded-full mt-4 -start-[9px] border-2 border-summer-green-800 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-summer-green-800">Desde 02/2014 hasta 05/2014</time>
                <h3 className="text-lg font-semibold text-summer-green-800">Espacio Vital</h3>
                <p className="mb-4 text-base text-summer-green-800 font-thin"><strong className='font-bold'>Labores realizadas:</strong> Desarrollos Full Stack, diseño UX/UI, administración de sitios web, memorias y reportes anuales.</p>
            </li>
        </ol>
    </section>
  )
}
