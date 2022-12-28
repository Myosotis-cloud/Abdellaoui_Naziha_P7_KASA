import image404  from '../../assets/error/404.png'
import image404_Mobile from '../../assets/error/404_mobile.png'
import { Link } from 'react-router-dom'
import React from 'react'
import './style-error.css'



export default function Error() {

    return (
        <div className='error_wrapper'>
          <img src={ image404 } alt="page non trouvée" id='illustrationDesktop' />
          <img src={ image404_Mobile } alt="page non trouvée" id='illustrationMobile' />
          <h2 className='error_h2'>
            &ldquo;Oups! La page que vous demandez n&apos;existe pas.&ldquo;
          </h2>
          <Link to="/" className='error_link'>
            Retourner sur la page d’accueil
          </Link>
        </div>

      )
}