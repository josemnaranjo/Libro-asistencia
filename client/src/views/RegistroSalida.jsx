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
        <h1 className="py-2 text-center text-2xl">Registro de salida</h1>
        <h1 className="py-2 text-center text-lg">{dateForDisplay}</h1>
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
              <label htmlFor="rut" className="text-lg">
                Ingrese su rut
              </label>
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
