import axios from 'axios';

export const addTrabajador = async(values) => await axios.post('http://localhost:8000/api/crear-trabajador',values);
export const getAllTrabajadores = async() => await axios.get('http://localhost:8000/api/get-all-trabajadores');
