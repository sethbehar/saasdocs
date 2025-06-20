import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='mx-10 flex flex-col md:flex-row items-center justify-center select-none'>
        <div>
            <div className='flex flex-row gap-2 mb-4'>
                <img src='/React.png' alt='react' width={50} height={50} />    
                <img src='/Supabase.png' alt='supabase' width={50} height={50} />
                <img src='/Node.png' alt='node' width={50} height={50} />
                <img src='/Stripe.png' alt='stripe' width={50} height={50} />
            </div>
            <div className='text-4xl md:text-[64px] lg:text-[80px] mb-4'>
                <span className=''>SaaS</span> DocS
            </div>
            <div className='flex flex-col'>
                <span className='text-md text-gray-600'>Ship products following the most comprehensive documentation and tech stack</span>
                <Link to={'/docs'} className='bg-black text-center text-white rounded-3xl w-1/3 p-2 mt-6 cursor-pointer hover:bg-white hover:text-black transition duration-200 hover:border-[1px] border'>
                    Go to docs
                </Link>
            </div>
        </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="/about-image.png" alt="About illustration" className="hidden md:block max-w-xs md:max-w-sm lg:max-w-md" />
      </div>
    </div>
  )
}

export default Hero