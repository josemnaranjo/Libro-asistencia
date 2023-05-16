import React from "react";
import { registroDeEntrada } from "../services/jornada.services.js";
import FormularioRegistro from "../components/FormularioRegistro.jsx";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import Swal from "sweetalert2";

const RegistroDeEntrada = () => {
  const { date } = useParams();
  const dateForDisplay = dayjs(date).format("DD-MM-YYYY");

  const registroDeEntradaFromService = async (rut) => {
    try {
      await registroDeEntrada(date, rut);
      Swal.fire({
        icon: "success",
        text: "registro de ingreso actualizado",
        timer: 1000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: "3em",
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

  return (
    <div className="h-5/6 flex justify-center items-center px-12">
      <div className="border-xl h-fit w-full rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-28">
        <h1 className="py-2 text-center text-2xl">Registro de entrada</h1>
        <h1 className="py-2 text-center text-lg">{dateForDisplay}</h1>
        <FormularioRegistro onSubmitProps={registroDeEntradaFromService}/>
      </div>
    </div>
  );
};

export default RegistroDeEntrada;
