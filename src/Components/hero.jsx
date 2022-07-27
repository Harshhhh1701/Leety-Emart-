import React from 'react'
import bgImg from '../images/main.png'
const Hero = () => {
  return (
    <div className='flex h-screen w-full items-center'>
      <div className="flex flex-col w-3/4 items-center">
        <div className="text-8xl tracking-widest font-bold font-serif text-white ">LEETY</div>
        <div className="text-3xl tracking-wider font-sans font-light text-white"> Energy Drink</div>
      </div>
      <div className='w=1/4'>
        <img src={bgImg} alt=""  />
      </div>
    </div>
  )
}

export default Hero