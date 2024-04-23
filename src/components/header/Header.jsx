import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='stickey flex h-[100px] w-full border-b-2 bg-gray-200 border-black top-0 shadow-lg'>
<div className='flex flex-col h-full w-full  mb-0 items-center justify-center ml-0 bg-custom-nav text-black'>
      {/* bg-red-[23277141]  */}
          
                  {/* nav */}
                <div className='  hidden justify-between items-center lg:w-auto lg:flex lg:order-1'>
                <ul className='flex flex-row justify-evenly items-center h-[75px] '>
                  <li className='flex justify-center'>
                    <NavLink to='/' className={({isActive})=>`block by-2 px-[12px] py-1 duration-200 ${isActive ? "text-pink-700":"text-black" } hover:bg-gray-300 hover:px-[12px]  hover:text-black py-1 rounded-lg mx-12 my-8  text-[18px]`}>
                      Home
                    </NavLink>
                  </li>
                  <li className='flex justify-center'>
                    <NavLink to='/About' className={({isActive})=>`block by-2 px-[12px] py-1 duration-200 ${isActive ? "text-pink-700":"text-black" } hover:bg-gray-300 hover:text-black hover:px-[12px] py-1 rounded-lg mx-12 my-8  text-[18px]`}>
                      About us
                    </NavLink>
                    
                  </li>
                  
                  
                </ul>
          </div>
          {/* navEnd */}
          </div> 
          </nav>
  )
}

export default Header