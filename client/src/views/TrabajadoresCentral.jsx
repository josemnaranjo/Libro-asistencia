import {React, useState, useEffect} from 'react';
import { getAllTrabajadores, deleteOneTrabajador  } from '../services/trabajador.services.js';
import { useNavigate } from 'react-router-dom';

const TrabajadoresCentral = () => {
    const [trabajadores,setTrabajadores] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage] = useState(9)
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

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = trabajadores.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(trabajadores.length/postPerPage); i++ ){
        pageNumbers.push(i);
    };

    const paginate = pageNumbers => setCurrentPage(pageNumbers);

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
                        {currentPosts?.map((t)=>(
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
                <nav>
                    <ul className='flex py-3 justify-center gap-3 '>
                        {pageNumbers.map(n => (
                            <li key={n}>
                                <button className='ring-1 ring-white rounded-full bg-primary-middle px-2 text-white ' onClick={()=> paginate(n)}>
                                    {n}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default TrabajadoresCentral;
