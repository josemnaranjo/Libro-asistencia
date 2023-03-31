import React from 'react';

const PresenteAUno = (props) => {
    const {onSubmitProps} = props;
    let date = new Date();
    let fechaAno = date.getFullYear();
    return (
        <div>
            <div className='grid grid-rows-4 gap-y-14 mt-20'>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Enero</h1>
                    <button className='bg-secondary-dark rounded-lg text-white w-32 h-10' >ver detalles</button>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3' onClick={()=>onSubmitProps({dateStart:`${fechaAno}-01-01`, mes:"enero", dateFinish:`${fechaAno}-01-31`})} value="download"> informe de asistencias</button>
                </div>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Febrero</h1>
                    <button className='bg-secondary-dark rounded-lg text-white w-32 h-10'>ver detalles</button>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3'onClick={()=>onSubmitProps({dateStart:`${fechaAno}-02-01`, mes:"febrero", dateFinish:`${fechaAno}-02-28`})}> informe de asistencias</button>
                </div>

                <div className='grid grid-cols-3 justify-items-center '>
                    <h1>Marzo</h1>
                    <button className='bg-secondary-dark rounded-lg text-white w-32 h-10'>ver detalles</button>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3' onClick={()=>onSubmitProps({dateStart:`${fechaAno}-03-01`, mes:"marzo", dateFinish:`${fechaAno}-03-31`})}> informe de asistencias</button>
                </div>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Abril</h1>
                    <button className='bg-secondary-dark rounded-lg text-white w-32 h-10'>ver detalles</button>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3'onClick={()=>onSubmitProps({dateStart:`${fechaAno}-04-01`, mes:"abril", dateFinish:`${fechaAno}-04-30`})}> informe de asistencias</button>
                </div>

            </div>
        </div>
    );
}

export default PresenteAUno;