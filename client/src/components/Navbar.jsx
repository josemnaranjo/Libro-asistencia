import {React, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Transition} from '@headlessui/react';
import dayjs from 'dayjs';



const Navbar = () => {
    let fechaAno = dayjs().year();
    let dia = dayjs().format('DD-MM-YYYY');
    let diaRuta = dayjs().format('YYYY-MM-DD');

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
                        to="/trabajadores"
                    >
                        <button className='bg-secondary-dark p-3.5 rounded-lg text-white'>trabajadores</button>
                    </Link>

                    <Menu>
                        <div>
                            <Menu.Button className='bg-secondary-dark p-3.5 rounded-lg text-white mt-5'>
                                Libro de asistencias
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className='absolute -right-28 mt-14'>
                                <div className='px-1 py-1'>
                                    <Menu.Item>
                                        <Link to={`/libro-de-asistencias/${diaRuta}`}>
                                            <button className='bg-secondary-dark p-1.5 rounded-lg text-white'>{dia}</button>
                                        </Link>
                                    </Menu.Item>
                                </div>
                                <div className='px-1 py-1'>
                                    <Menu.Item>
                                        <Link to={`/registro-year/${fechaAno}`}>
                                            <button className='bg-secondary-dark p-1.5 rounded-lg text-white'>{fechaAno}</button>
                                        </Link>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;
