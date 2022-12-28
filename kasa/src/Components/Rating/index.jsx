import React from 'react'
import EmptyStar from "../../assets/logements/empty_stars.png"
import FullyStar from "../../assets/logements/full_star.png"
import './style-rating.css'

export default function Rating(rate) {
    console.log(rate); // rate = number of Coloured stars

    const range = [1, 2, 3, 4, 5];
    
    return (
        <div className='starsContainer' id='stars'>
            { range.map((element, key) =>
                element <= rate.rate ? (
                    <img src={FullyStar} alt="étoile colorée" key={key} className="coloredStars" />
                ) : (
                    <img src={EmptyStar} alt="étoile grise" key={key} className="empty__star" />
                )
            )}
        </div>
    )
}



// const rateMax = 5; // max of stars
    // const numberOfGrayStars = Number(rateMax - rate) // number of stars non colored (gray)
    // let starsArray = [];

    // for (let i = 0; i < rate; i++) {
    //     starsArray.push(<i className="fa-solid fa-star coloredStars"></i>)
    // }
    // for(let i = 0; i < numberOfGrayStars; i++) {
    //     console.log(numberOfGrayStars);
    //     starsArray.push(<i className="fa-solid fa-star grayStars"></i>)
    // }

    // console.log(starsArray);
    // return (

    //     <div className='starsContainer'>
    //         {starsArray}
    //     </div>
    // )