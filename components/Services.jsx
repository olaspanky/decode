import React from 'react'
import Image from 'next/image'
import { odc, aff, care, woman } from '../public/assets';


const Services = () => {
  return (
        <div className='w-full mt-10 justify-center item'>
          <div className='w-full lg:max-w-[1920px] mr-auto ml-auto'>
        
        <h1 className='text-[48px] text-center'> Service We guarantee to our valued customers</h1>

<div className=" max-w-full lg:max-w-[90%] ml-auto mr-auto  grid grid-cols-12 gap-2 md:grid-cols-12 md:gap-4  md:w-auto">

    <div className="item-center  text-center bg-[#006D73] h-[186px] sm:h-[464px] col-span-12 lg:col-span-6 rounded-[15px]	">
      <div className=''>
        <div className='w-[24px] sm:w-[64px]  h-[24px] sm:h-[64px] center mt-[30px] sm:mt-[98.5px] lg:mt-[50px] ml-auto pt-[0.4em] sm:pt-[1em] mr-auto bg-white rounded-full  items-center'>
        <Image src= {odc} alt="image" className='w-[11px] sm:w-[33px] h-[11px] sm:h-[33px]  mr-auto ml-auto ' />

        </div>
        <div className='max-w-[90%] lg:max-w-full sm:max-w-[90%] ml-auto mr-auto'>
        <h1 className='text-[20px] md:text-[47px] min-w-[90%] font-extrabold leading-[20px] md:leading-[40px] mt-[21.5px] sm:mt-[58.5] text-[#FFFFFF] tracking-widest'>On-Demand Courses</h1>
        <p className='text-[14px] md:text-[28px] font-[400] text-center text-[#FFFFFF] mt-[12px] sm:mt-[43px] w-[80%] ml-auto mr-auto '>We provide a wide range of courses 
        to meet the latest demands in
        the tech industry and business world.</p>
        </div>
        </div>

  </div>
    <div className="item-center text-center h-[464px]  col-span-12 md:col-span-6 rounded-[15px] hidden lg:flex">
        <Image src={woman} alt="image" className="w-full h-full " />
        
    
  </div>

  

  <div className="item-center  text-center bg-[#006D73] h-[186px] sm:h-[464px] col-span-12 lg:col-span-5 rounded-[15px]	">
      <div className=''>
        <div className='w-[24px] sm:w-[64px]  h-[24px] sm:h-[64px] center mt-[30px] sm:mt-[98.5px] ml-auto pt-[0.4em] sm:pt-[1em] mr-auto bg-white rounded-full  items-center'>
        <Image src= {odc} alt="image" className='w-[11px] sm:w-[33px] h-[11px] sm:h-[33px]  mr-auto ml-auto ' />

        </div>
        <div className='max-w-[90%] lg:max-w-full sm:max-w-[90%] ml-auto mr-auto'>
        <h1 className='text-[20px] md:text-[47px] min-w-[90%] font-extrabold leading-[20px] md:leading-[40px] mt-[21.5px] sm:mt-[58.5] text-[#FFFFFF] tracking-widest'>Self Affordable</h1>
        <p className='text-[14px] md:text-[28px] font-[400] text-center text-[#FFFFFF] mt-[12px] sm:mt-[43px] w-[80%] ml-auto mr-auto'>All our courses from beginner to expert level is cost efficient and available to suit all financial budget.</p>
        </div>
        </div>

  </div>

  <div className="item-center  text-center bg-[#006D73] h-[186px] sm:h-[464px] col-span-12 lg:col-span-7 rounded-[15px]	">
      <div className=''>
        <div className='w-[24px] sm:w-[64px]  h-[24px] sm:h-[64px] center mt-[30px] sm:mt-[98.5px] ml-auto pt-[0.4em] sm:pt-[1em] mr-auto bg-white rounded-full  items-center'>
        <Image src= {odc} alt="image" className='w-[11px] sm:w-[33px] h-[11px] sm:h-[33px]  mr-auto ml-auto  ' />

        </div>
        <div className='max-w-[90%] lg:max-w-full sm:max-w-[90%] ml-auto mr-auto'>
        <h1 className='text-[20px] md:text-[47px] min-w-[90%] font-extrabold leading-[20px] md:leading-[40px] mt-[21.5px] sm:mt-[58.5] text-[#FFFFFF] tracking-widest'>Customer Centric</h1>
        <p className='text-[14px] md:text-[28px] font-[400] text-center text-[#FFFFFF] mt-[12px] sm:mt-[43px] w-[80%] ml-auto mr-auto '>We provide you with timely support and answer to all
questions during and after you begin your tech journey</p>
        </div>
        </div>

  </div>
</div>

</div>
    </div>
  )
}

export default Services
