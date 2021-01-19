import React from 'react'
import CardFront from '../../Assets/CardFront.png'
import Cardback from '../../Assets/CardBack.png'
import './Card3D.css'

const Card3D = () => {
    return(
        <section className='CardContainer'>
            <div className='Card'>
                <div className='card__face card__face--front'>
                    <img src={CardFront} alt='bridge'/>
                </div>
                <div className='card__face card__face--back'>
                <img src={Cardback} alt='bridge'/>
                </div>
            </div>
        </section>
    )
}

export default Card3D;