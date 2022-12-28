import { Link } from 'react-router-dom'
import {ReactComponent as LogoMobile} from '../../assets/header/LOGOMobile.svg'
import {ReactComponent as LogoDesktop} from '../../assets/header/LOGODesktop.svg'
import React from 'react'
import "./style-Header.css"


export default function Header() {
  return (
   
      <header className='header'>
        <Link className="link" to="/">
          <LogoMobile id="logoMobile"/>
          <LogoDesktop id="logoDesktop"/>
        </Link>
        <nav className="WrappedLink">
          <Link className="WelcomeLink" to="/">Accueil</Link>
          <Link className="WelcomeLink" to="/about">A Propos</Link>
        </nav>
      </header>
  )
}

