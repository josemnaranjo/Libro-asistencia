import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { getAllTrabajadoresOfAJornada } from "../services/trabajador.services.js";
import { registroDeAusentes } from "../services/jornada.services.js";
import Swal from "sweetalert2";

const RegistroAusentes = () => {
  const { date } = useParams();
  const dateFormated = dayjs(date).format("D-M-YYYY");
  const [trabajadorData, setTrabajadorData] = useState([]);
  const [disableButtons, setDisabledButtons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);

  const getAllTrabajadoresOfAJornadaFromService = async () => {
    try {
      const information = await getAllTrabajadoresOfAJornada(date);
      setTrabajadorData(information.data.jornadaInfo);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDisableButtonsClick = (i) => {
    setDisabledButtons((prevDisableButtons) => [...prevDisableButtons, i]);
  };

  const registroDeAusentesFromService = async (values) => {
    try {
      Swal.fire({
        icon: "warning",
        iconColor: "#2236D6",
        html: `<p>¿Estás seguro que el trabajador estuvo ausente el día ${trabajadorData[0].date} ?</p>`,
        showCancelButton: true,
        background: "#FFBF18",
        color: "#ffff",
        padding: "5em",
        confirmButtonColor: "#2236D6",
        cancelButtonColor: "#6272EE",
        confirmButtonText: "confirmar",
        cancelButtonText: "rechazar",
      }).then((result) => {
        if (result.isConfirmed) {
          registroDeAusentes(date, values);
          Swal.fire({
            icon: "success",
            text: "registro de ausencia actualizado",
            timer: 2000,
            timerProgressBar: true,
            background: "#FFBF18",
            color: "#ffff",
            showConfirmButton: false,
            padding: "3em",
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTrabajadoresOfAJornadaFromService();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = trabajadorData.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(trabajadorData.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  return (
    <div className="h-5/6 px-6 pt-12">
      <div className="border-xl h-5/6 rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-10">
        <h1 className="text-center text-2xl">Registro de ausentes : {dateFormated}</h1>
        <ul className="py-5">
          {currentPosts?.map((t, i) => (
            <li
              key={t.id}
              className="grid grid-cols-5 justify-items-center py-2"
            >
              <p>
                Nombre: {t.Trabajador.name} {t.Trabajador.lastName}
              </p>
              <p>Rut: {t.Trabajador.rut}</p>
              <p>Hora Inicio: {t.horaInicio}</p>
              <p>Hora Termino: {t.horaTermino}</p>
              <button
                className={
                  disableButtons.includes(i)
                    ? "w-24 cursor-not-allowed rounded-lg border-2 border-orange-500 bg-white py-1"
                    : "w-24 rounded-lg bg-primary-dark py-1 text-white"
                }
                onClick={() => {
                  registroDeAusentesFromService({ rut: t.Trabajador.rut });
                  handleDisableButtonsClick(i);
                }}
                disabled={disableButtons.includes(i)}
              >
                ausente
              </button>
            </li>
          ))}
        </ul>
        <nav>
          <ul className="flex justify-center gap-3 py-3 ">
            {pageNumbers.map((n) => (
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

export default RegistroAusentes;
