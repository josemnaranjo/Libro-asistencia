import React from 'react';
import {useParams} from 'react-router-dom'

const Hoy = () => {
    const {date} = useParams();
    
    return (
        <div>
            <h1 className='text-center text-lg pt-3'>{date}</h1>
            <div>

            </div>
        </div>
    );
}

export default Hoy;
