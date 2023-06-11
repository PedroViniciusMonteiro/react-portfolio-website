import React from 'react'
import './experiencia.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experiencia = () => {
  return (
    <section id="experiencia">
      <h5>Que habilidades eu tenho</h5>
      <h2>Minha experiência</h2>
      <div className="container experiencia__container">
        <div className="experiencia__frontend">
          <h3>Desenvolvimento Frontend</h3>
          <div className="experiencia__content">
            <article className="experiencia__details">
              <BsPatchCheckFill className='experiencia__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className="experiencia__details">
              <BsPatchCheckFill className='experiencia__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className="experiencia__details">
              <BsPatchCheckFill className='experiencia__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className="experiencia__details">
              <BsPatchCheckFill className='experiencia__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className="experiencia__details">
              <BsPatchCheckFill className='experiencia__details-icon'/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className="experiencia__details">
              <BsPatchCheckFill className='experiencia__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediário</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experiencia__backend">
        <h3>Desenvolvimento Backend</h3>
          <div className="experiencia__content">
            <article className="experiencia__details">
              <BsPatchCheckFill className='experiencia__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className="experiencia__details">
              <BsPatchCheckFill className='experiencia__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className="experiencia__details">
              <BsPatchCheckFill className='experiencia__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className="experiencia__details">
              <BsPatchCheckFill className='experiencia__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className="experiencia__details">
              <BsPatchCheckFill className='experiencia__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Avançado</small>
              </div>
            </article>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiencia