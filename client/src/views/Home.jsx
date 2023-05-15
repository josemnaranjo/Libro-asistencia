import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  getTrabajadoresWithLicencia,
  resetLicencia,
} from "../services/trabajador.services.js";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import Table from "../components/Table.jsx";

const Home = () => {
  const [trabajadores, setTrabajadores] = useState([]);
  const navigate = useNavigate();
  const now = dayjs();

  const getTrabajadoresWithLicenciaFromService = async () => {
    try {
      const information = await getTrabajadoresWithLicencia();
      setTrabajadores(information.data);
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

  const resetLicenciaFromService = async (values) => {
    try {
      Swal.fire({
        icon: "warning",
        iconColor: "#2236D6",
        title: "¿Esta seguro de eliminar la licencia?",
        showCancelButton: true,
        background: "#ffff",
        padding: "5em",
        confirmButtonColor: "#2236D6",
        cancelButtonColor: "#6272EE",
        confirmButtonText: "confirmar",
        cancelButtonText: "rechazar",
      }).then((result) => {
        if (result.isConfirmed) {
          resetLicencia(values);
          Swal.fire({
            icon: "success",
            text: "registro de licencia actualizado",
            timer: 1000,
            timerProgressBar: true,
            background: "#ffff",
            showConfirmButton: false,
            padding: "3em",
          });
          navigate("/");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTrabajadoresWithLicenciaFromService();
  }, []);

  const data = trabajadores.map((t) => ({
    ...t,
    inicioLicencia: dayjs(t.inicioLicencia).format("D-M-YYYY"),
    finLicencia: dayjs(t.finLicencia).format("D-M-YYYY"),
    acciones: (
      <button
        className={
          now >= dayjs(t.finLicencia)
            ? "rounded-lg bg-secondary-dark px-1.5 py-0.5 text-white"
            : "cursor-not-allowed rounded-lg border-2 border-orange-500 bg-white px-1.5 py-0.5"
        }
        disabled={now >= dayjs(t.finLicencia) ? false : true}
        onClick={() => resetLicenciaFromService({ rut: t.rut })}
      >
        borrar licencia
      </button>
    ),
  }));

  const columns = useMemo(
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
        Header: "Inicio Licencia",
        accessor: "inicioLicencia",
      },
      {
        Header: "Término de licencia",
        accessor: "finLicencia",
      },
      {
        Header: "Acciones",
        accessor: "acciones",
      },
    ],
    []
  );

  return (
    <div className="h-5/6 flex justify-center items-center px-12">
      <div className="h-fit w-full rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-10">
        <h1 className="text-center text-2xl">Trabajadores con licencia</h1>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Home;
