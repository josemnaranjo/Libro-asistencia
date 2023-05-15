import { React, useState } from "react";
import { useParams } from "react-router-dom";
import PresenteAUno from "../components/PresenteAUno";
import PresenteADos from "../components/PresenteADos";
import PresenteATres from "../components/PresenteATres";
import { getInformeMes } from "../services/trabajador.services.js";
import Swal from "sweetalert2";

const RegistroYear = () => {
  const { year } = useParams();
  const [page, setPage] = useState(1);
  const [selectedButton, setSelectedButton] = useState([true, false, false]);

  const getInformeMesFromService = async (data) => {
    try {
      await getInformeMes(data);
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
  return (
    <div className="h-5/6 flex justify-center items-center px-12">
      <div className=" h-fit w-full border-xl rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-10">
        <h1 className="text-center text-2xl">Registro año: {year}</h1>
        {page === 1 ? (
          <PresenteAUno onSubmitProps={getInformeMesFromService} />
        ) : null}

        {page === 2 ? (
          <PresenteADos onSubmitProps={getInformeMesFromService} />
        ) : null}

        {page === 3 ? (
          <PresenteATres onSubmitProps={getInformeMesFromService} />
        ) : null}

        <ul className="flex justify-center gap-3 py-9 ">
          <li>
            <button
              onClick={() => {
                setPage(1);
                setSelectedButton([true, false, false]);
              }}
              className={
                selectedButton[0]
                  ? "rounded-full bg-secondary-middle px-2 text-white ring-1 ring-white"
                  : "rounded-full bg-primary-middle px-2 text-white ring-1 ring-white"
              }
            >
              1
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setPage(2);
                setSelectedButton([false, true, false]);
              }}
              className={
                selectedButton[1]
                  ? "rounded-full bg-secondary-middle px-2 text-white ring-1 ring-white"
                  : "rounded-full bg-primary-middle px-2 text-white ring-1 ring-white"
              }
            >
              2
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setPage(3);
                setSelectedButton([false, false, true]);
              }}
              className={
                selectedButton[2]
                  ? "rounded-full bg-secondary-middle px-2 text-white ring-1 ring-white"
                  : "rounded-full bg-primary-middle px-2 text-white ring-1 ring-white"
              }
            >
              3
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RegistroYear;
