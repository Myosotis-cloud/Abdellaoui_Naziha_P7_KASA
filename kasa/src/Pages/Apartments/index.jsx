import { useParams } from 'react-router-dom'
import Slideshow from "../../Components/Slideshow/index.jsx"
import Rating from "../../Components/Rating/index.jsx"
import Collapse from "../../Components/Collapse/index.jsx"
import React from "react"
import apartmentData from '../../Data/data.json'
import Error from '../../Components/Error/index.jsx'
import '../Apartments/style-apartments.css'

function getApartmentById (idApartment) {
    let aparts =  apartmentData.filter(apart => apart.id === idApartment);
    return aparts[0];
}

export default function Apartments (){
    const fiabilite = ["Fiabilité", "Les annonces postées sur Kasa garantissent une fiabilité totale."+
    " Les photos sont conformes aux logements,"+
    " et toutes les informations sont régulièrement vérifiées par nos équipes."];
    const respect = ["Respect", "La bienveillance fait partie des valeurs fondatrices de Kasa."+
                    " Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."];

    const { idApartment } = useParams();
    const apartment = getApartmentById(idApartment);

            return  (
                <div>
                    {apartment ? (
                        <div className="Apt_Wrapper">
                                <Slideshow key={apartment.pictures} photosArray={apartment.pictures} />
                                <div className='location_details'>
                                <div className='title_location_tags'>
                                    <h1 className='apartment_title'>{apartment.title}</h1>
                                    <h3 className='apartment_location'>{apartment.location}</h3>
                                    <ul className='apartment_tags_container'>
                                        {apartment.tags.map((tag) => (
                                            <li key={tag} className='apartment_tags'>
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='hostAndrate_Container' id='container__HostandRating'>
                                    <div className='information_apartment_hostAndRate'>
                                        <div className='host_name'>
                                            {apartment.host.name}
                                        </div>
                                        <div className='host_picture'>
                                            <img src={apartment.host.picture} className="photo_hote" alt="propriétaire du logment" />
                                        </div>
                                    </div>
                                    <div className='apartment_rating'>
                                        <Rating rate={apartment.rating} />
                                    </div>
                                </div>
                                </div>
                                <div className='collapse_container'>
                                    <div className='apartment_collapse' id='description_collapse'>
                                        <Collapse 
                                            label="Description"
                                            key={apartment.description}
                                            text={apartment.description}
                                            withWrap={false}
                                        />
                                    </div>
                                    <div className='apartment_collapse' id='equipment_collapse'>
                                        <Collapse 
                                            label="Équipements"
                                            key={apartment.equipments}
                                            text={apartment.equipments}
                                            withWrap={true}
                                        />
                                    </div>
                                    <div className='apartment_collapse_about'>
                                        <Collapse
                                            label={fiabilite[0]}
                                            text={fiabilite[1]}
                                            withWrap={false}
                                        />
                                    </div>
                                    <div className='apartment_collapse_about'>
                                        <Collapse 
                                            label={respect[0]} 
                                            text={respect[1]}  
                                            withWrap={false}
                                        />
                                    </div>
                                </div>  
                        </div>
                    ) : (
                        <Error />
                    )}
                </div>
            );

}
