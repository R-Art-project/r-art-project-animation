import React from 'react'

import Error from '../../Assets/error.svg'
import './NotFound.css'


const NotFound = () =>{

    return(
            <div className='notfound_container'>
            <img src={Error} alt="error 404" />
        </div>
    )
}


export default NotFound;