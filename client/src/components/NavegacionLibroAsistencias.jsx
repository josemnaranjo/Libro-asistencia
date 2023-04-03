import React from 'react';

const NavegacionLibroAsistencias = (props) => {
    return (
        <div className='w-screen'>
            <h1 className='bg-secondary-middle text-white p-8 h-1/6 text-center pt-16 text-4xl'>LIBRO DE ASISTENCIA</h1>
            {props.children}
        </div>
    );
}

export default NavegacionLibroAsistencias;
