import {React, useState,useEffect}  from 'react';
import { getAllTrabajadores } from '../services/trabajador.services';
import {Formik, Form, Field} from 'formik';




const NuevoDia = () => {
    const [trabajadores, setTrabajadores] = useState([]);
    
    const newJornadaFromService = (values)=>{
        const date = values.date;
        const idTrbajadores = values.trabajadorId;
        const jornada =  idTrbajadores.map(((id,inx)=>({date:date,trabajadorId:id})));
        const objPrincipal = {jornada};
        console.log(objPrincipal);
    }
  
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
                        trabajadorId:''
                    }}
                    onSubmit={(values,{resetForm})=>{newJornadaFromService(values);
                        resetForm();}}
                >
                    <Form >
                        <div className='text-center'>
                            <label htmlFor='date'>Fecha:</label>
                            <Field placeholder="YYYY-MM-dd" id='date' type='text' name='date' className='text-xs bg-slate-200 mx-2 w-64 p-1 rounded-lg border border-stone-400'/>
                        </div>
                        <ul className='mt-10'>
                            {trabajadores?.map((trabajador,i)=>(
                                <li className='grid grid-cols-3 pl-48 mt-5' key={trabajador.id}>
                                    <p>{trabajador.name +" "+ trabajador.lastName}</p>
                                    <p className='text-center'>Rut: {trabajador.rut}</p>
                                    <Field type="checkbox" name="trabajadorId" value={trabajador.id.toString()} className='ml-32'/>
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
