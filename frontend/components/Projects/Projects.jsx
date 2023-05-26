import React from 'react'
import Project from '../ResuableComponents/Project'
import Image from 'next/image'
import Shape from "../../public/Assets/shape.png"
import Shape3 from "../../public/Assets/shape3.png"


const Projects = () => {
  return (
    <div className='mx-auto mt-16 max-w-screen-xl px-4 sm:px-6 lg:px-8 flex  flex-col' id="Projects">
            <div className='relative'>
                <h1 className='mb-2 title_services lg:mb-7 md:mb-7'>Projects</h1>
                <span className='hidden lg:flex'>
                  <Image className=' svg_style absolute' src={Shape} />
                </span>
                <span className='hidden lg:flex'>
                  <Image src={Shape3} className=' absolute svg2_style' />
                </span>
            </div>
            <p className='mb-7'>Here are some of my recent projects that <br />
             I am most proud of :</p>
            <div className='flex justify-between flex-col md:flex-row gap-8'>
            <Project style="border-2 border-[#38518A] px-7 py-2 mt-4 rounded-xl hover:bg-[#38518A] hover:text-white" btn ="View Demo" lien="https://neuras.stm.ma/" number="01 /" title="Neuras.ai" content="For this project, we developed a license plate recognition system that can accurately identify and track vehicles by their license plates. The system utilizes advanced image processing and machine learning techniques to extract and analyze the characters on the license plate, even in challenging lighting conditions or when the plate is partially obscured. The system has numerous potential applications, including traffic management, parking enforcement, and security and surveillance. We are excited to see where this technology takes us and what new possibilities it will open up in the future. We hope that this project will demonstrate our expertise in image processing and machine learning, and will help us to continue building upon our reputation as a leader in these fields." />
            <Project style="border-2 border-[#38518A] px-7 py-2 mt-4 rounded-xl hover:bg-[#38518A] hover:text-white" btn="View Demo" lien="https://tanger.ma/" number="02 /" title="Tanger.ma" content="For this project, we developed a comprehensive website for the city of Tanger. The website serves as a one-stop-shop for all things Tanger, including information on local attractions, events, businesses, and government services. The website features a clean and modern design, with a user-friendly interface and responsive layout for optimal viewing on a variety of devices. We utilized a variety of web development technologies, including HTML, CSS, JavaScript, and a content management system, to create a dynamic and interactive website. We are proud of this project as it provides a valuable resource for both residents and visitors of Tanger, and we hope it will help to promote the city and its many offerings. We are excited to continue updating and expanding the website as Tanger grows and evolves"/>
            </div>
            <div className='flex justify-between flex-col md:flex-row gap-8 md:my-3 lg:my-3'>
            <Project number="03 /" title="1000.ma" content="For this project, we developed a fully-featured e-commerce website using PHP and HTML/CSS. The website, named 1000.ma, allows users to browse and purchase a wide variety of products online. We utilized PHP for the back-end development of the website, including the creation of a secure and scalable database to store information about products, orders, and customers. For the front-end, we used HTML and CSS to create a visually appealing and easy-to-use interface. The website also includes features such as a shopping cart, payment processing, and order tracking, making it a complete and convenient shopping experience for users. We are proud of this project and hope that it will help to drive online sales and grow our business. We are excited to continue developing and improving the website as we expand our product offerings and reach new customers." />
            <Project number="04 /" title="Face Recognition" content="For this project, we developed a cutting-edge face recognition system at STM, the first AI company in Morocco. Our system utilizes state-of-the-art machine learning techniques to accurately identify individuals from a database of images. The system is able to extract and analyze facial features with high accuracy, even in difficult lighting conditions or when the face is partially obscured. The potential applications for this technology are numerous, including security and surveillance, event check-in, and personalized marketing. We are proud to be at the forefront of AI development in Morocco and are excited to see where this technology takes us in the future. We hope that this project will serve as a testament to the innovative and forward-thinking approach we take at STM and will help us to continue building upon our reputation as a leader in the field of AI."/>
            </div>
        </div>
  )
}
export default Projects
