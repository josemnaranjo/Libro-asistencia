import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getTrabajadoresWithLicencia,
  resetLicencia,
} from "../services/trabajador.services.js";
import dayjs from "dayjs";
import Swal from "sweetalert2";

const Home = () => {
  const [trabajadores, setTrabajadores] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const navigate = useNavigate();

  const getTrabajadoresWithLicenciaFromService = async () => {
    try {
      const information = await getTrabajadoresWithLicencia();
      setTrabajadores(information.data);
    } catch (err) {
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
        <h1 className="text-center text-2xl">Trabajadores con licencia</h1>
        {/* tabla */}
        <table className="mx-auto w-full table-auto border-separate border-2 border-white text-center mt-4 ">
          <thead className="bg-primary-dark text-white">
            <tr>
              <th className="px-3">Nombre</th>
              <th className="px-3">Rut</th>
              <th className="px-3">Inicio de licencia</th>
              <th className="px-3">Término de licencia</th>
              <th className="px-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts?.map((t) => (
              <tr key={t.rut}>
                <td>
                  {t.name} {t.lastName}
                </td>
                <td>{t.rut}</td>
                <td>{dayjs(t.inicioLicencia).format("D-M-YYYY")}</td>
                <td>{dayjs(t.finLicencia).format("D-M-YYYY")}</td>
                {dayjs().format("D-M-YYYY") >=
                dayjs(t.finLicencia).format("D-M-YYYY") ? (
                  <td className="py-1">
                    <button
                      className="rounded-lg bg-secondary-dark px-1.5 py-0.5 text-white"
                      onClick={() => resetLicenciaFromService({ rut: t.rut })}
                    >
                      borrar licencia
                    </button>
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>

        {/* boton de pagina */}
        <nav>
          <ul className="flex justify-center gap-3 py-3 ">
            {pageNumbers === 1
              ? null
              : pageNumbers.map((n) => (
                  <li key={n}>
                    <button
                      className="rounded-full bg-primary-middle px-2 text-white ring-1 ring-white "
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

export default Home;
