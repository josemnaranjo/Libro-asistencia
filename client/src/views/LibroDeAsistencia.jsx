import React from 'react';
import NavBarSup from '../components/NavBarSup';
import { Outlet } from 'react-router-dom';

const LibroDeAsistencia = () => {
    return (
        <div>
            <NavBarSup/>
            <h1>Libro de asistencias</h1>
            <Outlet />
        </div>
    );
}

export default LibroDeAsistencia;
