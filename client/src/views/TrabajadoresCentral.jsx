import { React, useState, useEffect, useMemo } from "react";
import {
  getAllTrabajadores,
  deleteOneTrabajador,
} from "../services/trabajador.services.js";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table.jsx";
import Swal from "sweetalert2";

const TrabajadoresCentral = () => {
  const [trabajadores, setTrabajadores] = useState([]);
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
      Swal.fire({
        icon: "error",
        iconColor: "#2236D6",
        title: `Ocurrio un error al intentar recuperar la información del servidor`,
        background: "#ffff",
        padding: "5em",
      });
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

  //   informarcion para tabla

  const data = trabajadores.map((t) => ({
    ...t,
    acciones: (
      <div className="flex justify-around">
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
      </div>
    ),
  }));

  const colums = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "name",
      },
      {
        Header: "Apellido",
        accessor: "lastName",
      },
      {
        Header: "Rut",
        accessor: "rut",
      },
      {
        Header: "Acciones",
        accessor: "acciones",
      },
    ],
    []
  );

  return (
    <div className="h-5/6 flex justify-center items-center px-6 pt-12">
      <div className="h-fit w-full border-xl rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-10">
        {/* div superior */}
        <div className="grid grid-cols-2 justify-items-center gap-48 ">
          {/* buscador */}
          <div>
            <input
              type="search"
              placeholder="nombre trabajador"
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

        {/* tabla */}
        <Table columns={colums} data={data} />
      </div>
    </div>
  );
};

export default TrabajadoresCentral;
