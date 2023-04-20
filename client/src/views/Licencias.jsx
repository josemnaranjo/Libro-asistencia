import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getOneTrabajador, createLicencia} from '../services/trabajador.services.js';
import {Formik,Form, Field} from 'formik';


//usar DatePicker https://stackblitz.com/edit/demo-react-formik-datepicker?file=index.js
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
                        <Form>
                            <div className='grid grid-cols-2'>
                                <div className='text-center'>
                                    <label htmlFor='inicio'>Inicio:</label>
                                    <Field id='inicioLicencia' type='text' name='inicioLicencia' className='text-xs bg-white mx-2 w-64 p-1 rounded-lg border border-stone-400'/>
                                </div>
                                <div className='text-center'>
                                    <label htmlFor='termino'>Termino:</label>
                                    <Field id='finLicencia' type='text' name='finLicencia' className='text-xs bg-white mx-2 w-64 p-1 rounded-lg border border-stone-400'/>
                                </div>
                            </div>
                            <div className='text-center py-10'>
                                <button className='bg-secondary-dark p-2.5 rounded-lg text-white text-sm mt-5' type='submit'>registrar</button>
                            </div>
                        </Form>
                    </Formik>
                </div>

            </div>
        </div>
    );
}

export default Licencias;
