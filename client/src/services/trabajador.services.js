import axios from 'axios';

export const addTrabajador = async(values) => await axios.post('http://localhost:8000/api/crear-trabajador',values);