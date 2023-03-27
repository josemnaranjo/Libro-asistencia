import axios from 'axios';


export const createNewJornada = async(values) => axios.post('http://localhost:8000/api/crear-jornada',values);
export const getJornadaInfoOfATrabajador = async(date,value) => axios.post(`http://localhost:8000/api/obtener-info-jornada/${date}`,value)