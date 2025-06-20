import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div
      id="product"
      className="mx-10 flex flex-col md:flex-row items-center justify-center select-none py-12 gap-4"
    >
      <div className="md:w-1/3 mb-8 md:mb-0">
        <div className="text-4xl md:text-[48px] lg:text-[64px] mb-4">
          Product
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-md text-gray-600">
            As a means to streamline the process, you can purchase my complete SaaS template, which includes all the necessary integrations and features to get you started quickly.
          </span>
          <span className="text-md text-gray-600">
            Simply enter in your API keys and database URL, and focus on building your product.
          </span>

        </div>
      </div>
        <img src="/Demo.png" alt="Product illustration" className="max-w-xs md:max-w-sm lg:max-w-md mt-6 shadow-2xl" />
    </div >
  )
}

export default Product