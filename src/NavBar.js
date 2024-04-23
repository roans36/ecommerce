import React, { useState } from "react"
import { BiSearch } from "react-icons/bi";

import { NavLink } from "react-router-dom"



const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen(prevState => !prevState);
  }

  return (
    <>

      <div className="bg-white font-Raleway block md:flex justify-end  px-20 py-4 lg:justify-end md:gap-4 items-center ">
        <div className="md:inline-flex justify-end px-2 block text-xl ">
          <ul className="list-none block min-[400px]:flex justify-end mx-16 ">
            <li><NavLink className=' transition duration-300 transform hover:text-yellow-400 tracking-wide px-4 py-2' to='/sale'>Sale</NavLink></li>
            <li> <NavLink className='transition duration-300 transform hover:text-yellow-400 tracking-wide px-4 py-2 sm:ml-2' to='/wishlist'>wishlist</NavLink></li>
            <li> <NavLink className='transition duration-300 transform hover:text-yellow-400 tracking-wide px-4 py-2 sm:ml-2' to='/cart'>cart</NavLink></li>
            <li><NavLink className='transition duration-300 transform hover:text-yellow-400 tracking-wide px-4 py-2 sm:ml-2' to='/login'>login/signup</NavLink></li>
          </ul>
        </div>
      </div>





      <div className=" bg-limeyel sticky top-0 w-full sm:flex sm:justify-around bg-opacity-80 bg-clip-padding backdrop:backdrop-filter backdrop-blur-sm p-0 text-gray-600">
        <nav className=" flex justify-around items-center max-[1020px]:px-3 py-2">
          <div>
            <h1 className=""><img src={require("./")} alt="" height='120px' width='180px' /></h1>
          </div>

          <div className="flex items-center ">
            <button className="text-3xl cursor-pointer sm:hidden">
              <svg onClick={toggleNav}
                className="w-10 h-10 text-gray-400 hover:text-gray-500 focus:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill='100px'
                width='50px'
                height='50px'
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>


        </nav>


        <div className="font-Raleway text-2xl">
          <div className={`${isNavOpen ? 'block' : 'hidden'}  px-4 text-start pt-4 pb-4 sm:flex m-4 text-gray-600`} >
            <NavLink>
              <div className="relative max-[720px]:hidden block">
                <div className="block absolute inset-y-0  items-center ps-3 pointer-events-none mt-3">
                  <BiSearch />
                </div>
                <input type="text" id="default-search" className="  bg-transparent bg-opacity-60 block w-70 h-10  ps-12 text-sm border border-black rounded-full dark:placeholder   " placeholder='Search' />
              </div>
            </NavLink>
            <NavLink className='block px-2 py-1 font-semibold rounded sm:mt-0 sm:ml-2' to='/home'>Home</NavLink>
            <NavLink className='block px-2 py-1 font-semibold rounded sm:mt-0 sm:ml-2' to='/about'>About</NavLink>
            <NavLink className='block px-2 py-1 font-semibold rounded sm:mt-0 sm:ml-2' to='/catalog'>Catalog</NavLink>
            <NavLink className='block px-2 py-1 font-semibold rounded sm:mt-0 sm:ml-2' to='/reviews'>Reviews</NavLink>
            <NavLink className='block px-2 py-1 font-semibold rounded sm:mt-0 sm:ml-2' to='/support'>Support</NavLink>
          </div >
        </div>


      </div >

    </>

  )

}

export default NavBar;