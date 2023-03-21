import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { close, logo, menu } from '../public/assets';
import{ navLinks } from '../constants';




const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className=' w-full font-abc font-semibold h-[148px]  flex py-6 justify-around items-center bg-[#FFFFFF]'>
      <Image src={logo} alt= "hoobank" className='w-[101px] h-[80px]' />

      <ul className='list-none lg:flex hidden justify-center flex-1 '>
          {navLinks.map((nav, index)=> (
            <li key={nav.id} className={`font-poppins font-400 cursor-pointer text-{18px} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black `}>
              <a href={'#${nav.id}'}>
                {nav.title}

              </a>

            </li>
          ))}
      </ul>

      <div className='flex gap-10  lg:flex hidden'>
        <div>
       <p className='pt-4'>log in</p>

        </div>
       
        <button className='w-[200px] text-[18px] h-[64px]'>
              sign up
        </button>
      </div>

      <div className=' lg:hidden flex flex-1 justify-end items-center '>
            <Image src={toggle ? close : menu} alt="menu" 
            className='w-[28px] h-[28px] object-contain' 
            onClick={()=> setToggle((prev) => !prev)} />

            <div className={`${toggle ? 'flex' : 'hidden' } 
            p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl `}>
                
            <ul className='list-none flex flex-col justify-end items-center flex-1 bg-black rounded-lg p-10'>
          {navLinks.map((nav, index)=> (
            <li key={nav.id} className={`font-poppins font-normal text-white cursor-pointer text-{16px} ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-black `}>
              <a href={'#${nav.id}'}>
                {nav.title}

              </a>

            </li>
               ))}
            </ul>
            </div>
            </div>
    </nav>
  )
}

export default Navbar
