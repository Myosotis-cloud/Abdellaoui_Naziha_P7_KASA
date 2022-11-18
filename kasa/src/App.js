import { Routes, Route } from "react-router-dom"
import { createGlobalStyle } from 'styled-components'
import Home from './Components/Home/index.jsx'
import Header from './Components/Header/index.jsx'
import Error from './Components/Error/index.jsx'
// import React from 'react'
import Footer from './Components/Footer/index.jsx'
import Charte from './Components/Charte/index.jsx'
import Apartments from "./Components/Apartments/index.jsx"
import './App.css'
// import './index.css'

/* header présent sur toutes les pages et inchangé*/
/* Home : page d'accueil-affichage toutes les cartes de location */
/* Apartments : page affichant un seul appartement :
        - description
        - tags
        - location
        - equipments
        - hôte + picture hôte
        - rating (notation par étoiles)
        - caroussel d'images
        - dropdown (collapses)
*/
const StyledGlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding:0;
    }
    body {
        margin: 0;
        padding: 0;
    }
`
function App () {
    return (
        <div className="Layout">
          <StyledGlobalStyle />
            <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apartments" element={<Apartments />} />
                <Route path="/charte" element={<Charte />} />
                <Route path="/apartments/*" element={<Error />} />
              </Routes>
            <Footer />
        </div>
    )
}

export default App
