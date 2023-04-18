import React from 'react';
import { registroDeEntrada } from '../services/jornada.services.js';
import {Formik, Form, Field} from 'formik';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

const RegistroDeEntrada = () => {
    const {date} = useParams();
    const dateForDisplay = dayjs(date).format('DD-MM-YYYY');
    const registroDeEntradaFromService = async(rut) =>{
        try{
            await registroDeEntrada(date,rut);

        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className='pt-12 px-6 h-5/6'>
            <div className='px-10 py-28 h-5/6 bg-gradient-to-r from-slate-100 to-slate-300 border-xl rounded-xl'>
                <h1 className='text-center py-2'>Registro de entrada</h1>
                <h1 className='text-center py-2'>{dateForDisplay}</h1>
                <Formik
                    initialValues={{
                        rut:''
                    }}
                    onSubmit={(values,{resetForm})=>{registroDeEntradaFromService(values);
                        resetForm();
                    }}
                >
                    <Form className='py-12'>
                        <div className='grid grid-rows-2 justify-items-center gap-3'>
                            <label htmlFor="rut">Ingrese su rut</label>
                            <Field id='rut' type='text' name='rut' placeholder="XX.XXX.XXX-X" className='text-xs bg-white w-28 py-1 px-2 rounded-lg border border-stone-400'/>
                        </div>

                        <div className='text-center py-9'>
                            <button className='bg-secondary-dark p-2.5 rounded-lg text-white text-xs' type='submit'>aceptar</button>
                        </div>
                    </Form>
                </Formik>

            </div>
        </div>
    );
}

export default RegistroDeEntrada;
