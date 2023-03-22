import axios from 'axios';


export const createNewJornada = async(values) => axios.post('http://localhost:8000/api/get-all-trabajadores/api/crear-jornada',values);