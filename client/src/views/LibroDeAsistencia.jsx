import React from 'react';
import {useParams, Link} from 'react-router-dom';
import dayjs from 'dayjs';


const LibroDeAsistencia = () => {
    const {date} = useParams();
    const dateForDisplay = dayjs(date).format('D-M-YYYY')
    return (
        <div className='pt-12 px-6 h-5/6'>
            <div className='px-10 py-40 h-5/6 bg-gradient-to-r from-slate-100 to-slate-300 border-xl rounded-xl'> 
                <h1 className='text-center py-3'>Registro de asistencia</h1>
                <h1 className='text-center py-2'>{dateForDisplay}</h1>

                <div className='grid grid-cols-3 justify-items-center py-10'>
                    <Link to={`/registro-entrada/${date}`}>
                        <button className='bg-secondary-dark p-3.5 rounded-lg text-white'>registro de entrada</button>
                    </Link>
                    <Link to={`/registro-salida/${date}`}>
                        <button className='bg-secondary-dark p-3.5 rounded-lg text-white'>registro de salida</button>
                    </Link>
                    <Link to={`/registro-ausentes/${date}`}>
                        <button className='bg-secondary-dark p-3.5 rounded-lg text-white'>indicar ausentes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LibroDeAsistencia;
