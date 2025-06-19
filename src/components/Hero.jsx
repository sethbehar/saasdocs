import React from 'react'

const Hero = () => {
  return (
    <div className='mx-10 flex flex-row items-center justify-center'>
        <div>
            <div className='flex flex-row gap-2 mb-4'>
                <img src='/React.png' alt='' width={50} height={50} />    
                <img src='/Supabase.png' alt='' width={50} height={50} />
                <img src='/Nodejs.png' alt='' width={50} height={50} />
                <img src='/Stripe.png' alt='' width={50} height={50} />
            </div>
            <div className='text-4xl md:text-[64px] lg:text-[80px] mb-4'>
                <span className=''>SaaS</span> Docs
            </div>
            <div className='flex flex-col'>
                <span className='text-md text-gray-600'>Ship products following the most comprehensive documentation and tech stack</span>
                <button className='bg-black text-white rounded-3xl w-1/3 p-2 mt-6 cursor-pointer hover:bg-white hover:text-black transition duration-200 hover:border-[1px] border'>
                    Go to docs
                </button>
            </div>
        </div>
        <div className='w-1/2'>

        </div>
    </div>
  )
}

export default Hero