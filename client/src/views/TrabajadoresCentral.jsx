import { React, useState, useEffect } from "react";
import {
  getAllTrabajadores,
  deleteOneTrabajador,
} from "../services/trabajador.services.js";
import { useNavigate } from "react-router-dom";

const TrabajadoresCentral = () => {
  const [trabajadores, setTrabajadores] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  //obtener todos los trabajadores
  const getAllTrabajadoresFromService = async (value) => {
    try {
      if (value === null) {
        const info = await getAllTrabajadores();
        setTrabajadores(info.data);
      } else {
        const info = await getAllTrabajadores();
        const res = info.data.filter((user) => {
          return user && user.name && user.name.toLowerCase().includes(value);
        });
        setTrabajadores(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTrabajadoresFromService(null);
  }, []);

  //borrar un trabajador
  const deleteTrabajador = async (rut) => {
    try {
      const newArray = trabajadores.filter(
        (trabajador) => trabajador.rut !== rut
      );
      await deleteOneTrabajador(rut);
      setTrabajadores(newArray);
    } catch (err) {
      console.log(err);
    }
  };

  //buscador de trabajadores
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    getAllTrabajadoresFromService(e.target.value);
  };

  if (searchInput.length > 0) {
    trabajadores.filter((trabajador) => {
      return trabajador.name.match(searchInput);
    });
  }

  //paginación
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = trabajadores.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(trabajadores.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  return (
    <div className="h-5/6 px-6 pt-12">
      <div className="border-xl h-5/6 rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-10">
        {/* div superior */}
        <div className="grid grid-cols-2 justify-items-center gap-48 ">
          {/* buscador */}
          <div>
            <input
              type="search"
              placeholder="Buscar trabajador"
              onChange={handleChange}
              value={searchInput}
              className=" rounded-md px-2 py-1 placeholder:text-sm placeholder:italic"
            />
          </div>

          {/* buton crear nuevo trabajador */}
          <button
            className="ml-2 rounded-lg bg-secondary-dark p-1.5 text-white"
            onClick={() => navigate("/nuevo-trabajador")}
          >
            nuevo trabajador
          </button>
        </div>

        {/* div inferior */}
        <div className="mt-10 max-h-full">
          <table className="mx-auto mt-4 w-full table-auto border-separate border-2 border-white text-center">
            <thead className="bg-primary-dark text-white">
              <tr>
                <th className="px-3">Nombre</th>
                <th className="px-3">Rut</th>
                <th className="px-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts?.map((t) => (
                <tr key={t.rut}>
                  <td className="border border-white">
                    {t.name} {t.lastName}
                  </td>
                  <td className="border border-white">{t.rut}</td>
                  <td className="border border-white flex justify-around">
                    <button
                      className="rounded-lg bg-secondary-light px-5 py-1 text-white"
                      onClick={() => navigate(`/editar-trabajador/${t.rut}`)}
                    >
                      editar
                    </button>
                    <button
                      className="rounded-lg bg-primary-dark px-5 py-1 text-white"
                      onClick={() => deleteTrabajador(t.rut)}
                    >
                      borrar
                    </button>
                    <button
                      className="rounded-lg bg-secondary-dark px-5 py-1 text-white"
                      onClick={() => navigate(`/licencia/${t.rut}`)}
                    >
                      licencia
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <ul>
            {currentPosts?.map((t) => (
              <li key={t.id} className="grid grid-cols-5 gap-x-36 py-1">
                <p>
                  {t.name} {t.lastName}
                </p>
                <p className="text-center"> {t.rut}</p>
                <button
                  className="rounded-lg bg-secondary-light p-1 text-white"
                  onClick={() => navigate(`/editar-trabajador/${t.rut}`)}
                >
                  editar
                </button>
                <button
                  className="rounded-lg bg-primary-dark p-1 text-white"
                  onClick={() => deleteTrabajador(t.rut)}
                >
                  borrar
                </button>
                <button
                  className="rounded-lg bg-secondary-dark p-1 text-white"
                  onClick={() => navigate(`/licencia/${t.rut}`)}
                >
                  licencia
                </button>
              </li>
            ))}
          </ul> */}
        </div>

        {/* boton de pagina */}
        <nav>
          <ul className="flex justify-center gap-3 py-3 ">
            {pageNumbers.map((n) => (
              <li key={n}>
                <button
                  className={
                    currentPage === n
                      ? "rounded-full bg-secondary-middle px-2 text-white ring-1 ring-white"
                      : "rounded-full bg-primary-middle px-2 text-white ring-1 ring-white"
                  }
                  onClick={() => paginate(n)}
                >
                  {n}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TrabajadoresCentral;
