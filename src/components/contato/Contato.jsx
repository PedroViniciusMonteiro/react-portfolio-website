import React from 'react'
import './contato.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contato = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_oqncwos','template_qzc7tq5',form.current,'gUL1al3onkTNTSUq5')
    e.target.reset()
  }
  return (
    <section id='contato'>
      <h5>Entrar em contato</h5>
      <h2>Contate-me</h2>
      <div className="container contato__container">
        <div className="contato__options">
          <article className="contato__option">
            <MdOutlineEmail className='contato__option-icon'/>
            <h4>Email</h4>
            <h5>pedro.vmonteiro@yahoo.com</h5>
            <a href="mailto:pedro.vmonteiro@yahoo.com" target='_blank'>Enviar mensagem</a>
          </article>
          <article className="contato__option">
            <RiMessengerLine className='contato__option-icon'/>
            <h4>Messenger</h4>
            <h5>Pedro Monteiro</h5>
            <a href="https://m.me/pedro.monteiro" target='_blank'>Enviar mensagem</a>
          </article>
          <article className="contato__option">
            <BsWhatsapp className='contato__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+17997896720</h5>
            <a href="https://api.whatsapp.com/send?phone+17997896720" target='_blank'>Enviar mensagem</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu nome completo' required />
          <input type="email" name='email' placeholder='Seu e-mail' required />
          <textarea name="mensagem" rows="7" placeholder='Sua mensagem' required
          ></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contato