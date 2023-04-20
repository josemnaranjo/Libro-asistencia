import React, {useState,useEffect} from 'react';
import { getTrabajadoresWithLicencia } from '../services/trabajador.services.js';
import dayjs from 'dayjs';

const Home = () => {
    const [trabajadores,setTrabajadores] = useState();

    const getTrabajadoresWithLicenciaFromService = async() =>{
        try{
            const information = await getTrabajadoresWithLicencia();
            setTrabajadores(information.data)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        getTrabajadoresWithLicenciaFromService();
    }, []);
    return (
        <div className='pt-12 px-6 h-5/6'>
            <div className='px-10 py-10 h-5/6 bg-gradient-to-r from-slate-100 to-slate-300 border-xl rounded-xl'>
                <h1 className='text-center'>Trabajadores con licencia</h1>
                <ul className='py-5'>
                    {
                        trabajadores?.map(t=>(
                            <li key={t.id} className='grid grid-cols-4 justify-items-center py-5'>
                                <p>
                                    {t.name} {t.lastName}
                                </p>

                                <p>
                                    {t.rut}
                                </p>

                                <p>
                                    Fecha de inicio: {dayjs(t.inicioLicencia).format('D-M-YYYY')}
                                </p>

                                <p>
                                    Fecha término: {dayjs(t.finLicencia).format('D-M-YYYY')}
                                </p>

                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    );
}

export default Home;
