import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import {Pagination} from 'swiper'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'




const data = [
  {
    avatar: AVTR1,
    nome: 'Geovana Gonçalves',
    revisao: 'Me formei com o Pedro no curso de ADS, um jovem muito esforçado para aprender, lembro que no primeiro mês que ninguem sabia nada de programação, ele ja escrevia códigos em python. Um prazer conhecê-lo e fazer parte do portfólio.',
  },
  {
    avatar: AVTR2,
    nome: 'Carlos Guedes',
    revisao: 'Contratei o Pedro para fazer um app de e-commerce pra loja da minha mãe de hortifruti em 2022, e até hoje estamos rodando o programa, sensacional a atenção que ele nos da. Só gratidão Pedro.',
  },
  {
    avatar: AVTR3,
    nome: 'Mateus Henrique',
    revisao: 'Fui aluno do Pedro no curso de informática aqui em Floripa, o que ele sabe de tecnologia é uma coisa incrível, e o melhor? Ele gosta de passar o conhecimento, sinto muita falta de suas aulas Pedro.',
  },
  {
    avatar: AVTR4,
    nome: 'Shawkat Nyaring',
    revisao: 'Pedro fez um website para minha empresa de turismo. Muito simpático, esforçado e atencioso.',
  },
]


const Testimonials = () => {
  return (
    <section id="depoimentos">
      <h5>Revisão de Clientes</h5>
      <h2>Depoimentos</h2>
      <Swiper className="container container__depoimentos"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}>
        {
          data.map(({ avatar, nome, revisao }, index) => {
            return (
              <SwiperSlide key={index} className="depoimento">
                <div className="cliente__avatar">
                  <img src={avatar} alt='cliente especial'/>
                </div>
                <h5 className='cliente__name'>{nome}</h5>
                <small className='cliente__revisao'>{revisao}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials