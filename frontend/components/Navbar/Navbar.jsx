import React from 'react'
import Link from 'next/link'
import './Navbar.css'



const Navbar = () => {
  return (
    <header aria-label="Site Header" className="bg-white">
  <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 mt-5">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <p className='logo'>nm</p>
      </div>
      <div className="hidden md:block">
        <nav aria-label="Site Nav">
          <ul className="flex items-center gap-8 text-sm ">
              <Link
                className="text-gray transition  hover:text-[#1C3879] "
                href="#About"
              >
                About me
              </Link>
              <Link
                className="text-gray transition  hover:text-[#1C3879]  "
                href="#Services"
              >
                Services
              </Link>
              <Link
                className="text-gray transition  hover:text-[#1C3879]  "
                href="#Projects"
              >
                Projects
              </Link>
              <Link
                className="text-gray transition hover:text-[#1C3879]  "
                href="#blog"
              >
                Blogs
              </Link>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <Link
            className="rounded-[100px] bg-[#1C3879] px-11 py-3 text-sm font-medium text-white shadow hover:bg-white hover:border-2 hover:border-[#1C3879] hover:text-[#1C3879]"
            href="/"
          >
            Contact me
          </Link>
        </div>

        <div className="block md:hidden">
          <button
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Navbar
