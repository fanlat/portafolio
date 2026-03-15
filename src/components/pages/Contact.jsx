import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';

export const Contact = () => {
  const form = useRef();
  const [send,setSend] = useState('no_send');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mev9t1f', 'template_jvzcn2n', form.current, 'J4alZK_Dkw5Q3j1U7')
      .then((result) => {
          console.log();
          setSend('ok');
      }, (error) => {
          console.log(error.text);
          setSend('error');
      });
  };
  return (
    <main id='contact' className='flex flex-col justify-center pt-24 pb-10 bg-needle-vanilla  px-5 sm:px-0'>
          <Helmet>
            <title>Gustavo Pozo - Contacto</title>
            <meta name="description" content="Diseñador y programador multimedia con 9 años de experiencia. Apasionado por el desarrollo Front. Te invito a revisar mi portafolio y ver los proyectos a los que me he dedicado."></meta>
            <meta name="keywords" content="frontEnd, Front, End, Portafolio, Web, desarrollo, Proyectos"></meta>
            <meta property="og:site_name" content="Portafolio Gustavo Pozo"></meta>
            <meta property="og:description" content="Diseñador y programador multimedia con 9 años de experiencia. Apasionado por el desarrollo Front. Te invito a revisar mi portafolio y ver los proyectos a los que me he dedicado."></meta>
            <meta property="og:title" content="Gustavo Pozo - Contacto"></meta>
            <meta property="og:type" content="site"></meta>
            <meta property="og:url" content="https://fanlat-portfolio.netlify.app/contacto"></meta>
          </Helmet>
          <header className="mb-20">
            <h2 className='text-needle-text text-4xl sm:text-6xl font-bold uppercase text-center'>Contacto</h2>
          </header>
          <section className="flex justify-center">
            <form ref={form} onSubmit={sendEmail} className='w-full sm:w-5/12'>
            {send === 'ok' && <p className='text-needle-text text-center block bg-needle-green w-full  px-8 py-1 rounded-md border-2 border-needle-green relative bottom-5' role='alert'>Mensaje enviado correctamente</p>}
            {send === 'error' && <p className='text-needle-text text-center block bg-red-600 w-full px-8 py-1 rounded-md border-2 border-red-800 relative bottom-5' role='alert'>Error al enviar el mensaje</p>}
              <fieldset className="flex flex-col justify-content-end focus:outline-none focus-visible:outline-none">
                  <input type="text" className="w-full shadow-md mb-5 rounded-md px-4 py-1 border-needle-green border-2 focus:outline-none focus-visible:outline-none placeholder:text-needle-text" name='user_name' id='user_name' placeholder='Nombre' />
                  <input type="text" className="w-full shadow-md mb-5 rounded-md px-4 py-1 border-needle-green border-2 focus:outline-none focus-visible:outline-none placeholder:text-needle-text" name='user_company' id='user_company' placeholder='Empresa' />
                  <input type="email" className="w-full shadow-md mb-5 rounded-md px-4 py-1 border-needle-green border-2 focus:outline-none focus-visible:outline-none placeholder:text-needle-text" name='user_email' id='user_email' placeholder='E-mail' />
                  <input type="text" className="w-full shadow-md mb-5 rounded-md px-4 py-1 border-needle-green border-2 focus:outline-none focus-visible:outline-none placeholder:text-needle-text" name='user_phone' id='user_phone' placeholder='Whatsapp' />
                  <textarea name="message" className='w-full shadow-md mb-5 rounded-md px-4 py-1 border-needle-green border-2 focus:outline-none focus-visible:outline-none placeholder:text-needle-text' id="message" cols="30" rows="10" placeholder='Motivo del contacto' ></textarea>
                  <input type="submit" className="text-needle-text text-center block mt-5 bg-needle-green w-fit mx-auto px-8 py-1 rounded-md border-2 cursor-pointer focus:outline-none focus-visible:outline-none" value="ENVIAR"/>
              </fieldset>
            </form>
          </section>
    </main> 
  )
}
