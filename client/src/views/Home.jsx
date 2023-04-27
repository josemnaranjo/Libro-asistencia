import React, {useState,useEffect} from 'react';
import { getTrabajadoresWithLicencia } from '../services/trabajador.services.js';
import dayjs from 'dayjs';

const Home = () => {
    const [trabajadores,setTrabajadores] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage] = useState(5)

    const getTrabajadoresWithLicenciaFromService = async() =>{
        try{
            const information = await getTrabajadoresWithLicencia();
            setTrabajadores(information.data)
        }catch(err){
            console.log(err)
        }
    };

    useEffect(() => {
        getTrabajadoresWithLicenciaFromService();
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
                <h1 className='text-center'>Trabajadores con licencia</h1>
                <ul className='py-5'>
                    {
                        currentPosts?.map(t=>(
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
                <nav>
                    <ul className='flex py-3 justify-center gap-3 '>
                        {pageNumbers === 1 ? pageNumbers.map(n => (
                            <li key={n}>
                                <button className='ring-1 ring-white rounded-full bg-primary-middle px-2 text-white ' onClick={() => paginate(n)}>
                                    {n}
                                </button>
                            </li>
                        )): null}
                    </ul>
                </nav>

            </div>
        </div>
    );
}

export default Home;
