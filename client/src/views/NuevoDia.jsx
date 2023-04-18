import {React}  from 'react';
import {useNavigate} from 'react-router-dom';
import {Formik,Form,Field} from 'formik';
import dayjs from 'dayjs';

const NuevoDia = () => {
    const navigate = useNavigate();
    return (
        <div className='pt-12 px-6 h-5/6'>
            <div className='px-10 py-10 h-5/6 bg-gradient-to-r from-slate-100 to-slate-300 border-xl rounded-xl'>
                <h1 className='text-center py-10'>Ingrese la fecha de hoy para iniciar un nuevo registro</h1>
                <Formik
                    initialValues={{
                        date:''
                    }}
                    onSubmit={(values)=>{
                        const formatedDate = dayjs(values.date);
                        console.log(formatedDate);
                        // navigate(`/registro-entrada/${formatedDate}`);
                    }}
                >
                    <Form className='text-center py-24'>
                        <div>
                            <label htmlFor="date">Fecha:</label>
                            <Field id='date' type='text' name='date' className='text-xs bg-white w-28 py-1 px-2 rounded-lg border border-stone-400'/>
                        </div>

                        <div className='py-9'>
                            <button className='bg-secondary-dark p-2.5 rounded-lg text-white text-xs' type='submit'>crear nuevo registro</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default NuevoDia;
