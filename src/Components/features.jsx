import React from 'react'
// import { BsFillEmojiHeartEyesFill } from 'react-icons/bs'
const Features = () => {
    return (
        <><div className="flex  justify-center  w-full h-screen flex-col space-y-24">
            <div className='flex   border-4 h-1/3 mx-10  pt-10 shadow-slate-400 shadow-xl rounded-md'>
                <div className="flex ">
                    <div className="flex space-x-32 ">
                        <div className='flex flex-col text-white font-semibold space-y-5 pl-10'><div className=' text-2xl font-serif animate-bounce text-yellow-300'>Awesome Drinks</div>
                            <div className='font-thin'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ratione labore dignissimos, ex sapiente eligendi ipsam minima nesciunt, atque suscipit ullam quasi repudiandae iste libero voluptate exercitationem excepturi aspernatur quidem!</div> </div>
                        <div className='flex flex-col text-white font-semibold space-y-5 pr-10'><div className='text-2xl font-serif  animate-bounce text-yellow-300'>Energetic</div>
                            <div className='font-thin'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ratione labore dignissimos, ex sapiente eligendi ipsam minima nesciunt, atque suscipit ullam quasi repudiandae iste libero voluptate exercitationem excepturi aspernatur quidem!</div> </div>
                    </div>
                </div>
            </div>
            <div className='flex  border-4 h-1/3 mx-10  pt-10 shadow-slate-400 shadow-xl rounded-md'>
                <div className="flex ">
                    <div className="flex m-10 flex-col">
                        <div className='text-2xl font-serif text-yellow-300 font-semibold animate-bounce'>Leety</div>
                        <div className='font-thin text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae suscipit aperiam deleniti minus incidunt non nulla, pariatur ut consequatur necessitatibus aut veritatis libero. Repudiandae quibusdam vitae ut iusto ducimus!</div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Features