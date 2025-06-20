import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav className="text-black flex items-center justify-between mt-12 mx-12 px-16 p-4 gap-3 rounded-2xl bg-[#272763]/10 shadow-lg select-none">
        <div className='flex flex-row gap-1 cursor-pointer'>
            <Link to='/docs' className='font-bold'>Docs</Link>
            <div className='bg-blue-500 text-center items-center justify-center flex rounded h-4 px-1'>
                <span className='text-[8px] text-white font-bold'>Beta</span>    
            </div>
        </div>
        <div className='flex flex-row gap-4 font-bold'>
            <Link to='/product' className='cursor-pointer text-sm'>Product</Link>
            <Link to='#about' className='cursor-pointer text-sm'>About</Link>
        </div>
    </nav>
  )
}

export default Navbar