import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      < a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome /></a>
      <a href="#sobre" onClick={() => setActiveNav('#sobre')} className={activeNav === '#sobre' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experiencia" onClick={() => setActiveNav('#experiencia')} className={activeNav === '#experiencia' ? 'active' : ''}><BiBook /></a>
      <a href="#servicos" onClick={() => setActiveNav('#servicos')} className={activeNav === '#servicos' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contato" onClick={() => setActiveNav('#contato')} className={activeNav === '#contato' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav