import { React, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NuevoDia = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [formatedDay, setFormatedDay] = useState();

  const changeDateFormat = (data) => {
    const newDate = dayjs(data).format("YYYY-M-D");
    setFormatedDay(newDate);
  };

  return (
    <div className="flex h-5/6 items-center justify-center px-12">
      <div className="border-xl h-fit w-full rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-40">
        <h1 className="py-10 text-center text-2xl">
          Ingrese la fecha de hoy para iniciar un nuevo registro
        </h1>
        <div className="grid grid-rows-2 justify-items-center gap-5">
          <div>
            <DatePicker
              selected={selectedDay}
              onChange={(date) => setSelectedDay(date)}
              dateFormat={"dd-MM-yyyy"}
              minDate={new Date()}
              placeholderText="Elegir una fecha"
              className="w-48 rounded-lg border border-stone-400 bg-white px-2 py-1 text-center text-sm"
            />
          </div>
          <Link to={`/registro-entrada/${formatedDay}`}>
            <button
              className="rounded-lg bg-secondary-dark p-1.5 text-sm text-white"
              onMouseEnter={() => changeDateFormat(selectedDay)}
            >
              crear nuevo día
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NuevoDia;
