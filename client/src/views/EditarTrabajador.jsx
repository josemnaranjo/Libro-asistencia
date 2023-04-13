import React, { useState, useEffect } from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import { getOneTrabajador, updateTrabajador } from '../services/trabajador.services.js';
import EditarTrabajadorForm from '../components/EditarTrabajadorForm.jsx';


const EditarTrabajador = () => {
    const {rut} = useParams();
    const navigate = useNavigate();
    const [trabajador,setTrabajador] = useState();


    const getOneTrabajadorFromService = async()=>{
        try{
            const res = await getOneTrabajador(rut);
            setTrabajador(res.data[0]);
        }catch(err){
            console.log(err)
        }
    };

    const updateTrabajadorFromService = async(values,rut)=>{
        try{
            await updateTrabajador(values,rut);
            navigate('/trabajadores');

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getOneTrabajadorFromService();
    }, []);
    return (
        <div className='pt-12 px-6 h-5/6'>
            <EditarTrabajadorForm name={trabajador?.name} lastName={trabajador?.lastName} rut={trabajador?.rut} onSubmitProp={updateTrabajadorFromService} />
        </div>
    );
}

export default EditarTrabajador;
