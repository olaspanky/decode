import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar'
import Frame31 from '../components/Frame31'
import Services from '../components/Services'
import Hero from '../components/Hero'
import Frame2241 from '../components/Frame2241'
import Frame2241max from '../components/Frame2241max'
import Learn from '../components/Learn'
import Learnsm from '../components/Learnsm'

const Home: NextPage = () => {
  return (
    <div className='bg-primary max-w-[1920px] overflow-hidden'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <div className='"sm:px-16 px-6 py-0 flex justify-center items-center'>

        <div className='xl:max-w-[1920px] w-full'>

        <Navbar />
        <Frame31 />
       

        </div>
        </div>


        
        <div className='"sm:px-16 px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1920px] w-full'>
        <div>
        <Hero />  
        
        <Services />

        <Frame2241 />

        <Frame2241max />

        <Learn />

        <Learnsm/>
        </div>
        </div>
        </div>


        
       

        
      
    </div>
  )
}

export default Home
