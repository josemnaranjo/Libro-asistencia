import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getOneTrabajador, createLicencia} from '../services/trabajador.services.js';
import {Formik,Form} from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'



const Licencias = () => {
    const {rut} = useParams();
    const [trabajador, setTrabajador] = useState();

    const getAllTrabajadoresFromService = async() => {
        try{
            const res = await getOneTrabajador(rut);
            setTrabajador(res.data[0]);
        }catch(err){
            console.log(err)
        }
    };

    const createLicenciaFromService =async(values)=>{
        try{
            await createLicencia(rut,values);
            console.log("exito")
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getAllTrabajadoresFromService();
    }, []);

    return (
        <div className='pt-12 px-6 h-5/6'>
            <div className='px-10 py-10 h-5/6 bg-gradient-to-r from-slate-100 to-slate-300 border-xl rounded-xl'>
                <h1 className='text-center py-10'>Formulario de licencias</h1>

                <div className='py-20'>
                    <div className='grid grid-cols-2 h-10'>
                        <h1 className='text-center'>{trabajador?.name} {trabajador?.lastName}</h1>
                        <h1 className='text-center'>{trabajador?.rut}</h1>
                    </div>
                    <Formik
                        initialValues={{
                                inicioLicencia:'',
                                finLicencia:'',
                            }}
                        onSubmit={(values)=>createLicenciaFromService(values)}
                        enableReinitialize
                    >
                        {({values,setFieldValue})=>
                        <Form>
                            <div className='grid grid-cols-2'>
                                <div className='text-center'>
                                    <label htmlFor='inicio'>Inicio:</label>
                                    <DatePicker
                                        selected={values.inicioLicencia}
                                        onChange={date=> setFieldValue('inicioLicencia',date)}
                                        dateFormat={'dd-MM-yyyy'}
                                        minDate={new Date()}
                                        placeholderText='Elegir una fecha'
                                        className='text-center text-sm bg-white w-48 py-1 px-2 rounded-lg border border-stone-400'
                                    />
                                </div>
                                <div className='text-center'>
                                    <label htmlFor='termino'>Termino:</label>
                                    <DatePicker
                                        selected={values.finLicencia}
                                        onChange={date=> setFieldValue('finLicencia',date)}
                                        dateFormat={'dd-MM-yyyy'}
                                        minDate={new Date()}
                                        placeholderText='Elegir una fecha'
                                        className='text-center text-sm bg-white w-48 py-1 px-2 rounded-lg border border-stone-400'
                                    />
                                </div>
                            </div>
                            <div className='text-center py-10'>
                                <button className='bg-secondary-dark p-2.5 rounded-lg text-white text-sm mt-5' type='submit'>registrar</button>
                            </div>
                        </Form>
                        }
                    </Formik>
                </div>

            </div>
        </div>
    );
}

export default Licencias;
