import React from 'react'
import './sobre.css'
import ME from '../../assets/perfil.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const Sobre = () => {
  return (
    <section id='sobre'>
      <h5>Conheça</h5>
      <h2>Sobre mim</h2>

      <div className="container sobre__container">
        <div className="sobre__mim">
          <div className="sobre__mim-image">
            <img src={ME} alt="Sobre mim" />
          </div>
        </div>
        <div className="sobre__content">
          <div className="sobre__cards">
            <article className="sobre__card">
              <FaAward className='sobre__icone'/>
              <h5>Experiência</h5>
              <small>1+ Ano trabalhando</small>
            </article>
            <article className="sobre__card">
              <FiUsers className='sobre__icone'/>
              <h5>Clientes</h5>
              <small>5+ Mundial</small>
            </article>
            <article className="sobre__card">
              <VscFolderLibrary className='sobre__icone'/>
              <h5>Projetos</h5>
              <small>10+ Completos</small>
            </article>
          </div>
          <p>
            Formado em análise e desenvolvimento de sistemas, estudante de pós-graduação em segurança da informação, diversos cursos na área de programação, amante de xadrez. 
          </p>
          <a href="#contato" className='btn btn-primary'>
            Bora conversar
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sobre