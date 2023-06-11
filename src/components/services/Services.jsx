import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="servicos">
      <h5>O que eu ofereço</h5>
      <h2>Serviços</h2>
      <div className="container servicos__container">
        <article className="servico">
          <div className="servico__head">
            <h3> Design UI/UX</h3>
          </div>
          <ul className="servico__list">
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Beneficiar e otimizar a jornada do cliente.</p>
            </li>
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Interfaces acessíveis e elementos de interação do público.</p>
            </li>
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Guiar o usuário de forma simples e intuitiva na plataforma.</p>
            </li>
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Garantir que a identidade visual seja positiva e marcante para o cliente.</p>
            </li>
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Jornada do usuário, arquitetura da informação e demais pontos de contato entre plataforma e público.</p>
            </li>
          </ul>
        </article>

        <article className="servico">
          <div className="servico__head">
            <h3> Desenvolvimento Web </h3>
          </div>
          <ul className="servico__list">
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Desenvolvimento de aplicações complexas, que utilizam regras de negócios, APIs Application Programming Interface</p>
            </li>
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Atividades voltadas ao lado cliente (front-end) e a do lado do servidor (back-end).</p>
            </li>
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Integração com sistemas e ferramentas, armazenamento de banco de dados, cibersegurança,</p>
            </li>
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Criação, codificação e programação de sites e seus respectivos elementos e linguagens.</p>
            </li>
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Estruturar cada detalhe de uma página da internet.</p>
            </li>
          </ul>
        </article>

        <article className="servico">
          <div className="servico__head">
            <h3> Criação de Conteúdo </h3>
          </div>
          <ul className="servico__list">
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Produz os mais variados conteúdos para diferentes canais digitais.</p>
            </li>
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Busca atrair a atenção do público com conteúdos relevantes para sua audiência.</p>
            </li>
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Incentiva a interação entre o consumidor e a empresa.</p>
            </li>
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Estimula o público a refletir sobre diversos temas.</p>
            </li>
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Transmite mais segurança na aquisição de um produto ou serviço.</p>
            </li>
            <li>
              <BiCheck className='servico__list-icon'/>
              <p>Entrega informações de valor para o público alvo.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services