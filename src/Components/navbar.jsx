import React from 'react'
import { BiCart } from 'react-icons/bi'
import {AiOutlineUser } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex border-b-2 border-gray-300 h-24 w-screen'>
        <div className='flex w-1/4 border-r-2 border-gray-300 justify-end items-end pr-10 pb-5'>
                <div className="font-bold font-mono text-3xl text-white">LEETY</div>
        </div>
        <div className="flex  space-x-16 items-end pl-28 pb-5">
            <div className='text-xl  text-white hover:text-2xl'>Home</div>
            <div className='text-xl text-white'>Shop</div>
            <div className='text-xl text-white'>About us</div>
            
        </div>
        <div className='flex w-1/2 justify-center mt-10 space-x-28  '>
          <BiCart className='text-3xl  text-white '/>
          <div className='text-xl text-white'>Orders</div>
          <AiOutlineUser className='text-3xl  text-white'/>
        </div>
    </div>
  )
}

export default Navbar