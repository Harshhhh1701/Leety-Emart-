import React from 'react'
import bgImg from '../images/main.png'
const Hero = () => {
  return (
    <>
    <div className='flex h-screen w-full items-center'>
      <div className="flex flex-col w-3/4 items-center">
        <div className="text-8xl tracking-widest font-bold font-serif text-white  animate-bounce z-10">LEETY</div>
        <div className="text-3xl tracking-wider font-sans font-light text-white animate-pulse z-10"> Energy Drink</div>
      </div>
      <div className='absolute bg-yellow-400 w-72 right-20 top-80 h-96 blur-3xl bg-opacity-70 rounded-2xl'></div>
      <div className='absolute bg-yellow-500 w-72 left-60 top-72 h-72 rounded-full blur-3xl bg-opacity-70  mix-blend-normal'></div>
      <div className='absolute bg-red-500 w-72 left-1/3 top-72 h-72 rounded-full blur-3xl bg-opacity-70  mix-blend-normal'></div>
      <div className='absolute bg-green-500 w-72 left-96 top-2/3 h-72 rounded-full blur-3xl bg-opacity-70  mix-blend-normal'></div>
      <div className='w=1/4 z-10'>
        <img src={bgImg} alt=""  />
      </div>
    </div>
    </>
  )
}

export default Hero