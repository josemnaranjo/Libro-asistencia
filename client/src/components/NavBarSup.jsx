import React from 'react';
import { Link } from 'react-router-dom';

const NavBarSup = () => {

    let date = new Date();
    let hoy = date.toISOString().split('T')[0];
    let year = date.getFullYear();
    

    return (
        <div>
            <nav className='bg-secondary-light h-1/6 grid grid-cols-3 content-center'>
                <div>
                    <Link to={`/libro-de-asistencias/${hoy}`}>
                        <p className='text-white text-center pt-5 border-r-2 border-blue-600 hover:bg-secondary-dark active:bg-secondary-middle'>Hoy</p>
                    </Link>
                </div>

                <div>
                    <Link to={`/libro-de-asistencias/year/${year}`}>
                        <p className='text-white text-center pt-5 border-r-2 border-blue-600 hover:bg-secondary-dark active:bg-secondary-middle'>{year}</p>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBarSup;
