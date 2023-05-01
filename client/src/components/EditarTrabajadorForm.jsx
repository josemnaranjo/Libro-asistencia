import React from 'react';
import{Formik,Field, Form} from 'formik';

const EditarTrabajadorForm = (props) => {
    const {name, lastName,rut,onSubmitProp} = props;
    return (
        <div >
            <div>
                <Formik
                    initialValues={{
                        name:name,
                        lastName:lastName,
                        rut:rut
                    }}
                    onSubmit={(values)=>{onSubmitProp(values,rut)}}
                    enableReinitialize
                >
                    <Form>
                        <div className='text-center'>
                            <div>
                                <div>
                                    <label htmlFor='name'>Nombre:</label>
                                    <Field id='name' type='text' name='name' className='text-xs bg-white mx-2 w-64 p-1 rounded-lg border border-stone-400'/>
                                </div>

                                <div>
                                    <label htmlFor='lastName'>Apellido:</label>
                                    <Field id='lastName' type='text' name='lastName' className='text-xs bg-white mx-2 mt-5 w-64 p-1 rounded-lg border border-stone-400'/>
                                    
                                </div>

                                <div>
                                    <label htmlFor='rut'>Rut:</label>
                                    <Field id='rut' type='text' name='rut' className='text-xs bg-white ml-9 w-64 p-1 rounded-lg border border-stone-400 mt-5'/>
                                </div>

                                <div className='text-center'>
                                    <button className='bg-secondary-dark p-2.5 rounded-lg text-white text-xs mt-5' type='submit'>editar</button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default EditarTrabajadorForm;
