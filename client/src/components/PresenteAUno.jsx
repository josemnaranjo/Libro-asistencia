import React from 'react';
import { Link } from 'react-router-dom';

const PresenteAUno = (props) => {
    const {onSubmitProps} = props;

    let date = new Date();
    let fechaAno = date.getFullYear();
    return (
        <div>
            <div className='grid grid-rows-4 gap-y-14 py-10'>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Enero</h1>
                    <Link to={`/informe/1`}>
                        <button className='bg-secondary-dark rounded-lg text-white w-32 h-10' >ver detalles</button>
                    </Link>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3' onClick={()=>onSubmitProps({dateStart:`${fechaAno}-01-01`, mes:"enero", dateFinish:`${fechaAno}-01-31`})} value="download"> descargar informe </button>
                </div>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Febrero</h1>
                    <Link to={`/informe/2`}>
                        <button className='bg-secondary-dark rounded-lg text-white w-32 h-10' >ver detalles</button>
                    </Link>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3'onClick={()=>onSubmitProps({dateStart:`${fechaAno}-02-01`, mes:"febrero", dateFinish:`${fechaAno}-02-28`})}> descargar informe</button>
                </div>

                <div className='grid grid-cols-3 justify-items-center '>
                    <h1>Marzo</h1>
                    <Link to={`/informe/3`}>
                        <button className='bg-secondary-dark rounded-lg text-white w-32 h-10' >ver detalles</button>
                    </Link>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3' onClick={()=>onSubmitProps({dateStart:`${fechaAno}-03-01`, mes:"marzo", dateFinish:`${fechaAno}-03-31`})}> descargar informe</button>
                </div>

                <div className='grid grid-cols-3 justify-items-center'>
                    <h1>Abril</h1>
                    <Link to={`/informe/4`}>
                        <button className='bg-secondary-dark rounded-lg text-white w-32 h-10' >ver detalles</button>
                    </Link>
                    <button className='bg-secondary-dark rounded-lg text-white w-38 h-10 px-3'onClick={()=>onSubmitProps({dateStart:`${fechaAno}-04-01`, mes:"abril", dateFinish:`${fechaAno}-04-30`})}> descargar informe</button>
                </div>

            </div>
        </div>
    );
}

export default PresenteAUno;
