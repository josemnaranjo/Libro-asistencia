import React from 'react';
import {Formik, Field,Form} from 'formik';
import * as Yup from 'yup';
import { addTrabajador } from '../services/trabajador.services';
import {Report} from 'notiflix/build/notiflix-report-aio';

const NuevoTrabajador = () => {
    const addTrabajadorFromService = async (values) =>{
        try{
            await addTrabajador(values);
            Report.success(
                "Nuevo trabajador creado exitosamente",
                "",
                "Aceptar"
            )
        }catch(err){
            console.log(err)
        }
    }
    
    const valSchema = Yup.object().shape({
        name: Yup.string()
        .min(3,"El nombre del trabajador debe tener más de 3 caracteres")
        .required("Por favor, ingresa el nombre del trabajador"),

        lastName: Yup.string()
        .min(3,"El apellido del trabajador debe tener más de 3 caracteres")
        .required("Por favor, ingresar el apellido del trabajador"),

        //queda pendiente validación de formato de rut
        rut: Yup.string()
        .required("Por favor, ingresar el rut del trabajador")


    })
    return (
        <div>
            <h1 className='text-2xl text-center mt-8'>Formulario de nuevo trabajador</h1>

            <div className='divide-y divide-slate-300/70'>

                <div className='mt-9'>
                    <Formik
                        initialValues={{
                            name: '',
                            lastName:'',
                            rut:''
                        }}

                        validationSchema={valSchema}
                        //agregar servicio de agregar trabajador
                        onSubmit={(values,{resetForm})=>{addTrabajadorFromService(values);
                        resetForm();
                    }}
                        enableReinitialize
                    >
                    {({errors,touched})=>(
                        <Form className='text-center'>
                            <div className='flex justify-center'>
                                <div>
                                    <div>
                                        <label htmlFor='name'>Nombre:</label>
                                        <Field id='name' type='text' name='name' className='text-xs bg-slate-200 mx-2 w-64 p-1 rounded-lg border border-stone-400'/>
                                        {errors.name && touched.name ? <p className='text-red-600'>{errors.name}</p>: null}
                                    </div>

                                    <div>
                                        <label htmlFor='lastName'>Apellido:</label>
                                        <Field id='lastName' type='text' name='lastName' className='text-xs bg-slate-200 mx-2 mt-5 w-64 p-1 rounded-lg border border-stone-400'/>
                                        {errors.lastName && touched.lastName ? <p className='text-red-600'>{errors.lastName}</p>: null}
                                    </div>

                                    <div>
                                        <label htmlFor='rut'>Rut:</label>
                                        <Field id='rut' type='text' name='rut' className='text-xs bg-slate-200 ml-9 w-64 p-1 rounded-lg border border-stone-400 mt-5'/>
                                        {errors.rut && touched.rut ? <p className='text-red-600'>{errors.rut}</p>: null}
                                    </div>
                                </div>

                                <div className='mt-5 ml-28 '>
                                    <button className='bg-secondary-dark p-2.5 rounded-lg text-white text-xs mt-5' type='submit'>agregar</button>
                                </div>
                            </div>

                        </Form>
                    )}
                    </Formik>
                    
                </div>

                <div className='mt-9'>
                    <Formik
                        initialValues={{
                            name: '',
                            lastName:'',
                            rut:''
                        }}

                        validationSchema={valSchema}
                        //agregar servicio de agregar trabajador
                        onSubmit={(values,{resetForm})=>{addTrabajadorFromService(values);
                            resetForm();
                        }}
                        enableReinitialize
                    >
                    {({errors,touched})=>(
                        <Form className='text-center mt-8'>
                            <div className='flex justify-center'>
                                <div>
                                    <div>
                                        <label htmlFor='name'>Nombre:</label>
                                        <Field id='name' type='text' name='name' className='text-xs bg-slate-200 mx-2 w-64 p-1 rounded-lg border border-stone-400'/>
                                        {errors.name && touched.name ? <p className='text-red-600'>{errors.name}</p>: null}
                                    </div>

                                    <div>
                                        <label htmlFor='lastName'>Apellido:</label>
                                        <Field id='lastName' type='text' name='lastName' className='text-xs bg-slate-200 mx-2 mt-5 w-64 p-1 rounded-lg border border-stone-400'/>
                                        {errors.lastName && touched.lastName ? <p className='text-red-600'>{errors.lastName}</p>: null}
                                    </div>

                                    <div>
                                        <label htmlFor='rut'>Rut:</label>
                                        <Field id='rut' type='text' name='rut' className='text-xs bg-slate-200 ml-9 w-64 p-1 rounded-lg border border-stone-400 mt-5'/>
                                        {errors.rut && touched.rut ? <p className='text-red-600'>{errors.rut}</p>: null}
                                    </div>
                                </div>

                                <div className='mt-5 ml-28 '>
                                    <button className='bg-secondary-dark p-2.5 rounded-lg text-white text-xs mt-5' type='submit'>agregar</button>
                                </div>
                            </div>

                        </Form>
                    )}
                    </Formik>
                    
                </div>

                <div className='mt-9'>
                    <Formik
                        initialValues={{
                            name: '',
                            lastName:'',
                            rut:''
                        }}

                        validationSchema={valSchema}
                        //agregar servicio de agregar trabajador
                        onSubmit={(values,{resetForm})=>{addTrabajadorFromService(values);
                            resetForm();
                        }}
                        enableReinitialize
                    >
                    {({errors,touched})=>(
                        <Form className='text-center mt-8'>
                            <div className='flex justify-center'>
                                <div>
                                    <div>
                                        <label htmlFor='name'>Nombre:</label>
                                        <Field id='name' type='text' name='name' className='text-xs bg-slate-200 mx-2 w-64 p-1 rounded-lg border border-stone-400'/>
                                        {errors.name && touched.name ? <p className='text-red-600'>{errors.name}</p>: null}
                                    </div>

                                    <div>
                                        <label htmlFor='lastName'>Apellido:</label>
                                        <Field id='lastName' type='text' name='lastName' className='text-xs bg-slate-200 mx-2 mt-5 w-64 p-1 rounded-lg border border-stone-400'/>
                                        {errors.lastName && touched.lastName ? <p className='text-red-600'>{errors.lastName}</p>: null}
                                    </div>

                                    <div>
                                        <label htmlFor='rut'>Rut:</label>
                                        <Field id='rut' type='text' name='rut' className='text-xs bg-slate-200 ml-9 w-64 p-1 rounded-lg border border-stone-400 mt-5'/>
                                        {errors.rut && touched.rut ? <p className='text-red-600'>{errors.rut}</p>: null}
                                    </div>
                                </div>

                                <div className='mt-5 ml-28 '>
                                    <button className='bg-secondary-dark p-2.5 rounded-lg text-white text-xs mt-5' type='submit'>agregar</button>
                                </div>
                            </div>

                        </Form>
                    )}
                    </Formik>
                    
                </div>


            </div>

            
            
        </div>
    );
}

export default NuevoTrabajador;
