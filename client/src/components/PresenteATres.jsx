import React from 'react';

const PresenteATres = () => {
    return (
        <div>
            <div className='grid grid-rows-4 gap-y-14 mt-20'>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Septiembre</h1>
                    <button className='bg-secondary-dark rounded-lg text-white w-32 h-10'>ver detalles</button>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3'> informe de asistencias</button>
                </div>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Octubre</h1>
                    <button className='bg-secondary-dark rounded-lg text-white w-32 h-10'>ver detalles</button>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3'> informe de asistencias</button>
                </div>

                <div className='grid grid-cols-3 justify-items-center '>
                    <h1>Noviembre</h1>
                    <button className='bg-secondary-dark rounded-lg text-white w-32 h-10'>ver detalles</button>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3'> informe de asistencias</button>
                </div>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Diciembre</h1>
                    <button className='bg-secondary-dark rounded-lg text-white w-32 h-10'>ver detalles</button>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3'> informe de asistencias</button>
                </div>

            </div>
        </div>
    );
}

export default PresenteATres;
