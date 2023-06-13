import React from 'react'
import './footer.css'
import {FaGithub} from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

import { useState } from 'react'


const Footer = () => {
  const [activeNav, setActiveNav] = useState('#')
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
        <a href="https://www.linkedin.com/in/pedro-monteiro-3323b4207/"><BsLinkedin /></a>
        <a href="https://github.com/PedroViniciusMonteiro" ><FaGithub /></a>
        <a href="https://instagram.com/pdrking1"><BsInstagram /></a>
      </div>
      <div className="footer__copyrigth">
        <small>&copy; Pedro Monteiro. Todos direitos reservados. </small>
      </div>
    </footer>
  )
}

export default Footer