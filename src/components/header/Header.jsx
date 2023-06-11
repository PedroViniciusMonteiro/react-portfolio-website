import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Meu projeto.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá Eu sou</h5>
        <h1>Pedro Monteiro</h1>
        <h5 className="text-light">Desenvolvedor FullStack</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Eu" />
        </div>
        <a href="#contato" className='scroll__down'>Rolar para baixo</a>
      </div>
    </header>
  )
}

export default Header