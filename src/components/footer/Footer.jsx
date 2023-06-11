import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PEDRO MONTEIRO</a>
      <ul className='permalinks'>

        <li><a href="#">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#depoimentos">Depoimentos</a></li>
        <li><a href="#contato">Contato</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https:/twitter.com"><IoLogoTwitter /></a>
      </div>
      <div className="footer__copyrigth">
        <small>&copy; Pedro Monteiro. Todos direitos reservados. </small>
      </div>
    </footer>
  )
}

export default Footer