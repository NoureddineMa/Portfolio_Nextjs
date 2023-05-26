import React from 'react'
import Image from 'next/image'
import Cercle from '../../public/Assets/Cercle.png'
import './CardServices.css'

const CardsServices = ({title, content}) => {
  return (
    <div className='bg-[#EAE3D2] text-start px-7 py-7 rounded-lg shadow-md card__width border-2 hover:border-[#38518A] hover:cursor-pointer'>
        <div className='flex gap-5 items-center '>
          <Image src={Cercle} />  
          <p className='title_card'>{title}</p>
        </div>
        <p className='mt-5 px-2'>{content}</p>
    </div>
  )
}

export default CardsServices
