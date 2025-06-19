import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='min-h-screen md:mx-15 lg:mx-15 flex flex-col gap-48'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App