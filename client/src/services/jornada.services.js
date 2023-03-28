import axios from 'axios';


export const createNewJornada = async(values) => axios.post('http://localhost:8000/api/crear-jornada',values);


export const updateHorasJornada = async(values) => axios.put('http://localhost:8000/api/actualizar-hora-jornada',values)