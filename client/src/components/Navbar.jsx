import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import dayjs from "dayjs";

const Navbar = () => {
  let fechaAno = dayjs().year();
  let dia = dayjs().format("DD-MM-YYYY");
  let diaRuta = dayjs().format("YYYY-MM-DD");

  return (
    <nav className="relative h-screen w-64 bg-primary-dark p-4 pt-8">
      <Link to="/">
        <img
          src={require("../assets/images/LogoEmpresa.png")}
          alt="Logo Empresa"
        />
      </Link>

      <div className="mt-12 text-center">
        <Link to="/nuevo-dia">
          <button className="rounded-lg bg-secondary-dark p-3.5 text-white">
            nuevo dia
          </button>
        </Link>

        <div className="absolute inset-x-0 bottom-0 mb-36 flex flex-col">
          <Link to="/trabajadores">
            <button className="rounded-lg bg-secondary-dark p-3.5 text-white">
              trabajadores
            </button>
          </Link>

          <Menu>
            <div>
              <Menu.Button className=" mt-5 rounded-lg bg-secondary-dark p-3.5 text-white">
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
              <Menu.Items className="absolute -right-28 mt-14">
                <div className="px-1 py-1">
                  <Menu.Item>
                    <Link to={`/libro-de-asistencias/${diaRuta}`}>
                      <button className="rounded-lg bg-secondary-dark p-1.5 text-white">
                        {dia}
                      </button>
                    </Link>
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    <Link to={`/registro-year/${fechaAno}`}>
                      <button className="rounded-lg bg-secondary-dark p-1.5 text-white">
                        {fechaAno}
                      </button>
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
};

export default Navbar;
