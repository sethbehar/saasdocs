import supabase from './supabase/supabase'; // Import the singleton client
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Footer from './components/Footer'
import Product from './components/Product'
import Docs from './documentation/Docs'
import Pricing from './components/Pricing'
import Payment from './components/Payment'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const App = () => {
  const navigate = useNavigate()
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session)

      if (event === 'SIGNED_IN') {
        navigate('/')
      }
    })

    return () => subscription.unsubscribe()
  }, [])
  
  return (
    <Routes>
      <Route path="/" element={
        <div className='min-h-screen md:mx-15 lg:mx-15 flex flex-col gap-48'>
          <Navbar  session={session} supabase={supabase} />
          <Hero />
          <About />
          <Product />
          <Pricing />
          <Footer />
        </div>}
      />
      <Route path="/login" element={
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-md p-8">
            <Auth 
              supabaseClient={supabase} 
              appearance={{ theme: ThemeSupa }}
              redirectTo={"/"}
            />
          </div>
        </div>
      } />
      <Route path="/docs" element={<Docs />} />
      <Route path="/payment" element={<Payment session={session} />} />
    </Routes>
  )
}

export default App