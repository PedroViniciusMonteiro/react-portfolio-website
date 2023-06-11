import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Sobre from './components/sobre/Sobre'
import Experiencia from './components/experiencia/Experiencia'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contato from './components/contato/Contato'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Sobre />
      <Experiencia />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contato />
      <Footer />

    </>
  ) 
}

export default App