import React from "react";
import { useParams, Link } from "react-router-dom";
import dayjs from "dayjs";

const LibroDeAsistencia = () => {
  const { date } = useParams();
  const dateForDisplay = dayjs(date).format("D-M-YYYY");
  return (
    <div className="h-5/6 flex justify-center items-center px-12">
      <div className="h-fit w-full border-xl rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-40">
        <h1 className="py-3 text-center text-2xl">Registro de asistencia</h1>
        <h1 className="py-2 text-center text-lg">{dateForDisplay}</h1>

        <div className="grid grid-cols-3 justify-items-center py-10">
          <Link to={`/registro-entrada/${date}`}>
            <button className="rounded-lg bg-secondary-dark p-3.5 text-white">
              registro de entrada
            </button>
          </Link>
          <Link to={`/registro-salida/${date}`}>
            <button className="rounded-lg bg-secondary-dark p-3.5 text-white">
              registro de salida
            </button>
          </Link>
          <Link to={`/registro-ausentes/${date}`}>
            <button className="rounded-lg bg-secondary-dark p-3.5 text-white">
              indicar ausentes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LibroDeAsistencia;
