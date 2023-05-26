import React from 'react'
import './Services.css'
import CardsServices from '../ResuableComponents/CardsServices'
import Image from 'next/image'
import Shape from "../../public/Assets/shape.png"


const Services = () => {
    return (
        <div className='bg-[#F9F5EB] py-8 md:py-16 lg:py-16 ' id="Services">
            <div className='mx-auto mt-16 max-w-screen-xl px-4 sm:px-6 lg:px-8 flex gap-10 relative'>
                <h1 className='mb-11 title_services'>Services</h1>
                <span className='hidden lg:flex'>
                <Image className='absolute svg__style' src={Shape} />
                </span>
            </div>
            <div className='flex flex-col gap-3'>
            <div className='flex flex-col md:flex-row lg:flex-row lg:mt-4 justify-between mx-auto max-w-screen-xl px-4 lg:px-8 gap-7'>
                <CardsServices title="Web development" content="I can       design websites that are both
                visually appealing and easy to use" />
                <CardsServices title="UI/UX design" content="I can design beautiful and functional user 
                interfaces for websites and web 
                applications & Also Mobile Applications" />
                <CardsServices title="Front-end development" content="I can develop the front-end of websites 
                and web applications using HTML, CSS, 
                and JavaScript (React Js , Next js )" />
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row lg:mt-4 justify-between mx-auto max-w-screen-xl px-4 lg:px-8 gap-7 md:py-5'>
                <CardsServices title="Back-end development" content="I can develop the back-end of websites 
                and web applications using Node.js, 
                Express, and MongoDB" />
                <CardsServices title="Marketing materials" content="I can create marketing materials, such 
                as brochures, flyers, and social media 
                graphics" />
                <CardsServices title="Print design" content="I can design print materials, such as 
                business cards, flyers, and posters." />
            </div>
            </div>
        </div>
    )
}

export default Services
