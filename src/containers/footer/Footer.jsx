import React from 'react';
import './footer.css';
import gpt3logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
    <div className='gpt3__footer-heading'>
      <h1 className='gradient__text'> 
        Do you want to make a change?
      </h1>
    </div>
    <div className='gpt3__footer-btn'>
    <p>Request Early Access</p>
    </div>
    <div className='gpt3__footer-links'>
      <div className='gpt3__footer-links_logo'>
      <img src={gpt3logo} alt="logo"></img>
      <p>Lakewood Heights, Kardana</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Get in touch</h4>
        <p>Lakewood Heights, Kardana</p>
        <p>086-334124</p>
        <p>information@gpt3.net</p>
      </div>
    </div>
    <div className='gpt3__footer-copyright'>
    <p>&copy; 2023 GPT-3 All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer;
