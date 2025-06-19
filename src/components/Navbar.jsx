import React from 'react'

const Navbar = () => {
  return (
     <nav className="text-black flex items-center justify-between mt-12 mx-12 px-16 p-4 gap-3 rounded-2xl bg-[#272763]/10 shadow-lg">
        <div className='flex flex-row gap-1 cursor-pointer'>
            <span className='font-bold'>Docs</span>
            <div className='bg-blue-500 text-center items-center justify-center flex rounded h-4 px-1'>
                <span className='text-[8px] text-white font-bold'>Beta</span>    
            </div>
        </div>
        <div className='flex flex-row gap-4 font-bold'>
            <span className='cursor-pointer text-sm'>Home</span>
            <span className='cursor-pointer text-sm'>Product</span>
            <span className='cursor-pointer text-sm'>About</span>
        </div>
    </nav>
  )
}

export default Navbar