import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { getAllTrabajadoresOfAJornada } from "../services/trabajador.services.js";
import { registroDeAusentes } from "../services/jornada.services.js";
import Swal from "sweetalert2";
import Table from "../components/Table.jsx";

const RegistroAusentes = () => {
  const { date } = useParams();
  const dateFormated = dayjs(date).format("D-M-YYYY");
  const [trabajadorData, setTrabajadorData] = useState([]);
  const [disableButtons, setDisabledButtons] = useState([]);

  const getAllTrabajadoresOfAJornadaFromService = async () => {
    try {
      const information = await getAllTrabajadoresOfAJornada(date);
      setTrabajadorData(information.data.jornadaInfo);
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
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false,
            padding: "3em",
          });
          handleDisableButtonsClick(values.rut);
        }
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        iconColor: "#2236D6",
        title: `Ocurrio un error al intentar actualizar la información`,
        background: "#ffff",
        padding: "5em",
      });
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTrabajadoresOfAJornadaFromService();
  }, []);

  const colums = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "Trabajador.name",
      },
      {
        Header: "Apellido",
        accessor: "Trabajador.lastName",
      },
      {
        Header: "Rut",
        accessor: "Trabajador.rut",
      },
      {
        Header: "Hora inicio",
        accessor: "horaInicio",
      },
      {
        Header: "Hora termmino",
        accessor: "horaTermino",
      },
      {
        Header: "Acciones",
        accessor: "acciones",
      },
    ],
    []
  );

  const data = trabajadorData.map((t) => ({
    ...t,
    acciones: (
      <div>
        <button
          className={
            disableButtons.includes(t.Trabajador.rut) || t.ausente
              ? "w-24 cursor-not-allowed rounded-lg border-2 border-orange-500 bg-white py-1"
              : "w-24 rounded-lg bg-primary-dark py-1 text-white"
          }
          onClick={() => {
            registroDeAusentesFromService({ rut: t.Trabajador.rut });
          }}
          disabled={disableButtons.includes(t.Trabajador.rut) || t.ausente}
        >
          ausente
        </button>
      </div>
    ),
  }));

  return (
    <div className="h-5/6 px-6 pt-12">
      <div className="border-xl h-5/6 rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-10">
        <h1 className="text-center text-2xl">
          Registro de ausentes : {dateFormated}
        </h1>
        <Table columns={colums} data={data} />
      </div>
    </div>
  );
};

export default RegistroAusentes;
