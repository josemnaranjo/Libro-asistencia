import React, { useState, useEffect, useMemo } from "react";
import { getInformeVisualMes } from "../services/trabajador.services.js";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import Table from "../components/Table.jsx";
import Swal from "sweetalert2";

const Informe = () => {
  const { month } = useParams();
  const [trabajadores, setTrabajadores] = useState([]);
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
    getInformeVisualMesFromService();
  }, []);

  const data = trabajadores.map((t) => ({
    ...t,
    date: dayjs(t.date).format("D-M-YYYY"),
    ausente: t.ausente ? "si" : "no",
  }));

  const colums = useMemo(() => [
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
      Header: "Fecha",
      accessor: "date",
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
      Header: "Ausente",
      accessor: "ausente",
    },
  ]);

  return (
    <div className="flex h-5/6 items-center justify-center px-12">
      <div className="border-xl h-fit w-full rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-10">
        <Table columns={colums} data={data} />
      </div>
    </div>
  );
};

export default Informe;
