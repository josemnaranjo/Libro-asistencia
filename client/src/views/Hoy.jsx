import {React, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getAllTrabajadoresOfAJornada} from '../services/trabajador.services.js';
import {Formik,Field, Form} from 'formik'

const Hoy = () => {

    
    const [trabajadoresInfo, setTrabajadoresInfo] = useState([]);
    const [jornadaInfo, setJornadaInfo] = useState([]);
    const {date} = useParams();

    const getAllTrabajadoresFromService = async()=>{
        try{
            const response = await getAllTrabajadoresOfAJornada(date);
            setTrabajadoresInfo(response.data.trabajadoresInfo);
            setJornadaInfo(response.data.jornadaInfo);
        }catch(err){
            console.log(err)
        }
    };


    useEffect(() => {
        getAllTrabajadoresFromService();
    }, []);
    
    return (
        <div>
            <h1 className='text-center text-lg pt-3'>{date}</h1>
            {
            trabajadoresInfo?.map((trabajador,n)=>(
                
                <div className='mt-9' key={trabajador.id}>
                    
                    <Formik
                        initialValues={{
                            horaInicio:{jornadaInfo},
                            horaTermino:{jornadaInfo}
                        }}
                        onSubmit={(values)=>(console.log(values))}

                        enableReinitialize
                    >
                        {
                            props => (
                                <Form>
                                    <div className='grid grid-cols-5 justify-items-center' key={trabajador.id}>

                                        <div>
                                            <label>Nombre: {trabajador.name} {trabajador.lastName}</label>
                                        </div>
                                        <div className=''>
                                            <label>Rut: {trabajador.rut}</label>
                                        </div>
                                        <div className=''>
                                            <div>
                                                <label htmlFor="horaInicio">Hora Inicio:</label>
                                                <Field name="horaInicio" value={props.jornadaInfo} className="w-20 ml-2 bg-slate-200 rounded-lg border border-stone-400" ></Field>
                                            </div>
                                            <div className='flex mt-3 text-xs text-slate-900 antialiased'>
                                                <label >Última hora registrada: </label>
                                                <p className='ml-2'>{jornadaInfo[n].horaInicio}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <label htmlFor="horaTermino">Hora Termino: </label>
                                                <Field name="horaTermino" value={props.jornadaInfo} className="w-20 ml-2 bg-slate-200 rounded-lg border border-stone-400" ></Field>
                                            </div>
                                            <div className='flex mt-3 text-xs text-slate-900 antialiased'>
                                                <label >Última hora registrada: </label>
                                                <p className='ml-2'>{jornadaInfo[n].horaTermino}</p>
                                            </div>
                                        </div>
                                        <button className='bg-secondary-dark rounded-lg text-white w-32 h-10'type='submit'>Actualizar</button>

                                    </div>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
                
            ))
            }
            
        </div>
    );
}

export default Hoy;







