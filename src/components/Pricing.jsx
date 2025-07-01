import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// Free plan card using DaisyUI
export const FreePricingCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-md">
      <div className="card-body">
        <span className="badge badge-xs badge-dash">Not Popular</span>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Free</h2>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Access to our documentation</span>
          </li>
          <li className="flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="line-through">Template SaaS Included</span>
          </li>
          <li className="flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="line-through">Well documented repository</span>
          </li>
          <li className="flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="line-through">Built out Stripe and Supabase integration</span>
          </li>
          <li className="flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="line-through">Easy customization with DaisyUI</span>
          </li>
        </ul>
        <div className="mt-6">
          <Link to="/docs" className="btn btn-outline btn-block">Go to Docs</Link>
        </div>
      </div>
    </div>
  )
}

// Paid plan card using DaisyUI
export const PaidPricingCard = ({ session }) => {
  const navigate = useNavigate()

  const handlePayment = () => {
    if (!session) {
      navigate('/login')
      return
    }
    navigate('/payment')
  }

  return (
    <div className="card w-96 bg-base-100 shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300" onClick={handlePayment}>
      <div className="card-body">
        <span className="badge badge-xs badge-success">Most Popular</span>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Template SaaS</h2>
          <span className="text-xl">$9.99</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Access to our documentation</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Template SaaS Included</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Well documented repository</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Built out Stripe and Supabase integration</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Easy customization with DaisyUI</span>
          </li>
        </ul>
        <p className="text-xs text-gray-500 mt-2">One lifetime payment</p>
      </div>
    </div>
  )
}

// Main Pricing component that uses Free and Paid cards
const Pricing = ({ session }) => {
  return (
    <div className="mx-10 flex flex-col items-center justify-center select-none gap-4 py-6">
      <h1 className="text-4xl font-bold text-gray-700">Focus on building the product, not the integrations</h1>
      <p className="text-center text-gray-500 mb-6">Purchase the template to get started in minutes</p>
      <div className="flex flex-col md:flex-row gap-8">
        <FreePricingCard />
        <PaidPricingCard session={session} />
      </div>
      <a className='btn btn-outline mt-10 p-8' href="https://template-saas-docs.vercel.app" target="_blank" rel="noopener noreferrer">Visit template demo</a>
    </div>
  )
}

export default Pricing
