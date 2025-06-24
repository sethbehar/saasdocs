import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Pricing = ({ session }) => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const handlePayment = () => {
    if (!session) {
        setError('You must be logged in to make a payment.')
        return
    }
    navigate('/payment')
  }

  return (
    <div className='h-1/2 flex flex-col items-center p-6 select-none'>
      <h1 className='text-2xl md:text-[48px]  mb-4'>Pricing</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-3/4 max-w-4xl'>
        {/* Free Plan */}
        <div className='border border-gray-300 rounded-lg p-6 flex flex-col items-center'>
          <h2 className='text-xl font-bold mb-4'>Free</h2>
          <ul className='text-gray-500 mb-6 space-y-2'>
            <li className='text-black flex flex-row gap-1'><img src='checkmark.png' alt='✔' width={18} height={15} /> Access to our documentation</li>
            <li className='flex flex-row gap-1'><img src='x.png' alt='✔' width={18} height={15} /> <span>Template SaaS</span></li>
            <li className='flex flex-row gap-1'><img src='x.png' alt='X' width={18} height={15} /> <span>SaaS Component Library</span></li>
            <li className='flex flex-row gap-1'><img src='x.png' alt='X' width={18} height={15} /> <span>Built out Stripe integration</span></li>
            <li className='flex flex-row gap-1'><img src='x.png' alt='X' width={18} height={15} /> <span>Built out Express backend</span></li>
          </ul>
          <p className='text-2xl font-bold'>Free</p>
        </div>

        {/* Pro Plan */}
        <div className='border border-gray-300 rounded-lg p-6 flex flex-col items-center shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 bg-white text-black'
            onClick={handlePayment}
        >
          <h2 className='text-xl font-bold mb-4'>Pro</h2>
          <ul className='text-black mb-6 space-y-2'>
            <li className='flex flex-row gap-1'><img src='checkmark.png' alt='✔' width={18} height={15} /> Access to our documentation</li>
            <li className='flex flex-row gap-1'><img src='checkmark.png' alt='✔' width={18} height={15} /> <span>Template SaaS Included</span></li>
            <li className='flex flex-row gap-1'><img src='checkmark.png' alt='✔' width={18} height={15} /> <span>SaaS Component Library</span></li>
            <li className='flex flex-row gap-1'><img src='checkmark.png' alt='✔' width={18} height={15} /> <span>Built out Stripe integration</span></li>
            <li className='flex flex-row gap-1'><img src='checkmark.png' alt='✔' width={18} height={15} /> <span>Built out Express backend</span></li>

          </ul>
          <p className='text-2xl font-bold'>$5</p>
           <span className='text-gray-500 text-xs'>One lifetime payment</span><br/>
          {error && <div className='flex flex-row items-center justify-center mt-4 gap-2'>
            <img src='x.png' alt='Error' width={18} height={18} />
            <p className='text-red-500 font-bold'>{error}</p>
            </div>
            }
        </div>
      </div>
    </div>
  )
}

export default Pricing