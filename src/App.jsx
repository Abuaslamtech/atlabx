import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import CaseStudies from './components/sections/CaseStudies'
import Services from './components/sections/Services'
import ArchitectureProof from './components/sections/ArchitectureProof'
import Process from './components/sections/Process'
import Contact from './components/sections/Contact'

const App = () => {
  return (
    <div className="font-sans antialiased bg-[#FAFAFA] text-[#0A0A0A] min-h-screen selection:bg-[#0A0A0A] selection:text-white">
      <Navbar />
      <main>
        {/* 1. Hero: Typographic Authority + Flagship Showcase Strip */}
        <Hero />

        {/* 2. Visual Centerpiece: Selected Work Case Studies with Large Tinted Canvases & Modals */}
        <CaseStudies />

        {/* 3. Capabilities: Open List with Sticky Left Header and Hairline Dividers */}
        <Services />

        {/* 4. High-Contrast Dark Anchor 1: Systems Architecture & High-Reliability Standards */}
        <ArchitectureProof />

        {/* 5. Process & Engagement: Tight Horizontal Sprint Stages & Transparent Delivery Models */}
        <Process />

        {/* 6. High-Contrast Dark Anchor 2: Guided Brief & Direct Outreach Conversion Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
