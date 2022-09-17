import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <p>Created by <a href="https://parthasarathimuduli.netlify.app/" target='_self'>Partha</a></p>
        <div className='footer-icons'>
            <button><ion-icon name="logo-linkedin"></ion-icon></button>
            <button><ion-icon name="logo-github"></ion-icon></button>
        </div>
    </div>
  )
}
