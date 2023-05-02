import React, { useState, useEffect } from "react";
import { getInformeVisualMes } from "../services/trabajador.services.js";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

const Informe = () => {
  const { month } = useParams();
  const [trabajadores, setTrabajadores] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);
  const year = dayjs().year();

  const getInformeVisualMesFromService = async () => {
    try {
      switch (month) {
        case "1":
          const information1 = await getInformeVisualMes({
            dateStart: `${year}-01-01`,
            dateFinish: `${year}-01-31`,
          });
          setTrabajadores(information1.data);
          break;
        case "2":
          const information2 = await getInformeVisualMes({
            dateStart: `${year}-02-01`,
            dateFinish: `${year}-02-28`,
          });
          setTrabajadores(information2.data);
          break;
        case "3":
          const information3 = await getInformeVisualMes({
            dateStart: `${year}-03-01`,
            dateFinish: `${year}-03-31`,
          });
          setTrabajadores(information3.data);
          break;
        case "4":
          const information4 = await getInformeVisualMes({
            dateStart: `${year}-04-01`,
            dateFinish: `${year}-04-30`,
          });
          setTrabajadores(information4.data);
          console.log(information4.data);
          break;
        case "5":
          const information5 = await getInformeVisualMes({
            dateStart: `${year}-05-01`,
            dateFinish: `${year}-05-31`,
          });
          setTrabajadores(information5.data);
          break;
        case "6":
          const information6 = await getInformeVisualMes({
            dateStart: `${year}-06-01`,
            dateFinish: `${year}-06-30`,
          });
          setTrabajadores(information6.data);
          break;
        case "7":
          const information7 = await getInformeVisualMes({
            dateStart: `${year}-07-01`,
            dateFinish: `${year}-07-31`,
          });
          setTrabajadores(information7.data);
          break;
        case "8":
          const information8 = await getInformeVisualMes({
            dateStart: `${year}-08-01`,
            dateFinish: `${year}-08-31`,
          });
          setTrabajadores(information8.data);
          break;
        case "9":
          const information9 = await getInformeVisualMes({
            dateStart: `${year}-09-01`,
            dateFinish: `${year}-09-30`,
          });
          setTrabajadores(information9.data);
          break;
        case "10":
          const information10 = await getInformeVisualMes({
            dateStart: `${year}-10-01`,
            dateFinish: `${year}-10-31`,
          });
          setTrabajadores(information10.data);
          break;
        case "11":
          const information11 = await getInformeVisualMes({
            dateStart: `${year}-11-01`,
            dateFinish: `${year}-11-30`,
          });
          setTrabajadores(information11.data);
          break;
        case "12":
          const information12 = await getInformeVisualMes({
            dateStart: `${year}-12-01`,
            dateFinish: `${year}-12-31`,
          });
          setTrabajadores(information12.data);
          break;
        default:
          break;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInformeVisualMesFromService();
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
        <table className="mx-auto w-full table-auto border-separate border-2 border-white text-center ">
          <thead className="bg-primary-dark text-white">
            <tr>
              <th className="px-3">Nombre</th>
              <th className="px-3">Rut</th>
              <th className="px-3">Fecha</th>
              <th className="px-3">Hora Inicio</th>
              <th className="px-3">Hora Término</th>
              <th className="px-3">Ausente</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts?.map((t) => (
              <tr key={t.id}>
                <td className="border border-white p-3">
                  {t.Trabajador.name} {t.Trabajador.lastName}
                </td>
                <td className="border border-white p-3">{t.Trabajador.rut}</td>
                <td className="border border-white p-3">
                  {dayjs(t.date).format("D-M-YYYY")}
                </td>
                <td className="border border-white p-3">{t.horaInicio}</td>
                <td className="border border-white p-3">{t.horaTermino}</td>
                <td className="border border-white p-3">
                  {t.ausente ? "si" : "no"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="flex justify-center gap-3 py-3 ">
            {pageNumbers.map((n) => (
              <li key={n}>
                <button
                  className={currentPage === n ? "rounded-full bg-secondary-middle px-2 text-white ring-1 ring-white" : "rounded-full bg-primary-middle px-2 text-white ring-1 ring-white"}
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

export default Informe;
