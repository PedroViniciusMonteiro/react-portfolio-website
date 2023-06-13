import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio4.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio5.png'
import IMG4 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id="section">
      <h5>Meu trabalho recente</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Academia Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/PedroViniciusMonteiro/react-academy-website" className='btn' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Interface do Github</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/PedroViniciusMonteiro/react-interface-do-github" className='btn' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Página Inicial do Instagram</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/PedroViniciusMonteiro/html-css-pagina-inicial-instagram" className='btn' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Landing Page - Agencia de Turismo</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/PedroViniciusMonteiro/html-css-landing-page-turismo" className='btn' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio