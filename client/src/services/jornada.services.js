import axios from 'axios';


export const createNewJornada = async(values) => axios.post('http://localhost:8000/api/crear-jornada',values);
