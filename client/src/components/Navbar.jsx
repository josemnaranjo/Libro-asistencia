import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-primary-dark h-screen pt-8 p-4 w-64 relative'>
            <Link 
                to="/"
            >
                <img src={require('../assets/images/LogoEmpresa.png')} alt="Logo Empresa" />
            </Link>
            
            <div className='flex flex-col items-center mt-12'>

                <Link
                    to="/nuevo-dia"
                >
                    <button className='bg-secondary-dark p-3.5 rounded-lg text-white'>nuevo dia</button>
                </Link>

                <div className='flex flex-col items-center absolute inset-x-0 bottom-0 mb-36'>
                    <Link
                        to="/nuevo-trabajador"
                    >
                        <button className='bg-secondary-dark p-3.5 rounded-lg text-white'>trabajadores</button>
                    </Link>

                    <Link
                        to="/libro-de-asistencias"
                    >
                        <button className='bg-secondary-dark p-3.5 rounded-lg text-white mt-5'>libro de asistencia</button>
                    </Link>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;
