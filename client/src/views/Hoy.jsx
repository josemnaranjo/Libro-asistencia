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
                                    <div className='flex' key={trabajador.id}>

                                        <div>
                                            <label>Nombre: {trabajador.name} {trabajador.lastName}</label>
                                        </div>
                                        <div>
                                            <label>Rut: {trabajador.rut}</label>
                                        </div>
                                        <div>
                                            <label htmlFor="horaInicio">Hora Inicio:</label>
                                            <Field name="horaInicio" value={props.jornadaInfo} ></Field>
                                        </div>
                                        <div>
                                            <label htmlFor="horaTermino">Hora Termino: </label>
                                            <Field ></Field>
                                        </div>
                                        <button className='bg-secondary-dark p-1.5 rounded-lg text-white'type='submit'>Guardar</button>

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







