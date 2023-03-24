import React from 'react';
import NavBarSup from '../components/NavBarSup';
import { Outlet } from 'react-router-dom';

const LibroDeAsistencia = () => {
    return (
        <div>
            <NavBarSup/>
            <Outlet />
        </div>
    );
}

export default LibroDeAsistencia;
