import React from 'react'

const Hero = () => {
  return (
    <div className='xl:max-w-[1920px] w-full'>
      <div className='w-full h-[198px] sm:h-[582px] bg-[#040E53] justify-center text-center'>

        <div className=' lg:hidden'>
          <h1 className='font-extrabold font-700 text-[28px] sm:text-[60px] text-white lg:hidden pt-8 sm:pt-20'>Build your career in <br /> Tech skills for a <span className='text-[#E6D805]'>Token</span></h1>

          <p className='font-4xl text-[10px] sm:text-[20px] text-white lg:hidden pt-8 sm:pt-20'>Join Decode Analitical to learn and ecome a tech talent in just 3-months. <br />
          Get the required hands on experience to land your first job in tech</p>
        </div>

      </div>
    </div>
  )
}

export default Hero
