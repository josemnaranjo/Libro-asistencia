import {React, useState,useEffect}  from 'react';
import { getAllTrabajadores } from '../services/trabajador.services';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';




const NuevoDia = () => {
    const [trabajadores, setTrabajadores] = useState([]);

    const getAllTrabajadoresFromService =  async() => {
        const resutl = await getAllTrabajadores();
        setTrabajadores(resutl.data);        
    };

    useEffect(() => {
        getAllTrabajadoresFromService()
    }, []);
    return (
        <div>
            <div className='mt-9'>
                <Formik
                    initialValues={{
                        date:'',
                        checked: []
                    }}
                    onSubmit={(values,{resetForm})=>{console.log(values);
                        resetForm();}}
                >
                    <Form >
                        <div className='text-center'>
                            <label htmlFor='date'>Fecha:</label>
                            <Field id='date' type='text' name='date' className='text-xs bg-slate-200 mx-2 w-64 p-1 rounded-lg border border-stone-400'/>
                        </div>
                        <ul className='mt-10'>
                            {trabajadores?.map((trabajador,i)=>(
                                <li className='grid grid-cols-3 pl-48 mt-5' key={trabajador.id}>
                                    <p>{trabajador.name +" "+ trabajador.lastName}</p>
                                    <p className='text-center'>Rut: {trabajador.rut}</p>
                                    <Field type="checkbox" name="checked" value={trabajador.id.toString()} className='ml-32'/>
                                </li>
                            ))}
                        </ul>

                        <div className='mt-9 text-center'>
                                <button className='bg-secondary-dark p-2.5 rounded-lg text-white text-xs mt-5' type='submit'>
                                    crear
                                </button>
                        </div>

                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default NuevoDia;
