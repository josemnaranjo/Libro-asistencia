import axios from 'axios';


export const registroDeEntrada = async(date,rut) => axios.post(`http://localhost:8000/api/registro-de-entrada/${date}`,rut);


export const updateHorasJornada = async(values) => axios.put('http://localhost:8000/api/actualizar-hora-jornada',values);

