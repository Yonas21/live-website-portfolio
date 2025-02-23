import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {SiUpwork} from 'react-icons/si';
import { socials } from '../../models';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href = {`${socials.linkedin}`} rel="noreferrer" target='_blank'><BsLinkedin /></a>
        <a href={`${socials.github}`} rel="noreferrer" target='_blank'><FaGithub /></a>
        <a href={`${socials.upwork}`} rel="noreferrer" target='_blank'><SiUpwork /></a>
    </div>
  )
}

export default HeaderSocials