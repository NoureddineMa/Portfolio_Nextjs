import React from 'react'
import BlogCard from '../ResuableComponents/BlogCard'
import Image from 'next/image'
import Shape from '../../public/Assets/shape.png'
import Hoising from '../../public/Assets/Hoisting.png'
import CallBack from '../../public/Assets/CallBack.png'
import Async from '../../public/Assets/Async.png'
import './Blog.css'

const Blogs = () => {
  return (
    <section id="blog">
    <div className='mx-auto mt-16 max-w-screen-xl px-4 sm:px-6 lg:px-8 flex  flex-col gap-9 pb-16'>
            <div className='relative'>
                <h1 className='mb-2 title_services lg:mb-7 md:mb-7'>Blogs</h1>
                <span className='hidden lg:flex'>
                    <Image className='svg__shape absolute' src={Shape} />
                </span>
            </div>
            <div>
            <BlogCard  height={290} width={500} img={Async} style="flex flex-col-reverse  md:flex-row lg:flex-row gap-7 " title="Async function" content="An asynchronous function is a function preceded by the async keyword, and which may contain the await keyword. async and await allow asynchronous behavior, based on a promise (Promise), written in a simple way, and avoiding to configure explicitly the chains of promise."/>
            </div>
            <div>
            <BlogCard  height={290} width={500} img={CallBack} style="flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse gap-7 " title="Call stack In JavaScript" content="MA call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc. When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function. Any functions that are called by that function are added to the call stack further up, and run where their calls are reached. When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing. If the stack takes up more space than it was assigned, a stack overflow error is thrown."/>
            </div>
            <div className='lg:pb-11 md:pb-11'>
            <BlogCard  height={290} width={500} img={Hoising} style="flex flex-col-reverse md:flex-row lg:flex-row gap-7 " title="Hoisting In JavaScript" content="In this tutorial, we’ll investigate how the famed hoisting mechanism occurs in JavaScript. Before we dive in, let’s get to grips with what hoisting is. Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. Of note however, is the fact that the hoisting mechanism only moves the declaration. The assignments are left in place. If you’ve ever wondered why you were able to call functions before you wrote them in your code, then read on!"/>
            </div>
        </div>
        </section>
  )
}
export default Blogs
