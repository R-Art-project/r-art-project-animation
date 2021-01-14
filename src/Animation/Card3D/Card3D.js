import React from 'react'

import './Card3D.css'

const Card3D = () => {
    return(
        <section className='CardContainer'>
            <div className='Card'>
                <div className='card__face card__face--front'>Front</div>
                <div className='card__face card__face--back'>back</div>
            </div>
        </section>
    )
}

export default Card3D;