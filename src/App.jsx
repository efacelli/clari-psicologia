import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Benefits from './components/Benefits/Benefits'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Ir al contenido principal
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Services />
        <Benefits />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
