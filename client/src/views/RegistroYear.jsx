import {React, useState} from 'react';
import {useParams} from 'react-router-dom';
import PresenteAUno from '../components/PresenteAUno';
import PresenteADos from '../components/PresenteADos';
import PresenteATres from '../components/PresenteATres';

const RegistroYear = () => {
    const {year} = useParams();
    const [page,setPage] = useState(1)
    return (
        <div className='pt-12 px-6 h-5/6'>
            <div className='px-10 py-10 h-5/6 bg-gradient-to-r from-slate-100 to-slate-300 border-xl rounded-xl'>
                <h1 className='text-center'>Registro año: {year}</h1>
                {
                    page === 1 ? <PresenteAUno /> : null
                }

                {
                    page === 2 ? <PresenteADos /> : null
                }

                {
                    page === 3 ? <PresenteATres /> : null
                }

                <ul className='flex justify-center gap-3 py-9 '>
                    <li><button onClick={()=>setPage(1)}>1</button></li>
                    <li><button onClick={()=>setPage(2)}>2</button></li>
                    <li><button onClick={()=>setPage(3)}>3</button></li>
                </ul>

            </div>
        </div>
    );
}

export default RegistroYear;
