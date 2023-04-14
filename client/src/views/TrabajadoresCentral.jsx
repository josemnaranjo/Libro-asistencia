import {React, useState, useEffect} from 'react';
import { getAllTrabajadores, deleteOneTrabajador  } from '../services/trabajador.services.js';
import { useNavigate } from 'react-router-dom';

const TrabajadoresCentral = () => {
    const [trabajadores,setTrabajadores] = useState();
    const navigate = useNavigate();

    const getAllTrabajadoresFromService = async() => {
        try{
            const res = await getAllTrabajadores();
            setTrabajadores(res.data);

        }catch(err){
            console.log(err)
        }
    };

    const deleteTrabajador = async(rut)=>{
        try{
            const newArray = trabajadores.filter(trabajador => trabajador.rut !== rut);
            await deleteOneTrabajador(rut);
            setTrabajadores(newArray);

        }catch(err){
            console.log(err)
        }
    };

    useEffect(() => {
        getAllTrabajadoresFromService();
    }, []);

    return (
        <div className='pt-12 px-6 h-5/6'>
            <div className='px-10 py-10 h-5/6 bg-gradient-to-r from-slate-100 to-slate-300 border-xl rounded-xl'>
                
                {/* div superior */}
                <div className='grid grid-cols-2 gap-48 justify-items-center '>

                    {/* buscador */}
                    <div>
                        <input type='text' />
                        <button className='bg-secondary-dark p-1.5 rounded-lg text-white ml-2'>buscar</button>
                    </div>

                    {/* buton crear nuevo trabajador */}
                    <button className='bg-secondary-dark p-1.5 rounded-lg text-white ml-2' onClick={()=>navigate('/nuevo-trabajador')}>nuevo trabajador</button>

                </div>

                {/* div inferior */}
                <div className='mt-10 max-h-full'>
                    <ul>
                        {trabajadores?.map((t)=>(
                        <li key={t.id} className='grid grid-cols-5 gap-x-36 py-1'> 
                            <p>{t.name} {t.lastName}</p>
                            <p className='text-center'> {t.rut}</p>
                            <button className='bg-secondary-light p-1 rounded-lg text-white' onClick={()=>navigate(`/editar-trabajador/${t.rut}`)}>editar</button>
                            <button className='bg-primary-dark p-1 rounded-lg text-white' onClick={()=>deleteTrabajador(t.rut)}>borrar</button>
                            <button className='bg-secondary-dark p-1 rounded-lg text-white' onClick={()=>navigate(`/licencia/${t.rut}`)} >licencia</button>
                        </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default TrabajadoresCentral;
