import React from 'react';
import { Link } from 'react-router-dom';

const PresenteADos = (props) => {
    const {onSubmitProps} = props;
    let date = new Date();
    let fechaAno = date.getFullYear();
    return (
        <div>
            <div className='grid grid-rows-4 gap-y-14 py-10'>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Mayo</h1>
                    <Link to={`/informe/5`}>
                        <button className='bg-secondary-dark rounded-lg text-white w-32 h-10' >ver detalles</button>
                    </Link>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3' onClick={()=>onSubmitProps({dateStart:`${fechaAno}-05-01`, mes:"mayo", dateFinish:`${fechaAno}-05-31`})}> descargar informe</button>
                </div>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Junio</h1>
                    <Link to={`/informe/6`}>
                        <button className='bg-secondary-dark rounded-lg text-white w-32 h-10' >ver detalles</button>
                    </Link>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3' onClick={()=>onSubmitProps({dateStart:`${fechaAno}-06-01`, mes:"junio", dateFinish:`${fechaAno}-06-30`})}> descargar informe</button>
                </div>

                <div className='grid grid-cols-3 justify-items-center '>
                    <h1>Julio</h1>
                    <Link to={`/informe/7`}>
                        <button className='bg-secondary-dark rounded-lg text-white w-32 h-10' >ver detalles</button>
                    </Link>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3' onClick={()=>onSubmitProps({dateStart:`${fechaAno}-07-01`, mes:"julio", dateFinish:`${fechaAno}-07-31`})}> descargar informe</button>
                </div>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Agosto</h1>
                    <Link to={`/informe/8`}>
                        <button className='bg-secondary-dark rounded-lg text-white w-32 h-10' >ver detalles</button>
                    </Link>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3' onClick={()=>onSubmitProps({dateStart:`${fechaAno}-08-01`, mes:"agosto", dateFinish:`${fechaAno}-08-31`})}> descargar informe</button>
                </div>

            </div>
        </div>
    );
}

export default PresenteADos;
