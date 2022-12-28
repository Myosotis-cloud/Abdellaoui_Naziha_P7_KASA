import apartmentData from '../../Data/data.json'
import './style-home.css'
import { Link } from 'react-router-dom'
import Banner from '../../Components/Banner/index.jsx'
import React from 'react'
import bannerDesktop from '../../assets/banner/img-banner-home.png'
import bannerMobile from '../../assets/banner/img-banner-home-mobile.png'


export default function Home () {
        return (
            <div className='home'>
                <div id="bannerDesktop">
                    <Banner 
                        text='Chez vous, partout et ailleurs.'
                        image={bannerDesktop}
                        alt="paysage sauvage bannière de la page d'accueil"
                    />
                </div>
                <div id="bannerMobile">
                    <Banner 
                        text='Chez vous, partout et ailleurs.'
                        image={bannerMobile}
                        alt="paysage sauvage bannière de la page d'accueil"
                    />
                </div>
                <div className='ContainerHomeCards'>
                    {
                        apartmentData.map((apartment) => {
                            return (
                                <Link to={`/apartments/${apartment.id}`} className="CardContenair" key={apartment.id}
                                state={{apartmentData}}
                                >
                                    <img src={apartment.cover} className="Cover" alt="images des biens à louer"/>
                                    <span className='title_renting_apartment'>{apartment.title}</span>
                                </Link>
                            )
                        })
                    }
                </div>        
            </div>
        )
}