import './style-collapse.css'
import { useState } from 'react'
import React from 'react'
// ****************************************************************

// composant enfant=Collapse - composant parent= Apropos
export default function Collapse({ label,text, withWrap }){

    console.log(text);
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(!isOpen)
   
    return (
        <div className='wrapper'>
            <div className="collapsible">
                <div className='toggle'>
                    <button className="toggle_title" 
                        onClick={ handleClick }>
                            <h2>{label}</h2>
                            <i className= { isOpen ? "fas fa-chevron-down" : "fas fa-chevron-up" } />
                    </button>
                    <div className={ isOpen ? "content show" : "content hide"}>
                        {!withWrap ? <p>{text}</p> :
                         text.map((item, i) => {return <p key={i}>{item}</p>})
                        }
                    </div>
                  
                </div>
            </div>   
        </div> 
    )
}


