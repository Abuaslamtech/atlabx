import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Products from './components/sections/Products'
import Process from './components/sections/Process'
import Contact from './components/sections/Contact'

const App = () => {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
