import React from 'react'

export const Knowledge = () => {
  return (
    <section className='text-needle-text flex flex-col'>
        <header className="flex flex-col gap-5 justify-center items-center text-2xl mt-24 leading-relaxed">
            <h2 className='text-4xl sm:text-6xl font-bold uppercase text-center'>Conocimientos</h2>
            <p className='text-needle-text text-lg md:text-2xl font-light text-center'>Herramientas, lenguajes y habilidades clave que utilizo en mi día a día</p>
        </header>
        <article className='grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-8/12 mx-auto gap-5 mt-10'>
            <div className='flex flex-col md:items-center gap-10 mt-10 bg-needle-greed col-span-1 p-5 rounded-xl shadow-lg'>
                <label htmlFor='programing'  className='flex items-center justify-center gap-2 text-needle-text text-2xl leading-relaxed'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_11_3)">
                        <path d="M6 19.5C5.46957 19.5 4.96086 19.2893 4.58579 18.9142C4.21071 18.5391 4 18.0304 4 17.5V13.5L3 12.5L4 11.5V7.5C4 6.96957 4.21071 6.46086 4.58579 6.08579C4.96086 5.71071 5.46957 5.5 6 5.5" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 12.375L15 10.688" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 12.375V15.75" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 12.375L9 10.688" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 12.375L15 14.063" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 9V12.375" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 12.375L9 14.063" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 19.5C18.5304 19.5 19.0391 19.2893 19.4142 18.9142C19.7893 18.5391 20 18.0304 20 17.5V13.5L21 12.5L20 11.5V7.5C20 6.96957 19.7893 6.46086 19.4142 6.08579C19.0391 5.71071 18.5304 5.5 18 5.5" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_11_3">
                        <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <strong>PROGRAMACIÓN</strong>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="md:hidden icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.375 6.22l-4.375 3.498l-4.375 -3.5a1 1 0 0 0 -1.625 .782v6a1 1 0 0 0 .375 .78l5 4a1 1 0 0 0 1.25 0l5 -4a1 1 0 0 0 .375 -.78v-6a1 1 0 0 0 -1.625 -.78z" /></svg>
                </label>
                <input type="checkbox" id="programing" className="peer hidden" />
                <ul className='hidden peer-checked:flex md:block flex-col columns-1 md:columns-3 list-disc px-5'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>Less</li>
                    <li>JavaScrip</li>
                    <li>React</li>
                    <li>HOOK</li>
                    <li>VUE</li>
                    <li>PINIA</li>
                    <li>JWT</li>
                    <li>NODE</li>
                    <li>ESPRESS</li>
                    <li>MEVN</li>
                    <li>MERN</li>
                    <li>PHP</li>
                    <li>CodeIgniter</li>
                    <li>Twig</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>Boostrap</li>
                    <li>Tailwind</li>
                    <li>Jquery</li>
                    <li>Ajax</li>
                    <li>JSON</li>
                </ul>
            </div>
            <div className='flex flex-col md:items-center gap-10 mt-10 bg-needle-pink col-span-1 p-5 rounded-xl shadow-lg'>
                <label htmlFor='adobe' className='flex items-center justify-center gap-2 text-needle-text text-2xl leading-relaxed'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_11_23)">
                        <path d="M3.5 21.5H7.5L20.5 8.5C21.0304 7.96956 21.3284 7.25014 21.3284 6.5C21.3284 5.74985 21.0304 5.03043 20.5 4.5C19.9696 3.96956 19.2501 3.67157 18.5 3.67157C17.7499 3.67157 17.0304 3.96956 16.5 4.5L3.5 17.5V21.5Z" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 6L19 10" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.5 8.5L7.5 3.5L3.5 7.5L8.5 12.5" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5 8.5L6 10" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.5 12.5L21.5 17.5L17.5 21.5L12.5 16.5" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.5 17.5L15 19" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_11_23">
                        <rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <strong>ADOBE</strong>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="md:hidden icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.375 6.22l-4.375 3.498l-4.375 -3.5a1 1 0 0 0 -1.625 .782v6a1 1 0 0 0 .375 .78l5 4a1 1 0 0 0 1.25 0l5 -4a1 1 0 0 0 .375 -.78v-6a1 1 0 0 0 -1.625 -.78z" /></svg>
                </label>
                <input type="checkbox" id="adobe" className="peer hidden" />
                <ul className='hidden peer-checked:flex md:block flex-col list-disc px-5'>
                    <li>DreamWeaver</li>
                    <li>Photoshop</li>
                    <li>LightRoom</li>
                    <li>Illustrator</li>
                    <li>Premier</li>
                    <li>Flash / Animate CC</li>
                    <li>Adobe XD,</li>
                </ul>
            </div>
            <div className='flex flex-col md:items-center gap-10 mt-10 bg-needle-sky col-span-1 p-5 rounded-xl shadow-lg'>
                <label htmlFor='application' className='flex items-center justify-center gap-2 text-needle-text text-2xl leading-relaxed'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_11_15)">
                        <path d="M4.25 3.10301C5.10789 2.60771 6.10525 2.40932 7.08738 2.53863C8.06952 2.66793 8.98154 3.1177 9.682 3.81817C10.3825 4.51864 10.8322 5.43067 10.9615 6.4128C11.0908 7.39494 10.8924 8.39229 10.3971 9.25018C9.90177 10.1081 9.13722 10.7785 8.22201 11.1576C7.3068 11.5367 6.29208 11.6032 5.33523 11.3468C4.37838 11.0904 3.53288 10.5254 2.92985 9.73948C2.32682 8.95356 1.99997 7.99062 2 7.00001L2.006 6.77101C2.04422 6.02092 2.26958 5.29232 2.66154 4.65164C3.05349 4.01096 3.59957 3.47858 4.25 3.10301Z" fill="#565656"/>
                        <path d="M5.63201 14.004C5.71951 13.8511 5.84587 13.724 5.9983 13.6356C6.15072 13.5472 6.3238 13.5006 6.50001 13.5006C6.67622 13.5006 6.8493 13.5472 7.00173 13.6356C7.15415 13.724 7.28051 13.8511 7.36801 14.004L11.368 21.004C11.4549 21.1561 11.5003 21.3283 11.4997 21.5034C11.4991 21.6785 11.4525 21.8504 11.3646 22.0019C11.2768 22.1534 11.1506 22.2791 10.9989 22.3665C10.8472 22.4539 10.6751 22.5 10.5 22.5H2.50001C2.32489 22.5 2.15286 22.4539 2.00113 22.3665C1.84939 22.2791 1.72327 22.1534 1.63538 22.0019C1.5475 21.8504 1.50093 21.6785 1.50034 21.5034C1.49975 21.3283 1.54515 21.1561 1.63201 21.004L5.63201 14.004Z" fill="#565656"/>
                        <path d="M13.293 2.79303C13.4805 2.60556 13.7348 2.50024 14 2.50024C14.2652 2.50024 14.5195 2.60556 14.707 2.79303L21.707 9.79303C21.8025 9.88528 21.8787 9.99562 21.9311 10.1176C21.9835 10.2396 22.0111 10.3709 22.0123 10.5036C22.0134 10.6364 21.9881 10.7681 21.9378 10.891C21.8875 11.0139 21.8133 11.1255 21.7194 11.2194C21.6255 11.3133 21.5138 11.3876 21.391 11.4379C21.2681 11.4881 21.1364 11.5134 21.0036 11.5123C20.8708 11.5111 20.7396 11.4835 20.6176 11.4311C20.4956 11.3787 20.3852 11.3025 20.293 11.207L13.293 4.20703C13.1055 4.0195 13.0002 3.76519 13.0002 3.50003C13.0002 3.23487 13.1055 2.98056 13.293 2.79303Z" fill="#565656"/>
                        <path d="M20.293 2.79304C20.4816 2.61088 20.7342 2.51009 20.9964 2.51237C21.2586 2.51465 21.5094 2.61981 21.6948 2.80522C21.8802 2.99063 21.9854 3.24144 21.9877 3.50364C21.99 3.76584 21.8892 4.01844 21.707 4.20704L14.707 11.207C14.5184 11.3892 14.2658 11.49 14.0036 11.4877C13.7414 11.4854 13.4906 11.3803 13.3052 11.1949C13.1198 11.0095 13.0146 10.7586 13.0123 10.4964C13.0101 10.2342 13.1109 9.98164 13.293 9.79304L20.293 2.79304Z" fill="#565656"/>
                        <path d="M21 13.5C21.2652 13.5 21.5196 13.6054 21.7071 13.7929C21.8946 13.9804 22 14.2348 22 14.5V21.5C22 21.7652 21.8946 22.0196 21.7071 22.2071C21.5196 22.3946 21.2652 22.5 21 22.5H14C13.7348 22.5 13.4804 22.3946 13.2929 22.2071C13.1054 22.0196 13 21.7652 13 21.5V14.5C13 14.2348 13.1054 13.9804 13.2929 13.7929C13.4804 13.6054 13.7348 13.5 14 13.5H21Z" fill="#565656"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_11_15">
                        <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <strong>APLICACIONES</strong>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="md:hidden icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.375 6.22l-4.375 3.498l-4.375 -3.5a1 1 0 0 0 -1.625 .782v6a1 1 0 0 0 .375 .78l5 4a1 1 0 0 0 1.25 0l5 -4a1 1 0 0 0 .375 -.78v-6a1 1 0 0 0 -1.625 -.78z" /></svg>
                </label>
                <input type="checkbox" id="application" className="peer hidden" />
                <ul className='hidden peer-checked:flex md:block flex-col columns-1 md:columns-2 list-disc  px-5'>
                    <li>Sublime Text</li>
                    <li>PHP Storm</li>
                    <li>VS Code</li>
                    <li>Postman</li>
                    <li>Google Web  Designer</li>
                    <li>Mailchimp</li>
                    <li>Doppler</li>
                    <li>SendinBlue</li>
                    <li>Mailjet</li>
                    <li>BannerSnack</li>
                    <li>Wordpress</li>
                    <li>Woocomerce</li>
                    <li>3D Max</li>
                    <li>Cura</li>
                    <li>Chitubox</li>
                    <li>Trello</li>
                    <li>Wrike</li>
                    <li>Figma</li>
                    <li>Notion</li>
                </ul>
            </div>
            <div className='flex flex-col md:items-center gap-10 mt-10 bg-needle-wine break-words col-span-1 p-5 rounded-xl shadow-lg'>
                <label htmlFor='other' className='flex items-center justify-center gap-2 text-needle-text text-2xl leading-relaxed'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_11_34)">
                        <path d="M15.5 13C14.5717 13 13.6815 13.3687 13.0251 14.0251C12.3687 14.6815 12 15.5717 12 16.5V17.5C12 18.4283 12.3687 19.3185 13.0251 19.9749C13.6815 20.6313 14.5717 21 15.5 21C16.4283 21 17.3185 20.6313 17.9749 19.9749C18.6313 19.3185 19 18.4283 19 17.5V15.7" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.5 13C9.42826 13 10.3185 13.3687 10.9749 14.0251C11.6313 14.6815 12 15.5717 12 16.5V17.5C12 18.4283 11.6313 19.3185 10.9749 19.9749C10.3185 20.6313 9.42826 21 8.5 21C7.57174 21 6.6815 20.6313 6.02513 19.9749C5.36875 19.3185 5 18.4283 5 17.5V15.7" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.5 16C18.4283 16 19.3185 15.6313 19.9749 14.9749C20.6313 14.3185 21 13.4283 21 12.5C21 11.5717 20.6313 10.6815 19.9749 10.0251C19.3185 9.36875 18.4283 9 17.5 9H17" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19 9.3V6.5C19 5.57174 18.6313 4.6815 17.9749 4.02513C17.3185 3.36875 16.4283 3 15.5 3C14.5717 3 13.6815 3.36875 13.0251 4.02513C12.3687 4.6815 12 5.57174 12 6.5" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.5 16C5.57174 16 4.6815 15.6313 4.02513 14.9749C3.36875 14.3185 3 13.4283 3 12.5C3 11.5717 3.36875 10.6815 4.02513 10.0251C4.6815 9.36875 5.57174 9 6.5 9H7" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 9.3V6.5C5 5.57174 5.36875 4.6815 6.02513 4.02513C6.6815 3.36875 7.57174 3 8.5 3C9.42826 3 10.3185 3.36875 10.9749 4.02513C11.6313 4.6815 12 5.57174 12 6.5V16.5" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_11_34">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <strong>OTRAS HABILIDADES</strong>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="md:hidden icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.375 6.22l-4.375 3.498l-4.375 -3.5a1 1 0 0 0 -1.625 .782v6a1 1 0 0 0 .375 .78l5 4a1 1 0 0 0 1.25 0l5 -4a1 1 0 0 0 .375 -.78v-6a1 1 0 0 0 -1.625 -.78z" /></svg>
                </label>
                <input type="checkbox" id="other" className="peer hidden" />
                <ul className='hidden peer-checked:flex md:block flex-col list-disc px-5'>
                    <li>Administración de Hardware y Software</li>
                    <li>Recuperación de información</li>
                    <li>S.O. varios</li>
                    <li>Programas de ofimática</li>
                    <li>Modelado y  animación 3D</li>
                    <li>Impresión 3D</li>
                </ul>
            </div>
        </article>
    </section>
  )
}
