import React from 'react'

const Introduction = () => {
  const techStack = [
    {
      name: "React",
      description: "(frontend)",
      image: "/React.png",
      link: "https://reactjs.org/docs/getting-started.html",
    },
    {
      name: "Tailwind CSS",
      description: "(styling)",
      image: "/tailwind.png",
      link: "https://tailwindcss.com/docs",
    },
    {
      name: "Supabase",
      description: "(db and auth)",
      image: "/Supabase.png",
      link: "https://supabase.com/docs",
    },
    {
      name: "Stripe",
      description: "(payment processing)",
      image: "/Stripe.png",
      link: "https://stripe.com/docs",
    },
    {
      name: "Vercel",
      description: "(hosting the frontend)",
      image: "/vercel.png",
      link: "https://vercel.com/docs",
    },
    {
      name: "Railway",
      description: "(hosting the backend)",
      image: "/railway.png",
      link: "https://railway.app/docs",
    },
  ];

  return (
    <div className='ml-12 select-none py-12'>
      <h1 className="text-2xl md:text-4xl mb-4">Introduction</h1>
      <div>
        <p className="text-md text-gray-600 mb-4">
          The tech stack we will be using includes:
        </p>
        <div className="text-md text-gray-600 mb-4 flex flex-col gap-4">
          {techStack.map((tech, index) => (
            <span key={index} className="mb-4">
              <a href={tech.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                <img src={tech.image} alt={tech.name} className="w-4 h-4" />
                <span>
                  <span className='text-black'>{tech.name}</span> <span className="text-gray-500 text-sm">{tech.description}</span>
                </span>
              </a>
            </span>
          ))}
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl mt-10 mb-4">Background</h1>
      <p className='text-sm text-gray-600 mb-4'>I have spent countless hours debugging the same issues involved in developing with this tech stack</p>
      <p className='text-sm text-gray-600 mb-4'>The purpose of this documentation is to help beginners (like myself sometimes) streamline the dev process and avoid making these mistakes</p>
      <p className='text-sm text-gray-600 mt-4'>Most developers stay in localhost for way too long, follow these docs and ship your product</p>
      <p className='text-xs text-gray-600 mt-4'>Or check out our template and premium resources to get started quickly</p>

      <h1 className="text-2xl md:text-4xl mt-10 mb-4">Why this tech stack?</h1>
      <p className='text-sm text-gray-600 mb-4'>I have used this tech stack a lot in the past year and genuinely enjoy writing code with it</p>
      <p className='text-sm text-gray-600 mb-4'>React+Vite is fast, tailwind is great (once you get the hang of it), Supabase is a great overall backend solution, Stripe (well it's Stripe), and Vercel is a super simple hosting platform</p>
      <p className='text-sm text-gray-600 mt-4'>If you are a beginner, dive deep into something you are passionate about or want to learn. Don't just copy and paste from GPT, fail and learn</p>
    </div>
  );
}

export default Introduction