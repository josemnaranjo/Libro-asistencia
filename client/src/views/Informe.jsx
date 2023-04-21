import React, {useState,useEffect} from 'react';
import {getInformeVisualMes} from '../services/trabajador.services.js';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

const Informe = () => {
    const {month} = useParams();
    const [trabajadores,setTrabajadores] = useState();
    const year = dayjs().year();

    const getInformeVisualMesFromService = async() =>{
        try{
            switch (month) {
                case "1":
                    const information1 = await getInformeVisualMes({dateStart:`${year}-01-01`,dateFinish:`${year}-01-31`});
                    setTrabajadores(information1.data);
                    break;
                case "2":
                    const information2 = await getInformeVisualMes({dateStart:`${year}-02-01`,dateFinish:`${year}-02-28`});
                    setTrabajadores(information2.data);
                    break;
                case "3":
                    const information3 = await getInformeVisualMes({dateStart:`${year}-03-01`,dateFinish:`${year}-03-31`});
                    setTrabajadores(information3.data);
                    break;
                case "4":
                    const information4 = await getInformeVisualMes({dateStart:`${year}-04-01`,dateFinish:`${year}-04-30`});
                    setTrabajadores(information4.data);
                    console.log(information4.data)
                    break;
                case "5":
                    const information5 = await getInformeVisualMes({dateStart:`${year}-05-01`,dateFinish:`${year}-05-31`});
                    setTrabajadores(information5.data);
                    break;
                case "6":
                    const information6 = await getInformeVisualMes({dateStart:`${year}-06-01`,dateFinish:`${year}-06-30`});
                    setTrabajadores(information6.data);
                    break;
                case "7":
                    const information7 = await getInformeVisualMes({dateStart:`${year}-07-01`,dateFinish:`${year}-07-31`});
                    setTrabajadores(information7.data);
                    break;
                case "8":
                    const information8 = await getInformeVisualMes({dateStart:`${year}-08-01`,dateFinish:`${year}-08-31`});
                    setTrabajadores(information8.data);
                    break;
                case "9":
                    const information9 = await getInformeVisualMes({dateStart:`${year}-09-01`,dateFinish:`${year}-09-30`});
                    setTrabajadores(information9.data);
                    break;
                case "10":
                    const information10 = await getInformeVisualMes({dateStart:`${year}-10-01`,dateFinish:`${year}-10-31`});
                    setTrabajadores(information10.data);
                    break;
                case "11":
                    const information11 = await getInformeVisualMes({dateStart:`${year}-11-01`,dateFinish:`${year}-11-30`});
                    setTrabajadores(information11.data);
                    break;
                case "12":
                    const information12 = await getInformeVisualMes({dateStart:`${year}-12-01`,dateFinish:`${year}-12-31`});
                    setTrabajadores(information12.data);
                    break;
                default:
                    break;
            }
        }catch(err){
            console.log(err)
        }
    };

    useEffect(() => {
        getInformeVisualMesFromService();
    }, []);

    return (
        <div className='pt-12 px-6 h-5/6'>
            <div className='px-10 py-10 h-5/6 bg-gradient-to-r from-slate-100 to-slate-300 border-xl rounded-xl'>
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Rut</th>
                            <th>Fecha</th>
                            <th>Hora Inicio</th>
                            <th>Hora Término</th>
                            <th>Ausente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trabajadores?.map(t=>(
                            <tr key={t.id}>
                                <td>{t.Trabajador.name} {t.Trabajador.lastName}</td>
                                <td>{t.Trabajador.rut}</td>
                                <td>{t.date}</td>
                                <td>{t.horaInicio}</td>
                                <td>{t.horaTermino}</td>
                                <td>{t.ausente ? "si" : "no"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <ul>
                    {trabajadores?.map(t=>(
                        <li key={t.id}>
                        {t.Trabajador.name} {t.horaInicio}
                    </li>
                    ))}
                </ul> */}
            </div>
        </div>
    );
}

export default Informe;
