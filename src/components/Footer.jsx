import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="text-black flex items-center justify-between mt-12 mx-12 mb-12 px-16 p-4 gap-3 rounded-2xl bg-[#272763]/10 shadow-lg select-none">
            <div className='flex flex-row gap-1 cursor-pointer'>
                <span className='font-bold'>© Saas Docs</span>
            </div>
            <div className='flex flex-row gap-4'>
                <a href='/privacy' className='cursor-pointer text-sm'>Privacy</a>
                <a href='/terms' className='cursor-pointer text-sm'>Terms</a>
            </div>
        </footer>
    </div>
  )
}

export default Footer