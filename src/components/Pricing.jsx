import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pricing = () => {
    const navigate = useNavigate()
  return (
    <div className='h-1/2 flex flex-col items-center p-6 select-none'>
      <h1 className='text-black text-3xl mb-8'>Pricing</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
        {/* Free Plan */}
        <div className='border border-gray-300 rounded-lg p-6 flex flex-col items-center'>
          <h2 className='text-xl font-bold mb-4'>Free</h2>
          <ul className='text-gray-500 mb-6 space-y-2'>
            <li className='text-black'>✔ Access to our documentation</li>
            <li>X Template SaaS</li>
            <li>X SaaS Component Library</li>
            <li>X Built out Stripe integration</li>
            <li>X Built out Express backend</li>
          </ul>
          <p className='text-2xl font-bold'>Free</p>
        </div>

        {/* Pro Plan */}
        <div className='border border-gray-300 rounded-lg p-6 flex flex-col items-center shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 bg-white text-black'
            onClick={() => navigate('/payment')}
        >
          <h2 className='text-xl font-bold mb-4'>Pro</h2>
          <ul className='text-black mb-6 space-y-2'>
            <li>✔ Access to our documentation</li>
            <li>✔ Template SaaS Included</li>
            <li>✔ SaaS Component Library</li>
            <li>✔ Built out Stripe integration</li>
            <li>✔ Built out Express backend</li>

          </ul>
          <p className='text-2xl font-bold'>$5</p>
        </div>
      </div>
    </div>
  )
}

export default Pricing