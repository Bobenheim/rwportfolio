import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://www.linkedin.com/in/robert-weis-57aa9a250/" target="_blank"><BsLinkedin /></a>
        </div>
        <div>
            <a href="https://www.facebook.com/robertweiscz/" target="_blank"><FaFacebookF /></a>
        </div>
        <div>
        <a href="https://github.com/bobenheim" target="_blank"><BsGithub /></a>
        </div>
    </div>
  )
}

export default SocialMedia