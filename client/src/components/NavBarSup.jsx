import React from 'react';
import { Link } from 'react-router-dom';

const NavBarSup = () => {

    let date = new Date();
    let hoy = date.toISOString().split('T')[0];
    let year = date.getFullYear();

    return (
        <div>
            <nav className='bg-secondary-light h-32 flex'>
                <div>
                    <Link to={`/libro-de-asistencias/${hoy}`} className="text-white">
                        Hoy
                    </Link>
                </div>

                <div>
                    <Link to={`/libro-de-asistencias/year/${year}`} className="text-white">
                        {year}
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBarSup;
