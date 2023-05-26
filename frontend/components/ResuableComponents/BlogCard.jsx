import React from 'react'
import Blog from "../../public/Assets/Blog.jpg"
import Image from 'next/image'
import './BlogCard.css'


const BlogCard = ({title , content , img , style }) => {
  return (
    <div className={style}>
      <div className='flex flex-col lg:w-3/5 md:w-3/5'>
      <h1 className='title__blog tex-[#38518A]'>{title}</h1>
      <span className='text-[#38518A] mb-6 text-sm lg:my-4 md:my-4'>Friday 26/05/2023</span>
      <p className='font-light'>{content}</p>
      </div>
      <Image className='lg:w-2/5 md:w-2/5 ' src={img} />
    </div>
  )
}
export default BlogCard
