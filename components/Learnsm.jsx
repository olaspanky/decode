import React from 'react'
import Image from 'next/image'
import {man, sline} from '../public/assets'


const Learnsm = () => {
  return (
    <div className='w-full flex lg:hidden bg-[#040E53]'>

        <div className='w-full items-center justify-center'>

            <div className='w-[90%] mt-8 sm:mt-20 ml-auto mr-auto '>
                <div className='w-[200px] sm:w-[420px] h-[200px] sm:h-[420px] rounded-full mr-auto ml-auto  items-center bg-black'>
                <Image src={man} alt="" className='w-full h-full ' />
                </div> 
            </div>
            <br />
            <div className='text-center w-[70%] ml-auto mr-auto pt-2 sm:pt-6'>
                <h1 className=' text-[17px] sm:text-[40px] leading-[22px] sm:leading-[50px] text-white font-bold'>
                Become a skilled <span className='text-[#00D289]'>Software Developer</span>  in less than 6 Months.


                </h1>
            </div>
            <div className='w-[80%] ml-auto mr-auto flex justify-evenly pt-2 sm:pt-6'>
                <div className='flex '>
                    <div className='w-[20px] sm:w-[49px] h-[20px] sm:h-[49px] rounded-full bg-[#00D289]  pl-[0.4em] sm:pl-[1em] pt-[0.4em] sm:pt-[1em]'>
                    <Image src={sline} alt="" className='w-[10px] sm:w-[20px] h-[10px] sm:h-[20px] ' />
                    </div>

                    <h1 className='text-[16px] sm:text-[28px] text-white'>
                        Tech newbies
                    
                    </h1>

                </div>

                <div className='flex'>
                    <div className='w-[20px] sm:w-[49px] h-[20px] sm:h-[49px] rounded-full bg-[#00D289] pl-[0.4em] sm:pl-[1em] pt-[0.4em] sm:pt-[1em] '>
                    <Image src={sline} alt="" className='w-[10px] sm:w-[20px] h-[10px] sm:h-[20px]' />
                    </div>

                    <h1 className='text-[16px] sm:text-[28px] text-white'>
                        Tech newbies
                    </h1>

                </div>
            </div>

            <div className='w-[80%] ml-auto mr-auto flex justify-evenly pt-2 sm:pt-6'>
                <div className='flex '>
                    <div className='w-[20px] sm:w-[49px] h-[20px] sm:h-[49px] rounded-full bg-[#00D289]  pl-[0.4em] sm:pl-[1em] pt-[0.4em] sm:pt-[1em]'>
                    <Image src={sline} alt="" className='w-[10px] sm:w-[20px] h-[10px] sm:h-[20px] ' />
                    </div>

                    <h1 className='text-[16px] sm:text-[28px] text-white'>
                        Tech newbies
                    
                    </h1>

                </div>

                <div className='flex'>
                    <div className='w-[20px] sm:w-[49px] h-[20px] sm:h-[49px] rounded-full bg-[#00D289] pl-[0.4em] sm:pl-[1em] pt-[0.4em] sm:pt-[1em] '>
                    <Image src={sline} alt="" className='w-[10px] sm:w-[20px] h-[10px] sm:h-[20px]' />
                    </div>

                    <h1 className='text-[16px] sm:text-[28px] text-white'>
                        Tech newbies
                    </h1>

                </div>
            </div>


        </div>
      
    </div>
  )
}

export default Learnsm
