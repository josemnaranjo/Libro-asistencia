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
                                    <div className='grid grid-cols-5 px-28' key={trabajador.id}>

                                        <div>
                                            <label>Nombre: {trabajador.name} {trabajador.lastName}</label>
                                        </div>
                                        <div className=''>
                                            <label>Rut: {trabajador.rut}</label>
                                        </div>
                                        <div>
                                            <label htmlFor="horaInicio">Hora Inicio:</label>
                                            <Field name="horaInicio" value={props.jornadaInfo} className="w-20 ml-2 bg-slate-200 rounded-lg border border-stone-400" ></Field>
                                        </div>
                                        <div>
                                            <label htmlFor="horaTermino">Hora Termino: </label>
                                            <Field name="horaTermino" value={props.jornadaInfo} className="w-20 ml-2 bg-slate-200 rounded-lg border border-stone-400" ></Field>
                                        </div>
                                        <button className='bg-secondary-dark p-1 rounded-lg text-white'type='submit'>Guardar</button>

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







