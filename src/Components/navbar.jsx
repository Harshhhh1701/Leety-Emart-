import React from 'react'
import { BiCart } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex border-b-2 border-gray-300 h-24 w-full'>
      <div className='flex w-1/4 border-r-2 border-gray-300 justify-end items-end pr-10 pb-5'>
        <div className="font-bold font-mono text-3xl text-white">LEETY</div>
      </div>
      <div className='flex w-1/2'>
        <div className="flex  w-1/3 space-x-28 pt-10 pl-28 pb-5">
          <div className='text-xl  text-white hover:text-2xl'>Home</div>
        </div>
        <div className="flex  w-1/3 space-x-28 pt-10 pl-28 pb-5">
          <div className='text-xl text-white hover:text-2xl'>Shop</div>
        </div>
        <div className="flex  w-1/3 space-x-28 pt-10 pl-28 pb-5">
          <div className='text-xl text-white hover:text-2xl'>Contact</div>
        </div>
      </div>

      <div className="flex w-1/2">
        <div className='flex w-1/2 pt-10 ml-28 space-x-16 '>
          <BiCart className='text-3xl  text-white hover:text-4xl' />

        </div>
        <div className='flex w-1/2 pt-10 ml-28 space-x-16 '>
          <div className='text-xl text-white hover:text-2xl'>Orders</div>

        </div>
        <div className='flex w-1/2 pt-10 ml-28 space-x-16 '>
          <AiOutlineUser className='text-3xl  text-white hover:text-4xl' />

        </div>
      </div>


    </div>
  )
}

export default Navbar