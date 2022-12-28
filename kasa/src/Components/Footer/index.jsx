import { Link } from 'react-router-dom'
import logoFooter from '../../assets/footer/logo-footer.png'
import styled from 'styled-components'
import React from 'react'

const FooterContenair = styled.div`
margin-top: 50px;
height: 209px;
background-color: black;
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-content: center;
align-items: center;
justify-content: center;
`
const FooterLink = styled(Link)`
display: flex;
justify-content: center;
align-content: center;
width: 122px;
height: 40px;
margin-bottom: 40px;
`

const Copyright = styled.span`
color: white;
`
export default function Footer () {

    return(
        <FooterContenair>
            <FooterLink to="/"><img src={logoFooter} alt="logo Kasa"/></FooterLink>
            <Copyright>© 2020 Kasa. All rights reserved</Copyright>
        </FooterContenair>
    )
    
}