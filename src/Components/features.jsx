import React from 'react'
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs'
const Features = () => {
    return (
        <div className="flex justify-center h-screen">
            <div className='flex border-4 h-1/2 w-4/5 justify-center pt-10 shadow-slate-400 shadow-xl'>
                <div className="flex ">
                    <div className="flex space-x-32 ">
                        <div className='flex flex-col text-white font-semibold space-y-5 pl-10'><div className=' text-2xl animate-bounce text-yellow-300'>Awesome Drinks</div>
                            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ratione labore dignissimos, ex sapiente eligendi ipsam minima nesciunt, atque suscipit ullam quasi repudiandae iste libero voluptate exercitationem excepturi aspernatur quidem!</div> </div>
                        <div className='flex flex-col text-white font-semibold space-y-5 pr-10'><div className='text-2xl animate-bounce text-yellow-300'>Energetic</div>
                            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ratione labore dignissimos, ex sapiente eligendi ipsam minima nesciunt, atque suscipit ullam quasi repudiandae iste libero voluptate exercitationem excepturi aspernatur quidem!</div> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features