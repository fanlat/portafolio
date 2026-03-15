import React from 'react'
import imgReact from '../../../assets/react.webp'
import imgUi from '../../../assets/ui.webp'
import imgTypeScript from '../../../assets/typescript.webp'
import imgVue from '../../../assets/vue.webp'

export const Certifications = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full md:w-8/12 mx-auto gap-10'>
        <header className="flex justify-center items-center text-2xl mt-24 leading-relaxed">
            <h2 className='text-needle-text text-4xl sm:text-6xl font-bold uppercase text-center'>Certificaciones</h2>
        </header>
        <article
            className='text-needle-text text-center text-md sm:text-2xl leading-relaxed grid grid-cols-2 md:grid-cols-4 gap-5'
        >
            <a href="https://www.udemy.com/certificate/UC-a74b33a0-ffba-473c-9f7b-05ba11c5fd5a/" target="_blank" rel="noreferrer" className='col-span-1 gap-5 flex flex-col items-center'>
                <img className='w-1/2 aspect-square object-contain drop-shadow' src={imgReact} alt="React" />
                <span>Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+</span>
            </a>
            <a href="https://www.udemy.com/certificate/UC-f8abfaa6-3436-4011-bed0-0c6b66eba036/" target="_blank" rel="noreferrer" className='col-span-1 gap-5 flex flex-col items-center'>
                <img className='w-1/2 aspect-square object-contain drop-shadow' src={imgUi} alt="UX/UI" />
                <span>Diseño UX: experiencia de usuario UX/UI + Figma 2024</span>
            </a>
            <a href="https://www.udemy.com/certificate/UC-fcf1fa52-ff05-4f72-b409-8c0b47e6b40e/" target="_blank" rel="noreferrer" className='col-span-1 gap-5 flex flex-col items-center'>
                <img className='w-1/2 aspect-square object-contain drop-shadow' src={imgTypeScript} alt="TypeScript" />
                <span>Type Scrip sin fronteras</span>
            </a>
            <a href="https://www.udemy.com/certificate/UC-4c9ebc78-065d-45f8-9424-4e69a9b8531c/" target="_blank" rel="noreferrer" className='col-span-1 gap-5 flex flex-col items-center'>
                <img className='w-1/2 aspect-square object-contain drop-shadow' src={imgVue} alt="VUE" />
                <span>Vue.js 3 - La Guía Completa - Composition Pinia MEVN 10 Apps</span>
            </a>
        </article>
    </section>
  )
}
