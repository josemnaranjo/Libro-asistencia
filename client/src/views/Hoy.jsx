import {React, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getAllTrabajadoresOfAJornada} from '../services/trabajador.services.js';
import {getJornadaInfoOfATrabajador } from '../services/jornada.services.js';
import {Formik,Field, Form} from 'formik'

const Hoy = () => {

    
    const [trabajadoresInfo, setTrabajadoresInfo] = useState([]);
    const [jornadaInfo, setJornadaInfo] = useState([]);
    const {date} = useParams();

    const getAllTrabajadoresFromService = async()=>{
        try{
            const response = await getAllTrabajadoresOfAJornada(date);
            setTrabajadoresInfo(response.data.trabajadoresInfo);
        }catch(err){
            console.log(err)
        }
    };

    const getJornadaInfoOfATrabajadorFromService = async(trabajadorId)=>{
        try{
            const response = await getJornadaInfoOfATrabajador(date,trabajadorId);
            console.log(response.data);
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getAllTrabajadoresFromService();
    }, []);
    
    return (
        <div>
            <h1 className='text-center text-lg pt-3'>{date}</h1>

            <div className='mt-9'>
                <Formik>
                    <Form>
                        <div className='flex'>
                            {
                                trabajadoresInfo?.map((trabajador)=>(
                                    <div className='' key={trabajador.id}>
                                        <div>
                                            <label>Nombre: {trabajador.name} {trabajador.lastName}</label>
                                        </div>
                                        <div>
                                            <label>Rut: {trabajador.rut}</label>
                                        </div>
                                        <div>
                                            {
                                                
                                            }
                                        </div>
                                    </div>
                                    
                                ))
                                
                            }

                        </div>



                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Hoy;
