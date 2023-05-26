import React from 'react'
import Image from 'next/image';
import Me from '../../public/me.png'
import Elipse from '../../public/Ellipse.png'
import './Hero.css'
import Link from 'next/link';
import Github from '../../public/Assets/Group 29.png'
import Behance from '../../public/Assets/Group 30.png'
import Linkedin from '../../public/Assets/Group 28.png'


const Hero = () => {
    return (
        <div className='mx-auto my-16 max-w-screen-xl px-4 sm:px-6 lg:px-8 flex gap-10  relative' id="About">
            <div className='mt-16'>
                <h1 className='first__title text-center md:text-center lg:text-start font-bold'>I am <span className='text-[#1C3879] font-bold'>Noureddine Maher</span> , a self-taught 
                    MernStack developer and  UI/graphic designer</h1>
                <p className='text-center md:text-center lg:text-start leading-7 mt-5'>
                    I have been passionate about learning new technologies and creating
                    beautiful and functional user interfaces .
                    always looking for new challenges and I am always willing to learn new things. 
                    I am confident in my skills and I am excited to share my work with the world
                </p>
                <div className='flex flex-col md:flex-row lg:flex-row mt-7 items-center gap-4'>
                    <span className='text-[#2A4481] font-bold' >Check Out My </span>
                    <Link href="https://github.com/NoureddineMa"><Image src={Github} /></Link>
                    <Link href="https://www.behance.net/noureddinedesign"><Image src={Behance} /></Link>
                    <Link href="https://www.linkedin.com/in/noure-ddine-maher-537294231/"><Image src={Linkedin} /></Link>
                </div>
            </div>
            <div>
                <Image className='hidden md:flex lg:flex' src={Me} alt="me" width={1200} height={1200} />
            </div>
        </div>
    )
}

export default Hero
