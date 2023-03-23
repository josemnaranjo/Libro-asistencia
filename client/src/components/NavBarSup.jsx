import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarSup = () => {

    let date = new Date();
    let hoy = date.toISOString().split('T')[0];
    let year = date.getFullYear();

    return (
        <div>
            <nav className='bg-secondary-middle'>
                <NavLink to={`/libro-de-asistencias/${hoy}`}/>
                <NavLink to={`/libro-de-asistencias/${year}`}/>
            </nav>
        </div>
    );
}

export default NavBarSup;
