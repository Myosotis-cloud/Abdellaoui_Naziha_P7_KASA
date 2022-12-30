import './style-slideshow.css'
import React from 'react'
import { useState } from 'react'


export default function Slideshow({photosArray}){

    console.log(photosArray)
    const numberOfphotos = photosArray.length
    // console.log(numberOfphotos)
    const firstPhoto = photosArray[0]
    // console.log(firstPhoto)
    const lastPhoto = photosArray[numberOfphotos-1]
    // console.log(lastPhoto)

    const [actualPhoto, setActualPhoto] = useState(firstPhoto)
    // console.log(actualPhoto)

    const previousPhoto = function (actualPhoto) {
        if (actualPhoto === firstPhoto) {
            // console.log(actualPhoto)
            setActualPhoto(lastPhoto)
        } else {
            const actualPhotoIndex = photosArray.indexOf(actualPhoto)
            setActualPhoto(photosArray[actualPhotoIndex - 1])
        }
    }
    const nextPhoto = function (actualPhoto) { 
        if (actualPhoto === lastPhoto) {
            setActualPhoto(firstPhoto)
        } else {
            const actualPhotoIndex = photosArray.indexOf(actualPhoto)
            // console.log(actualPhotoIndex)
            setActualPhoto(photosArray[actualPhotoIndex + 1])
        }
    }    
 
    return (

        <div className="slideshow">
            <div className="slideshow_image">              
                    <img src={ actualPhoto } alt="apartment" />                 
            </div>
            {numberOfphotos !== 1 &&
            <div className='bullet__container'>
                <span className ="slideshow_arrowLeft arrow" onClick={()=>previousPhoto(actualPhoto)}><i className="fa-sharp fa-solid fa-angle-left"></i></span>
                <span className ="slideshow_arrowRight arrow" onClick={()=>nextPhoto(actualPhoto)}><i className="fa-sharp fa-solid fa-angle-right"></i></span>
                
                <div className="slideshow_bulletpoint">
                    <span className='bulletPoint'>{photosArray.indexOf(actualPhoto)+1}/{numberOfphotos}</span>
                </div>
            </div>
            }
        </div>

    )
}