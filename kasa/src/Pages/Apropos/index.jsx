import Collapse from "../../Components/Collapse/index.jsx"
import '../Apropos/style-charte.css'
import { PropTypes } from 'prop-types'
import Banner from "../../Components/Banner/index.jsx"
import bannerMobile from '../../assets/banner/banner_mobile_Apropos.svg'
import bannerDesktop from '../../assets/banner/banner_desktop_Apropos.svg'
import React from 'react'


// composant parent (Charte) template du collapse
export default function Apropos (){
    const fiabilite = ["Fiabilité", "Les annonces postées sur Kasa garantissent une fiabilité totale."+
    " Les photos sont conformes aux logements,"+
    " et toutes les informations sont régulièrement vérifiées par nos équipes."];
    const respect = ["Respect", "La bienveillance fait partie des valeurs fondatrices de Kasa."+
                    " Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."];
    const service = ["Service", "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite."+
    " N'hésitez pas à nous contacter si vous avez la moindre question."];
    const securite = ["Sécurité", "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs"+
    " chaque logement correspond aux critères de sécurité établis par nos"+
    " services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à"+
    " nos équipes de vérifier que les standards sont bien respectés. Nous organisons"+
    " également des ateliers sur la sécurité domestique pour nos hôtes."];

    return (
        <div>
            <div id="bannerDesktop">
                <Banner
                    text=''
                    image={bannerDesktop}
                />
            </div>
            <div id="bannerMobile">
                <Banner
                    text=""
                    image={bannerMobile}
                />
            </div>
            <div className="collapse">
                <Collapse label={fiabilite[0]} text={fiabilite[1]} withWrap={false}/>
                <Collapse label={respect[0]} text={respect[1]} withWrap={false}/>
                <Collapse label={service[0]} text={service[1]} withWrap={false}/>
                <Collapse label={securite[0]} text={securite[1]} withWrap={false}/>
            </div>
        </div>
        
    )
}

Apropos.propTypes = {
    label: PropTypes.string,
    text: PropTypes.string,
}