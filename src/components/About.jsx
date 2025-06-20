import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div
      id="about"
      className="mx-10 flex flex-col md:flex-row items-center justify-center select-none py-12"
    >
      <div className="md:w-1/2 mb-8 md:mb-0">
        <div className="text-4xl md:text-[48px] lg:text-[64px] mb-4">
          About
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-md text-gray-600">
            As a solo developer with a passion for building, I wanted to streamline the process so developers could focus on shipping their product—not working hours on integration.
          </span>
          <span className="text-md text-gray-600">
            These docs serve as a tool for any developer looking to create a full stack micro saas, written by someone who has failed countless times.
          </span>
          <span className="text-md text-gray-600">
            All logos are also hand drawn.
          </span>
        </div>
      </div>
    </div >
  )
  // <div className="mx-10 flex flex-col md:flex-row items-center justify-center select-none py-12">
  //   <div className="w-full md:w-1/2 mb-8 md:mb-0">
  //     <div className="text-4xl md:text-[48px] lg:text-[64px] mb-4">
  //       About
  //     </div>
  //     <div className="flex flex-col">
  //       <span className="text-md text-gray-600 flex flex-col gap-4">
  //             <span>As a solo developer with a passion for building, I wanted to streamline the process so developers could focus on shipping their product - not working on hours of integration with Supabase, Stripe, Deployment, and Hosting</span>
  //             <span>These docs serve as a tool for any developer looking create a full stack micro saas, written by someone who has failed countless times</span>
  //             <span>All logos are also hand drawn </span>
  //       </span>
  //     </div>
  //   </div>
  //   <div className="w-full md:w-1/2 flex justify-center">
  //     <img src="/about-illustration.png" alt="About illustration" className="max-w-xs md:max-w-sm lg:max-w-md" />
  //   </div>
  // </div>
}

export default About