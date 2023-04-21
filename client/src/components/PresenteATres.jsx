import React from 'react';
import { Link } from 'react-router-dom';

const PresenteATres = (props) => {
    const {onSubmitProps} = props;
    let date = new Date();
    let fechaAno = date.getFullYear();
    return (
        <div>
            <div className='grid grid-rows-4 gap-y-14 py-10'>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Septiembre</h1>
                    <Link to={`/informe/9`}>
                        <button className='bg-secondary-dark rounded-lg text-white w-32 h-10' >ver detalles</button>
                    </Link>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3'  onClick={()=>onSubmitProps({dateStart:`${fechaAno}-09-01`, mes:"septiembre", dateFinish:`${fechaAno}-05-30`})}> descargar informe</button>
                </div>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Octubre</h1>
                    <Link to={`/informe/10`}>
                        <button className='bg-secondary-dark rounded-lg text-white w-32 h-10' >ver detalles</button>
                    </Link>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3' onClick={()=>onSubmitProps({dateStart:`${fechaAno}-10-01`, mes:"octubre", dateFinish:`${fechaAno}-10-31`})}> descargar informe</button>
                </div>

                <div className='grid grid-cols-3 justify-items-center '>
                    <h1>Noviembre</h1>
                    <Link to={`/informe/11`}>
                        <button className='bg-secondary-dark rounded-lg text-white w-32 h-10' >ver detalles</button>
                    </Link>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3' onClick={()=>onSubmitProps({dateStart:`${fechaAno}-11-01`, mes:"noviembre", dateFinish:`${fechaAno}-11-31`})}> descargar informe</button>
                </div>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Diciembre</h1>
                    <Link to={`/informe/12`}>
                        <button className='bg-secondary-dark rounded-lg text-white w-32 h-10' >ver detalles</button>
                    </Link>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3' onClick={()=>onSubmitProps({dateStart:`${fechaAno}-12-01`, mes:"noviembre", dateFinish:`${fechaAno}-12-31`})}> descargar informe</button>
                </div>

            </div>
        </div>
    );
}

export default PresenteATres;
