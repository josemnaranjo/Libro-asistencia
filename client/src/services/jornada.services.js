import axios from 'axios';


export const registroDeEntrada = async(date,rut) => axios.post(`http://localhost:8000/api/registro-de-entrada/${date}`,rut);


export const registroDeSalida= async(date,rut) => axios.put(`http://localhost:8000/api/registro-de-salida/${date}`,rut);



