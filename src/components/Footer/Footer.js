import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <p>Created by <a rel="noreferrer" href="https://parthasarathimuduli.netlify.app/" target='_blank'>Partha</a></p>
        <div className='footer-icons'>
            <button> <a  rel="noreferrer" href="https://www.linkedin.com/in/partha-sarathi-muduli-1738921b9/" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a></button>
            <button> <a  rel="noreferrer" href="https://github.com/partha7978" target='_blank'><ion-icon name="logo-github"></ion-icon></a></button>
        </div>
    </div>
  )
}
