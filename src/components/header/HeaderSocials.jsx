import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/pedro-monteiro-3323b4207/" target='_blank' rel='noreferrer noopener'><BsLinkedin/></a>
        <a href="https://github.com/PedroViniciusMonteiro" target='_blank' rel='noreferrer noopener'><FaGithub/></a>
        <a href="https://instagram.com/pdrking1" target='_blank' rel='noreferrer noopener'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials