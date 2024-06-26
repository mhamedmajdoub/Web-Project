import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='social-icons'>
        <a
          href='mailto:mhamedmajdoub.ing@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGooglePlusG} />
        </a>

        <a
          href='https://www.linkedin.com/in/mhamed-majdoub/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>

        <a
          href='https://github.com/mhamedmajdoub'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      <div className='footer-attribution'>
        Made by : <span> </span>
        <a href='https://drive.google.com/drive/folders/1SL0C0ZUYhsWxposfw4gvQI5E5fS-hr7B?usp=sharing' target='_blank' rel='noopener noreferrer' style={{color:"red"}}>
           M'hamed MAJDOUB
        </a>
      </div>
    </footer>
  );
}

export default Footer;
