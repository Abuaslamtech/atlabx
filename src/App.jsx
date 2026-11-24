import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import CaseStudies from './components/sections/CaseStudies'
import Process from './components/sections/Process'
import Founder from './components/sections/Founder'
import Contact from './components/sections/Contact'

const App = () => {
  return (
    <div className="font-sans antialiased bg-[#080C14] text-slate-200 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Process />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
