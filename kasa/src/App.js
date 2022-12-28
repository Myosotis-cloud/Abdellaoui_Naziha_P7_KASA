import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '../src/Pages/Home/index.jsx'
import Header from './Components/Header/index.jsx'
import Error from './Components/Error/index.jsx'
import Footer from './Components/Footer/index.jsx'
import Apropos from '../src/Pages/Apropos/index.jsx'
import Apartments from "../src/Pages/Apartments/index.jsx"
import './App.css'
import React from 'react'

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

    
function App () {
    return (
       
          <Router>
            <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apartments/:idApartment" element={<Apartments />} />
                <Route path="/about" element={<Apropos />} />
                <Route path="*" element={<Error />} />
              </Routes>
             <Footer />
          </Router>
        
    )
}

export default App
