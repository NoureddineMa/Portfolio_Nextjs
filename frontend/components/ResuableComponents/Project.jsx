import React from 'react'
import Line from '../../public/Assets/line.png'
import Link from 'next/link'
import Image from 'next/image'
import './Project.css'


const Project = ({number , title , content , lien , style , btn}) => {
  return (
    <div className='w-full md:w-3/5 lg:w-3/5'>
        <Image className='my-8' src={Line} />
        <div className='flex my-7 gap-4 flex-col md:flex-row lg:flex-row md:gap-16 lg:gap-16'>
            <h1 className='number_projet'>{number}</h1>
            <h1 className='title_projet'>{title}</h1>
        </div>
        <p className='font-light'>{content}</p>
        <Link href={`${lien}`}>        
        <button className={style}>{btn}</button>
        </Link>
    </div>
  )
}
export default Project
