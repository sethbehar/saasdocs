import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Footer from './components/Footer'
import Product from './components/Product'
import Docs from './documentation/Docs'
import Introduction from './documentation/Introduction'
const App = () => {

  return (
    <Routes>
      <Route path="/" element={
        <div className='min-h-screen md:mx-15 lg:mx-15 flex flex-col gap-48'>
        <Navbar />
        <Hero />
        <About />
        <Product />
        <Footer />
      </div>}
      />
      <Route path='/product' element={<></>} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
  )
}

export default App