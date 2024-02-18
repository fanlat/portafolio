import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ScrollToTop from '../components/ScrollTop'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Home } from '../components/pages/Home'
import { Project } from '../components/pages/Project'
import { Contact } from '../components/pages/contact'

export const Roads = () => {
  return (
    <BrowserRouter>
        <ScrollToTop/>
        {/* layaout */}
        <Header/>
        {/* content */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Navigate to="/"/>}/>
            <Route path="/proyectos" element={<Project/>}/>
            <Route path='/contacto' element={<Contact/>}/>
            <Route path="*" element={
              <main id='contact' className='flex flex-col justify-center items-center h-[calc(100vh_-_300px)] sm:h-[calc(100vh_-_339px)] relative bg-summer-green-200 px-5 sm:px-0'>
                <h1 className='text-center font-bold text-7xl text-summer-green-old-800'>Error 404</h1>
                <h2 className='text-center font-thin text-3xl mt-5 text-summer-green-old-700'>Pagina no encontrada</h2>
              </main>
            }/>
        </Routes>
        {/* footer */}
        <Footer/>
    </BrowserRouter>
  )
}
