import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import dayjs from 'dayjs';
import {getAllTrabajadoresOfAJornada} from '../services/trabajador.services.js';
import {registroDeAusentes} from '../services/jornada.services.js';
import Swal from 'sweetalert2';

const RegistroAusentes = () => {

    const {date} = useParams();
    const dateFormated = dayjs(date).format('D-M-YYYY');
    const [trabajadorData,setTrabajadorData] = useState();

    const getAllTrabajadoresOfAJornadaFromService = async()=>{
        try{
            const information = await getAllTrabajadoresOfAJornada(date);
            setTrabajadorData(information.data.jornadaInfo);
        }catch(err){
            console.log(err)
        }
    };

    const registroDeAusentesFromService = async(values)=>{
        try{
            Swal.fire({
                icon:'warning',
                iconColor:'#2236D6',
                html:
                    `<p>¿Estás seguro que el trabajador estuvo ausente el día ${trabajadorData[0].date} ?</p>`,
                showCancelButton:true,
                background:'#FFBF18',
                color:'#ffff',
                padding:'5em',
                confirmButtonColor:'#2236D6',
                cancelButtonColor:'#6272EE',
                confirmButtonText:'confirmar',
                cancelButtonText:'rechazar'
            }).then((result) => {
                if(result.isConfirmed){
                    registroDeAusentes(date,values);
                    Swal.fire({
                        icon:'success',
                        text:'registro de ausencia actualizado',
                        timer:2000,
                        timerProgressBar:true,
                        background:'#FFBF18',
                        color:'#ffff',
                        showConfirmButton:false,
                        padding:'3em'
                    });
                    
                }
            })
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getAllTrabajadoresOfAJornadaFromService();
    }, []);


    return (
        <div className='pt-12 px-6 h-5/6'>
            <div className='px-10 py-10 h-5/6 bg-gradient-to-r from-slate-100 to-slate-300 border-xl rounded-xl'>
                <h1 className='text-center'>Registro de ausentes : {dateFormated}</h1>
                <ul className='py-5'>
                    {
                        trabajadorData?.map((t)=>(
                            <li key={t.id} className='grid grid-cols-5 py-2 justify-items-center'>
                                <p>
                                    Nombre: {t.Trabajador.name} {t.Trabajador.lastName}
                                </p>
                                <p>
                                    Rut: {t.Trabajador.rut}
                                </p>
                                <p>
                                    Hora Inicio: {t.horaInicio}
                                </p>
                                <p>
                                    Hora Termino: {t.horaTermino}
                                </p>
                                <button className={'bg-primary-dark py-1 w-24 rounded-lg text-white'}
                                    onClick={() => {registroDeAusentesFromService({rut:t.Trabajador.rut})}}
                                >
                                    ausente
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default RegistroAusentes;
