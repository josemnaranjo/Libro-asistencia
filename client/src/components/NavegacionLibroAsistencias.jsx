import React from 'react';

const NavegacionLibroAsistencias = (props) => {
    return (
        <div className='w-screen'>
            <h1 className='bg-secondary-middle text-white p-8'>Libro de asistencia</h1>
            {props.children}
        </div>
    );
}

export default NavegacionLibroAsistencias;
