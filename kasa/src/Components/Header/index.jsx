import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/banner/LOGO.png'
import imgBanner from '../../assets/banner/img-banner.png'
// import React from 'react'
import colors from '../../utils/colors'
import './style-header.css'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const WelcomeLink = styled.a`
  font-size: 24px;
  width: 230px;
  display:flex;
  justify-content: flex-end;
  // padding-right: 40px;
  font-weight: 500;
  text-decoration: none;
  color: #FF6060;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${colors.primary};
  }
`
const WrappedLink = styled.div`
display: flex;
justify-content: flex-end;
`
const PictureBanner = styled.img`
filter: brightness(50%);
border-radius: 25px;
width: 100%;
background-size: cover;
`
const CatchPhrase = styled.h1`
align-items: center;
position: absolute;
top: 90px;
font-style: normal;
font-weight: 500;
font-size: 48px;
color: white;
`

export default function Header() {
  return (
    <div>
      <NavContainer>
        <Link to="/"><HomeLogo src={logo} alt="logo Kasa" /></Link>
        <WrappedLink>
          <WelcomeLink to="/">Accueil</WelcomeLink>
          <WelcomeLink to="/charte">A Propos</WelcomeLink>
        </WrappedLink>
      </NavContainer>
      <div className='Banner'>
        <PictureBanner src={imgBanner} alt="bannière paysage"/>
        <CatchPhrase>Chez vous, partout et ailleurs</CatchPhrase>
      </div>
    </div>
  )
}