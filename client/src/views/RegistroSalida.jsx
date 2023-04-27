import React from "react";
import { registroDeSalida } from "../services/jornada.services.js";
import { Formik, Form, Field } from "formik";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import Swal from "sweetalert2";

const RegistroDeSalida = () => {
  const { date } = useParams();
  const dateForDisplay = dayjs(date).format("D-M-YYYY");
  const registroDeSalidaFromService = async (rut) => {
    try {
      await registroDeSalida(date, rut);
      Swal.fire({
        icon: "success",
        text: "registro de salida actualizado",
        timer: 2000,
        timerProgressBar: true,
        background: "#FFBF18",
        color: "#ffff",
        showConfirmButton: false,
        padding: "3em",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-5/6 px-6 pt-12">
      <div className="border-xl h-5/6 rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-28">
        <h1 className="py-2 text-center">Registro de salida</h1>
        <h1 className="py-2 text-center">{dateForDisplay}</h1>
        <Formik
          initialValues={{
            rut: "",
          }}
          onSubmit={(values, { resetForm }) => {
            registroDeSalidaFromService(values);
            resetForm();
          }}
        >
          <Form className="py-12">
            <div className="grid grid-rows-2 justify-items-center gap-3">
              <label htmlFor="rut">Ingrese su rut</label>
              <Field
                id="rut"
                type="text"
                name="rut"
                placeholder="XX.XXX.XXX-X"
                className=" w-38 rounded-lg border border-stone-400 bg-white px-2 py-1 text-center text-sm"
              />
            </div>

            <div className="py-9 text-center">
              <button
                className="rounded-lg bg-secondary-dark p-2.5 text-xs text-white"
                type="submit"
              >
                aceptar
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistroDeSalida;
