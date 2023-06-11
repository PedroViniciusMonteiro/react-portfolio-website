import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio4.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio5.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id="section">
      <h5>Meu trabalho recente</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Criando interface do GitHub com API e ReactJS</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/PedroViniciusMonteiro/Criando-interface-do-GitHub-com-API-e-ReactJS" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Recriando Pagina Inicial do Instagram</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/PedroViniciusMonteiro/Recriando-Pagina-Inicial-do-Instagram" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Criando uma landing page Agencia de Turismo</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/PedroViniciusMonteiro/Criando-uma-landing-page-Agencia-de-Turismo" className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio