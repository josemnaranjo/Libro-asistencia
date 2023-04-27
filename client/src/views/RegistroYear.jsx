import { React, useState } from "react";
import { useParams } from "react-router-dom";
import PresenteAUno from "../components/PresenteAUno";
import PresenteADos from "../components/PresenteADos";
import PresenteATres from "../components/PresenteATres";
import { getInformeMes } from "../services/trabajador.services.js";

const RegistroYear = () => {
  const { year } = useParams();
  const [page, setPage] = useState(1);

  const getInformeMesFromService = async (data) => {
    try {
      await getInformeMes(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-5/6 px-6 pt-12">
      <div className="border-xl h-5/6 rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-10">
        <h1 className="text-center">Registro año: {year}</h1>
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
            <button onClick={() => setPage(1)}>1</button>
          </li>
          <li>
            <button onClick={() => setPage(2)}>2</button>
          </li>
          <li>
            <button onClick={() => setPage(3)}>3</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RegistroYear;
