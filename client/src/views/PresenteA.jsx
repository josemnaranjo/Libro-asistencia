import {React, useState} from 'react';
import PresenteAUno from '../components/PresenteAUno';
import PresenteADos from '../components/PresenteADos';
import PresenteATres from '../components/PresenteATres';
import { getInformeMes } from '../services/trabajador.services.js';

const PresenteA = () => {
    const [page,setPage] = useState(1);

    const getInformeMesFromService = async(data) => {
        try{
            console.log(data);
        }catch(err){
            console.log(err)
        }
    }


    return (

        <div>
            {
                page === 1 ? <PresenteAUno onSubmitProps={getInformeMesFromService}/> : null
            }

            {
                page === 2 ? <PresenteADos onSubmitProps={getInformeMesFromService}/> : null
            }
            
            {
                page === 3 ? <PresenteATres onSubmitProps={getInformeMesFromService}/> : null
            }

            <ul className='flex justify-center gap-3 mt-20'>
                <li>
                    <button onClick={()=>setPage(1)} >1</button>
                </li>

                <li>
                    <button onClick={()=>setPage(2)}>2</button>
                </li>

                <li>
                    <button onClick={()=>setPage(3)}>3</button>
                </li>
            </ul>
        </div>
    );
}

export default PresenteA;
