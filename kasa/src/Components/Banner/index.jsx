import './style-banner.css'
import React from 'react'


export default function Banner({ text="", image, alt }) {
    return(
        <div className='Banner'>
            <img src={image} alt={alt} />
            <h1 className="catchphrase">{text}</h1>
        </div>
    )
}